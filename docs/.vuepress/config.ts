import router from './router'
const { path } = require('@vuepress/utils')
module.exports = {
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhances.ts'),
  title: '个人文档',
  description: '前端技术及相关知识点整理归纳',
  // 此处配置会被解析在head里如:<link rel="icon" href="/favicon.ico">
  head: [
    // pwa应用配置
    ['link', { rel: 'icon', href: '/docs/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/docs/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-152x152.png' },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  // pwa应用配置
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  base: '/doc/',
  port: 4816,
  evergreen: true, // 兼容ie 转义es5 用来减少页面体积
  dest: './docs/.vuepress/dist', // build的输出目录
  themeConfig: {
    navbar: router,
    // 点击侧边栏的滚动动画
    smoothScroll: false,
    // 侧边栏标题深度 2为显示到二级标题
    sidebarDepth: 2,
    // 自动生成侧边栏
    sidebar: 'auto',
    // 最近更新时间 根据github上的提交时间显示
    lastUpdated: '最近更新时间',
    // 上一篇文章链接
    nextLinks: false,
    // 下一篇文章链接
    prevLinks: false,
    // github repo地址
    repo: 'https://github.com/ifls4816/ifls.github.io',
    repoLabel: '查看源码',
    docsBranch: 'master',
    // editLinks: true,
    // editLinkText: '编辑此页面',
    backToHome: '返回首页',
  },
}
