import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AllMINE",
  description: "A Vue3 Components Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    sidebar: [
      {
          text:'基础',
          items: [
              { text: '按钮', link: '/button' },
              { text: '图标', link: '/icon' },
              { text: '分隔符', link: '/divider' },
              { text: '标签', link: '/tag' },
              { text: '图片', link: '/img' },
              { text: '图片预览', link: '/img-viewer' },
          ],
          sidebarDepth:3
      },
      {
          text:'表单',
          items: [
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
          items: [
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
          items: [
              { text: '表格', link: '/table' },
          ],
          sidebarDepth:3
      },
      {
          text:'模块',
          items: [
              { text: '菜单', link: '/menu' },
              { text: '选项卡', link: '/tab' },
              { text: '分页', link: '/pagination' },
              { text: 'Logo', link: '/logo' },
              { text: '头像', link: '/avatar' },
              { text: '列表', link: '/list' },
              { text: '警告', link: '/alert' },
          ],
          sidebarDepth:3
      },
      {
        text:'布局',
        items: [
            { text: '管理页面布局', link: '/layout-admin' },
            { text: '标题', link: '/layout-title' },
            { text: '卡片', link: '/card' },
            { text: '配置', link: '/layout-config' },
            { text: '条', link: '/layout-bar' },
        ],
        sidebarDepth:3
      },

      {
        text:'小成品',
        items: [
            { text: '用户登录', link: '/user-login' },
        ],
        sidebarDepth:3
      },
  ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  },
  vite: {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  }
})
