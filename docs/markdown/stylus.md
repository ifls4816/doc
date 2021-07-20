# stylus笔记

冒号可有可无
分号可有可无
逗号可有可无
括号可有可无
变量
插值（Interpolation）
混合（Mixin）
数学计算
强制类型转换
动态引入
条件表达式
迭代
嵌套选择器
父级引用
Variable function calls
词法作用域
内置函数（超过 60 个）
语法内函数（In-language functions）
压缩可选
图像内联可选
Stylus 可执行程序
健壮的错误报告
单行和多行注释
CSS 字面量
字符转义
TextMate 捆绑

## 1 安装

```shell
npm install --save stylus-loader stylus
```

## 2 选择器

### 2.1 排版

```css
/* 给div加上背景色pink */
div
  background-color pink
```

### 2.2 嵌套&父级引用

```css
/* & 指向父级选择器 */
ul
  li
    color #fff
    &:hover
      color #000
```

### 2.3 歧义

```css
/* 此处负值可能引起歧义 需要加括号 */
pad(n)
  padding (- n)

body
  pad(5px)
```

## 3 变量

### 3.1 自定义变量

```css
fonts = Helvetica, Arial, sans-serif
color = #ccc
body
  padding 50px
  font 14px/1.4 fonts
  background-color color

/* 解析为 */
body {
  padding: 50px;
  font: 14px/1.4 Helvetica, Arial, sans-serif;
  background-color #ccc
}
```

### 3.2 属性查找-需要声明

```css
/* 适用场景:根据一个高度计算其他高度等情况 */
ul
  width 100px
  height $ = 200px
  margin-top -($/2)
/* 解析为 */
ul {
  width: 100px;
  height: 200px;
  margin-top: -100px;
}
```

### 3.3 属性查找-无需声明

不需要声明变量 直接可以使用@加属性 进行引用

```css
/* 可用@直接表示height的200px 并进行运算 */
ul
  width 100px
  height 200px
  margin-top @height*2
```

## 4 运算符

```css
body
  foo: 5px + 10  //15px
  foo: 2 ** 8  // 256
  foo: 5px * 2 // 10px
  foo: !!'' // false
  foo: foo and bar and baz  
  foo: foo or bar or baz
  foo: 1..5
  foo: 1...5
  foo: 'foo' is a 'string'
  foo: (1 2 3) == (1 2 3)
  foo: (1 2 3) == (1 2)
  foo: ((one 1) (two 2)) == ((one 1) (two 2))
  foo: ((one 1) (two 2)) == ((one 1) (two))
  foo: ((one 1) (two 2))[0]
  foo: 3 in (1 2 3 4)
```

## 5 mixins-混合书写

### 5.1 类似于函数定义

```css
border-radius(n)
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n

form input[type=button]
  border-radius(5px)
  /* 此处括号可忽略 */
  border-radius 5px
```

```css
/* 定义类函数 */
set-font-ize(size, color, weight)
  font-size size
  color color
  font-weight weight
/* 在a标签上使用类函数 */
a
  set-font-ize(20px, pink, 700)
```

### 5.2 用arguments代替默认参数

```css
set-radius()
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments
ul
  set-radius(5px 10px)
```

### 5.3 混合书写中可再次写混合书写

```css
inline-list()
  li
    display inline

comma-list()
  inline-list()
  li
    &:after
      content ', '
    &:last-child:after
      content ''

ul
  comma-list()

/* 编译 */
ul li:after {
  content: ", ";
}
ul li:last-child:after {
  content: "";
}
ul li {
  display: inline;
}
```

## 6 Function函数

### 6.1 默认参数

使用方法与mixins一致 但是函数有返回值

```css
/* 可以指定默认参数 */
add(a, b = unit(a, px))
  a + b
body
  padding add(10px, 5)
/* 解析 */
body {
  padding: 15px;
}
```

::: tip
此处unit(a, b)是stylus内置函数 默认拼接a b参数 a为数值 若送入15px 会被识别为15 b为单位
:::

### 6.2 无视单位

```css
add(a, b = a)
  a = unit(a, px)
  b = unit(b, px)
  a + b
li
  padding add(15%, 10deg)
```

### 6.3 多个返回值

变量声明可使用

```css
sizes = 15px 10px 5px 0

li
  font-size sizes[0] //15px
  font-size sizes[1] //10px
```

函数中也可使用

```css
sizes()
 15px 10px

sizes()[0]
/* 注意:单纯变量时需要带括号(normal bold)或者写return */
weight()
  return normal bold
body
  font-weight weight()[1]
```

### 6.4 别名

注意: 与js不同 此处起了别名 原名仍旧可用

```css
add(a, b)
  a + b
plus = add

plus(1, 2)
```

## 7 stylus内置方法

[详情地址](https://www.zhangxinxu.com/jq/stylus/bifs.php)

## 8 注释

单行注释

```css
// 我是注释
```

多行注释

```css
/*
 * 我是注释
 */
```

多行缓冲注释

```css
/*!
 * stylus编译时不进行压缩 直接输出
 */
```

## 9 条件判断

### 9.1 if

```css
lock = false
body
  if lock
    padding 0
  else
    padding 100
```


```css
stringish(val)
  if val is a 'string' or val is a 'ident'
    yes
  else
    no
stringish('yay') == yes // => true
stringish(yay) == yes // => true
stringish(0) == no // => true

compare(a, b)
  if a > b
    higher
  else if a < b
    lower
  else
    equal
compare(5, 2) // => higher
compare(1, 5) // => lower
compare(10, 10) // => equal
```

### 9.2 unless

```css
/* 如果lock是defined和false 就替换padding为margin 相当于if判断条件的反转 */
lock = true

unless lock is defined and lock
  padding(x, y)
    margin y x

body
  padding 5px 10px
```

## 10 循环

### 10.1 for

```css
table
  for index in 1 2 3 4 5
    tr:nth-child(index)
      height index * 30px
/* 编译为 */
table tr:nth-child(index) {
  height: 30px;
}
table tr:nth-child(index) {
  height: 60px;
}
table tr:nth-child(index) {
  height: 90px;
}
table tr:nth-child(index) {
  height: 120px;
}
table tr:nth-child(index) {
  height: 150px;
}

body
  for index in 1 2 3 4 5
    foo index
/* 编译为 */
body {
  foo: 1;
  foo: 2;
  foo: 3;
  foo: 4;
  foo: 5;
}
/* item,index */
body
  font = Impact Arial sans-serif
  for item, index in font
    foo index item
/* 编译为 */
body {
  foo: 0 Impact;
  foo: 1 Arial;
  foo: 2 sans-serif;
}
```

### 10.2 混合书写中的for循环

```css
apply(props)
  props = arguments
  if length(arguments) > 1
    for prop in props
      {prop[0]} prop[1]

body
  apply(one 1, two 2, three 3)

body
  list = (one 1) (two 2) (three 3)
  apply(list)
/* 编译为 */
body[data-v-227179ae] {
  one: 1;
  two: 2;
  three: 3;
}
body[data-v-227179ae] {
  one: 1;
  two: 2;
  three: 3;
}
```

### 10.3 函数中的for循环

```css
sum(nums)
  sum = 0
  for n in nums
    sum += n

sum(1 2 3)
// => 6
```

## 11 import导入

```css
/* 加css后缀 正常识别为css文件*/
@import "reset.css"
/* 不加css后缀 会被识别为stylus文件 此处不加引号也可@import reset */
@import 'reset'

```

## 12 @extend继承

引用father的属性 直接给son 写法上更简练 也可进行多层嵌套

```css
.father
  padding 100px
  margin 100px
.son
  @extend .father
  color red
.grandson
  @extend .son
  font-size 16px
```

要继承多层级嵌套的属性 需要从头开始写

```css
div
  ul
    li
      width 100px
      height 100px
/* 此处写成 @extend ul li不行 光写li 也不行 */
.other
  @extend div ul li
  color red
```

## 13 url()函数

stylus替换了原本css的url() 使用了base64 Data URIs有条件地内联它们

在使用webpack中 此处作用不大

```css
bg-image(url)
  background-image url('../assets/images/' + url)
div
  bg-image('waring.png')
```

## 14 stylus中正常写css

若遇到stylus无法解决的问题 可以在stylus中直接写css 也可以写在@css中

```css
@css {
  body {
    font: 14px;
  }  
}
```
