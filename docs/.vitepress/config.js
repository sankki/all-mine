module.exports = {
    title: 'spaceX',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            { text: "主页", link: "/" },
        ],
        sidebar: [
            {
                text:'基础',
                children: [
                    { text: '按钮', link: '/button' },
                    { text: '图标', link: '/icon' },
                    { text: '分隔符', link: '/divider' },
                ],
                sidebarDepth:3
            },
            {
                text:'表单',
                children: [
                    { text: '输入框', link: '/input' },
                    { text: '单选框', link: '/radio' },
                    { text: '复选框', link: '/checkbox' },
                    { text: '开关', link: '/switch' },
                    { text: '选择框', link: '/select' },
                    { text: '表单', link: '/form' },
                ],
                sidebarDepth:3
            },
            {
                text:'弹出层',
                children: [
                    { text: '消息', link: '/message' },
                    { text: '对话框', link: '/dialog' },
                    { text: '弹出层', link: '/popup' },
                    { text: '提示', link: '/tooltip' },
                    { text: '加载', link: '/loading' },
                    { text: '下拉框', link: '/dropdown' },
                ],
                sidebarDepth:3
            },
            {
                text:'数据',
                children: [
                    { text: '表格', link: '/table' },
                ],
                sidebarDepth:3
            },
            {
                text:'模块',
                children: [
                    { text: '菜单', link: '/menu' },
                    { text: '选项卡', link: '/tab' },
                    { text: '分页', link: '/pagination' },
                    { text: 'Logo', link: '/logo' },
                    { text: '头像', link: '/avatar' },
                    { text: '列表', link: '/list' },
                ],
                sidebarDepth:3
            },
        ],
    },
    markdown: {
        config: (md) => {
            const { demoBlockPlugin } = require('vitepress-theme-demoblock');
            md.use(demoBlockPlugin);
        }
    }
}