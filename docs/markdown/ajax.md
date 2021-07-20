# Ajax

## 1 什么是 Ajax

即异步的 Javascript 和 XML，通过调用浏览器内置的对象 XMLHttpRequest 所提供的 API 和服务器进行交互

### 1.1Ajax 使用步骤:

- 创建 XMLHttpRequest 对象
- 调用 open 方法，设置请求方式、设置请求的 URL
- 调用 send 方法，发送请求
- 当请求响应过程完毕，通过 responseText 属性接收服务器返回的文本
  ###1.3 发送请求的方式：GET POST
  ###1.4 GET 和 POST 使用
- 案例：GET 方式传参

```javascript
/// 1. 创建一个 xhr 对象
var xhr = new XMLHttpRequest()
// 2. 设置请求的方式和路径
xhr.open('GET', '/query-get?id=2&name=zhangsan&age=23')
// 3. 发送请求
xhr.send(null)
// 4. 注册事件
xhr.onload = function() {
  // 通过 xhr 的 responseText 获取到响应的响应体
  console.log(this.responseText)
}
```

- 案例：点击按钮通过 GET 方式触发 Ajax 发送请求

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
    <input type="button" value="发送请求" id="btn" />
    <script>
      //获取btn按钮
      var btn = document.getElementById('btn')
      //绑定点击事件，点击后Ajax才向服务器发送请求
      btn.onclick = function() {
        //创建XMLHttpRequest对象
        var xhr = new XMLHttpRequest()
        //当Ajax响应过程结束，接收服务器返回的值
        xhr.onload = function() {
          console.log(this.responseText)
        }
        //设置请求方式和url路径
        xhr.open('GET', 'http://127.0.0.1:3000/time')
        //请求发送
        xhr.send()
      }
    </script>
  </body>
</html>
```

- 案例：POST 使用

```javascript
var xhr = new XMLHttpRequest()
xhr.open('POST', '/query-post')
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xhr.send('username=cl&age=18&gender=女')
xhr.onload = function() {
  console.log(this.responseText)
}
```

### 1.2 get 和 post 的区别:

- GET:
  - 字面意思：获取内容
  - URL 的大小不能超过 2kb
  - 不推荐使用 GET 传递隐私数据
- POST：
  - 字面意思：提交数据
  - 实现登录等功能，可以携带隐私数据
  - 可以上传文件，发送大量数据

## 2 进阶

### 2.1 onload 和 onreadystatechange

onload 是 H5 新增
理解：在通过 Ajax 向服务器发送请求的过程中，XMLHttpRequest 对象的状态会发生多次变化。由于 readystatechange 事件是在 xhr 对象状态变化时触发（不单是在得到响应时），也就意味着这个事件会被触发多次。测试，看 onreadystatechange 事件是否触发了多次

```javascript
var xhr = new XMLHttpRequest()
xhr.open('POST', '/query-post')
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xhr.send('name=cl&age=18&gender=nv')
xhr.onreadystatechange = function() {
  console.log('事件呗执行了') //此处可以加If判断是否===4就 如下注释
}
//  if (xhr.readyState === 4) {
//                 console.log('事件呗执行了')
//             }
```

案例：

```javascript
var xhr = new XMLHttpRequest()
// console.log(xhr.readyState);

// xhr 对象被创建，此时xhr对象的状态值是 0

// 当Ajax执行状态发生变化，该事件就会触发
// 0 -> 1
// 1 -> 2
// 2 -> 3
// 3 -> 4
xhr.onreadystatechange = function() {
  // 接收服务器返回的数据
  // console.log(this.responseText);
  // readyState表示Ajax执行的状态
  // console.log(this.readyState); // 用数字来表示Ajax的状态
  if (this.readyState === 4) {
    // 表示完全接收了服务器返回的数据
    console.log(this.responseText.length)
    document.getElementById('msg').style.display = 'none'
  } else {
    // 表示AJAX 请求正在进行中
    document.getElementById('msg').style.display = 'block'
  }
  // console.log(this.responseText.length);
}

xhr.open('GET', '/big-data')
xhr.send()
```

此处省略部分内容，如需要查找大笔记

## 3 XMLHttpRequest API 总结

### 3.1 XMLHttpRequest 属性

- readyState xhr 的状态 4 响应体接收完毕
- status 获取状态码
- responseText 获取响应体，文本格式
- responseXML 获取响应体，xml 格式
- onreadystatechange 事件，当 xhr.readyState 属性发生改变触发
- onload 事件，响应接收完毕

### 3.2 XMLHttpRequest 方法

- open(method, url, true) 设置请求的方式，请求的路径， true 表示异步执行，默认是 true,false 是同步不推荐用
- send(requsetBody) 发送请求(体)
- setRequestHeader(key, value) 设置请求头 上面案例有代码
- getResponseHeader(key) 获取响应头

## 4 响应数据格式

### 4.1 JSON

- 使用注意：
  - JSON 中属性名称必须用双引号包裹
  - JSON 中表述字符串必须使用双引号
  - JSON 中不能有单行或多行注释
  - JSON 没有 undefined 这个值
  - JSON 必须是一个完整的整体，要么是一个对象，要么是数组，要么是其他，总之不是两种类型放在一起
- JSON 和 JS 数据格式相互转换 + JSON 转 JS：
  `JS = JSON.parse(JSON);` + JS 转 JSON
  `JSON = JSON.stringify(JS);`  
  代码：

```javascript
// 定义JSON字符串的写法
var o = '{"name": "zhangsan", "age": 30}'
var a = '["apple", "banana", "orange"]'
var b = 'true'

// 把JSON字符串，转换成JS数据
var js_o = JSON.parse(o)
console.log(o)
console.log(js_o)
var js_a = JSON.parse(a)
var js_b = JSON.parse(b)
console.log(js_a)
console.log(js_b)

// 把JS数据转换成JSON格式的字符串，使用JSON对象的stringify方法
console.log('----------------------')
console.log(JSON.stringify(js_o))
console.log(JSON.stringify(js_a))
console.log(JSON.stringify(js_b))
```

- JSON 文件的写法

```json
{
  "name": "zhangsan",
  "age": 20,
  "hobby": "学习",
  "arr": []
}
```

### 4.2 XML

- 简单了解：语法严格，标签要闭合，区分大小写，xml 文档根目录下只能有一个标签，如果服务器返回了 xml 格式数据，该数据可以直接当作 document 对象来使用（方法通用）

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<students>
	<stu id="1">
    	<name>张三</name>
        <age>18</age>
        <sex>男</sex>
        <other height="175cm" weight="65kg" />
    </stu>
    <stu id="2">
    	<name>李四</name>
        <age>20</age>
        <sex>女</sex>
        <other height="170cm" weight="60kg" />
    </stu>
</students>
```

## 5 留言板案例

完整效果：主要思路：从数据库中动态获取页面内容 提交表单后实现异步刷新页面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>留言板</title>
    <link rel="stylesheet" href="./assets/bootstrap.css" />
  </head>

  <body>
    <div class="container">
      <h1 class="display-1">留言板</h1>
      <hr />
      <ul id="messages" class="list-unstyled"></ul>
      <hr />
      <form>
        <div class="form-group">
          <label for="txt_name">称呼：</label>
          <input class="form-control" id="txt_name" type="text" />
        </div>
        <div class="form-group">
          <label for="txt_content">留言：</label>
          <textarea
            class="form-control"
            id="txt_content"
            cols="80"
            rows="10"
          ></textarea>
        </div>
        <button type="button" id="btn_send" class="btn btn-primary">
          提交
        </button>
      </form>
    </div>
    <script src="/template-web.js"></script>

    <script type="text/html" id="demo">
      {{each array}}
      <li class="media">
        <img class="mr-3" src="./assets/avatar.png" alt="">
        <div class="media-body">
          <h4>{{$value.name}}</h4>
          <p>{{$value.content}}</p>
        </div>
      </li>
      {{/each}}
    </script>
    <script>
      //获取页面数据部分
      function getMsg() {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/getMsg')
        xhr.send()
        xhr.onload = function() {
          var data = JSON.parse(this.responseText)
          // console.log(data);
          var str = template('demo', {
            //模板引擎函数调用
            array: data
          })
          // console.log(str);
          document.getElementById('messages').innerHTML = str //将生成的html加入到megssage结构下
        }
      }
      getMsg()
      //点击添加数据部分
      document.getElementById('btn_send').onclick = function() {
        var name = document.getElementById('txt_name') //获取name元素  为下面的.value做准备
        var text = document.getElementById('txt_content') //同上
        console.log('点击了')
        xhr = new XMLHttpRequest()
        xhr.open('POST', '/addMsg')
        //头
        xhr.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
        xhr.send('name=' + name.value + '&content=' + text.value) //字符串拼接，要求按照'name=lisi$age=18'的格式将变量拼接到发送的send中
        xhr.onload = function() {
          console.log(this.responseText)
          if (this.responseText == 'true') {
            getMsg()
          }
        }
        name.value = '' //当value值发送后进行清空
        text.value = ''
      }
    </script>
  </body>
</html>
```

## 6 模板引擎处理响应数据

更改模板引擎界定符：

```js
template.defaults.rules[1].test = /{#([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*#}/
```

### 6.1 简单使用：

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
    <ul id="messages">
      <!--往此处动态添加-->
    </ul>

    <script src="/template-web.js"></script>
    <!-- 1. 准备一个模板 -->
    <script type="text/html" id="temp">
      <li>{{d}}</li>
    </script>

    <script>
      // 2. 准备数据（自己定义变量、从服务器返回的数据）
      var abcd = 'hello world'
      // 3. 调用template方法，处理模板（把数据“拼接”到模板中）。返回值是拼接好的字符串
      var html = template('temp', {
        d: '12345'
      })

      console.log(html)
      // 4. 把拼接好的html放到指定的位置
      document.getElementById('messages').innerHTML = html
    </script>
  </body>
</html>
```

### 6.2 模板引擎中的 if 判断

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
    <div id="content"></div>

    <!-- 定义模板 -->
    <script type="text/html" id="moban">
      <h2>{{title}}</h2>
      <p>{{age}}</p>
      {{each other}}
          <li>{{$index}} - {{$value}}</li>
      {{/each}}

      {{if age >= 18}}
          <p>欢迎您来玩</p>
      {{else}}
          <p>禁止未成年人进入</p>
      {{/if}}
    </script>

    <!-- 
    {{each target}}
    {{$index}} {{$value}}
    {{/each}} -->

    <script src="/template-web.js"></script>
    <script>
      // 模拟数据
      // var data = ;
      var str = template('moban', {
        title: 'hello',
        age: 20,
        other: ['apple', 'banana', 'orange', 'liulian']
      })
      console.log(str)
      // 把拼接好的内容放到指定的位置
      document.getElementById('content').innerHTML = str
    </script>
  </body>
</html>
```

### 6.3 模板引擎中的循环

```javascript
// 模板写法
{{each arr}} //arr是要循环的对象或数组
	{{$index}} -- 数组的下标
	{{$value}} -- 数组的值
{{/each}}

// template函数写法
var html = template('id', {
    arr: ['apple', 'banana', 'orange']//注意：此处要传进来一个对象
});
```

## 7 自行封装 Ajax

> 使用回调函数处理异步请求是最佳方案

```javascript
function ajax(method, url, params, done) {
  //params是send中的url
  var xhr = new XMLHttpRequest()
  method = method.toUpperCase() //为了防止用户输入大小写不同，一律转换成大写
  if (method == 'GET') {
    //判断是非为GET方法，是就进行open中的url拼接
    url = url + '?' + params
  }
  xhr.open(method, url)
  var p = null //先行定义一个为null的p 当if判断为POST时，加入请求头，以及设置send的参数为p
  if (method == 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    p = params
  }
  xhr.send(p)
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      done(this.responseText) //将this.readyState作为实参调用
    }
  }
}
//data为形参 是什么无所谓
ajax('POST', '/query-post', 'name=zs&age=18&gender=male', function(data) {
  console.log(JSON.parse(data))
})
```

## 8 jQuery 中的 AJAX

补充内容：

```js
// 在使用$.ajax({})发送Form表单的时候 必须写contentType：false和processData: false两个参数
$.ajax({
  type: 'post',
  url: '/index/change/',
  data: data,
  dataType: 'json',
  contentType: false,
  processData: false,
  success: function(msg) {
    console.log(msg)
  }
})
```

### 8.1 完整写法的实现代码

```javascript
$.ajax({
  url: '/time',
  type: 'get', //不写的话默认的type就是get
  dataType: 'json', //表示要求服务器返回数据的类型 不一定就能成功返回指定的值 取决于服务器
  data: { name: 'zs', age: 20 }, // 表示发给服务器的参数，功能同url和send一致
  cache: false, // 表示让IE浏览器不缓存返回的结果：jq中的实现方式也是加一个时间戳
  beforeSend: function(xhr) {
    //在发送请求之前要做的事情
    console.log('开始请求')
  },
  success: function(data) {
    //此处形参data就是服务器给返回的值
    console.log(data)
  },
  error: function(xhr) {
    //当出错后要做的事情
    console.log(出错)
  },
  complete: function(xhr) {
    //请求完成的后要做的事情
    console.log('请求完成')
  }
})
```

常用参数简单介绍：

- contentType：false 请求体内容类型，默认 application/x-www-form-urlencoded
- processData: false 在使用 jq 中的 ajax 提交 Form 表单的时候 必须写 contentType 和 processData
- cache: 设置 ie 浏览器的缓存问题， cache: false 不缓存
- url：请求地址
- type / method：请求方法，默认为 get 注意此处写法：type:'GET', get 前不加斜杠
- dataType：服务端响应数据类型
- data：需要传递到服务端的数据，如果 GET 则通过 URL 传递，如果 POST 则通过请求体传递
- timeout：请求超时时间
- beforeSend：请求发起之前触发
- success：请求成功之后触发（响应状态码 200）
- error：请求失败触发
- complete：请求完成触发（不管成功与否）

### 8.2 简化写法：GET 方式请求

```javascript
//其中无用参数可以省略 url可以传对象也可以传字符串方式
$.get(
  '/query-get',
  { name: 'lisi', age: 20 },
  function(shuju) {
    console.log(shuju)
  },
  'json'
) //后面的Json是第四个参数 用来设置服务器返回的数据类型
```

### 8.3 简化写法：POST 方式请求

```javascript
//url传的是字符串方式
$.post('query-post', 'sex=男&hobby=男', function(shuju) {
  console.log(shuju)
})
```

### 8.4 ajax 全局事件处理

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="/nprogress.css" />
    <!-- 此处引用了NProgress进度提示插件-->
  </head>

  <body>
    <!-- <div style="display:none;">玩命加载中...</div> -->

    <input type="button" value="发送请求1" />
    <input type="button" value="发送请求2" />

    <script src="/jquery.min.js"></script>
    <script src="/nprogress.js"></script>
    <script>
      // 发送ajax请求之前，使用全局事件处理，来处理beforeSend和complete事件
      $.ajaxSetup({
        //全局加载事件写上后，下面的ajax都能使用到
        beforeSend: function() {
          // $('div').show();
          NProgress.start() //第三方插件调用
        },
        complete: function() {
          // $('div').hide();
          NProgress.done() //第三方插件调用
        }
      })

      // 点击两个按钮要发送两次ajax请求，全局事件写上后 两次ajax都能执行

      // 点击按钮1，发送请求
      $('input')
        .eq(0)
        .click(function() {
          $.ajax({
            url: '/big-data',
            success: function(shuju) {
              console.log(shuju)
            } /* ,
                beforeSend: function () {
                    $('div').show();
                },
                complete: function () {
                    $('div').hide();
                } */
          })
        })

      // 点击按钮2，发送请求
      $('input')
        .eq(1)
        .click(function() {
          $.ajax({
            url: '/big-data',
            success: function(shuju) {
              console.log(shuju)
            } /* ,
                beforeSend: function () {
                    $('div').show();
                },
                complete: function () {
                    $('div').hide();
                } */
          })
        })
    </script>
  </body>
</html>
```

### 8.5Axios -封装库 暂作了解 后面还会讲

实现代码

```javascript
axios
  .get('/time')
  .then(function(res) {
    console.log(res.data)
  })
  .catch(function(err) {
    console.error(err)
  })
```

<!-- > 链接![https://github.com/axios/axios] -->

## 9 XMLHttpRequest 2.0

### 9.1 responseType / response

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', '/query-get?name=lisi&age=10')
// 定义返回数据的类型  注意要写在open下 send前
xhr.responseType = 'json' //和jq中的dataType功能一致
// xhr.responseType = 'text';//默认为text 也可以设置为空 也是text
// xhr.responseType = 'document';  // 如果服务器返回的结果是XML格式的数据，指定为document
xhr.send()
xhr.onload = function() {
  // console.log(this.responseText); // 只能接收文本类型的数据
  console.log(this.response) //response能接收任何数据类型
}
```

### 9.2 onload / onprogress

ps:此处还有个 xhr.upload.onprogress 表示上传进度

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', '/big-data')
xhr.onload = function() {
  console.log(this.readyState) //输出4
  // 只在请求完成时触发  就是在onreadystatechange中的readyState => 4时
}
xhr.onprogress = function() {
  // 在请求进行中触发
  // onprogress readyState => 3时触发 也会检测到4的时候
  //检测正在接收的数据以及接受完成的数据，前面发送到服务器的过程不包含
  // 可以用于下载进度的提示
  console.log(this.readyState)
  console.log(this.responseText.length)
}
xhr.send(null)
```

## 10 FormData

注意：h5 新增的内置对象，是 DOM 对象，jq 无法使用，jq 使用的话要转为 DOM 对象

使用代码：

### 10.1 有 form 表单时

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
    <form id="fm">
      <input type="text" name="user" /><br /><!--      -->
      <input type="password" name="pwd" /><br />
      <input type="radio" name="sex" value="男" checked />男
      <input type="radio" name="sex" value="女" />女<br />
      <input type="file" name="pic" /><br />
      <input type="button" id="btn" value="提交" />
    </form>

    <script>
      document.getElementById('btn').onclick = function() {
        // 1. 找到表单   注意注意!!!!：input必须有name属性
        var fm = document.getElementById('fm')
        // 2. 实例化FormData，传入表单
        var fd = new FormData(fm) // FormData ： 收集表单数据，注意括号中的参数
        // console.log(fd);
        // console.log(fd.get('pwd'));

        // 发送ajax请求
        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/fd') //fd是老师模拟服务器中的api
        //注意：此处不用写请求头，FormData自带
        xhr.responseType = 'json' //设置服务器给返回的数据格式
        xhr.send(fd)
        xhr.onload = function() {
          console.log(this.response)
        }
      }
    </script>
  </body>
</html>
```

### 10.2 没有 form 表单时

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
    <input type="text" id="user" /><br />
    <input type="password" id="pwd" /><br />
    <input type="file" id="pic" /><br />
    <input type="button" id="btn" value="提交" />

    <script>
      document.getElementById('btn').onclick = function() {
        // 收集表单数据
        // 如果没有表单，直接实例化FormData，括号中不用传参数
        var fd = new FormData()
        // 调用fd对象中的append方法，动态向fd对象中添加数据
        //注意上面的usraname必须和服务器要求的格式一致  第二个参数是获取用户在input中添加的value值
        fd.append('username', document.getElementById('user').value)
        // 发送ajax请求
        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/fd')
        xhr.send(fd)
        xhr.onload = function() {
          console.log(this.response)
        }
      }
    </script>
  </body>
</html>
```
