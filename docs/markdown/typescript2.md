# TypeScript

## 安装

- 全局工具

```shell
npm install -g typescript
```

- 编译

```shell
tsc hello.ts
```

## 代码检查

注: 一般不用手动配置 vue3初始化的时候是可以选的

### 安装ESLint

```shell
// 安装ESLint
npm install --save-dev eslint 
// 安装ts ESLint解析器
npm install --save-dev typescript @typescript-eslint/parser
// 安装ESLint的ts补充规则
npm install --save-dev @typescript-eslint/eslint-plugin
```

### 创建配置文件

项目根目录:   .eslintrc.js  此处定义的是eslint的规则

```js
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      	// off、warn 或 error
        // 禁止使用 var
        'no-var': "error",
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ]
    }
}
```

### vscdoe配置

.vscode/settings.json 此处能控制vscode的prettier

```json
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "numso.prettier-standard-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.fontSize": 14, // 编译器字体大小
  "diffEditor.ignoreTrimWhitespace": false,
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, // 让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
    },
    "prettier": {
      "semi": false, // 设置分号
      "singleQuote": true, // 双引号变成单引号
      "trailingComma": "none", // 数组 对象结尾的逗号
      "tabWidth": 2, // tab宽度
      "arrowParens": "avoid", // 箭头函数的括号
      "printWidth": 120, // 换行宽度
      "bracketSpacing": true, // 大括号内的首尾需要空格
    }
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.arrowParens": "avoid",
  "editor.defaultFormatter": "esbenp.prettier-vscode" // 默认格式化工具
  // "editor.formatOnSave": true, // 保存时格式化
}

```



## 基础

### 原始数据类型

```ts
// 1.布尔值
let isDone: boolean = false
// 2.数值
let decLiteral: number = 6
// 3.字符串
let myName: string = 'Tom'
// 4.空值
function alertName(): void {
  alert('My name is Tom')
}
```

### 任意值 any

### 类型推论

```ts
// 不指定类型时 ts会推论成string
let myFavoriteNumber = 'seven'
// 等于
let myFavoriteNumber: string = 'seven'
```

### 联合类型

> 表示取值可以有多种类型

```ts
// 访问时只可以访问string和number共有的属性 否则报错
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
function getLength(something: string | number): number {
  return something.length
}
// 若联合属性发生赋值 ts会根据赋值进行推论
```

### 对象的类型 - 接口

```ts
interface Person {
  name: string
  age: number
}

//  要求tom中必须有name age 不能多不能少 且类型一致
let tom: Person = {
  name: 'Tom',
  age: 25,
}
```

#### 可选属性

```ts
interface Person {
  name: string
  age?: number
}
```

#### 任意属性

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: any
}
// 表示可以有任意类型的值在对象中
let tom: Person = {
  name: 'Tom',
  title: 'book',
}
// 注意: 确定属性和可选属性的类型必须是任意类型的子集
```

#### 只读属性

```ts
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}
// 有了只读属性 首次赋值id时 必须要给 否则报错 给了后不能修改
```

### 数组的类型

#### any[] 类型加方括号表示法

```ts
// 定义了一个数组 其中元素必须为number 不允许其他类型在数组中 后续添加也不行(push)
let fibonacci: number[] = [1, 1, 2, 3, 5]
```

#### 数组泛型

> 泛型值: 定义函数或者接口或类的时候 不预先指定类型 使用的时候再给类型的一种特性

```ts
let fibonacci: Array<number> = [1, 1, 2, 3, 5]
```

#### 用接口表示数组

```ts
interface NumerArray {
  // 类似于对象 索引值: value
  [index: number]: number
}
let arr: NumerArray = [1, 2, 3]
console.log(arr)
```

#### 伪数组

```ts
// arguments是一个伪数组 定义的时候不能使用数组的方式 而应该用接口
function sum() {
  let args: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments
  console.log(args)
}
sum()

// 不用了解其中写法 ts给定义好了几种伪数组:
// IArguments, NodeList, HTMLCollection
function sum() {
  let args: IArguments = arguments
  console.log(args)
}
sum()
```

#### any 在数组中的应用

```ts
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]
```

### 函数的类型

#### 函数的声明

```ts
// 函数式声明
function test(a: number, b: string): string {
  return a + b
}
test(1, '2')
// 表达式声明
// 注意: ts中的=>代表指定类型为函数 箭头左侧为输入值 箭头右侧为输出值
const test2: (a: number, b: string) => string = function (
  a: number,
  b: string
): string {
  return a + b
}
// 通过接口定义函数
interface Fn {
  (a: number, b: string): string
}
let test: Fn = function (a: number, b: string): string {
  return a + b
}
test(1, '2')
```

#### 可选参数

```ts
// 可选参数要放在必选参数后面
function test(a: number, b: string, c?: string): string {
  return a + b + (c ? c : '')
}
test(1, '2', '3') // 123
test(1, '2') // 12
```

#### 参数默认值

```ts
function test(a: number, b: string = '2'): string {
  return a + b
}
test(1) // 12
```

#### 剩余参数

```ts
// b是一个数组 用数组方法定义即可
function test(a: number, ...b: any[]): void {
  b.forEach(item => {
    console.log('a', a)
    console.log('item', item)
  })
}
test(1, 2, 3, 4, 5)
```

### 类型断言

#### 值 as 类型

```ts
interface Cat {
  name: string
  run(): void
}
interface Fish {
  name: string
  swim(): void
}
function getName(animal: Cat | Fish) {
  return (animal as Cat).run()
}
const obj: Cat = {
  name: '大鱼',
  run: () => {
    console.log('我跑')
  },
}
console.log(getName(obj))
```

#### 将任何一个类型断言为 any

> any 相当于关闭了 ts 校验 能不用就不用

```ts
;(window as any).foo = 1
```

#### 将 any 断言为一个具体的类型

```ts
function getCacheData(key: string): any {
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()
```

#### 双重断言

```ts
// 注意: 双重断言很可能导致ts不报错 但js运行时报错
interface Cat {
    run(): void
  }
  interface Fish {
    swim(): void
  }
  function testCat(cat: Cat) {
    return cat as any as Fish
  }
  const fn = {
    run: (): void => {
      console.log('i am run')
    }
  }
  // 此处双重断言导致ts过编译 但js报错
  // js error: testCat(...).swim is not a function
  testCat(fn).swim()
  // 此处ts不过编译 但js正常
  // ts error: Property 'run' does not exist on type 'Fish'
  testCat(fn).run()
}
```

#### 类型断言 vs 类型声明

```ts
interface Animal {
  name: string
}
interface Cat {
  name: string
  run(): void
}

// 类型声明
const animal: Animal = {
  name: 'tom',
}
let tom: Cat = animal
tom.run() // Property 'run' is missing in type 'Animal' but required in type 'Cat'.


// 类型断言
const animal: Animal = {
  name: 'tom',
}
let tom = animal as Cat
tom.run() // work

// 区别:
animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行
类型声明是比类型断言更加严格 使用上优先使用类型声明 比as更优雅

```

#### 类型断言 vs 泛型

```ts
// 类型断言
function getCacheData(key: string): any {
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()

// 泛型
function getCacheData<T>(key: string): T {
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData<Cat>('tom')
tom.run() // ts过编译 js报错 tom上没有run方法
```

### 声明文件

```ts
// 此处声明不会编译成代码 仅做ts类型检测使用 d.ts编译后 所有的ts文件都能识别出来jQuery的类型
// src/jQuery.d.ts
declare var jQuery: (selector: string) => any
// src/index.ts
jQuery('#foo')
```

#### 第三方声明文件

- 安装

```shell
npm install @types/jquery --save-dev
```

- 查找
  <a href="https://www.typescriptlang.org/dt/search?search=">第三方声明文件</a>

#### 全局变量

> 全局变量是最简单的一种场景，之前举的例子就是通过 script 标签引入 jQuery，注入全局变量 $ 和 jQuery。

```shell
├── src
|  ├── index.ts
|  └── jQuery.d.ts
└── tsconfig.json
```

```ts
// jQuery.d.ts
declare let jQuery: (selector: string) => any
```

全局变量声明的方法:

- declare var 声明全局变量

```ts
declare let jQuery: (selector: string) => any
declare const jQuery: (selector: string) => any
declare var jQuery: (selector: string) => any
```

- declare function 声明全局方法

```ts
declare function jQuery(selector: string): any
```

- declare class 声明全局类

```ts
declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
}

let cat = new Animal('Tom')
```

- declare enum 声明全局枚举类型

```ts
<a href="https://ts.xcatliu.com/basics/declaration-files.html#declare-enum">
  jump
</a>
```

- declare namespace 声明（含有子属性的）全局对象
  略

- interface 和 type 声明全局类型
  略

#### 自定义声明文件--此配置未验证 可能无效

通常 npm 导入的包会带有 ts 文件 若无 可以自定义 type 的类型

- 目录结构

  ```shell
  /path/to/project
  ├── src
  |  └── index.ts
  ├── types
  |  └── foo
  |     └── index.d.ts
  └── tsconfig.json
  ```

- tsconfig.json 内容:

  ```json
  {
    "compilerOptions": {
      "module": "commonjs",
      "baseUrl": "./",
      "paths": {
        "*": ["types/*"]
      }
    }
  }
  ```

如此配置之后，通过 `import` 导入 `foo` 的时候，也会去 `types` 目录下寻找对应的模块的声明文件了。

### 内置对象

#### ECMAScript 的内置对象

```ts
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error occurred')
let d: Date = new Date()
let r: RegExp = /[a-z]/
```

<a href="[Standard built-in objects - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)">更多查看 MDN</a>

#### DOM 和 BOM 的内置对象

```ts
// Document、HTMLElement、Event、NodeList
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function (e: MouseEvent) {
  // Do something
})
```

## 进阶

### 类型别名

```ts
type Name = string // 声明了Name为string类型  相当于给string类型起了一个Name的别名
type NameResolver = () => string // 声明了NAmeResolver为函数类型 入参不限制 返回值要为string   相当于给 ()=>string 起了一个别名
type NameOrResolver = Name | NameResolver // 声明了NameOrResolver可以为Name或者NameResolver

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

getName('zs')
getName('')
```

类型别名常用于联合类型。 NameOrResolver

### 字符串字面量类型

```ts
type EventNames = 'click' | 'scroll' | 'mousemove' // 声明了EventNames 为 xxx 这三种类型的字符串 若传入的字符串不是 则报错
// 注意: 此处不一定要字符串 任何基础类型都可以 type Nums = 1 | 2 | 3
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll') // 没问题
handleEvent(document.getElementById('world'), 'dblclick') // 报错，event 不能为 'dblclick'
```

### 元组

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

```ts
let tom: [string, number] = ['Tom', 25]
```

越界的元素

```ts
let tom: [string, number]
tom = ['Tom', 25]
tom.push('male') // push的类型只可以室string或numbner
tom.push(true) // Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

### 枚举

```ts
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
// 注意: 枚举和其他声明的ts类型不同  会被编译出来
var Days
;(function (Days) {
  Days[(Days['Sun'] = 0)] = 'Sun'
  Days[(Days['Mon'] = 1)] = 'Mon'
  Days[(Days['Tue'] = 2)] = 'Tue'
  Days[(Days['Wed'] = 3)] = 'Wed'
  Days[(Days['Thu'] = 4)] = 'Thu'
  Days[(Days['Fri'] = 5)] = 'Fri'
  Days[(Days['Sat'] = 6)] = 'Sat'
})(Days || (Days = {}))
// 上述代码运行结果为:
const Days = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
  Fri: 5,
  Mon: 1,
  Sat: 6,
  Sun: 0,
  Thu: 4,
  Tue: 2,
  Wed: 3,
}
// 类似于对象+数组形式 可以通过下标或者对象的.方法访问
```

#### 手动赋值

```ts
enum Days {
  Sun = 3,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
} // 未手动赋值的枚举项会接着上一个枚举项递增。 Tue=2 Wed=3 The=4 ...
// 此处容易出现 后续属性覆盖自定义属性的情况 如Sun=3 后续递增 Wed又等于3 默认递增步长为1 若Mon=1.2 则后续 2.2 3.2
```

#### 常数项和计算所得项

```ts
enum Color {
  Red,
  Green,
  Blue = 'blue'.length,
} // 注意: 计算所得项最好放在最后 否则后续未给值的项会无法计算初始值而报错
```

#### 常数枚举

常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

```ts
const enum Directions {
  Up,
  Down,
  Left,
  Right,
} // 使用const声明了枚举
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
]
// 上例的编译结果是：
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */]
```

### 类

#### es6 中的类

##### 类的继承

```ts
class Animal {
  public name // ts要求用public声明属性 否则报错
  constructor(name: string) {
    // 或者直接可写作 constructor(public readonly name: string) // 此处多添加了个只读属性
    this.name = name
  }
  sayHi() {
    return `My name is ${this.name}`
  }
}

let a = new Animal('Jack')
console.log(a.sayHi()) // My name is Jack

// 类的继承
class Cat extends Animal {
  public score
  constructor(name: string, score: number) {
    super(name) // super表示调用父类 继承父类的属性
    this.score = score
  }
  sayHi() {
    console.log('super', super.sayHi) // 在子类中可以通过super调用父类的方法
    return `hello ${super.sayHi()}`
  }
}

let cat = new Cat('mow', 18)
console.log('cat', cat)
cat.sayHi()
```

##### set get

```ts
class Animal {
  constructor(name) {
    this.name = name
  }
  get name() {
    return 'Jack'
  }
  set name(value) {
    console.log('setter: ' + value)
  }
}

let a = new Animal('Kitty') // setter: Kitty
a.name = 'Tom' // setter: Tom   // a点name时 相当于对name进行赋值 会触发set
console.log(a.name) // Jack
```

##### static 静态方法

static 声明的方法不需要通过 new 实例 直接可以通过 class 名加方法名字直接获取

```ts
class Animal {
  static isAnimal(a) {
    return a instanceof Animal
  }
}

let a = new Animal('Jack')
Animal.isAnimal(a) // true
a.isAnimal(a) // TypeError: a.isAnimal is not a function
```

#### es7 中的类

##### 实例属性

```ts
class Animal {
  name = 'Jack' // 相当于属性并不拘泥于在constructor中写 直接可以定义在类里面
  constructor() {}
  sayHi() {
    console.log(`hello my name is ${this.name}`)
  }
}

let a = new Animal()
console.log(a.name) // Jack
a.sayHi() // hello my name is Jack
```

##### 静态属性

```ts
class Animal {
  static num = 42

  constructor() {
    // ...
  }
}

console.log(Animal.num) // 42
```

#### ts 中的类

- public : 修饰的属性或方法是公有的，可以在任何地方被访问到，类里面声明的属性和方法默认就是 public 的

- private: 修饰的属性或方法是私有的，不能在声明它的类的外部访问

  ```ts
  class Animal {
    private name
    public constructor(name: string) {
      this.name = name
    }
  }

  let a = new Animal('Jack')
  console.log(a.name) // 报错 private在类的外面不能访问
  a.name = 'Tom' // 报错 private在类的外面不能访问

  class Cat extends Animal {
    constructor(name) {
      super(name) // private修饰的方法之类继承时也不能访问
      console.log(this.name)
    }
  }

  // index.ts(11,17): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
  ```

- protected: 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

```ts
class Animal {
  protected name
  public constructor(name) {
    this.name = name
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name) // protected修饰子类能正常访问
    console.log(this.name)
  }
}
```

### 类与接口

```ts
interface Alarm {
  // 声明了一个Alarm接口
  alert(): void
}

class Door {} // 声明了个Door类

class SecurityDoor extends Door implements Alarm {
  // SecurityDoor继承了Door类 并且加入了Alarm接口 就要求SecurityDoor类中必须有Alarm接口中要求的alert方法
  alert() {
    console.log('SecurityDoor alert')
  }
}

class Car implements Alarm {
  // Car加入类Alarm接口
  alert() {
    console.log('Car alert')
  }
}
```

#### 一个类实现多个接口

```ts
interface Alarm {
  alert(): void
}

interface Light {
  lightOn(): void
  lightOff(): void
}

class Car implements Alarm, Light {
  // 实现了Alarm, Light接口 要求Car类中必须有Alarm, Light接口中的方法
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}
```

#### 接口继承接口

```ts
interface Alarm {
  alert(): void
}

interface LightableAlarm extends Alarm {
  lightOn(): void
  lightOff(): void
}
```

### 泛型

```ts
// 定义了一个泛型的函数 形参1为number类型 形参2为泛型(调用时才能确定的类型) 返回值为泛型的数组
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [] // T[] 泛型的数组 等于Array<T>写法
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

console.log(createArray<string>(3, '3')) // 传入了string类型的参数 形参2确定为string 返回值确定为string类型的数组
console.log(createArray > (3, '3')) // 此处string也可以不写 ts能根据形参2推断出来
```

#### 多个类型参数

```ts
function swap<T, U>(arg: [T, U]): [U, T] {
  // 定义了一个泛型函数 返回一个泛型数组 两个参数都是泛型不确定的 调用时才能确定
  return [arg[1], arg[0]]
}

swap([7, 'seven']) // ['seven', 7]
```

#### 泛型约束

```ts
function loggingIdentity<T>(arg: T): T {
  // 因为不确定传入的泛型T中是否存lengh方法 所以报错
  console.log(arg.length)
  return arg
}

// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.

// 此处要对泛型进行约束
interface Lengthwise {
  // 声明了一个必须存在length的接口
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // 规定泛型必须要存在length
  console.log(arg.length)
  return arg
}

loggingIdentity(7) // 入参不存在length 报错
// index.ts(10,17): error TS2345: Argument of type '7' is not assignable to parameter of type 'Lengthwise'.
```

#### 泛型接口

此处较为复杂 暂时略过

<a href="https://ts.xcatliu.com/advanced/generics.html">[泛型 · TypeScript 入门教程 (xcatliu.com)]</a>

### 声明合并

#### 函数合并

```ts
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
```

#### 接口合并

```ts
interface Alarm {
  price: number
}
interface Alarm {
  weight: number
}
// 相当于：
interface Alarm {
  price: number
  weight: number
}
```
