/**
 * 请求加密 
 **/
import cloneDeep from "lodash/cloneDeep";
const D = cloneDeep(Date);
const ost = window.st || new Date('1920-01-1').getTime(); // 服务器旧时间
const lst = new Date().getTime(); // 加载时间
const op = window.op;
const op2 = (+op).toString(2);

function encode(str){
    const ee = encodeURI(str);
    const base64 = window.btoa(ee);
    return base64;
}
// 加
const f1 = function() {
    const str = arguments[0];
    return encode(str + str[[,,,].length]);
}

// 加
const f1 = function() {
    const str = arguments[0];
    return encode(str[(010 - 03)] + str);
}

// 乘
const f2 = function() {
    const str = arguments[0];
    return encode(str + str);
}

// [,,,].length = 3
const f3 = function() {
    const str = arguments[0];
    return encode(str + [,,,].length.toString().toLocaleLowerCase());
}

// 010 - 03 = 5
const f4 = function() {
    const str = arguments[0];
    return encode(str + (010 - 03).toString());
}

// 0/0 = NaN
const f5 = function() {
    const str = arguments[0];
    return encode(str + (0/0).toString().toLocaleLowerCase());
}

// NaN
const f6 = function() {
    const str = arguments[0];
    return encode(str + (window.IlllIliiliili++).toString().toLocaleLowerCase());
}

// ("912" >> 2) = 228
const f7 = function() {
    const str = arguments[0];
    return encode(str + ("912" >> 2));
}

// 生成一个假时间戳
const getTime = () => {
    const t = (new Date().getTime() - lst) + ost;
    const arr = t.toString().split('');
    arr[arr.length -1] = Math.abs(9 - arr[arr.length -4]);
    arr[arr.length -2] = Math.abs(9 - arr[arr.length -5]);
    arr[arr.length -3] = Math.abs(9 - arr[arr.length -6]);
    return +arr.join('');
}
D.getTime = getTime;

// 生成密钥key
const createEncrypt = () => {
    const arr = op2.split('').map(i=> +i);
    const farr = [f1,f2,f3,f4,f5,f6,f7];
    let fn = function() {
        const st = arguments[0];
        return st.toString(36);
    };
    arr.forEach((item,index) => {
        if(item) {
            const fa = fn;
            const fb = farr[index];
            fn = function() {
                return fa(fb(arguments[0]));
            }
        }
    });
    const fa = fn;
    fn = function() {
        return encode(fa(arguments[0]));
    }
    return fn;
}
const encrypt = createEncrypt();
window.btoa.encrypt = encrypt;
window.btoa.D = D;