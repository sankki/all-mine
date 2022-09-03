/**
 * cos-uploader cos上传者
 */

const { customAlphabet } = require('nanoid');
const COS = require('cos-nodejs-sdk-v5');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

// 生成随机文件名
const nanoId = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 5);

class CosUploader {
    constructor({
        adminCommandUrl,
        adminCommandKey,
    }) {
        this.region = null;
        this.bucket = null;
        this.APPID = null;
        this.prefix = null;
        this.adminCommandUrl = adminCommandUrl;
        this.adminCommandKey = adminCommandKey;
        const cos = new COS({
            Domain: 'cos.sankki.com',
            Protocol: 'https:',
            async getAuthorization(options, callback) {
                const { data } = await axios.post(`${adminCommandUrl}`, {
                    secret: adminCommandKey,
                    command: 'get-cos-token',
                });
                const {
                    credentials,
                } = data.data;
                if (!credentials) return console.error('# 获取 osstoken 失败');
                console.log('token获取成功')
                callback({
                    TmpSecretId: credentials.tmpSecretId,
                    TmpSecretKey: credentials.tmpSecretKey,
                    SecurityToken: credentials.sessionToken,
                    StartTime: data.data.startTime,
                    ExpiredTime: data.data.expiredTime,
                });
                return null;
            },
        });
        this.cos = cos;
    }

    async getBucketInfo(){
        if(this.region) {
            return;
        }
        const {
            adminCommandKey,
            adminCommandUrl
        } = this;
        const { data } = await axios.post(`${adminCommandUrl}`, {
            secret: adminCommandKey,
            command: 'get-cos-token',
        });
        const {
            region, bucket, APPID
        } = data.data;
        this.region = region;
        this.bucket = bucket;
        this.APPID = APPID;
    }

    async uploadFolder({
        uploadPath,
        pre,
    }) {
        const htmls = {};
        const urls = {};
        // 上传整个目录
        const f = async (p, folderPath) => {
            const files = fs.readdirSync(p);
            for (let i = 0; i < files.length; i += 1) {
                const filename = files[i];
                const newP = path.join(p, filename);
                const relativePath = folderPath + '/' + filename;
                const state = fs.statSync(newP);
                if (state.isDirectory()) {
                    await f(newP, relativePath);
                } else {
                    const res = await this.uploadFile({
                        filePath: newP,
                        filename: pre + relativePath,
                    });
                    urls[relativePath] = res.Location;
                    console.log('# 文件上传成功', res.Location);
                    const match = relativePath.match(/[\\\/]([^\\\/]*)[\\\/][^\\\/]*\.html/);
                    if(match) {
                        const file = fs.readFileSync(newP,'utf-8');
                        htmls[match[1]] = file;
                    }
                }
            }
        };
        await f(uploadPath, '');
        // 修改htmls里的相对路径
        for(let i =0; i< Object.keys(htmls).length; i++) {
            const key = Object.keys(htmls)[i];
            let file = htmls[key];
            file = file.replace(/(src|href)="[^"]*"/g, (d) => {
                let res = d;
                Object.entries(urls).forEach(([key, value]) => {
                    if(d.includes(key)) {
                        res = d.replace(/((src|href)=")[^"]*(")/, `$1//${urls[key]}$3`);
                    }
                });
                return res;
            })
            htmls[key] = file;
        }
        return {
            htmls,
            urls
        };
    }

    uploadFile({
        filePath,
        filename,
    }) {
        return new Promise(async (resolve, reject) => {
            const file = fs.readFileSync(filePath);
            await this.getBucketInfo();
            this.cos.putObject({
                Bucket: this.bucket,
                Region: this.region,
                Key: `${filename || nanoId()}`,
                StorageClass: 'STANDARD',
                Body: fs.createReadStream(filePath),
                ContentLength: fs.statSync(filePath).size,
            }, async (err, data) => {
                if (err) {
                    console.log('上传失败')
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}

module.exports = CosUploader;
