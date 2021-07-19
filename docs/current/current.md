# 整理

## vuepress markdonw语法块

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

## 1 a标签为何能包裹块级元素

因为a标签属性为transparent(透明的),意思是取决于a标签的父级元素是否能包裹块级元素,例如

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

## 2 prettierrc代码格式化配置

在.prettierrc下配置

```json
{
  "tabWidth": 2,//tab长度
  "singleQuote": true,//单引号
  "semi": false,//关闭分号
  "printWidth": 120//代码换行长度
}
```



## 3 flex页面布最后一行左对齐

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



## 4 css书写顺序

（1）定位属性：position  display  float  left  top  right  bottom   overflow  clear   z-index

（2）自身属性：width  height  padding  border  margin   background

（3）文字样式：font-family   font-size   font-style   font-weight   font-varient   color   

（4）文本属性：text-align   vertical-align   text-wrap   text-transform   text-indent    text-decoration   letter-spacing    word-spacing    white-space   text-overflow

（5）css3中新增属性：content   box-shadow   border-radius  transform



## 5 overscroll-behavior属性简介



CSS `overscroll-behavior`属性可以设置DOM元素滚动到边缘时候的行为。

语法:

```
overscroll-behavior: [ contain | none | auto ]{1,2}
```

```css
/* 单个关键字值 */
overscroll-behavior: auto;     /* 默认值 */
overscroll-behavior: contain;
overscroll-behavior: none;

/* 两个值，分别表示x方向和y方向 */
overscroll-behavior: auto contain;
```



## 6 浏览器右键自定义

禁用右键:

```js
document.oncontextmenu = (function () {
	return function (e) { e.preventDefault() }
})()
```



## 7 url转码

```js
  <script>
    var str = 'E5s%2FsPWPCIXZpxXxhoC%2F4JQdu2t5ypsor0PXt%2B%2BL6Qs%3D%23JRZQAGzmp1vbBeGTYR%2FRHx0C4Mh9NULEKVOrskJp%2Bk%2B%2BiXfuf3OSYfV84Y5P%2F88yKiXZUwPAa4aYtjvjbdLQ8fa7lFpj9M8d0axmgEUZgOtAPBD1Vmt9cMD5y2bvaps4%23%23ilO%2F1HF0mYI%3D'
    var a = decodeURIComponent(str)
    console.log(a)
  </script>
```

