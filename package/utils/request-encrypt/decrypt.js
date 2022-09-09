// 解密函数
function decode(base64){
    const dd = window.atob(base64);
    const str = decodeURI(dd);
    return str;
}
const decryptK = ({
    realSt, // 服务器真实st
    userSt, // 用户计算的st
    k,
}) => {
    // 检查1：userSt与realSt相差6s，报错
    if(Math.abs(realSt - userSt) > 1000 * 6) {
        throw new Error();
    }
    // 检查2：后3位规则是否正确
    const tarr = userSt.toString().split('');
    if(tarr[tarr.length - 1] + tarr[tarr.length - 4] !== 9 ||
        tarr[tarr.length - 2] + tarr[tarr.length - 5] !== 9 ||
        tarr[tarr.length - 3] + tarr[tarr.length - 6] !== 9
    ) {
        throw new Error();
    }
    // 检查3：解析k
    const str = decode(k);
    const timeKArr = str.split('　');
    const time20 = dealTimeK(timeKArr[0]);
    const time5 = dealTimeK(timeKArr[1]);
    if(Math.abs(time20 - nowTime) > 1000 * 30) throw new Error();
    if(Math.abs(time5 - nowTime) > 1000 * 5) throw new Error();
    return;
}

const dealTimeK = (timeK) => {
    const start = timeK.substring(0, timeK.length - 4);
    const end = timeK.substring(timeK.length - 4, timeK -1);
    return + end / start;
}
