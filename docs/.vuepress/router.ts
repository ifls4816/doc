export default [
  { text: 'Home', link: '/' },
  {
    text: 'javascript',
    children: [
      {
        text: '基础',
        children: [
          { text: 'JS基础知识', link: '/markdown/jsBase.md' },
          { text: 'JS面向浏览器', link: '/markdown/webAPI.md' },
        ],
      },
      {
        text: '进阶',
        children: [{ text: 'JS进阶知识', link: '/markdown/jsPro.md' }],
      },
      {
        text: 'ES6',
        link: '/markdown/ECMAScript6.md',
      },
      {
        text: 'jQuary',
        link: '/markdown/jQuery.md',
      },
      {
        text: 'Ajax通信',
        link: '/markdown/ajax.md',
      },
    ],
  },
  {
    text: 'Vue',
    children: [
      { text: 'vue2', link: '/markdown/vue.md' },
      { text: 'vue3', link: '/markdown/vue3.md' },
    ],
  },
  { text: 'React', link: '/markdown/react.md' },
  { text: 'nodejs', link: '/markdown/nodeJS.md' },
  { text: '小程序', link: '/markdown/wx.md' },
  {
    text: 'CSS',
    children: [{ text: 'stylus', link: '/markdown/stylus.md' }],
  },

  {
    text: '杂项',
    children: [
      { text: 'npm使用', link: '/markdown/npm.md' },
      { text: 'git使用', link: '/markdown/git.md' },
      { text: 'mysql了解', link: '/markdown/mysql.md' },
    ],
  },

  // {
  //   text: '自定义页面',
  //   link: '/custom/user.md',
  // },
  // { text: 'External', link: 'https://www.baidu.com' },
]
