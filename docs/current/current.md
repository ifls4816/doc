# 整理

## vuepress markdonw 语法块

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::

## a 标签为何能包裹块级元素

因为 a 标签属性为 transparent(透明的),意思是取决于 a 标签的父级元素是否能包裹块级元素,例如

```js
<div>
  <a>
    <div>此写法可以</div>
  </a>
</div>
```

```js
<p>
  <a>
  	<div>此写法不行(p不能包裹块级元素)</div>
	</a>
<p>
```

## prettierrc 代码格式化配置

在.prettierrc 下配置

```json
{
  "tabWidth": 2, //tab长度
  "singleQuote": true, //单引号
  "semi": false, //关闭分号
  "printWidth": 120 //代码换行长度
}
```

## flex 页面布最后一行左对齐

不管页面元素有多少,只要在后面加上相应数量的仅有宽没有高的空盒子即可

```html
<html>
  <style>
    .item {
      width: 24%;
      background-color: #00abff;
      height: 60px;
      margin-top: 10px;
    }
    .itemempty {
      height: 0px;
      width: 24%;
    }
    .box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  </style>
  <body>
    <div class="box">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="itemempty"></div>
      <div class="itemempty"></div>
      <div class="itemempty"></div>
    </div>
  </body>
</html>
```

## css 书写顺序

（1）定位属性：position display float left top right bottom overflow clear z-index

（2）自身属性：width height padding border margin background

（3）文字样式：font-family font-size font-style font-weight font-varient color

（4）文本属性：text-align vertical-align text-wrap text-transform text-indent text-decoration letter-spacing word-spacing white-space text-overflow

（5）css3 中新增属性：content box-shadow border-radius transform

## overscroll-behavior 属性简介

CSS `overscroll-behavior`属性可以设置 DOM 元素滚动到边缘时候的行为。

语法:

```
overscroll-behavior: [ contain | none | auto ]{1,2}
```

```css
/* 单个关键字值 */
overscroll-behavior: auto; /* 默认值 */
overscroll-behavior: contain;
overscroll-behavior: none;

/* 两个值，分别表示x方向和y方向 */
overscroll-behavior: auto contain;
```

## 浏览器右键自定义

禁用右键:

```js
document.oncontextmenu = (function () {
  return function (e) {
    e.preventDefault()
  }
})()
```

## url 转码

```js
<script>
  var str =
  'E5s%2FsPWPCIXZpxXxhoC%2F4JQdu2t5ypsor0PXt%2B%2BL6Qs%3D%23JRZQAGzmp1vbBeGTYR%2FRHx0C4Mh9NULEKVOrskJp%2Bk%2B%2BiXfuf3OSYfV84Y5P%2F88yKiXZUwPAa4aYtjvjbdLQ8fa7lFpj9M8d0axmgEUZgOtAPBD1Vmt9cMD5y2bvaps4%23%23ilO%2F1HF0mYI%3D'
  var a = decodeURIComponent(str) console.log(a)
</script>
```

## 获取 url 参数

```js
// 获取url参数
const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {},
  )
```

## reduce

```js
const arr = ['a', 'b', 'c', 'd', undefined, null]
const initialValue = 0
arr.reduce((total, currentValue, currentIndex, arr) => {
  // 必需。初始值: 若初始值不填 着total为数组的第一个元素
  // 第二轮循环时 该值是函数return的值(即上次调用函数的返回值)
  console.log('total', total)
  // 必需。当前value值: 若初始值不填 value值从第二个元素开始
  console.log('currentValue', currentValue)
  // 可选。当前index值: 若初始值不填 index值从第二个元素开始
  console.log('currentIndex', currentIndex)
  // 可选。原数组
  console.log('arr', arr)
}, initialValue) // 传递给total的初始值

// 场景一: 数组元素求和/求积
let numArr = [1, 2, 3, 4, 5]
console.log(numArr.reduce((a, b) => a + b)) // 15
console.log(numArr.reduce((a, b) => a * b)) // 120

// 场景二: 计算每个元素出现的次数
let arrName = ['name', 'age', 'long', 'short', 'long', 'name', 'name']
const timeObj = arrName.reduce((total, curretVal) => {
  // 2:判断当前值是否在初始化的对象中 若有 加一次 若无 往对象中添加1
  if (curretVal in total) {
    total[curretVal]++
  } else {
    total[curretVal] = 1
  }
  return total
}, {}) // 1:首次传入口对象 走else 添加为1次
console.log(timeObj)

// 场景三: 数组去重
let arr = ['name', 'age', 'long', 'short', 'long', 'name', 'name']
let newArr = arr.reduce((total, currentVal) => {
  if (!total.includes(currentVal)) {
    total.push(currentVal)
  }
  return total
}, [])

// 对象去重
const arr = [
  {
    id: '1',
    msg: '',
  },
  {
    id: '2',
    msg: '',
  },
  {
    id: '1',
    msg: '',
  },
]
const newArr = arr.reduce((total, currentVal) => {
  if (!total.find((i) => i.id === currentVal.id)) {
    total.push(currentVal)
  }
  return total
}, [])

// 场景四: 对对象属性求和
let person = [
  {
    name: 'xiaoming',
    age: 18,
  },
  {
    name: 'xiaohong',
    age: 17,
  },
  {
    name: 'xiaogang',
    age: 19,
  },
]
// 1: reduce
const foo = person.reduce((total, currentVal) => (total += currentVal.age), 0)
// 2: map
let sum = 0
const bar = person.map((item) => (sum += item.age))
sum = bar[bar.length - 1]
console.log(sum)
// 3: forEach
let sum2 = 0
person.forEach((item) => (sum2 += item.age))
console.log(sum2)
```

## await-to-js

```js
// import { to } from 'await-to-js'
function to(promise, errorExt) {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, {}]
      }

      return [err, {}]
    })
}

const ajax = (data) => {
  return Promise.resolve({ code: 200, msg: 'ok', data })
}

const init = async () => {
  const [err, { code, msg }] = await to(ajax({ a: 1 }))
  if (err) return console.log('err', err)
  if (code === 0) {
    console.log(msg)
  } else {
    console.log(msg)
  }
}

init()
```

## css文本省略

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```