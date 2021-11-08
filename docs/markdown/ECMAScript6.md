# ECMAScript6 基础语法

## 1 变量和常量关键词

### 1.1 let 关键词

let 用变量声明

- 没有变量的提升
- 有块级作用域
- 不能重复声明（可以重复赋值）

```javascript
// 使用let声明的变量没有变量提升
a = 10
console.log(a) //报错
let a

//一对大括号就是一个程序块，在大括号之中声明的变量，出了大括号就不能用了
{
  let key = '键盘'
  console.log(key) //正常输出 键盘
}
console.log(key) //报错

for (let i = 0; i < 5; i++) {}
console.log(i) //报错

//使用let定义的变量，不能重复声明
let abc = 10
let abc = 'abc' //报错
```

### 1.2 const 常量

特点：

- 没有变量提升
- 也有块级作用域
- 一旦赋值就不能改变

```javascript
//一旦声明就不会发生改变的值。
const pi = 3.1415; //适合声明下面不用改变的量
console.log(pi);

//常量也有块级作用域
{
    const word = '你好，世界！';
    console.log(word);
}
console.log(word);

//声明常量时，如果不初始化值则会直接报错
const word;//报错
```

### 1.3 var、let 和 const 的区别

- var 和 let 都能声明变量，但是 let 更严谨一些，在 es6 之后都推荐使用 let 来声明变量。
- let 的特殊点： 不能提升变量(保证程序的逻辑通畅)、 有块级作用域(避免变量交叉污染)、不能重复声明(保证变量的唯一性）
- const 用来声明常量，常量是不能改变的量，常量也有块级作用域，不能提升，初始化常量时必须赋值
- 能用 const 就用 const

## 2 赋值解构

==解构赋值就是将对象或者数组中的数据拆解出来分别赋值给某几个变量/常量==

### 2.1 结构方法

- 对象解构

```javascript
//声明了两个常量: name  type
//变量/常量 的名称必须和对象的key同名
const { name1, type } = { name: '花木兰', type: '战士' }
console.log(name1) //不同名就是 undefined
console.log(type)
```

- 数组解构

```javascript
let [aaa, bbbb, cde, daa] = [111, 'abc', 3.1415, 'hahaha']
aaa // 111
let [, , third = '默认值'] = ['foo', 'bar', 'baz']
third // "baz"
let [head, ...tail] = [1, 2, 3, 4]
head // 1
tail // [2, 3, 4]
```

- 深拷贝对象&数组

```js
var obj1 = { a: 1, b: 2 }
var obj2 = { ...obj1 }
obj1.a = null
console.log(obj1)
console.log(obj2)
```

- 展开语法

```js
var arr = [0, 1, 2]
consoloe.log(...arr) // 0 1 2
```

- 合并数组&对象

可代替 contact push unshift

```js
var arr1 = [1, 2]
var arr2 = [3, 4]
console.log([...arr1, ...arr2]) //[1,2,3,4]
```

- 字符串转数组

```js
var str = 'hello'
console.log([...str]) //[h,e,l,l,o]
```

### 2.2 别名

```javascript
//别名
//     原名: 别名
const { name: username, type } = { name: '花木兰', type: '战士' }
console.log(username)
console.log(name) //一旦使用了别名，原名就无法使用了
```

两种错误示范：

```javascript
let { name, type } = { name: '盖伦', type: '战士', country: '德玛西亚' }
console.log(name)
console.log(type)
console.log(country) //报错

let { name, type, country } = { name: '盖伦', type: '战士' }
console.log(name)
console.log(type)
console.log(country) //undefined
```

### 2.3 扩展运算符

```javascript
let [a, b, ...c] = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']
console.log(a)
console.log(b)
console.log(c) //多出来的cccdddeee全都以数组的形式保存在变量c中
```

### 2.4 常见用法

```js
// 交换两个变量的值
let x = 1
let y = ((2)[(x, y)] = [y, x]) // x:2 y:1
// 解构函数的返回值: 数组
function example() {
  return [1, 2, 3]
}
let [a, b, c] = example()
// 解构函数的返回值: 对象
function example() {
  return {
    foo: 1,
    bar: 2
  }
}
let { foo, bar } = example()
```

## 3 字符串扩展

### 3.1 模板字符串

```javascript
let str = `<a href='#' title="测试">跳转</a>`
document.write(str) //在反引号中可以不用管 单双引号的嵌套问题

const obj = {
  url: 'http://www.baidu.com',
  domain: '百度',
  title: '百度一下你就知道'
}
let str = `<a href="${obj.url}" title="${obj.title}">${obj.domain}</a>` //此处为主要用法 变量在模板字符串中的写法
document.write(str)

str = `鲸鱼死后尸体会缓慢的沉入海底，这个过程生物学家称之为鲸落;
鲨鱼死后尸体也会缓慢的沉入海底，这个过程成为鲨掉` //模板字符串中可以换行
console.log(str)
```

### 3.2 字符串方法的扩展

- includes()

```javascript
let str = 'abcdefg'
let char = 'deg'
console.log(str.includes(char)) //判断str字符串中是否包含char字符串  //false
```

- startsWith() 和 endsWith()

```javascript
let str = 'abcdefg'
let char = 'efg'
//判断str字符串是否是以char字符串开始
console.log(str.startsWith(char)) //false
//判断str字符串是否是以char字符串结束
console.log(str.endsWith(char)) //true

// 第二个参数表示开始搜索的位置
let s = 'Hello world!';
s.startsWith('world', 6) // true 索引向前查
s.endsWith('Hello', 5) // true 索引向后查
s.includes('Hello', 6) // false 索引向前查
```

- repeat()

```js
'x'.repeat(3) // xxx
'x'.repeat(0) // ''
```


- padStart() 和 padEnd() 填充字符串

```javascript
let str = 'abc'
//将str填充为8位长度，使用 - 来进行填充，填充在字符串的左边
console.log(str.padStart(8, '-')) // -----abc
//将str填充为8位长度，使用 we 来填充，填充在字符串的右边
console.log(str.padEnd(8, 'we')) //abcwewew
```

- trimStart() 和 trimEnd()

```js
// 新增字符串 不改变原始字符串 所以const没问题
const s = '  abc  '
s.trim() // 'abc'
s.trimStart() // 'abc  '
s.trimEnd() // '  abc'
```

- replaceAll() 替换所有字符串

```js
'aabbcc'.replace('b', '_') // 'aa_bcc'

'aabbcc'.replaceAll('b', '_') // 'aa__cc'
```




## 4 数值新增方法

- Number.parseInt() 和 Number.parseFloat()

```js
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

// 二者完全一致 只是为了减少全局方法 逐步模块化
```

- Number.isInteger()

```js
// 判断数字是否为整数
Number.isInteger(25) // true
Number.isInteger(25.1) // false
```



## 5 新增函数写法

### 5.1 形参设置默认值

```javascript
function add(x = 3, y = 5) {
  console.log(x + y)
}

//在函数调用时，如果不传入实参，则使用默认值
add() //8
//如果传入实参，则按照实参进行运算
add(10, 20) //30
```

### 5.2 解构赋值和形参默认值配合

```javascript
function add({ x, y = 5 }) {
  //函数参数传入了一个对象
  console.log(x + y)
}
add({ x: 10 }) //15
add({ x: 20, y: 50 }) //70
```

### 5.3 rest 参数（可变参数）

```javascript
// rest参数: 在es6 使用 rest参数来代替 arguments
//同argument效果一致  可以判断传入的实参个数 并且以数组的形式输出
function getData(...args) {
  //...是关键 后面形参无所谓
  console.log(args) //会将传入的实参以数组的形式保存起来
}
```
add: Array.from() 可以把伪数组转为数组

### 5.4 函数的name属性

```js
function foo() {}
foo.name // "foo"
```


### 5.4 箭头函数

函数的另一种书写方式

```javascript
//声明一个箭头函数
let show = (name, word) => {
  console.log(`${name}: ${word}`)
}

show('盖伦', '一代版本一代神，代代版本玩盖伦')

let add = (x, y) => x + y //不建议用这种写法
console.log(add(1, 5))

let add = x => x + 10 //不建议用这种写法
console.log(add(1))
```

- 箭头函数的特殊点：
  - 箭头函数不能作为构造函数
  - 箭头函数没有 arguments，要使用可变参数可以使用 rest 方式
  - 箭头函数没有 this 对象，在箭头函数中的 this 指的函数外层的对象
  - 如果函数体只有一句并且设置了返回值，则不需要使用大括号，不需要 return
  - 如果函数中只有一个参数，则不需要写小括号

```javascript
//1. 箭头函数不是一个构造器，不能用来实例化
let person = () => {
  this.name
  this.age
}

var p = new person() // persion is not a constructor

//2. 箭头函数没有arguments
//要使用rest来接收可变参数
var show = (...arg) => {
  //console.log(arguments); //报错
  console.log(arg)
}
//3. 箭头函数中的this问题
document.getElementById('btn').onclick = function() {
  //this指的就是button按钮
  this.innerText = '谁点谁发财'
}

document.getElementById('btn').onclick = () => {
  //当使用箭头函数时，this对象就不是按钮对象而是 外层的对象, 此处就是 window 对象
  this.innerText = '谁点谁发财'
  console.log(this)
}

document.getElementById('btn').onclick = function() {
  let c = () => {
    this.innerText = '谁点谁发财'
    console.log(this)
  }
  c()
}
```

## 3.3 数组方法扩展

- includes：判断一个数组中是否包含另一个值

```javascript
let arr = ['abc', 20, 'bbb', 100, 200]
console.log(arr.includes('abc')) //true
```

- find： 返回满足条件的第一个值

```javascript
//  功能: 返回满足条件的第一个单元值
let arr = ['abc', 20, 'bbb', 100, 200]
let result = arr.find(function(item, index) {
  //item属性 index索引
  console.log(index + '--->' + item)
  return item > 50
})
console.log(result) //100
```

- findIndex： 返回满足条件的第一个值的索引



## 6 定义对象的简单方式

```javascript
//标准方式定义
const name = '张飞'
const age = 40
const country = '蜀'

const obj = {
  name: name,
  age: age,
  country: country
}
console.log(obj.name) //张飞

//当key的名字和value的变量名一致时，
//就只需要写一个即可
const obj1 = {
  name,
  age,
  country
}
console.log(obj1.name)
```

## 7 for in 和 for of 区别

- for...in es5

  > 遍历的是 key 名 数组拿到的是索引 对象拿到的是 key

- for...of es6

  > 遍历的结果是 value
  > for of 不能直接遍历对象 需要配合 Object.keys(obj)

```js
for (let key of Object.keys(obj)) {
  // 遍历出来的是
  console.log(key) // key 值
  console.log(obj[key]) // value值
}
```
