// 通知nocos
const axios = require('axios');

const noticeNacos = async ({
    adminCommandUrl,
    adminCommandKey,
    dataId,
    group,
    content,
}) => {
    const { data } = await axios.post(adminCommandUrl, {
        secret: adminCommandKey,
        command: 'set-nacos',
        data: {
            dataId,
            group,
            content,
        },
    });
    return data;
};

module.exports = {
    noticeNacos,
}
