# jQuery

## 1 jQuery 和 DOM 对象互转

基本知识点：

- jQuery 对象的本质,就是一个伪数组

```js
// jq对象
var btn = $('button')
// DOM对象
var btn2 = document.querySelector('button')
// jq转DOM
var a = btn[0]
// DOM转jq 基本没用，常用作$(this)的转换
var b = $(btn2)
```

## 2 jQuery 注册事件

```js
//jQuery方式操作事件
// click事件名在此是一个方法，使用时不加on
$('li').click(
  //通过jQuery给一组元素注册事件时，不需要循环，可直接通过获取的方式注册。
  //因为jQuery内部会自动循环注册 --这个过程叫做隐式迭代
  function() {
    // this 是当前点击的事件源
    // this 不是jQuery对象，而是DOM对象 ，此处用到DOM转jQuery  $(this)
    alert($(this).text())
  }
)
```

## 3 jQuery 的 css 方法操作样式

### 3.1 设置

```js
// 设置单个样式 方式1:
$('div').css('width', 500) //数值可以不用字符串隐起来
$('div').css('background', 'blue') //非数字需要用
// 设置多个样式 方式2：
$('div').css({
  width: 300,
  height: 300,
  backgroundColor: 'pink',
  fontSize: 40,
  'font-size': 60
})
```

### 3.2 获取

```js
var v = $('div').css('width')
console.log(v) //注意：此时获取到的是字符串类型 计算的话要用parseInt转换为数值类型
console.log(parseInt(v))
```

## 4 通过选择器获取 jQuery 对象

### 4.1 基本选择器

```js
$('#id')
$('.class')
$('div')
$('div,p,li')
$('div.redClass')
$('ul > li')
$('ul li')
```

### 4.2 过滤器选择器

```js
$('li:eq(2)')
$('li:odd') //选中奇数个
$('li:even') //选中偶数个
```

### 4.3 选择器筛选方法

- children() 参数可选

```js
$('#div > p').css('color', 'red')
// children 仅仅找子代元素
$('#div')
  .children()
  .css('color', 'red') //找div下所有的子元素
$('#div')
  .children('p')
  .css('color', 'red') //找div下为p的子元素
```

- find() 参数必写

```js
// find,查找的是子子孙孙元素  相当于$('#div p').css('color','red');
$('#dv')
  .find('p')
  .css('color', 'red')
```

- siblings() 兄弟元素

- parent()

- eq(index) 推荐使用

- next()

- prev()
  ###4.4 index()方法

案例：index 方法获取索引值

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div class="box1">
      <button>我是box1中的按钮1</button>
      <button>我是box1中的按钮2</button>
      <button>我是box1中的按钮3</button>
      <button>我是box1中的按钮4</button>
      <button>我是box1中的按钮5</button>
    </div>

    <div class="box2">
      <button>我是box2中的按钮1</button>
      <button>我是box2中的按钮2</button>
      <button>我是box2中的按钮3</button>
      <button>我是box2中的按钮4</button>
      <button>我是box2中的按钮5</button>
    </div>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      // 注意：获取到的是两组button，box1的index是0-4 box2的index也是0-4
      $('button').click(function() {
        // this 当前点击元素
        alert($(this).index()) //.index()  可以获取索引值
      })
    </script>
  </body>
</html>
```

案例：下拉菜单

## 5 jQuery 操作类名

```js
// - 添加类名
$('div').addClass('show')
// - 删除类名
$('div').removeClass('show')
// - 检测类名是否存在
$('div').toggleClass('show')
```

## 6 jQuery 操作标签属性

### 6.1 设置、获取、移除标签属性

```js
// 获取标签属性 用v接收 返回的是字符串类型
var v = $('div').attr('title')
// 设置标签属性(可以设置任意标签) 参数1是标签名 参数2是值
$('div').attr('title', 'hello')
// 移除
$('div').removeAttr('title')
```

自定义属性的作用：可以把一些有用的数据暂存到自定属性上。

```html
<img src="small.jpg" msrc="middle.jpg" bsrc="big.jpg" />
```

### 6.2 prop 方法操作标签属性

针对的是表单标签，selected checked disabled

```js
// 获取
var v = $('input').prop('checked') //输入表单相关的属性返回布尔值  选中了是true未选中是false 可以用来判断input标签是否被选中
// 设置
$('input').prop('checked', true) //相当于设置checked="checked"
// 也可以根据其他input的checked设置当前标签的checked
$('input').prop('checked', v)
```

案例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <input type="text" value="1101" />
    <input type="button" value="发送" />
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      // 核心目的：点击→禁用按钮→倒计时→消除禁用→重新发送

      // 给按钮注册click事件
      $('input[type=button]').click(function() {
        // 禁用按钮
        $(this).prop('disabled', true)
        // 定义一个数字
        var num = 11
        // 设置按钮的内容
        $(this).val(num + '秒后重新发送')
        // 创建一个变量，暂存this。 this在定时器外部中代表的是事件源
        var that = this
        // 开启一个定时器
        var timer = window.setInterval(function() {
          // this 在定时器中默认代表的是window
          console.log(that)
          num--
          // 更新按钮的内容
          $(that).val(num + '秒后重新发送')
          // 判断num是否等于0
          if (num == 0) {
            // 清除定时器
            clearInterval(timer)
            // 更新内容
            $(that).val('发送')
            // 消除禁用
            $(that).prop('disabled', false)
          }
        }, 1000)
      })

      // 注意：this指向的问题：
      // this在事件处理程序中指向的是事件源
      // this在定时器中指向的是window

      // 问题：在定时器中，使用this时，页面效果无效
      // 原因：this在定时器中指向的是window
      // 解决：在外部把this暂存到其他变量中 或者 在定时器中直接使用选择器
    </script>
  </body>
</html>
```

## 7 jQuery 操作标签的内容

```js
$('div').text()
$('div').html()
$('input').val() //多数针对表单元素
```

## 8 jQuery 动画

### 8.1 基本动画

此处不详写了，若用到其他参数等请查手册

```js
// 缩放
.show()
.hide()
.toggle()
// 上拉下拉
.slideDown()
.slideUp()
.slideToggle()
// 淡入淡出
.fadeIn()
.fadeOut()
.fadeToggle()
```

### 8.2 自定义动画

```js
$('div').animate(
  {
    //animate({left:100,width:500}),[speed],[easing],[fn])
    left: 1000,
    width: 500,
    height: 500
    // 注意：自定动画将来所操作的属性是值是数值的属性。
  },
  5000
)
```

### 8.3 停止动画

.toStop()

```js
$('div')
  .toStop()
  .show()
```

案例：jquery day03 中有大量案例

## 9 jQuery 入口函数

入口函数的作用：
在开发时，我们经常会使用外联的 js，使用在引入时，可能会引入在 head 标签中，若引入在 head 标签中时，获取元素是无效的（因为 DOM 树还没有构建成功），所以，在外联的 js 文件中，我们会把代码写入入口函数中。

- DOM 中的 onload 入口函数

```js
// window.onload:页面加载完毕后（DOM树、其他外联资源）， 执行的操作
window.onload = function () {
  console.log(1);
```

- jQuery 中的入口函数

```js
// 写法1
$(document).ready(function() {
  console.log(1)
})
// 写法2 推荐此种写法
$(function() {
  console.log(1)
})
```

## 10 jQuery 中动态操作元素

### 10.1 创建和追加元素

- 创建

```js
var $newLi = $('<li></li>').text('我是新来的')
// 也可写作：var newLi = $('<li>我是新来的</li>')
```

- 追加到 ul 内部的后面

```js
// 追加到ul内部的最后面
$newLi.appendTo('ul') //主动添加

$('ul').append($newLi) //被动添加
```

```js
// 追加到ul内部的最前面
$newLi.prependTo('ul') //主动添加

$('ul').prepend($newLi) //被动添加
```

### 10.2 动态删除/清空元素

```js
// 动态删除元素
$('.box1').remove()

// 动态清空元素的内容
$('.box2').empty() // 移除所有内部元素及元素相关的事件，推荐使用
$('.box2').html('') // 仅仅删除元素不推荐使用
```

案例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button id="btn1">创建</button>
    <button id="btn2">清空</button>
    <ul>
      <!-- <li>
      张三
      <a href="javascript:">删除</a>
    </li> -->
    </ul>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      // 数据
      var data = ['亚瑟', '安其拉', '百里守约', '花木兰', '鲁班', '赵云']

      // 创建
      $('#btn1').click(function() {
        // 循环遍历数组
        for (var i = 0, len = data.length; i < len; i++) {
          // 创建列表项-设置内容-追加到ul中
          // $('<li></li>').text(data[i]).appendTo('ul');
          var htmlStr = data[i] + ' <a href="javascript:">删除</a>'
          $('<li></li>')
            .html(htmlStr)
            .appendTo('ul')
        }

        // 删除
        $('a').click(function() {
          if (confirm('确定要删除吗？')) {
            // 找到父元素li-删除
            $(this)
              .parent()
              .remove()
          }
        })
      })

      // 清空
      $('#btn2').click(function() {
        if (confirm('确定要清空吗？')) {
          $('ul').empty()
        }
      })
    </script>
  </body>
</html>
```

案例：购物车综合案例 jQuery day04

## 11 jQuery 操作元素大小

> 在设置时，内边距和边框时不变的，变化的仅仅是内容部分（width 和 height）

### 11.1 width 和 height 方法

```js
// width 和 height   盒子模型中：内容部分
// 获取
var w = $('div').width()
// 设置
$('div').width(200)
```

### 11.2 innerWidth 和 innerHeight 方法

```js
// innerWidth 和 innerHeight 盒子模型中：内容 + padding
// 获取
var w = $('div').innerWidth()
// 设置
$('div').innerWidth(200)
```

### 11.3 outerWidth 和 outerHeight 方法

```js
// outerWidth 和 outerHeight 盒子模型中：内容 + padding + border
// 获取
var w = $('div').outerWidth()
// 设置
$('div').outerWidth(200)
```

## 12 jQuery 操作元素的位置

### 12.1 获取元素距离文档的位置

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      i* {
        margin: 0;
        padding: 0;
      }
      div {
        width: 500px;
        height: 500px;
        background: green;
        position: relative;
        margin: 0 auto;
      }
      h1 {
        width: 200px;
        height: 200px;
        background: hotpink;
        position: absolute;
      }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      $(function() {
        var obj = $('h1').offset() //获取元素参照与文档的位置
        console.log(obj) //输出了一个对象   {left:XXX,top:XXX}

        // $('h1').offset({left:0,top:0})// 也可以设置  但是一般我们不做设置

        // 小结：offset方法将来获取的元素的位置，参照的永远是文档。注意和定位没有关系。
        // 对于offset方法，一般我们经常用它来获取。
      })
    </script>
  </head>
  <body>
    <p>我是段落1</p>
    <p>我是段落2</p>
    <p>我是段落3</p>
    <p>我是段落4</p>
    <p>我是段落5</p>
    <p>我是段落6</p>
    <p>我是段落7</p>
    <p>我是段落8</p>
    <p>我是段落9</p>
    <p>我是段落10</p>
    <p>我是段落11</p>
    <p>我是段落12</p>
    <p>我是段落13</p>
    <p>我是段落14</p>
    <p>我是段落15</p>
    <p>我是段落16</p>
    <p>我是段落17</p>
    <p>我是段落18</p>
    <p>我是段落19</p>
    <p>我是段落20</p>
    <p>我是段落21</p>
    <p>我是段落22</p>
    <!-- 关注的元素 S -->
    <div>
      <h1>标题</h1>
    </div>
    <!-- 关注的元素 E -->

    <p>我是段落23</p>
    <p>我是段落24</p>
    <p>我是段落25</p>
    <p>我是段落26</p>
    <p>我是段落27</p>
    <p>我是段落28</p>
    <p>我是段落29</p>
    <p>我是段落30</p>
    <p>我是段落31</p>
    <p>我是段落32</p>
    <p>我是段落33</p>
    <p>我是段落34</p>
    <p>我是段落35</p>
    <p>我是段落36</p>
    <p>我是段落37</p>
    <p>我是段落38</p>
    <p>我是段落39</p>
    <p>我是段落40</p>
    <p>我是段落41</p>
    <p>我是段落42</p>
    <p>我是段落43</p>
    <p>我是段落44</p>
    <p>我是段落45</p>
    <p>我是段落46</p>
    <p>我是段落47</p>
    <p>我是段落48</p>
    <p>我是段落49</p>
    <p>我是段落50</p>
  </body>
</html>
```

### 12.2 获取元素距离上级定位元素的位置

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      div {
        width: 500px;
        height: 500px;
        background: green;
        position: relative;
        margin: 0 auto;
      }
      h1 {
        width: 200px;
        height: 200px;
        background: hotpink;
        position: absolute;
        top: 0;
        left: 0;
      }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      $(function() {
        // 获取元素的位置
        // 次案例中h1的定位元素是div div和h1的距离是 0 0 ,所以输出的对象也是top:0 left:0
        var obj = $('h1').position()
        console.log(obj)

        // 设置时，要使用css来设置
        $('h1').css({ left: 10, top: 10 })

        // 小结：position方法将来获取的位置，参照的是定位元素。
        // 注意：若要设置元数的位置时（和定位有关系），要使用css方法
      })
    </script>
  </head>
  <body>
    <p>我是段落1</p>
    <p>我是段落2</p>
    <p>我是段落3</p>
    <p>我是段落4</p>
    <p>我是段落5</p>
    <p>我是段落6</p>
    <p>我是段落7</p>
    <p>我是段落8</p>
    <p>我是段落9</p>
    <p>我是段落10</p>
    <p>我是段落11</p>
    <p>我是段落12</p>
    <p>我是段落13</p>
    <p>我是段落14</p>
    <p>我是段落15</p>
    <p>我是段落16</p>
    <p>我是段落17</p>
    <p>我是段落18</p>
    <p>我是段落19</p>
    <p>我是段落20</p>
    <p>我是段落21</p>
    <p>我是段落22</p>
    <!-- 关注的元素 S -->
    <div>
      <h1>标题</h1>
    </div>
    <!-- 关注的元素 E -->

    <p>我是段落23</p>
    <p>我是段落24</p>
    <p>我是段落25</p>
    <p>我是段落26</p>
    <p>我是段落27</p>
    <p>我是段落28</p>
    <p>我是段落29</p>
    <p>我是段落30</p>
    <p>我是段落31</p>
    <p>我是段落32</p>
    <p>我是段落33</p>
    <p>我是段落34</p>
    <p>我是段落35</p>
    <p>我是段落36</p>
    <p>我是段落37</p>
    <p>我是段落38</p>
    <p>我是段落39</p>
    <p>我是段落40</p>
    <p>我是段落41</p>
    <p>我是段落42</p>
    <p>我是段落43</p>
    <p>我是段落44</p>
    <p>我是段落45</p>
    <p>我是段落46</p>
    <p>我是段落47</p>
    <p>我是段落48</p>
    <p>我是段落49</p>
    <p>我是段落50</p>
  </body>
</html>
```

### 12.3 操作卷去的页面间距

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      body {
        text-align: center;
      }
      div {
        width: 500px;
        height: 500px;
        border: 1px solid #ccc;
        margin: 0 auto;
        overflow: auto;
      }
    </style>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      $(function() {
        // 给div注册scroll事件-滚动条滚动事件
        $('div').scroll(function() {
          // 获取页面卷去的间距
          var v = $(this).scrollTop()
          console.log(v)
        })

        // 点击按钮
        $('button').click(function() {
          //设置页面卷去的间距为0
          $('div').scrollTop(0)
        })
      })
    </script>
  </head>
  <body>
    <div>
      <p>我是文本1</p>
      <p>我是文本2</p>
      <p>我是文本3</p>
      <p>我是文本4</p>
      <p>我是文本5</p>
      <p>我是文本6</p>
      <p>我是文本7</p>
      <p>我是文本8</p>
      <p>我是文本9</p>
      <p>我是文本10</p>
      <p>我是文本11</p>
      <p>我是文本12</p>
      <p>我是文本13</p>
      <p>我是文本14</p>
      <p>我是文本15</p>
      <p>我是文本16</p>
      <p>我是文本17</p>
      <p>我是文本18</p>
      <p>我是文本19</p>
      <p>我是文本20</p>
      <p>我是文本21</p>
      <p>我是文本22</p>
      <p>我是文本23</p>
      <p>我是文本24</p>
      <p>我是文本25</p>
      <p>我是文本26</p>
      <p>我是文本27</p>
      <p>我是文本28</p>
      <p>我是文本29</p>
      <p>我是文本30</p>
      <p>我是文本31</p>
      <p>我是文本32</p>
      <p>我是文本33</p>
      <p>我是文本34</p>
      <p>我是文本35</p>
      <p>我是文本36</p>
      <p>我是文本37</p>
      <p>我是文本38</p>
      <p>我是文本39</p>
      <p>我是文本40</p>
      <p>我是文本41</p>
      <p>我是文本42</p>
      <p>我是文本43</p>
      <p>我是文本44</p>
      <p>我是文本45</p>
      <p>我是文本46</p>
      <p>我是文本47</p>
      <p>我是文本48</p>
      <p>我是文本49</p>
      <p>我是文本50</p>
    </div>
    <button>回到顶部</button>
  </body>
</html>
```

## 13 jQuery 事件操作

> Query 中事件封装的底层就是事件监听（ addEventListener() 标准）

### 13.1 on 和 off 方法注册和移除事件

```js
// 处理程序1
var fn1 = function() {
  alert(1)
}
// 处理程序2
var fn2 = function() {
  alert(2)
}

// $('button').click(fn1);
$('button').on('click', fn1)
// $('button').click(fn2);
$('button').on('click', fn2)

// 原生：removeEventListener
// jQuery:off
$('button').off('click', fn1)
```

### 13.2 jQuery 中的事件委托

- DOM 中的回顾事件委托代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .r {
        background: red;
      }
    </style>
  </head>

  <body>
    <div>
      <p>我是段落</p>
      <p class="r">我是段落1</p>
      <p>我是段落</p>
      <p class="r">我是段落2</p>
      <p>我是段落</p>
      <p>我是段落</p>
      <p class="r">我是段落3</p>
      <p>我是段落</p>
      <p class="r">我是段落4</p>
      <p>我是段落</p>
    </div>
    <script>
      // 为什么要学习事件委托：优化程序，提升程序性能。
      // 减少事件注册，所以可以提升程序性能
      // 事件委托：把子孙元素的事件委托给上级元素。
      // 如何实现：

      // 原生： 1. 给上级元素注册事件  2. 事件对象.target   3.可以选择通过nodeName 或 类名检测触发是否是指定的元素
      // 原理：事件冒泡

      // 面试题：如何给不存在的元素注册事件？

      // 获取上级元素
      var div = document.querySelector('div')
      // 注册事件
      div.onclick = function(e) {
        if (e.target.className == 'r') {
          alert(e.target.innerText)
        }
      }
    </script>
  </body>
</html>
```

- jQuery 中的事件委托

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .r {
        background: red;
      }
    </style>
  </head>

  <body>
    <div>
      <p>我是段落</p>
      <p class="r">我是段落1</p>
      <p>我是段落</p>
      <p class="r">我是段落2</p>
      <p>我是段落</p>
      <p>我是段落</p>
      <p class="r">我是段落3</p>
      <p>我是段落</p>
      <p class="r">我是段落4</p>
      <p>我是段落</p>
      <h2>标题</h2>
    </div>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      // jQuery对象.on('事件名','选择器',事件处理程序);

      $('div').on('click', '.r', function() {
        // this → 代表的当前触发的元素
        alert($(this).text())
      })
      // - jQuery事件委托的解绑
      $('div').off('click', '.r', function() {})
    </script>
  </body>
</html>
```

### 13.3 触发事件：trigger()方法

```js
$('button').click(function() {
  alert('触发了按钮的点击行为')
})
$('button').trigger('click') //不用点击  直接出发click行为
// 注意：trigger 是用来出发已经设定好的click之类的按钮 本身并不能自动触发其他元素
```

### 13.4 事件对象

> 和 DOM 中的方法一致

> 如何获取事件对象？
>
> ​ 事件处理程序的第一个形参-e window.event || e
>
> ​ 在 jQuery 中不用考虑兼容问题

- 鼠标事件对象相关的属性
  - 事件对象.clientX/Y 参照浏览器
  - 事件对象.pageX/Y 参照文档
  - 事件对象.offsetX/Y 参照元素
- 键盘事件对象相关的属性
  - 事件对象.keyCode 返回键码数字
  - 事件对象.alt/shift/ctrlKey 返回是布尔值。 检测是否按下（true）
- 公共的属性或方法
  - 属性
    - 事件对象.target;
    - 方法：
      - 事件对象.preventDefault(); 阻止默认行为
      - 事件对象.stopPropagation(); 阻止事件冒泡

案例：jQuery day5

## 14 链式编程注意事项

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <ul>
      <li>我是列表1</li>
      <li>我是列表2</li>
      <li>我是列表3</li>
    </ul>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      // 【正确的链式编程】
      // $('li').eq(1)  // 获取第二个li对应 jQuery对象
      // .css('color','red')
      // .parent()      // 获取li的父元素ul对应的 jQuery对象
      // .css('border','1px solid #ccc')
      // .find('li').eq(1)  // 获取第二个li对应 jQuery对象
      // .css('background','hotpink');

      // 【错误的链式编程】
      // $('li').eq(1)  // 获取第二个li对应 jQuery对象
      // .css('color','red')
      // .parent()      // 获取li的父元素ul对应的 jQuery对象
      // .css('border','1px solid #ccc')
      // .width()   // 返回一个数字，问题：数字是jQuery对象？不是
      // .find('li').eq(1)  // 获取第二个li对应 jQuery对象
      // .css('background','hotpink');

      // 小结：是否可以继续链式编程，看调用完一个方法后，该方法是否有重新返回jQuery对象
    </script>
  </body>
</html>
```

### 14.1 简单模拟链式编程

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // 创建一个对象
      var obj = {
        name: '张三',
        age: 10,
        sayHi: function() {
          // 在方法中this代表的是方法的调用者
          console.log('hello，我叫' + this.name + '今年' + this.age)
          return this
        },
        writeCode: function(v) {
          console.log('我会写' + v)
          // 默认返回undefined
          return this
        },
        song: function(v) {
          console.log('我会唱' + v)
          return this
        }
      }

      // obj.sayHi();
      // obj.writeCode('HTML');
      // obj.song('挪威的森林');

      // 要求：链式编程
      obj
        .writeCode('JQuery')
        .song('五环')
        .sayHi()
    </script>
  </body>
</html>
```

### 14.2 end()方法的使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <ul>
      <li>我是列表1</li>
      <li>我是列表2</li>
      <li>我是列表3</li>
    </ul>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      // 【正确的链式编程】
      $('li')
        .eq(1) // 获取第二个li对应 jQuery对象
        .css('color', 'red')
        .parent() // 获取li的父元素ul对应的 jQuery对象
        .css('border', '1px solid #ccc')
        .end() // 获取第二个li对应 jQuery对象
        .css('background', 'hotpink')
    </script>
  </body>
</html>
```

案例：星级评分

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      div {
        float: left;
        font: bold 100px '宋体';
        color: hotpink;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <!-- <div>☆★</div> -->
    <div>☆</div>
    <div>☆</div>
    <div>☆</div>
    <div>☆</div>
    <div>☆</div>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      var index // 变量提升
      // 鼠标进入div，当前的div及之前的所有内容变为★，之后的所有div设置为☆
      $('div').mouseenter(function() {
        $(this)
          .text('★')
          .prevAll() // 当前div之前的所有div
          .text('★') // 之前的所有div
          .end() // 返回到当前的div
          .nextAll() // 获取当前div之后所有的div
          .text('☆')
      })

      // 鼠标离开div，所有的div都变为☆
      $('div').mouseleave(function() {
        $('div').text('☆')
        // 覆盖
        $('div')
          .eq(index)
          .text('★')
          .prevAll()
          .text('★')
      })

      // 事件： 鼠标进入→[鼠标点击]→鼠标离开
      $('div').click(function() {
        index = $(this).index()
      })
    </script>
  </body>
</html>
```

### 14.3 多库共存问题

```js
// 问题：报错，$ is not a function
// 原因：其他文件中变量 $  覆盖了 jQuery中的$
// 解决：1. 使用jQuery标识符  2. noConflict方法

// 解决方案1：使用jQuery标识符
jQuery('button').click(function() {
  alert(1)
})

// 解决方案2:释放jQuery中的$，用其他自定义标识符代替
var $1 = jQuery.noConflict() //此操作时将jq中所以的$换成$1
$1('button').click(function() {
  alert(1)
})
```

案例： jQuery day6
