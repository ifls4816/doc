export default [
  { text: 'Home', link: '/' },
  {
    text: 'Javascript',
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
    text: 'TypeScript',
    children: [
      { text: 'ts1', link: '/markdown/typescript1.md' },
      { text: 'ts2', link: '/markdown/typescript2.md' },
    ],
  },
  {
    text: 'Vue',
    children: [
      { text: 'vue2', link: '/markdown/vue.md' },
      { text: 'vue3', link: '/markdown/vue3.md' },
      { text: 'vueuse', link: '/markdown/vueuse.md' },
    ],
  },
  { text: 'React', link: '/markdown/react.md' },
  { text: 'nodejs', link: '/markdown/nodeJS.md' },
  // { text: '小程序', link: '/markdown/wx.md' },
  {
    text: 'CSS',
    children: [
      { text: 'stylus', link: '/markdown/stylus.md' },
      { text: 'flex', link: '/markdown/cssFlex.md' },
      { text: 'tailwindcss', link: '/markdown/tailwindcss.md' },
    ],
  },

  {
    text: '杂项',
    children: [
      { text: 'npm使用', link: '/markdown/npm.md' },
      { text: 'git使用', link: '/markdown/git.md' },
      { text: 'mysql了解', link: '/markdown/mysql.md' },
    ],
  },
  {
    text: '你不知道的javascript',
    children: [
      {
        text: '1-入门与进阶-up & going',
        link: '/markdown/You-Dont-Know-JS/1-入门与进阶-up & going',
      },
      {
        text: '2-作用域与闭包-scope & closures',
        link: '/markdown/You-Dont-Know-JS/2-作用域与闭包-scope & closures',
      },
      {
        text: '3-this与对象原型-this & object prototypes',
        link:
          '/markdown/You-Dont-Know-JS/3-this与对象原型-this & object prototypes',
      },
      {
        text: '4-类型与文法-types & grammar',
        link: '/markdown/You-Dont-Know-JS/4-类型与文法-types & grammar',
      },
      {
        text: '5-异步与性能-async & performance',
        link: '/markdown/You-Dont-Know-JS/5-异步与性能-async & performance',
      },
      {
        text: '6-ES6与未来-es6 & beyond',
        link: '/markdown/You-Dont-Know-JS/6-ES6与未来-es6 & beyond',
      },
    ],
  },
  // {
  //   text: '自定义页面',
  //   link: '/custom/user.md',
  // },
  // { text: 'External', link: 'https://www.baidu.com' },
]
