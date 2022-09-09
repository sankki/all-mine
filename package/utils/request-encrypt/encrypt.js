// 加密函数
const ost = window.st || new Date('2000-01-1').getTime(); // 服务器旧时间
const lst = new Date().getTime(); // 加载时间
let frontKey = null; // 前置密码

function encode(str){
    const ee = encodeURI(str);
    const base64 = window.btoa(ee);
    return base64;
}

// 获取服务器时间
const getTime = function(){
    const t = (new Date().getTime() - lst) + ost;
    const arr = t.toString().split('');
    arr[arr.length -1] = Math.abs(9 - arr[arr.length -4]);
    arr[arr.length -2] = Math.abs(9 - arr[arr.length -5]);
    arr[arr.length -3] = Math.abs(9 - arr[arr.length -6]);
    return +arr.join('');
}

// 时间加密
const timeX = function(time) {
    let t = time.toString();
    let start = t.toString().substring(0, t.length-4);
    let end = t.toString().substring(t.length-4, t.length-1);
    const minx = (+start * +end).toString(36);
    return minx + end;
}

// 获取完整的key
const complateKey = () => {
    const endKey = timeX(new Date().getTime());
    const res = frontKey + '　' + endKey;
    return encode(res);
}
setInterval(() => {
    frontKey = timeX(new Date().getTime());
},15000);

Date.g = complateKey();