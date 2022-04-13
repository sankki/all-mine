/**
 * 发布源码
 * 1、将dist上传cos
 * 2、将html通知nacos
 * 3、通知钉钉
 */
const path = require('path');
const CosUploader = require('./utils/cos-uploader');
const { noticeNacos } = require('./utils/notice-nacos');
const package = require('../package.json');

const distPath = path.join(__dirname, '../lib');
const {
    adminCommandUrl,
    adminCommandKey,
} = {
    adminCommandUrl: 'http://localhost:2328/api/command',
    adminCommandKey: 'sadgsadf90812eijkmvdsmf210-wqr[]1232jiewfdsn1132pkdv]12ndvn21'
};
const htmlNacosMap = {
    login: {
        dataId: 'VIEW_LOGIN',
        group: 'ADMIN_CENTER',
    },
    index: {
        dataId: 'VIEW_INDEX',
        group: 'ADMIN_CENTER',
    },
}

const cosUpload = new CosUploader({
    adminCommandUrl,
    adminCommandKey,
});
(async () => {
    // 1、文件上传COS
    const { htmls, urls } = await cosUpload.uploadFolder({
        uploadPath: distPath,
        pre: `package/${package.name}/${package.version}/`,
    });
    console.log(urls);
})();
