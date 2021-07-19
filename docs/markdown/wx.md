# 大纲

## HelloWorld

- 小程序项目结构概述
- 小程序相关配置
  - 全局配置 app.json
    - pages 表示页面列表，排在第一个的是默认打开页面
    - window 用于设置小程序的状态栏、导航条、标题、窗口背景色。
    - tabBar 设置页面导航菜单
  - 页面配置 page.json
    - 页面标题名称
    - 页面背景色
  - 工具相关配置 project.config.json
- 小程序项目代码分析
  - app.js 文件是小程序的入口文件（小程序从该文件开始执行）
  - app.wxss 文件是小程序的全局样式文件
  - pages 文件夹用来放置小程序的页面
    - wxml 模板文件，类似于之前的 HTML 内容
    - wxss 样式文件，类似于之前的 css 文件
    - js 文件，用于处理 js 的交互逻辑，与之前的 js 作用类似
    - json 文件，用于当前页面的配置
  - utils 文件夹用于提供一些工具方法

## 发框架概览

> 网页编程采用的是 HTML+CSS+JS 这样的组合，其中 HTML 是用来描述当前这个页面的结构，CSS 用来描述页面的样子，JS 通常是用来处理这个页面和用户的交互。
> 在小程序中也有类似的处理方式，只是语法不同而已，相应的小程序中提供了 WXML+WXSS+JS(WXS)的方式。

- wxml（模板）
- wxss（样式）
- js（交互逻辑）
- wxs（微信脚本语言）

### WXML

> 微信小程序模板语法是特有的规则，提供了一些内置组件，也支持自定义组件

- WXML 与 HTML 不同的地方
  - 标签名字不一样
  - 多了一些 wx:if 这样的属性以及 {{ }} 这样的表达式
  - 事件处理方式不同

### 内置组件的用法

- 基础组件
  - text
    - text 标签不可以嵌套别的组件，但是可以嵌套自己
    - 如果需要长按选中文本的话，必须使用 text 标签包裹
  - icon
  - progress
- 容器组件
  - view 类似于 HTML 中的 div，可以进行嵌套
- 导航组件
  - navigator
    - 如果要跳转到 tab 链接，需要指定属性 open-type="switchTab"
    - 如果要跳转到普通链接，不需要指定 open-type
    - 在微信中实现链接跳转不可以使用传统的 a 标签

```html
<view>
  <text>我是一个页面</text>
</view>
<progress percent="80" show-info></progress>
<!-- 不可以使用a标签做跳转 -->
<!-- 如果通过按钮跳转到Tab页面，必须制定open-type=’switchTab‘ -->
<navigator url="/pages/index/index" open-type="switchTab"
  >我是一个链接</navigator
>
<!-- 默认属性是navigate 跳转后有返回按钮 -->
<navigator url="/pages/test/test" open-type="navigate">我是一个链接</navigator>
<!-- 设置为redirect后 可以跳转，但是跳转后没有返回按钮 -->
<navigator url="/pages/test/test" open-type="redirect">我是一个链接</navigator>
<icon type="warn"></icon>
<image
  style="width: 400px;height: 200px;background: pink"
  mode="aspectFit"
  src="https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19051018"
></image>
```

- 媒体组件
  - image
    - mode 裁切方式

### WXSS

> WXSS 具有 CSS 大部分的特性，小程序在 WXSS 也做了一些扩充和修改。

- WXSS 与 CSS 的不同之处
  - 分为全局样式和局部样式
  - 内联样式 style class
  - 新增了尺寸单位 rpx（px em rem 百分比 vh vw rpx）
  - WXSS 仅支持部分 CSS 选择器

### JS 交互逻辑

> 在小程序里边，我们就通过编写 JS 脚本文件来处理用户的操作

- app.js 中最外层需要 App({}) ，该函数是微信平台提供的 api
- page.js 中最外层需要 Page({})，该函数是微信平台提供的 api
- app.js 和 page.js 中都可以通过 data 属性提供数据（data 名字是固定的吗？是）
- 在 page.js 中可以通过 getApp()方法获取全局数据（也就是 app.js 中的 data 数据），也可以获取本页面中 data 数据

## 生命周期

- 程序生命周期
  - onLaunch 小程序初始化完成时（全局只触发一次）
  - onShow 小程序启动，或从后台进入前台显示时
  - onHide 小程序从前台进入后台时
  - onError 小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息
  - onPageNotFound 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
- 页面生命周期
  - onLoad 页面加载时触发
  - onShow 页面显示/切入前台时触发。
  - onReady 页面初次渲染完成时触发。
  - onHide 页面隐藏/切入后台时触发。
- 生命周期函数中一般用于做什么事情？
  - 调用后台接口获取数据
  - 启动定时任务
  - 注册一些事件（发布-订阅模式---自定义事件）
    - const vm = new Vue();
    - vm.on('data', ()=>{}) 绑定事件
    - vm.emit('data'); 触发事件

---

## wxml 基础语法

### 数据绑定

```html
<!-- 完全同Vue一致 -->
<text>{{info}}</text>
<text data-abc="{{id}}"></text>
```

### wx:if 条件渲染

wx:if wx:else:

```html
<!-- data中flag为false -->
<view wx:if="{{flag}}">我是条件渲染</view>
<view wx:else>我是else</view>
```

wx:if wx:elif wx:else

```html
<view wx:if="{{scroe<60}}">成绩为不及格</view>
<view wx:elif="{{scroe>=60 && scroe<=80}}">成绩及格</view>
<view wx:elif="{{scroe>80 && scroe<=100}}">成绩优秀</view>
```

### block 空标签

block 同 vue 中 template 一样 可用，不会被渲染出来

```html
<block wx:if="{{isShow}}">
  <view>Tom</view>
  <view>Jerry</view>
  <view>Spike</view>
</block>
```

### hidden 属性

```html
<!-- isShow 是true就隐藏  false就显示 css控制样式进行隐藏 相当于vue中的v-show -->
<view hidden="{{isShow}}">测试hedden</view>
```

### wx:for 循环

```html
<!-- 注意 wx中默认item和index 也可以自定 -->
<view wx:for="{{list}}" wx:key="{{index}}">{{item}}</view>
<!-- 自定 : 使用wx:for-item=""命名-->
<view wx:for-item="myitem" wx:for="{{list}}" wx:key="{{index}}"
  >{{myitem}}</view
>
```

### 模板用法

```html
<!-- 定义模板 -->
<template name="mytemplate">
  <view>{{info.uname}}</view>
  <view>{{info.age}}</view>
  <view>{{info.gender}}</view>
</template>
<!-- 使用is引用 data传值给定义的模板 -->
<template is="mytemplate" data="{{...userData}}"></template>
```

### 事件处理

```html
<!-- 绑定点击事件 -->
<!-- bind:tap会有事件冒泡 click click2都会被触发 -->
<!-- 注意此处click加()会有问题 -->
<view bind:tap="click2">
  <view bind:tap="click">bind:tap点击</view>
</view>
<!-- bind:catch会阻止事件冒泡 只会触发事件源click-->
<view catch:tap="click2">
  <view catch:tap="click">bind:catch点击</view>
</view>
```

```html
<!-- 点击事件捕获 -->
<!-- 不阻止捕获事件向内传递 结果：先click2 在click-->
<view capture-bind:tap="click2">
  <view capture-bind:tap="click">capture-bind:tap点击</view>
</view>
<!-- 阻止捕获事件向内传递 结果：只触发click2 -->
<view capture-catch:tap="click2">
  <view capture-catch:tap="click">capture-catch:tap点击</view>
</view>
```

```html
<!-- 事件对象相关操作 -->
<view data-info="nihao" bind:tap="parent">
  <view data-abc="123" data-msg="hello" bind:tap="children">点击</view>
</view>
```

```js
// js代码
parent (event) {
  // event.target触发的是事件源对象
  let target = event.target
  // currentTarget触发的是
  let currentTarget = event.currentTarget
  console.log(target)
  console.log(currentTarget)
  // 通过dataset可以获取标签中的自定义属性
  console.log(event.target.dataset)
```

## 表单操作

表单提交数据的方式：

- 表单项目需要提供 name 属性
- 提交按钮需要提供属性 form-type='submit'
- form 组件需要提供属性 bindsubmit=事件处理函数

```html
<!-- 在form表单标签上定义方法 -->
<form bindsubmit="handleForm">
  <view>
    <!-- 表单的提交必须有name值 -->
    <input placeholder="请输入姓名" name="name" />
  </view>
  <view>
    <input placeholder="请输入姓名" name="age" />
  </view>
  <!-- 定义button的类型  -->
  <button form-type="submit">提交</button>
</form>
```

```js
handleForm(event) {
  // 携带 form 中的数据触发 submit 事件 文档中写的
  console.log(event.detail)
}
```

# 大纲

- js 交互逻辑
- 熟悉小程序 API 作用
- 熟悉默认创建的小程序主页面用户信息获取流程
- 熟悉默认创建的小程序日志页面业务流程
- 熟悉本地存储、界面、后台接口调用 API 用法
- 熟悉图片选取与文件上传 API 用法
- 能够实现颜值测试案例效果

## JS 交互逻辑详解

- js 和 wxml 交互流程分析
  - js 与模板是如何交互的？

<!-- ![](../assets/img/wechat.png) -->

- App() 该函数是微信小程序 api 的一部分，App 名称是固定的
  - getApp() 作用：在子页面中使用全局实例对象中的数据和方法
    - 不可以显示的调用全局生命周期函数
    - 但是可以直接操作自定义的数据或者函数
  - 这 app.js 中通过 this 的方式获取小程序实例
- Page() 该函数是微信小程序 api 的一部分，Page 名称是固定的
  - 页面数据 data
  - 生命周期函数
  - 事件处理函数
  - setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
    - data 数据变更时同步的：就是调用完成 setData 之后，可以直接在后面获取到最新值
    - 视图层更新是异步的：调用完成 setData 之后，页面有可能还没有更新，必须 setData 回调函数触发的时候才更新。
- 模块化 js（CommonJS 规范）
  - 模块成员导出
    - module.expors
    - exports
    - 组好两者不要结合使用
  - 模块成员导入 require()
- ES6 的模块化
  - 导出 export
  - 导入 import

## 微信小程序 API 详解

> 小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。

- 根据 api 的名称大体可以分为如下三类
  - 事件监听 API
  - 同步 API
  - 异步 API
- 常用 API
  - 界面 API：加载提示
    - wx.showLoading
    - wx.hideLoading
  - 调用后台接口
    - wx.request

## 默认小程序案例详解

- 如何获取用户的微信信息

  - 默认小程序页面需要提供一个按钮
  - 该按钮需要用户点击从而获取个人的头像和昵称
    - 需要配置 open-type="getUserInfo" （指定该属性和值，那么点击的时候会弹窗提示用户授权）
    - 还需要指定事件处理函数 bindgetuserinfo="getUserInfo"（如果用户点击了允许，那么就调用该属性指定的回调函数，回调函数的名称是自定义的）

- wx api
  - wx.canIUse('button.open-type.getUserInfo') 判断是否当前版本可用
  - wx.getUserInfo() 获取用户信息（头像和昵称）
  - wx.navigateTo() 跳转非 Tab 页面
  - wx.switchTab() 跳转 Tab 页面
  - wx.getStorageSync() 同步获取本地存储中的数据
  - wx.setStorageSync() 保存数据到本地存储中
  - wx.getSetting() 获取用户的授权信息，但是不包含具体数据
  - res.authSetting 判断用户是否已经进行授权操作

## 案例:颜值测试

- [腾讯 AI](https://ai.qq.com/)
  - 技术引擎->人脸检测与分析
  - 测试接口https://ai.qq.com/cgi-bin/appdemo_detectface
- chooseImage() 选择图片或者调用摄像头
  - sizeType
  - sourceType
  - success
  - const image = res.tempFiles[0]
  - image.size
  - image.path
- wx.uploadFile()
  - url 图片上传地址
  - filePath 本地图片的路径
  - name 提供给服务器的图片的获取名称
  - success 上传成功的回调函数
  - result.data.face[0] 表示服务器返回数据
- onShareAppMessage() 分享功能

## 总结

- 小程序开发流程
- 模板语法
  - wxml（wxss）
  - js
    - 全局 js（app.js）
    - 页面 js
      - 页面数据 data
      - 生命周期函数
      - 事件函数
    - utils 工具函数
      - 模块化
        - CommonJS
          - 导出
            - module.exports
            - exports
          - 导入
            - require
        - ES6 模块化
          - 导出
            - export
          - 导入
            - import
  - 微信 api
    - 微信平台提供的 api 功能：界面相关、硬件相关、网络相关等
    - 接口调用 wx.request
  - 默认案例的业务逻辑
    - 主页
    - 日志页面
    - 授权过程
    - 相关的微信 api

## 自定义组件

- json 文件中配置
  - "component": true
- js 文件中
  - properties 组件属性
  - data 组件内部数据
  - methods 组件内部方法
- wxss 组件样式
- wxml 组件模板
  - <slot></slot>

## WXS

> WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。

- wxs 模块
- 注释
- 变量
- 数据类型
- 运算符
- 语句
- 基础类库

## 尺寸单位 rpx

> rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。

| 设备         | rpx 换算 px (屏幕宽度/750) | px 换算 rpx (750/屏幕宽度) |
| ------------ | -------------------------- | -------------------------- |
| iPhone5      | 1rpx = 0.42px              | 1px = 2.34rpx              |
| iPhone6      | 1rpx = 0.5px               | 1px = 2rpx                 |
| iPhone6 Plus | 1rpx = 0.552px             | 1px = 1.81rpx              |

# 第四天 纯笔记 未整理

# 大纲

- setdata 是同步加载的和异步加载
  - 数据的更新是同步的
  -  的（为了提高性能：尽量减少页面更新次数）
- wx:if、hidden、block

## 回顾

- 微信小程序开发
  - 页面布局
    - 模板语法
    - 样式处理
  - js 交互逻辑
    - app.js
    - page.js
    - util
  - 微信 API
    - 界面相关
    - 网络相关
    - 。。。
- wx.canIUse 参数说明

  - `${API}.${method}.${param}.${options}`
    - wx.canIUse('request.object.method.GET')
  - `${component}.${attribute}.${option}`
    - wx.canIUse('button.open-type.getUserInfo')
    - wx.canIUse('text.selectable.false')
  - `${method}` 代表调用方式，有效值为 return, success, object, callback
    - return 表示返回值，用于同步函数（以 Sync 结尾的函数）
    - success 表示对象参数中 success 回调函数
    - object 表示对象形式的参数
    - callback 表示参数为回调函数

- ES6 模块化开发
  - 模块成员导出
    - module.exports 一般用于导出成员比较多的的场景
    - exports 一般用于导出成员比较少的场景
    - 两者不要结合使用
  - 模块成员导入
    - require
- 默认案例
  - 首页功能：默认显示按钮，点击按钮后弹出让用户授权，授权之后获取用户信息，然后隐藏按钮并且显示用户信息，点击头像时，跳转到日志页面
    - open-type="getUserInfo" 必须指定该值，点击按钮时才有授权弹窗
    - bindgetuserinfo="getUserInfo" 用户允许后，通过该属性指定的回调函数获取用户信息
  - 日志页面用于从本地缓存获取日期数据并进行遍历，遍历的数据项需要通过 util 中的格式化日期方法处理
    - CommonJS 模块化导入和导出规则
  - 本地缓存操作：保存数据；获取数据
    - setStorageSync() 保存数据
    - getStorageSync() 获取数据
  - 用户信息的获取操作
    - onLaunch 小程序首次打开时获取用户授权信息
    - onLoad 首页加载时获取用户授权信息

## 颜值测试案例

- [腾讯 AI](https://ai.qq.com/)

  - 技术引擎->人脸检测与分析
  - 测试接口 https://ai.qq.com/cgi-bin/appdemo_detectface

- 需求分析

  - 页面默认设置一个背景图片
  - 下面有一个按钮，点击后选中图片，选中图片后，上传到 AI 接口分析颜值
  - AI 接口返回数据进行页面显示
  - 实现摄像头拍照功能
  - 实现分享功能

- 基本布局

  - 背景图片
  - 选择图片按钮
  - 结果显示框

- 选择图片（获取选中图片的路径即可）

  - 按钮绑定事件
  - 调用 wx.chooseImage 选择图片
    - 参数 sourceType（ 图片来源方式：本地相册，拍照）
      - ['album', 'camera']
    - 参数 success （选择图片的回调函数）
      - res.tempFiles[0].path （选择图片的路径）

  ```
      wx.chooseImage({
        success: function(res) {
          // console.log(res)
          // 获取选中图片的路径
          let path = res.tempFiles[0].path;
          console.log(path);
        }
      });
  ```

* 上传文件到 AI 颜值测试接口

  - 调用 wx.uploadFile 上传文件

    - 参数 url （图片上传地址）
    - 参数 filePath （本地图片的路径）
    - 参数 name （提供给服务器的图片的获取名称）
    - 参数 success （上传成功的回调函数）
      - result.data.face[0] （表示服务器返回数据）

    ```
       wx.uploadFile({
          // 上传的地址（ai地址）
          url: 'https://ai.qq.com/cgi-bin/appdemo_detectface',
          // 要上传的文件的路径
          filePath: path,
          // 该name的值用于提供给服务器获取图片信息（服务器更加该名称获取图片）
          name: 'image_file',
          // 获取接口的返回结果数据
          success: function(res) {
            console.log(typeof res.data);
          }
        })
    ```

- 获取结果并更新页面

  ```
  // 把res.data字符串转化为json对象
  let obj = JSON.parse(res.data);
  let info = obj.data.face[0];
  // console.log(info);
  // 更新页面数据必须使用setData
  that.setData({
    gender: info.gender,
    age: info.age,
    beauty: info.beauty,
    glass: info.glass
  });
  ```

* 转发功能
  - onShareAppMessage
    - title 标题
    - path 当前页面路径
    - imgUrl 缩略图图片路径

```
  // 点击转发触发该函数，可以定制分享窗口的效果
  onShareAppMessage () {
    return {
      title: '颜值测试',
      path: '/pages/ai/index',
      imageUrl: '/assets/icon.jpg'
    }
  },
```

## 自定义组件

> 小程序提供了丰富的内置组件，但是也有一些业务相关的功能并不能通过单个的内置组件完成，此时，可以把一些通用的功能封装成自定义组件，方便重复使用。

- 创建自定义组件

  - 创建 components 目录，用于存放所有自定义组件
  - 创建 Component 页面

    - json 文件中配置

      - "component": true 将该页面声明为自定义组件

    - js 文件中配置

      - properties 组件属性
        - 可以通过该属性定义组件的属性

      ```
       properties: {
          // 表示该自定义组件有一个menu属性
          menu: {
            type: Array, // 约束组件属性的类型（Number;Boolean;String;Object;Array）
            value: ['头条', '娱乐', '经济']
          }
        }
      ```

      - data 组件内部数据

      ```
        data: {
          start: '【',
          end: '】'
        },
      ```


      - methods 组件内部方法

      ```
        methods: {
          handle () {
            // console.log('click')
            // 触发事件时，修改data中数据
            this.setData({
              start: '<',
              end: '>'
            });
          }
        }
      ```



    - wxss 组件样式

    - wxml 组件模板

      - 组件插槽 <slot name="before"></slot>

      - 必须开启插槽功能

        ```
          // options属性与data平级
          options: {
            multipleSlots: true // 在组件定义时的选项中启用多slot支持
          },
        ```

- 实现自定义组件功能

- 使用自定义组件

  - 在页面 page.json 文件中配置自定义组件名称和路径

    ```
    "usingComponents": {
       "my-header": "/components/header/index"
     }
    ```

  - 在页面中使用组件

    ```
    <my-header></my-header>
    ```

    ```
    // 使用组件时，可以给属性传递数据
    <my-header menu='{{[123,456,789]}}'></my-header>
    ```

## 微信尺寸单位 rpx

> rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。

| 设备              | rpx 换算 px (屏幕宽度/750) | px 换算 rpx (750/屏幕宽度) |
| ----------------- | -------------------------- | -------------------------- |
| iPhone5(320)      | 1rpx = 0.42px              | 1px = 2.34rpx              |
| iPhone6(375)      | 1rpx = 0.5px               | 1px = 2rpx                 |
| iPhone6 Plus(414) | 1rpx = 0.552px             | 1px = 1.81rpx              |

> 使用的时候，根据 rpx 总宽度，就可以大体上清楚，rpx 具体值所占据的屏幕宽度：比如表示屏幕的一半就是 375rpx

## wxs

> WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。

### wxs 基本用法

- 在 wxml 模板页面可以直接使用 wxs

```html
<wxs module='m1'>
  // 代码注释
  var n = 123;
  var fn = function() {
    return 'hello';
  }
  // 导出成员
  module.exports = {
    n: n,
    fn: fn
  }
</wxs>
```

```html
// 使用wxs模块导出的成员
<view>
  {{m1.n}}
</view>
<view>
  {{m1.fn()}}
</view>
```

### wxs 独立文件用法

> 可以将 wxs 代码放到一个独立的文件中，比如：common.wxs
>
> 页面使用文件时，需要导入 <wxs src='./common.wxs' module='m2'></wxs>

```html
var info = 'hello Kitty';
module.exports = {
  info: info
};
```

> common.wxs 文件中可以导入别的 wxs 文件：比如 info.wxs

```html
var m3 = require('./info.wxs');
var info = 'hello Kitty';
module.exports = {
  info: info,
  m3info: m3.msg
};
```

### wxs 使用注意事项

- 每个 wxs 模块的作用域是私有的
- 成员的导出通过 module.exports，不可以直接通过 exports 导出
- 通过 module 属性给模块命名
- 使用的时候通过 module 属性的命名访问导出的成员
- wxs 内容可以抽取到独立的文件中，
  - 然后在 wxml 模板文件中可以引入（wxs 标签的 src 属性），
  - 也可以在 wxs 文件中引入别的 wxs 文件（require）
