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
let s = 'Hello world!'
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

### 5.4 函数的 name 属性

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

## 6 数组方法扩展

- Array.from(): 类数组对象转换为数组

```js
// 类数组对象转换为数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = Array.prototype.slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// 也可将字符串转换为数组
Array.from('hello') // ['h', 'e', 'l', 'l', 'o']
[...'hello'] // ['h', 'e', 'l', 'l', 'o']

// 参数2 相当于map
Array.from(arrayLike, x => x * x)

// 参数3 如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this
Array.from(arrayLike, function (item) { // 注意这里不能使用箭头函数 会导致传入的this指向不准
    console.log(item)
    console.log(this)
  }, arrayLike)
```

- Array.of(): 将一组值转换为数组

```js
Array.of() // []
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

// 注意是为了弥补Array()的差异 推荐使用Array.of()
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```

- includes：判断一个数组中是否包含另一个值

```javascript
let arr = ['abc', 20, 'bbb', 100, 200]
console.log(arr.includes('abc')) //true
```

- find： 返回满足条件的第一个值

```javascript
//  功能: 返回满足条件的第一个单元值 若都不符合 则返回undefined
let arr = ['abc', 20, 'bbb', 100, 200]
let result = arr.find(x => x > 50)
console.log(result) //100
```

- findIndex： 返回满足条件的第一个值的索引 若都不符合 则返回-1

- fill() 方法使用给定值，填充一个数组

```js
;['a', 'b', 'c'].fill(7) // [7, 7, 7]

new Array(3).fill(7) // [7, 7, 7]
```

- entries() keys() values()

```js
// 可以用for...of循环进行遍历
// 唯一的区别是keys()是对键名的遍历
// values()是对键值的遍历
// entries()是对键值对的遍历
for (let index of ['a', 'b'].keys()) {
  console.log(index)
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem)
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem)
}
// 0 "a"
// 1 "b"
```

- flat() flatMap()

```js
// flat()用于将嵌套的数组“拉平”
;[1, 2, [3, [4]]]
  .flat(3)
  [(1, [2, [3]])].flat(Infinity)

  [
    // flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()）
    // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
    (2, 3, 4)
  ].flatMap(x => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

## 7 对象的扩展

### 7.1 对象写法扩展

- 使用表达式作为 key 名

```js
// 变量/表达式 定义key名
let propKey = 'foo'
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
}
// 表达式定义方法名
let obj = {
  ['h' + 'ello']() {
    return 'hi'
  }
}
obj.hello() // hi
```

- 合并两个对象

```js
let ab = { ...a, ...b }
let ab = Object.assgin({}, a, b)
```

### 7.2 对象新增方法

- Object.is()

```js
// 判断两个值是否相等
Object.is('foo', 'foo') + // true
  // 为了弥补 == 和 ===的不足
  0 ===
  -0 //true
NaN === NaN // false
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

- Object.keys() Object.values()

```js
// Object.keys() 获取对象的key值 以数组形式返回 多用于遍历
// Object.values() 获取对象的values值 以数组形式返回 多用于遍历
let { keys, values, entries } = Object
let obj = { a: 1, b: 2, c: 3 }

for (let key of keys(obj)) {
  console.log(key) // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value) // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]) // ['a', 1], ['b', 2], ['c', 3]
}
```

- Object.assign()

```js
// 一 基础:

// 1.注意: 浅拷贝 后面会替换前面的同名属性
Object.assign(target, source1, source2)
// 2.也可以用来合并数组 但是会把数组视为对象
// 实际上是合并了{0:1,1:2,2:3} {0:4,1:5}两个对象
Object.assign([1, 2, 3], [4, 5]) // [4,5,3]
// 3.取值函数的处理
const source = {
  get foo() {
    return 1
  }
}
// source中的get foo函数 会被执行
Object.assign({}, source) // { foo: 1 }

// 二 常见用法:
// 1.给对象添加属性
class Foo {
  constructor(x, y) {
    Object.assign(this, { x, y })
    // this.x = x
    // this.y = y
  }
}
// 2.给对象添加方法
Object.assign(obj, {
  sayHi() {
    console.log('hi')
  },
  sayAge() {
    console.log('i am 18 years old')
  }
})
// 3.合并多个对象
const merge = (target, ...sources) => Object.assign(target, ...sources)
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

## 8 运算符扩展

- 链判断运算符

```js
// 判断?左侧对象是否为null或者undefined
const firstName = message?.body?.user?.firstName || 'default'
// 函数调用: 若obj下存在foo 则调用
obj.foo?.()
```

- null 判断运算符

```js
// 判断??前的值是否为null或者undefined
const animationDuration = response.settings.animationDuration ?? 300
// 也可以配合?使用: response.settings是null或undefined 或者response.settings.animationDuration是null或undefined 返回300
const animationDuration = response.settings?.animationDuration ?? 300
```

- 逻辑赋值运算符

```js
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)

// 与赋值运算符
x &&= y
// 等同于
x && (x = y)

// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)

// 实际场景:
user.id ||= 1
// 等同于
user.id = user.id || 1
```

## 9 Symbol

> es5 中的对象属性名都是字符串,导致属性名字容易冲突.es6 中 Symbol 的引入可以避免该问题

> js 中的基本数据类型: null undefined string boolaen number object Symbol

```js
// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
let s1 = Symbol('foo')
let s2 = Symbol('bar')
s1 // Symbol(foo)
s2 // Symbol(bar)
s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"

// 若在Symbol里传入一个对象 则Symbol会调用该对象的toString()方法将对象转为字符串 然后生成Symbol
const obj = {
  toString() {
    return 'abc'
  }
}
const sym = Symbol(obj)
sym // Symbol(abc)

// Symbol只是当前值的描述 两个Symbol返回值是不相等的
let s1 = Symbol()
let s2 = Symbol()
s1 === s2 // false
let a1 = Symbol('foo')
let a2 = Symbol('foo')
a1 === a2 // false

// Symbol不能参与运算
let sym = Symbol('My symbol')
'your symbol is ' +
  sym // TypeError: can't convert symbol to string
  `your symbol is ${sym}`
// TypeError: can't convert symbol to string
// 但是可以通过显式转换为字符串
'your symbol is ' + String(sym) // your symbol is My symbol
// 也可转换为布尔值
Boolean(sym) // true
// 但是不能转换为Number
Number(sym) // TypeError
```

### 9.1 获取 Symbol 的描述

```js
const sym = Symbol('foo')
sym.description // foo
```

### 9.2 Symbol 作为属性名

```js
let sym = Symbol()
// 设置属性
const obj = {
  [sym]: 'hello'
}
// 读取
obj[sym] // hello

// 设置函数
let s = Symbol()
let obj = {
  [s](arg) {
    console.log(123)
  }
}
obj[s]()
```

### 9.3 替换魔术字符串

```js
const shapeType = {
  // triangle: 'Triangle' // 此处的Triangle就是魔术字符串强耦合 不利于维护
  triangle: Symbol() // 替换为Symbol
}

function getArea(shape, options) {
  let area = 0
  switch (shape) {
    case shapeType.triangle:
      area = 0.5 * options.width * options.height
      break
  }
  return area
}

getArea(shapeType.triangle, { width: 100, height: 100 })
```

### 9.4 属性名的遍历

```js
// for...in、for...of
// Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()
// 这些会忽略Symbol属性 只能通过Object.getOwnPropertySymbols()访问
const a = Symbol('a')
const b = Symbol('b')
const obj = {
  [a]: 'hello',
  [b]: 'world'
}
console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(a), Symbol(b)]

// 也可以通过新的api Reflect.ownKeys获取Symbol的key值
Reflect.ownKeys(obj) // [Symbol(a), Symbol(b)]
```

### 9.5 Symbol.for() Symbol.keyFor()

- Symbol.for()

> Symbol 原理:Symbol.for()与 Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的 key 是否已经存在，如果不存在才会新建一个值。比如，如果你调用 Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用 Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。

```js
// Symbol()创建的值是不重复的 Symbol.for可创建重复的值
Symbol.for('bar') === Symbol.for('bar') // true

Symbol('bar') === Symbol('bar') // false
```

- Symbol.keyFor()

```js
// Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key
let s1 = Symbol.for('foo')
Symbol.keyFor(s1) // "foo"

let s2 = Symbol('foo') // Symbol是不登记的 所以返回undefined
Symbol.keyFor(s2) // undefined

// 注意: Symbol.keyFor登记是全局的
function foo() {
  return Symbol.for('bar')
}
const x = foo()
const y = Symbol.for('bar')
console.log(x === y) // true

// 可用此特性进行iframe传值
iframe = document.createElement('iframe')
iframe.src = String(window.location)
document.body.appendChild(iframe)
iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo') // true
```

## 10 Set 和 Map 数据结构

### 10.1 Set

> Set 是 es6 新增的数据结构 类似与数组 但成员唯一 不会重复 Set 本身是一个构造函数 可以生成 Set 数据结构

```js
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i); // 2 3 5 4
}
// 通过set进行数组去重
const arr = [...new Set([1, 2, 3, 4, 5])]
function dedupe(array) {
  // Array.from可以讲Set数据类型转换为Array
  return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]) // [1, 2, 3]
// 通过set进行字符串去重
[...new Set('ababbc')].join('') // join:数组转为字符串
```

#### 10.1.1 Set 实例的属性和方法

- 属性:

  - Set.prototype.constructor：构造函数，默认就是 Set 函数。
  - Set.prototype.size：返回 Set 实例的成员总数。

- 方法:

  - Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
  - Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  - Set.prototype.has(value)：返回一个布尔值，表示该值是否为 Set 的成员。
  - Set.prototype.clear()：清除所有成员，没有返回值。

  - Set.prototype.keys()：返回键名的遍历器
  - Set.prototype.values()：返回键值的遍历器
    > keys 和 values 方法完全一致 返回的都是 Iterator 对象
  - Set.prototype.entries()：返回键值对的遍历器

  ```js
  let set = new Set(['red', 'green', 'blue'])
  for (let item of set.entries()) {
    console.log(item)
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]
  }
  ```

  - Set.prototype.forEach()：使用回调函数遍历每个成员

  ```js
  // forEach for of都可以
  let set = new Set(['red', 'green', 'blue'])

  for (let x of set) {
    console.log(x)
    // red
    // green
    // blue
  }
  set.forEach(i => {
    console.log(i)
    // red
    // green
    // blue
  })
  // 也可间接使用数组的方法
  let set = new Set([1, 2, 3])
  set = new Set([...set].map(x => x * 2))
  // 返回Set结构：{2, 4, 6}
  let set = new Set([1, 2, 3, 4, 5])
  set = new Set([...set].filter(x => x % 2 == 0))

  // 并集交集差集的实现
  let a = new Set([1, 2, 3])
  let b = new Set([4, 3, 2])

  // 并集
  let union = new Set([...a, ...b])
  // Set {1, 2, 3, 4}

  // 交集
  let intersect = new Set([...a].filter(x => b.has(x)))
  // set {2, 3}

  // （a 相对于 b 的）差集
  let difference = new Set([...a].filter(x => !b.has(x)))
  // Set {1}
  ```

### 10.2 WeakSet

> WackSet 接口和 Set 类似 也是不重复值的集合 但是它储存的只能是对象 WeakSet 中的对象都是弱类型引用 其他对象不再对其引用时 会被 js 垃圾回收机制回收 其余略 详情: <a target="_blank" href="https://es6.ruanyifeng.com/#docs/set-map#WeakSet">WeakSet</a>

### 10.3 Map

> 对象数据结构中 key 值只能是字符串(字符串-值) Map 可以任意值当作 key 值(值-值)

```js
const m = new Map()
const o = { p: 'Hello World' }
m.set(o, 'content')
m.get(o) // "content"
m.has(o) // true
m.delete(o) // true
m.has(o) // false
m.size // 1
// 实际应用
function foo(type) {
  const val = [
    ['小红', '第一'], // key, value
    ['小明', '第二'],
    ['小绿', '第三']
  ]
  const T = new Map(val)
  return T.get(type) ?? '不知道'
}
console.log(foo('小红'))
```

#### 10.3.1 Map 实例的属性和方法

- 属性:

  - size

  - set 返回的是 Map 对象 可采用链式写法

  ```js
  const m = new Map()
  m.set('a', 1).set('b', 2)
  ```

  - get

  - has

  - delete

  - clear 清除 Map 中的所有成员 无返回值

- 方法:

  - Map.prototype.keys()：返回键名的遍历器。
  - Map.prototype.values()：返回键值的遍历器。
  - Map.prototype.entries()：返回所有成员的遍历器。
  - Map.prototype.forEach()：遍历 Map 的所有成员

> map 转为数组 使用数组方法后可以再通过 new Map 转换回来

```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
[...map.keys()] // [1, 2, 3]
[...map.values()] // ['one', 'two', 'three']
[...map.entries()] // [[1,'one'], [2, 'two'], [3, 'three']]
[...map] // [[1,'one'], [2, 'two'], [3, 'three']]

// 对象转化为map
let obj = { a: 1, b: 2 }
obj = Object.entries(obj) // [[a,1],[b,2]]
const map = new Map(obj)
```

### 10.4 WeakMap

> WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。 但是 WeakMap 只接受对象作为键名 详情: <a href="https://es6.ruanyifeng.com/#docs/set-map#Map" target="_blank">WeakMap</a>

## 11 Porxy

> 详情: <a href="https://es6.ruanyifeng.com/#docs/proxy" target="_blank">Porxy</a>

## 12 Reflect

> 详情 <a href="https://es6.ruanyifeng.com/#docs/reflect" target="_blank">Reflect</a>

## 13 Promise

- Promise.any():有一个子实例成功就算成功，全部子实例失败才算失败
- Promise.all():全部子实例的成功才算成功，一个子实例失败就算失败
- Promise.race():赛跑机制，看最先的 promise 子实例是成功还是失败
- Promise.allsettled():所有实例执行完成，无论成功或失败
- Promise.resolve(): 参数可以接受数值 promise 实例 thenable 对象

```js
const thenable = {
  then: function(resolve, reject) {
    resolve(111)
  }
}
Promise.resolve(thenable)
```

- Promise.reject()

## 14 Interator 和 for of

原生具备 Iterator 接口的数据结构如下。

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

```js
// 手写实现Interator接口
const it = makeIterator(['a', 'b'])
// it.next() // { value: "a", done: false }
// it.next() // { value: "b", done: false }
// it.next() // { value: undefined, done: true }
function makeIterator(arr) {
  let index = 0
  return {
    next() {
      return index < arr.length
        ? {
            value: arr[index++],
            done: false
          }
        : {
            value: arr[index],
            done: true
          }
    }
  }
}
```

```js
// 自带的interator使用
let arr = ['a', 'b']
let iter = arr[Symbol.iterator]()

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: undefined, done: true }
```

```js
// 类方法实现
class Range {
  constructor(start, stop) {
    Object.assign(this, { start, stop })
  }
  // 关键: for of会自动前往原型链上寻找该方法
  [Symbol.iterator]() {
    return this
  }
  next() {
    // 注意: 需要在值++前接收一下value值
    const value = this.start
    if (this.start < this.stop) {
      this.start++
      return { value: value, done: false }
    }
    x
    return { value: value, done: true }
  }
}
function range(start, stop) {
  return new Range(start, stop)
}
for (let value of range(0, 3)) {
  console.log(value)
}
```

```js
// 也可以直接借用Array原型上的Symbol.iterator

```
