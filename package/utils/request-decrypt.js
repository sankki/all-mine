// 加
const fd1 = function() {
    const str = arguments[0];
    return decode(str).replace('hello　world ', '');
}

// 乘
const fd2 = function() {
    const str = arguments[0];
    return decode(str).substring(0, str.length / 2);
}

// [,,,].length = 3
const fd3 = function() {
    const str = arguments[0];
    return decode(str).replace(/3$/, '');
}

// 010 - 03 = 5
const fd4 = function() {
    const str = arguments[0];
    return decode(str).replace(/5$/, '');
}

// 0/0 = NaN
const fd5 = function() {
    const str = arguments[0];
    return decode(str).replace(/nan$/, '');
}

// NaN
const fd6 = function() {
    const str = arguments[0];
    return decode(str).replace(/nan$/, '');
}

// ("912" >> 2) = 228
const fd7 = function() {
    const str = arguments[0];
    return decode(str).replace(/228$/, '');
}

function decode(base64){
    const dd = window.atob(base64);
    const str = decodeURI(dd);
    return str;
}
const createDecrypt = () => {
    const arr = op2.split('').map(i=> +i);
    const farr = [fd7,fd6,fd5,fd4,fd3,fd2,fd1];
    let fn = function() {
        return decode(arguments[0]);
    }
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
        return fa(arguments[0]).toString(36)
    };
    return fn;
}
const decrypt = createDecrypt();

/**
 * 校验key
 * 先判断时间戳后三位
 * op 设计应该取50 ~ 99之间
 */
const check = ({
    timestemp, // 传递上来的时间
    nowTimestemp, // 当前服务器的真实时间戳
    key, 
    op,
}) => {
    const tstr = timestemp.toString();
    const oparr = [...op.toString()];
    const tarr = tstr.split('');
    // 检查1：与服务器时间相差6s，报错
    if(Math.abs(nowTimestemp - timestemp) > 1000 * 6) {
        throw new Error();
    }
    // 检查2：后3位规则是否正确
    if(tarr[tarr.length - 1] + tarr[tarr.length - 4] !== 9 ||
        tarr[tarr.length - 2] + tarr[tarr.length - 5] !== 9 ||
        tarr[tarr.length - 3] + tarr[tarr.length - 6] !== 9
    ) {
        throw new Error();
    }
    // 检查3：解析key，是否等于timestep
    const res = decrypt(key);
    if(res !== timestemp) throw new Error();
}
