# React

> vue 特点

1. 组件化
2. 双向数据绑定 v-model
3. MVVM(Model-View-ViewModel)->**对 MVC 设计模式的优化**
4. **渐进式**->开发项目时->随着项目的推荐->**逐渐向项目中加内容**
5. 插值表达式{{data中的数据名}}和指令系统 v-if 等
6. 响应式数据 data

> react(对比 Vue 进行学习)

1. 组件化
2. 单向数据流(没有双向的现象)
3. 声明(相当于声明一个变量)式->在开发过程中->根据需要定制组件(react 组件有两种不同的类型)
4. 插值表达式{}
5. 响应式数据(并不是所有的数据都是响应式)
6. 跨平台开发->一次代码,多端运行(混合 app->react-native->RN->react)

## 1 react初使用

helloworld.js

```js
/* 
  react将数据渲染到页面上
  1 引入react相关库文件 2个
  2 引入babel文件
  3 html中写容器标签
  4 编写js代码（实际上是jsx代码）
  5 在页面上引入自己写的js文件 注意：要在容器下面引入
  6 配置babel 修改script的type值
  7 在服务器环境执行index.html

 **/

const ele = <p>我是p的内容</p>

ReactDOM.render(ele, document.getElementById('root'))

```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <!-- 引入react 注意：这两个文件有先后顺序-->
  <script src="./lib/react.development.js"></script>
  <script src="./lib/react-dom.development.js"></script>
  <!-- babel用来编译react代码 -->
  <script src="./lib/babel.min.js"></script>
</head>
<body>
  <!-- 容器 -->
  <div id="root"></div>
   <!-- babel解析需要配置type -->
  <script type="text/babel" src="./1-helloword.js"></script>
</body>
</html>
```





## 2 jsx-插值

JSX->一门对 js 进行扩展的小众**语言**->JSX 和 react 没有任何直接关系->**可以在 react**开发时使用 jsx 语言->**也可以在 vue**中使用 jsx 创建元素
js文件

```js
// 插值写法
const name = '小米'
const age = 10
let ele = <div>我叫{name}</div>
// 可拼接字符串
ele = <div>{name + '小周'}</div>
// 可运算
ele = <div>{age + 10}</div>
// 可以进行标签包裹(写标签时外层必须写小括号)和vue的template标相似，只可以写一个根元素
ele = (
  <div>
    <p>标题----{name}</p>
    <p>内容</p>
  </div>
)

// 方法调用
function creatEle() {
  return (
    <div>
      <p>我是函数的内容</p>
    </div>
  )
}

// 渲染
// ReactDOM.render(ele, document.getElementById('root'))
// 此处creatEle括号必须写
ReactDOM.render(creatEle(), document.getElementById('root'))

```

index.html

```html
<script type="text/babel" src="./2-jsx-插值表达式-元素渲染-方法调用.js"></script>
```

## 3 jsx-条件渲染和列表渲染

js文件

```js
// 条件渲染:就是在插值表达式里写三元表达式
const age = 18
let ele = <div>{age >= 18 ? '成年' : '未成年'}</div>

// 列表渲染-遍历数组
const data = ['小米', '小明', '小丽']
let mydata = data.map((item, index) => {
  // 注意此处key的写法 参考vue:提高渲染速度,若其中一个元素数据发生变化了,有key时 只有其中一个发生变化了 只需变化一个即可 若无key 则全需要变化
  return <li key={index}>{item}</li>
})
console.log(mydata)

// 列表渲染-遍历对象
const obj = { name: 'zs', age: '18', gender: 'ny' }
var arr = []
for (let key in obj) {
  // obj[key] for in遍历对象的写法
  // 注意此处key的问题 key里是（name age gender）不是数字，但是也能防止报错
  arr.push(<li key={key}>{obj[key]}</li>)
  console.log(key);
}
ele = (
  <div>
    {/* 不论遍历的对象是数组还是对象，最后放入的只能是数组 */}
    <ul>{mydata}</ul>
    <ul>{arr}</ul>
  </div>
)
ReactDOM.render(ele, document.getElementById('root'))
```

index.html

``` html
<script type="text/babel" src="./3-条件渲染和列表渲染.js"></script>
```

## 4 使用原生React语法

js文件:PS原生语法很麻烦 了解即可

```js
// 这是jsx语法
// const ele = <div>ele</div>

// 原生语法:
// React.creatElement方法：
// 参数1：创建元素的类型   参数2：该元素的属性值{名字:属性} 参数3：该元素的内容 返回值是创建完毕的内容
const li1 = React.createElement('li', {key:0}, 1)
const li2 = React.createElement('li', {key:1}, 2)
const li3 = React.createElement('li', {key:2}, 3)

const arr = [li1,li2,li3]

const ele = React.createElement('ul', null, arr)
ReactDOM.render(ele, document.getElementById('root'))
```

## 5 函数组件和类组件

> vue 的组件特点

1. 体现封装思想
2. 封装 html+css+js
3. 可以复用(重复利用)
4. 减少代码->提高开发效率
5. 一个组件就是一个特殊的 Vue 实例->new Vue({el/data/等})
   1. 组件中可以使用 Vue 实例的选项(除了 el)
   2. 组件有自己的选项,比如 tempalte
   3. 先注册组件 然后使用
6. 分类:全局和局部(本地)
7. 写法:1 注册 2 封装内容 3 使用

```js
// 1. Vue.component(组件名,组件选项所在对象)
// 2. 实现组件选项所在对象的内容(template/data/methods等)
// 3. 在标签的位置通过组件名字使用组件
```

> react 组件特点

1. 体现封装
2. 重复利用
3. **封装视图(使用 jsx 编写标签)**
4. 减少代码->提高开发效率
5. **两类:根据写法分成了两个组件**
   1. 函数组件
   2. 类组件
6. 名字+内容+使用

> 注意:react 组件有两类:函数组件 类组件!!!
### 5.1 函数组件

```js
// React组件有两类：函数组件和类组件

// 函数组件

// 一个函数就是一个组件 组件里必须要有return return出来的是一个react元素
function App() {
  return <div>App组件的内容</div>
}
// 函数名必须大写 区别于其他函数
function Page() {
  return (
    <div>
      <h3>我是page组件的内容</h3>
      {/* 函数的嵌套 */}
      <App />
    </div>
  )
}
// 此处Page的名字必须写成单标签 react空的双标签都要写成单标签
ReactDOM.render(<Page />, document.getElementById('root'))
```

###  5.2 类组件

函数组件中没有响应式数据 不能实现数据变化视图层也变化，所以要引入类组件

#### 5.21 ES6 class构造函数

```js
// es6 使用class方法构造函数:可以取代之前麻烦的构造函数
class Person {
  // 属性
  constructor(name, age) {
    this.name = name
    this.aget = age
  }
  // 方法
  sayHi() {
    console.log('hello')
  }
}
const per = new Person('小明', '18')//new的时候和之前一样
console.log(per)
per.sayHi()
```

index.html

```html
<script src="./8-es6基础语法-类语法.js"></script>
```

#### 5.22 ES6 class继承

```js
class Person {
    construtor(name,age) {
		this.name=name
        this.age=age
    }
    sayHi(){
        console.log('我叫' + this.name)
    }
}
const per = new Person('小王',18)
per.sayHi()

// class 子类名 extends 父类名 {}
class Student extends Person {
    construtor(name,age,score) {
        // 正常情况下应该写this.name=name... 此处用了系统自带的surper方法来继承
        // super有很多作用，此处是调用父类的construtor方法
		name age都是来源于父类 super(props)同理 继承于React.Component父类中的props
        super(name,age)
        this.score=score
    }
}
const stu = new Student('小米',18,100)
```

####  5.23类组件写法

```js
// App是子类  React.conponent是父类 react提供好的
// React.Component注意大小写
class App extends React.Component {
  // render方法是子类组件从父类组件继承来的 render必须return出react元素
  render() {
    return (
      <div>
        App-------
        <Child />
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        Child-------
        <Header />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return <div>header-------</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 5.3 函数组件和类组件同时使用

函数组件又称无状态组件=>不能处理响应式数据

类组件又称有状态组件=>可处理响应式数据

```js
// 没有响应式数据的时候可以写函数组件 代码量比类组件少
const Header = props => {
  const { title } = props
  // 注意此处是插值表达式
  return <div>{title}</div>
}
const Banner = props => {
  const { title } = props
  return <div>{title}</div>
}
const Footer = props => {
  const { title } = props
  return <div>{title}</div>
}

// 一个react项目的跟组件通常是类组件
// 函数组件中没有construtor state
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['标题1', '标题2', '标题3']
    }
  }
  render() {
	const data = [...this.state.data]
    // 当使用setState修改state数据后, 组件的render方法会重新执行一遍
    const changeTitle = () => {
      data[0] = '标题1111'
      this.setState({data})
    }
    return (
      <div>
        <h3>App</h3>
        <button onClick={changeTitle}>按钮</button>
        <Header title={this.state.data[0]} />
        <Banner title={this.state.data[1]} />
        <Footer title={this.state.data[2]} />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
```



## 6 组件传值

### 6.1 函数组件-父传子

```js
const Child = props => {
  // 子组件用 形参 接收父组件传来的数据
  //   函数组件的形参默认是{}  作用是来接收父组件传过来的值
  console.log(props) // {message: 'abc',age: 10}
  // 结构赋值的过程
  const { message } = props
  return <div>我是child----{message}</div>
}
const Father = () => {
  // 1:父组件声明
  let msg = 'abc'
  return (
    <div>
      我是father
      {/* 2：父组件传值给子组件 数据写在此处 */}
      <Child message={msg} age={10} />
    </div>
  )
}

ReactDOM.render(<Father />, document.getElementById('root'))
```

### 6.2 类组件-父传子

```js
class App extends React.Component {
  render() {
    // 1:在父组件中声明数据
    let score = 100
    return (
      <div>
        App-------
        {/* 2：在父组件标签上写要传的值 */}
        <Child score={score} age={18} />
      </div>
    )
  }
}

class Child extends React.Component {
  // 3:在子组件中接收值
  // props是React.Component中自带的 Child子组件可以直接继承后使用
  constructor(props) { // constructor中若没有任何逻辑 只有super 则整个constructor可以省略
    super(props)
  }
  render() {
    console.log(this.props)
    // 解构赋值 使用的时候要写this.props
    const { score, age } = this.props
    return (
      <div>
        Child-------{score}-----{age}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 6.3 类组件-子传父

子传父基本使用:

```js
class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }
  fn2 = () => {
    const { fn } = this.props
    // 2:子组件提供数据,并且通过函数fn1的形参传送给父组件
    fn(this.state.num)
  }
  render() {
    return (
      <div>
        Child---------
        <button onClick={this.fn2}>子组件的按钮</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // 1:父组件提供fn1方法,给子组件用来调用
  fn1 = arg => {
    // 3:父组件接收形参后更新数据
    console.log('fn1-----')
    this.setState({
      count: arg
    })
  }
  render() {
    return (
      <div>
        <h2>app--------</h2>
        <h3>父组件的值:{this.state.count}</h3>
        <Child fn={this.fn1} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

子传父总结代码:

```js
// 子传父
// 1. 在父组件中,使用子组件时,通过属性传值,把父组件的方法changeCount传递给子组件
// 2. 在子组件中,接收方法并且调用
// 3. 在子组件调用方法的位置.,传值
// 4. 在父组件的changeCount方法的形参位置接收值

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count2: 200
    }
  }

  fn2 = () => {
    const { changeCount } = this.props
    const { count2 } = this.state

    changeCount(count2)
  }
  render() {
    return (
      <div>
        <h4>Child</h4>
        {/* <p>接收父组件传递过来的数据是{this.props.count1}</p> */}
        <button onClick={this.fn2}>点我传值给父组件</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count1: 100
    }
  }

  changeCount = argv => {
    console.log(argv)
    this.setState({
      count1: argv
    })
  }
  render() {
    return (
      <div>
        <h3>App</h3>
        <p>{this.state.count1}</p>

        <Child count1={this.state.count1} changeCount={this.changeCount} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 6.4 defaultProps

> 给类组件设置一个默认的值

```js
class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props)
    return <div>Child----</div>
  }
}

// 为子级类组件定义一个默认的props值,防止父组件给子组件传值的时候没值的问题
Child.defaultProps = {
  data: 10000,
  data2: 12000
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        App
        {/* 父组件传值的时候 子组件能正常接收props 若是没值 则代码将会报错*/}
        {/* <Child data={100} /> */}
        <Child />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 6.5 PropTypes

为类组件的属性指定类型=>让PropsTypes做props的静态类型检测 使代码更加严谨
> 传入值类型检测 PropTypes组件被react给独立封装出来了,要使用的话需要安装单独的库 npm install --save prop-types 其他使用方式参见文档

```js

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div>Child----</div>
  }
}

// 静态检测传入的prop值类型是否匹配
// 用途:可能不同组件不同开发者不知道要传入的值类型,所以可以用该属性
Child.propTypes = {
  // 检测num是否是number
  num: PropTypes.number,
  isShow: PropTypes.bool,
  count: PropTypes.oneOf([1, 2])
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        App----
        <Child num={'200'} isShow={10} count={3} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

```

### 6.6 props-children(插槽)

```js
// 使用场景: 当Child子组件封装好 但是有的部分内容不能写死,可以从父组件中传来
class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // 用this.props接收父组件传来的值
    const ChildEle = this.props.children
    return (
      <div>
        Child
        {/* 此处留坑 */}
        <div>{ChildEle}</div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Child />
        <Child>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Child>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

可以配合 15-点表示法 书写


### 6.7 练习-组件传值时优化写法

js文件

```js
// 练习

const Child = props => {
    // 防止报错 比下面的if else高级
  const { data = [] } = props

  // let liTemplate = 根据数据数组生成标签数组
  let liTemplate = data.map((item, i) => {
    return <li key={i}>{item}</li>
  })
  // if(data.length!==0){
  // let liTemplate = data.map((item, i) => {
  //   return <li key={i}>{item}</li>
  // })
  // } else {
  //   data = []
  // }

  return (
    <div>
      <h4>Child标题</h4>
      <ul>{liTemplate}</ul>
    </div>
  )
}

const App = props => {  // props默认是{}
    // 此处是将父组件的数据传给子组件 让父组件定义子组件的内容
    	// 但是将来此处可能是后端数据 js异步问题 可能造成上面的.map处报错 要进行优化，默认给data一个空数组即可防止报错
  const data = ['a', 'b', 'c']

  const fn = () => {
    console.log('fn-----')
  }

  return ( 
    <div>
      <h3>App组件的标题</h3>
      <Child data={data} />
		// react中绑定事件：小驼峰命名法
      <button onClick={fn}>按钮</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 6.8 练习-登录和注册组件显示与隐藏

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  // 页面加在的时候判断user是否存在
  componentWillMount() {
    window.localStorage.setItem('user', 'token')
    const user = localStorage.getItem('user')
    this.setState({
      user
    })
  }
  logOut = () => {
    window.localStorage.clear()
    this.setState({
      user: ''
    })
  }
  render() {
    // 没有响应式数据操作的时候可以写代码较少的函数组件
    const Login = () => {
      return <div>登录</div>
    }
    const Reg = () => {
      return <div>注册</div>
    }
    return (
      <div>
        <h3>app</h3>
        {this.state.user ? <Login /> : <Reg />}
        <button onClick={this.logOut}>退出</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```



## 7 类组件实现响应式数据

```js
// 类组件的响应式数据
class App extends React.Component {
  constructor(props) {
    super(props)
    // 声明了一个响应式数据
    // this.state默认是null，任何constructor里都有this.state
    this.state = {
      age: 10
    }
  }
  render() {
    console.log(this.state.age)
    return (
      <div>
        App---
        {this.state.age}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
```

## 8 setState修改响应式数据

```js
// 修改响应式数据
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 10,
      arr: ['a'],
      obj: { name: 'zs' }
    }
  }
  render() {
    // 改简单数据
    const fn = () => {
      // this.state.age = 20 无效
      // 能改状态数据的唯一手段就是setState
      // setState是异步方法，此处改结果了不会影响后续代码的数据 js常见异步：定时器、ajax、事件、数据库操作
      // 为了能拿到修改后的数据，引入了参数2的回调,setState({},()=>{})
      this.setState({
        age: 20
      },()=>{
        console.log(this.state.age) // 输出是20
      })
      console.log(this.state.age)// 输出是10
    }
    // 改数组
    const fn1 = () => {
      // 使用setState修改数据的逻辑是：取出原始数据，修改数据，setState传递新数据
      // 展开arr数组
      let arr = [...this.state.arr]
      // 把b push到数组
      arr.push('b')
      // 更新数据
      this.setState({
        // arr: arr
        arr
      })
    }
    // 改对象
    const fn2 = () => {
	  // 扩展运算符同样能展开对象(浅拷贝)
      let obj = { ...this.state.obj }
      obj.name = 'ls'
      this.setState({
        obj
      })
    }
    return (
      <div>
        App---
        {this.state.age}
        {this.state.arr}
        {this.state.obj.name}
        {/* 注意此处fn不能写括号 不然会报错 */}
        <button onClick={fn}>改普通数据</button>
        <button onClick={fn1}>改数组</button>
        <button onClick={fn2}>改对象</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
```

### 8.x 异步问题的解决方法

```js
  // 回调函数的使用
  function getDate(callback) {
    var a = 1
    a++
    callback(a)
  }
  getDate(function(aaa) {
    console.log(aaa)
  })
  // 解决异步的几个方法：
  // 使用回调函数的方法
  function fn1(cb) {
    setTimeout(() => {
      //异步的结果
      let a = 20
      cb(a)
    }, 1000)
  }
  fn1(res => {
    console.log(res)
  })

  // es6 promise方法
  function fn2() {
    return new Promise(resolve => {
      setTimeout(() => {
        let a = 20
        resolve(a)
      }, 1000)
    })
  }

  fn2().then(anew => {
    console.log(anew)
  })
  // es7 async和await
  function fn3() {
    return new Promise(resolve => {
      setTimeout(() => {
        let a = 20
        resolve(a)
      }, 1000)
    })
  }
  ;(async function() {// 函数自调用
    const res = await fn3()
    console.log(res)
  })()
```

## 9 state和props的区别

1.props是接受外部传递进来的数据 传值使用

2.state是声明当前组件内部的响应式数据 组件内部自己处理数据使用

PS：二者都是数据，props来源于外部，通常是来自父组件，state来源于自己

## 10 生命周期函数

<strong>重点</strong>

三个阶段：创建(挂载)-更新(props和state)-卸载 

> [生命周期图例](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 10.1 挂载

```js
class App extends React.Component {
  constructor(props) {
    // 初始化实例
    console.log('constructor')
    // 为当前组件提供初始化数据 props state
    // 为当前组件提供初始化方法的准备工作（也可以写方法函数）
    // 方法并不是实现，而是准备工作
    super(props)
    this.state = {
      num: 1
    }
  }
  // 将要挂载
  componentWillMount() {
    // 相当于vue中的beforeMount()
    // 可以获取首屏数据 但是不可以操作真实DOM
    console.log('componentWillMount')
  }
  // 已经挂载
  componentDidMount() {
    console.log('componentDidMount')
    // 组件挂载完毕 相当于vue中的mounted
    // 可以操作state数据 操作DOM 
  }
}
  // 渲染
  render() {
    // return出recat元素
    console.log('render')
    return <div>App-------</div>
  }


ReactDOM.render(<App />, document.getElementById('root'))
```

### 10.2 更新

#### 10.2.1 更新-更新状态state

```js
class App extends React.Component {
  constructor(props) {
    // 初始化实例
    console.log('constructor')
    // 为当前组件提供初始化数据 props state
    // 为当前组件提供初始化方法的准备工作（也可以写方法函数）
    // 方法并不是实现，而是准备工作
    super(props)
    this.state = {
      num: 10
    }
  }
  // 将要挂载
  componentWillMount() {
    console.log('componentWillMount')
  }
  // 挂载组件完毕
  componentDidMount() {
    console.log('componentDidMount')
    //相当于vue中的mounted
    // ！！！操作DOM 获取首屏数据
  }
  // 更新状态
  // 更新状态
  // 更新状态
  // 是否应该更新
  shouldComponentUpdate(nextProps, nextState) {
    // 参数1：接收新的props          参数2：接收的新state
    console.log('shouldComponentUpdate')
    // 可以用来判断数据是否更新，进行性能优化
    // 若新state和旧state一样，false 不更新 反之更新
    if (this.state.num === nextState.num) {
      return false
    } else {
      return true
    }

    // return 返回值是true是更新，下面的三个方法执行，false是不更新，后续方法不执行
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  
  // 渲染
  render() {
    console.log('render')
    const fn = () => {
      this.setState({
        num: 10
      })
    }
    // return出recat元素
    return (
      <div>
        App-------
        {this.state.num}
        <button onClick={fn}>按钮</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

#### 10.3.2 更新-更新属性
相比状态更新 多了一个componentWillReceiveProps

```js
class App extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      num: 10
    }
  }
  componentWillReceiveProps() {
    // 更新属性时才有的方法
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 判断属性是否更新，若更新则返回true
    console.log('shouldComponentUpdate')
    if (this.props.num === nextProps.num) {
      return false
    } else {
      return true
    }
  }

  componentWillUpdate() {
    console.log('dcomponentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    const fn = () => {
      this.setState({
        num: 20
      })
    }
    return (
      <div>
        App-------
        <Child data={this.state.num} />
        <button onClick={fn}>按钮</button>
      </div>
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { data } = this.props
    return <div>Child------{data}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 10.3 卸载

```js
 componentWillUnmount() {
    console.log('componentWillUnmount----')
    // 在这里应该做的事儿
    // 1. 把state清空: this.setState = () => { return }
    //    原因: setState是异步函数 若异步未执行完 切换了组件 则setState执行后会报错 清空能避免这个报错
    // 2. 清除定时器
    //   在类组件外let timer
    //   在方法函数内 timer = setInterval(()=>{}) 然后在componentWillUnmount中卸载
    // 3. 把组件的事件绑定置空btn.onclick=null
  }
```

## 11 事件绑定

### 11.1 基本用法

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // 当前组件的自定义写法
  fn2() {
    console.log('fn2-------')
  }
  // 也可以写箭头函数
  fn3 = () => {
    console.log('fn3-------')
  }
  fn4 = () => {
    console.log('fn4-------')
  }
  fn5 = () => {
    console.log('fn5-------')
  }
  fn6 = (a,b,e) => {
      // a:100 b:200 e:事件对象
    console.log(a,b,e)
    console.log('fn5-------')
  }
  render() {
    const fn1 = () => {
      console.log('fn1-------')
    }
    return (
      <div>
        <button onClick={fn1}>按钮1</button>
        {/* 自定义的函数访问时要用this */}
        <button onClick={this.fn2}>按钮2</button>
        <button onClick={this.fn3}>按钮3</button>
        {/* React元素button的onClick值是一个事件处理函数(回调函数),不能加(),加了()会造成不点击直接调用 */}
        <button onClick={this.fn4()}>按钮4</button>
        {/* 若非要加(),可以先给绑定一个匿名的函数,匿名函数内调用想要触发的函数 */}
        <button
          onClick={() => {
            console.log('11111')
            this.fn5()
          }}
        >
          按钮5
        </button>
		{/* 利用bind可以修改fn3中的this指向 且不调用函数 此处改指向不重要 目的是带形参且不调用函数 此处this可以使用null代替 若使用其他形参 则e对象默认为最后一个 100对应fn6中的a 200对应fn6中的b 最后不送的实参默认为e */}
		<button onClick={this.fn6.bind(this,100,200)}></button<
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 11.2 this问题

- 直接修改函数为箭头函数
- 可以使用bind改变指向

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // constructor:为当前组件做一些准备工作
    // 使用bind改变fn1的指向
    this.fn1 = this.fn1.bind(this)
  }
  fn1() {
    console.log(this) // undefined
    // 若要改变this的指向,可以用apply call bind
    // 在代码调用的时候改变,应该写在constructor中
  }
  // 自定义的时候写正常函数找不到this 推荐使用箭头函数
  // 注意 此处在构造函数中不能直接写箭头函数 该写法来自于jsx
  fn2 = () => {
    console.log(this) // 当前App类的实例化对象
  }
  fn3 = () => {
    console.log(this) // 当前App类的实例化对象
  }
  render() {
    return (
      <div>
        <button onClick={this.fn1}>按钮1</button>
        <button onClick={this.fn2}>按钮2</button>
        <button
          onClick={() => {
            this.fn3()
          }}
        >
          按钮3
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 11.3 事件对象

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // 箭头函数不声明直接写是jsx语法
  // e是自带的形参,指的是高级事件对象,所以可以使用e.target e.preventDefault()
  // 这里的e是高级事件对象,只能用e.preventDefault()阻止默认行为 return false等都无法使用
  fn1 = e => {
    console.log('fn1-----')
    console.log(e)
  }
  fn2 = (e, arg) => {
    console.log('fn2-----')
    console.log(e, arg)
  }
  render() {
    return (
      <div>
        <button onClick={this.fn1}>按钮1</button>
        {/* 注意此处e的写法,传入实参的时候外层函数也得写e */}
        <button
          onClick={e => {
            this.fn2(e, 200)
          }}
        >
          按钮2
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## 12 表单控件

> 表单的视图效果受到了state的控制: 称之为受控表单

1:受到value控制的表单元素:type="text" | textarea|select

2:受到checked控制的表单元素:tpye="checkbox" type="radio"

> 表单的视图效果不受state控制:称之为非受控表单-就是ref操作dom控制表单样式

### 12.1 input/select

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: '',
      val2: '',
      val3: ''
    }
  }
  change = e => {
    const val = e.target.value
    this.setState({
      val
    })
  }
  change2 = e => {
    this.setState({
      val2: e.target.value
    })
  }
  change3 = e => {
    this.setState({
      val3: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h3>app</h3>
        {/* 单行文本输入框 */}
        <div>{this.state.val}</div>
        <input type="text" value={this.state.val} onChange={this.change} />
        {/* 多行文本输入框 */}
        <div>{this.state.val2}</div>
        <textarea value={this.state.val2} onChange={this.change2} />
        {/* select选择框 */}
        <select value={this.state.val3} onChange={this.change3}>
          <option value="china">中国</option>
          <option value="japan">日</option>
          <option value="America">美国</option>
        </select>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

```

获取焦点的写法:

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.input = React.createRef()
  }
  componentDidMount() {
    const input = this.input.current
    // 自动获取焦点的写法
    input.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```



### 12.2 checkbox/radio

- checkbox

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorObj: {
        red: false,
        blue: false,
        white: false
      }
    }
  }
  changeColor = e => {
    let colorObj = { ...this.state.colorObj }
    // console.log(e.target.value)
    // console.log(e.target.checked)
    // 注意此处的写法: 对象[属性] 和对象.属性一样,此处若写后者会报错
    colorObj[e.target.value] = e.target.checked
    this.setState({
      colorObj
    })
  }
  // 类似于表单提交的功能
  submitValue = () => {
    /* 此处与代码无关,是对象相关的扩展 */
    let per = { name: 'ls', age: 18, gender: 'ny' }
    /* 获取对象中的value值 */
    console.log(Object.values(per))
    /* 获取对象中的key值 */
    console.log(Object.keys(per))
    /* 拷贝对象 相当于{...per} */
    console.log(Object.assign(per))

    // 拿到input框中的value值
    let obj = { ...this.state.colorObj }
    let arr = []
    // 遍历并筛选出value值为true的数据 push到数组中用来提交
    for (const key in obj) {
      if (obj[key] === true) {
        arr.push(key)
      }
    }
    console.log(arr)
  }
  render() {
    return (
      // 要提供name value checked onChange
      <div>
        <label>
          <input
            type="checkbox"
            name="color"
            value="red"
            checked={this.state.colorObj.red}
            onChange={this.changeColor}
          />
          红色
        </label>
        <label>
          <input
            type="checkbox"
            name="color"
            value="blue"
            checked={this.state.colorObj.blue}
            onChange={this.changeColor}
          />
          蓝色
        </label>
        <label>
          <input
            type="checkbox"
            name="color"
            value="white"
            checked={this.state.colorObj.white}
            onChange={this.changeColor}
          />
          白色
        </label>
        <button onClick={this.submitValue}>提交打勾的复选框的value值</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

- radio

  ```js
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        sex: 'man'
      }
    }
    changeSex = e => {
      this.setState({
        sex: e.target.value
      })
      console.log(e.target.value)
    }
    render() {
      return (
        <div>
          <label>
            <input
              type="radio"
			// name一致时 两个input会成为一组 默认只选中一个(原生js写法)
              value="man"
              name="sex"
              // 只写一个checked即可,因为radio通过name值绑定为一对,其中一个选中,另一个就不选中
              checked={this.state.sex === 'man' ? true : false}
              onChange={this.changeSex}
            />
            男
          </label>
          <label>
            <input
              type="radio"
              value="woman"
              name="sex"
              onChange={this.changeSex}
            />
            女
          </label>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))
  ```

  

## 13 图书管理案例

### 13.1 部分代码 未完成

```js
// - 在父组件中提供数据books
// - 在List函数组件中使用数据(父传子)
// - 在List根据数组渲染模板数组booksTmplate
// - table 的样式设置:类名是className,引入css
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      val: ''
    }
  }

  componentWillMount() {
    setTimeout(() => {
      const books = [
        { id: 1, name: '白夜行' },
        { id: 2, name: '解忧杂货铺' },
        { id: 3, name: '活着' }
      ]
      // 此处set数据的时候,要在函数里面写,不然外面无法访问定时器里的数据
      this.setState({
        books
      })
    }, 1000)
  }
  // 处理输入框
  changeBookName = e => {
    this.setState({
      val: e.target.value
    })
  }
  // 添加功能
  addBook = () => {
    // 判断书名是否重复 map/for/forEach/filter/some
    // 此处使用some是因为some返回的是布尔值
    const isName = this.state.books.some((item, index) => {
      // item会遍历books数组中的数据,得到每一项的值id,name this.state.val是当前输入框的val值
      return item.name === this.state.val
    })
    if (isName) {
      alert('书名重复,请重新添加')
      this.setState({
        val: ''
      })
    }
    // 判断输入的书名是否为空,非空则正常添加
    if (this.state.val.length !== 0 && !isName) {
      // 此处解构赋值的时候不会改变原来的数组books数据,若直接books = this.state.books会覆盖掉原数组
      const books = [...this.state.books]
      books.push({
        id: books.length + 1,
        name: this.state.val
      })
      this.setState({
        books,
        // 添加完书名后清空input框
        val: ''
      })
    }
  }
  // 删除功能
  delate = index => {
    let books = [...this.state.books]
    // 从第index个数据开始删除,删除1个
    books.splice(index, 1)
    this.setState({
      books
    })
  }
  // 编辑书名数据回显
  editShow = (index) => {
    this.setState({
      val: this.state.books[index].name
    })
  }
  render() {
    // 列表组件(函数组件)
    const List = props => {
      const { books } = props
      let booksTemplate = books.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <a
                onClick={() => {
                  this.editShow(index)
                }}
              >
                编辑
              </a>
              <span> | </span>
              {/* 把当前点击的index(指的是books数组中的第几个数据)传回给处理函数,用来判断删除哪一个 */}
              <a
                onClick={() => {
                  this.delate(index)
                }}
              >
                删除
              </a>
            </td>
          </tr>
        )
      })
      return (
        <table className="table">
          <thead>
            <tr>
              <th>编号</th>
              <th>名称</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {/* 发送ajax请求异步数据的时候会有延迟,数据没加载回来的时候给文字提示 */}
            {/* 注意:td是react元素,属性的写法也要用小驼峰,把原生colspan改为colSpan */}
            {/* 判断booksTemplate数组是否为空,若空,就显示提示文字 */}
            {booksTemplate.length !== 0 ? (
              booksTemplate
            ) : (
              <tr>
                <td colSpan={3}>暂无数据</td>
              </tr>
            )}
          </tbody>
        </table>
      )
    }
    return (
      <div>
        {/* 双向数据绑定 */}
        <input
          type="text"
          value={this.state.val}
          onChange={this.changeBookName}
        />
        <button onClick={this.addBook}>添加按钮</button>
        <List books={this.state.books} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

```

### 13.2更改为网络请求版

#### 13.2.1 axios

#### 13.2.2 json-server

> 接口服务器

1. node 写一个
2. 自己搭建一个
3. 利用工具包 json-server 快速 0 配置搭建服务器

> 关于 json-server

1. 全局命令行工具-> npm i -g json-server
2. json-server 作用:把.json 文件快成接口服务器->提供.json 文件
3. 来到 json 文件所在的目录->打开 cmd
4. 使用指令 -> json-server --watch xxx.db.json->启动了接口服务器

> 这里,目的是发送请求,所以最快方案搞一个服务器

#### 13.2.3 RESTFul-axios的使用

> 在启动服务之后->了解该服务的接口规则是什么?->看文档->如何发送请求->postman

`开发中常用的4种请求:增删改查`

db.json

```json
{
  "books": [
    {
      "id": 1,
      "name": "00000"
    },
    {
      "name": "aaac",
      "id": 2
    },
    {
      "name": "aaad",
      "id": 3
    },
    {
      "name": "aaae",
      "id": 4
    },
    {
      "name": "1111",
      "id": 5
    },
    {
      "name": "999999",
      "id": 6
    }
  ],
  "posts": [
    {
      "name": "zs",
      "age": "18"
    },
    {
      "name": "ls",
      "age": "20"
    }
  ]
}
```


```
查询db.json下key为books的数组数据
GET    /books     ->

查询db.json下key为books的数组中的id为x的一条数据
GET    /books/1    ->

查询db.json下key为books的数组中的name很像值的所有数据
GET    /books?属性名_like=值

增加数据 (id自增)
POST   /books  + body   ->

把id为1的数据修改为body
PUT    /books/1  +body  ->

删除id为1的数据
DELETE /books/1  ->

```

> 注意

1. json-server 这个服务器使用的接口规则是 RESTful
2. RESTful 设计接口的通用标准/规则/原则
3. RESTful 规则->支持常见的增删改查|?拼参数|分页|模糊搜索

> 补充

1. 客户端想做分页-> 接口支持分页(参数名通常是:page num size current total 等)
2. 客户端想做模糊搜索-> 接口要支持功能

> 使用代码测试接口

```js
axios.get(`http://localhost:3000/books`).then(res => {
  console.log(res)
})
```

#### 13.2.4 代码

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 书籍数据
      books: [],
      bookname: '',
      currBookId: -1
    }
  }

  // api相关的方法
  // 查询所有数据
  getData = async () => {
    const { status, data: books } = await axios.get(
      `http://localhost:3000/books`
    )
    if (status === 200) {
      return books
    }
  }

  // 增加数据
  postData = async body => {
    const { status, data: books } = await axios.post(
      `http://localhost:3000/books`,
      body
    )
    if (status === 201) {
      return books
    }
  }

  // 删除某一条数据
  deleDataById = async ID => {
    const { status, data: books } = await axios.delete(
      `http://localhost:3000/books/${ID}`
    )
    if (status === 200) {
      return books
    }
  }

  // 修改某一条数据
  putData = async (ID, body) => {
    const { status, data: books } = await axios.put(
      `http://localhost:3000/books/${ID}`,
      body
    )
    if (status === 200) {
      return books
    }
  }

  async componentWillMount() {
    // 获取数据
    let books = await this.getData()
    this.setState({
      books
    })
  }

  // 处理输入框
  changeBookname = e => {
    this.setState({
      bookname: e.target.value
    })
  }

  // 显示被编辑的书名
  showEditBookname = index => {
    this.setState({
      bookname: this.state.books[index].name,
      currBookId: this.state.books[index].id
    })
  }
  // 添加/编辑图书
  addOrEditbook = async () => {
    if (this.state.currBookId !== -1) {
      // 发送put请求修改数据
      await this.putData(this.state.currBookId, {
        id: this.state.currBookId,
        name: this.state.bookname
      })
      // 获取所有的新数据
      const books = await this.getData()

      // 修改state
      this.setState({
        books,
        bookname: '',
        currBookId: -1
      })
    } else {
      // 如果书名为空 或者 isRname
      // 遍历  map/for/forEach/filter/some/every等

      const isRname = this.state.books.some((item, i) => {
        return item.name === this.state.bookname
      })
      if (this.state.bookname.length === 0 || isRname) {
        return
      } else {
        // 添加数据的请求方法的调用
        await this.postData({
          name: this.state.bookname
        })
        //4条数据-> post添加数据->db.json变化->5条数据->为了让视图变化

        // let books = [...this.state.books]
        // books.push(newbook)

        // 请求新的所有数据
        const books = await this.getData()

        this.setState({
          books,
          bookname: ''
        })
      }
    }
  }
  // 删除图书

  deleBook = async ID => {
    // 发送delete请求
    await this.deleDataById(ID)

    const books = await this.getData()
    this.setState({
      books
    })
  }
  render() {
    const List = props => {
      const { books } = props

      let booksTempalte = books.map((item, i) => {
        return (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <a
                onClick={() => {
                  this.showEditBookname(i)
                }}
              >
                编辑
              </a>
              <span> | </span>
              <a
                onClick={() => {
                  this.deleBook(item.id)
                }}
              >
                删除
              </a>
            </td>
          </tr>
        )
      })
      return (
        <table className="table">
          <thead>
            <tr>
              <th>编号</th>
              <th>名称</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {/* 模板数组 */}
            {books.length !== 0 ? (
              booksTempalte
            ) : (
              <tr>
                <td colSpan={3}>无数据</td>
              </tr>
            )}
          </tbody>
        </table>
      )
    }
    return (
      <div>
        {/* 输入框 */}
        <span>书名</span>
        <input
          type="text"
          value={this.state.bookname}
          onChange={this.changeBookname}
        />
        <button onClick={this.addOrEditbook}>添加/编辑</button>

        {/* 列表 */}
        <List books={this.state.books} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```


## 14 操作DOM元素 设置样式

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // 1:创建ref标识(名字自定义)
    this.myDiv = React.createRef()
  }
  // 3:在函数内操作DOM
  componentDidMount() {
    let div = this.myDiv.current
    console.log(div)
    div.style.color = 'red'
  }

  render() {
    return (
      <div>
        {/* 2:给要操作的DOM设置ref属性 */}
        <div ref={this.myDiv}>内容</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## 15 点表示法

就是把函数组件放在对象中,为了让标签结构更加清晰而已

```js
// 点表示法
const Nav = {
  Left: props => {
    return <div>Left</div>
  },
  Right: props => {
    return <div>Right</div>
  }
}
const Footer = {
  Left: props => {
    return <div>Left</div>
  },
  Right: props => {
    return <div>Right</div>
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h2>App</h2>
        <Nav.Left />
        <Nav.Right />
        <Footer.Left />
        <Footer.Right />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## 16 webpack

### 16.1 webpack好处

- 基于 webpack

> 为什么使用webpack?->好处->把项目变得模块化->什么叫模块化?->把独立功能的代码放在一个js文件里->好处?

> 模块化的好处

1. 解决文件之间的依赖复杂的问题
2. 解决全局变量容易被污染的问题

> 如果没有webpack,如果做模块化?

1. 函数自调(function(){var a = 10})()->a是局部的->很多库的源码最外层都是这种写法
2. 闭包
   1. 最好理解的代码形式: 外层函数里面return 函数
   2. 特点: 里层函数可以使用外层函数的**变量** 
   3. 特点:局部变量一直在内存中
   4. 解决**全局变量容易被污染的问题**
3. require('./a.js')和module.exports exports   或者是 define(模块名)
   1. 一个js文件就是一个模块
   2. 不同的模块之间的变量互不影响,是局部变量
   3. require是同步
   4. require自动缓存
4. 前端有了node->js代码变得更加复杂->必须模块化
5. 产生了很多的**过渡**的模块化解决方案: CMD / AMD / sea.js / require.js
6. ES6标准引入模块化的写法: import from 和 exports
7. 中(终)级解决方案: webpack ->痛点: 配置很麻烦
8. 终极解决方案:[Parcel ](https://parceljs.docschina.org/) 等等等



### 16.2 webpack-出口入口配置

> 开发一个react项目

1. 搭建项目目录

   1. index.html
   2. src
      1. main.js

2. 使用webpack管理项目

3. npm init -y

4. 安装包(推荐本地安装:不同类型的项目webpack配置完全不同)

   ```shell
   npm install --save-dev webpack
   npm install --save-dev webpack-cli
   
   ```

5. 可以使用webpack指令对项目进行打包

   ```shell
   webpack
   ```

6. 此时cmd**报错-**> 没有提供entry入口->没有配置webpack

7. 配置webpack->新建webpack.config.js

   ```js
   // webpack基于node, 这里的path模块是node的核心(自带的)模块
   const path = require('path')
   
   module.exports = {
     // 入口:打包从哪个文件开始
     entry: './src/main.js',
     output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js'
     }
   }
   
   ```

8. 重新打包 执行webpack指令

   1. 目录中会新增一个文件夹: dist/bundle.js
   2. bundle.js是从入口文件main.js开始的使用的所有.js文件的代码
   3. bundle.js里面的代码默认是**压缩的(**默认打包的模式是生产模式)

9. 目前希望bundle.js的代码是非压缩的,可以修改webpack配置,新增mode设置:mode:development

### 16.3 webpack-loader

> 让webpack管理项目的各种资源,比如.css/ .png / .ttf

1. 新建.css文件 编写css代码
2. 在main.js 引入.css文件
3. 打包
4. 报错->没有专门处理.css文件的loader
5. 看文档->安装loader并且配置
6. 重新打包测试
7. 目前dist下的index.html是手动创建,引入bundle.js->测试页面
8. 新增.ttf字体文件
9. 在base.css中使用ttf字体(CSS3自定义字体)
10. 在index.html写p标签和内容(英语字母)
11. 打包->报错->需要loader
12. 安装file-loader并且配置
13. 重新打包

> webpack是管家(可以处理.js文件),非.js文件需要不同的工人去处理(工人就是loader)

### 16.4 配置 webpack-plugin

> 目的: 希望打包后dist下有自动生成的index.html文件

1. 安装插件

2. 引入

3. 配置

4. 打包--> 凭空生成了index.html

5. 希望根据打包前的index.html生成新的index.html->此时,修改配置

6. 给插件新增template:'./index.html''

7. 修改打包前的index.html,去掉main.js的引入

8. 打包->测试

9. 希望每次打包后先清空dist->[`clean-webpack-plugin`](https://www.npmjs.com/package/clean-webpack-plugin) 

10. 安装-引入-配置

11. 打包->测试->报错

    1. [`clean-webpack-plugin`](https://www.npmjs.com/package/clean-webpack-plugin) 不是一个类-> 

       > const { CleanWebpackPlugin } = require('clean-webpack-plugin')

    2. 需要一个对象选项->    new CleanWebpackPlugin(),

12. 打包->测试

> webpack文档的写法和某个加载器或者插件的文档写法可能不一样?->看每个加载器或者插件的文档确认有效写法

### 16.5 webpack-dev-server

> 为了开发测试->webpack提供了服务器

1. 安装webpack-dev-server

2. 配置

3. 自定义指令->package.json->scripts

   > npm的配置文件package.json->sciprts->自定义指令

4. npm start->把项目在服务器环境下打开->启动开发模式

> sourceMap:
>
> 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
>
> 为了更容易地追踪错误和警告，JavaScript 提供了 [source map](http://blog.teamtreehouse.com/introduction-source-maps) 功能

### 16.6  webpack 中使用 babel

> babel-> 编译各种各样的js

1. 项目中有js代码->浏览器识别->需要编译
2. main.js->新增ES6的写法->运行->webpack默认可以处理js+浏览器支持ES6的写法
3. 在webpack中使用babel工具->babel-loader
4. webpack3+babel-loader8+babel库文件7
5. webpack3+babel-loader7+babel库文件6

> 小结论
>
> 1. webpack文档没更新
> 2. webpack3和4关于babel的用法没差别

6. 看一下babel-loader-> npm view 包名 versions-> 确定**babel-loader7.1.5**
7. 看一下babel主库文件的版本-> npm view babel versions->确定babel的版本**6.23.0**
8. 安装 : 安装babel-loader 安装babel库文件->**主库文件的包名是babel-core**

```shell
npm i babel-loader@7.1.5 babel-core@6.23.0
```

9. 配置babel-loader

```js
 {
        test: /\.js$/,
        // 排除->这里的文件不需要处理
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 下面的代码是配置babel的->看babel的文档
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
```

10. babel是一个独立的工具,其配置可以在单独的文件里写  -> **.babelrc**文件

```js
{
  "presets": [某个包的配置]
}

```

11. babel的思想是以包的形式管理各种功能

> 主库文件babel-core  每个小功能(比如转换es6等)就是一个独立的小包



> 总结

1. babel-loader-> 在webpack中可以使用babel了
2. babel-core->babel工具的主库文件(相当于jq.js)
3. babel的配置
   1. 可以在webpack.config.js通过options直接配置
   2. 在.babelrc文件单独配置babel
4. babel的每个小功能,比如转换es6->需要安装独立的包+配置

### 16.7 配置 babel-es6-class-降级工具

> 使用babel工具编译ES6->安装对应的小包

```shell
$ npm i babel-preset-env@1.7.0
```

> 在.babelrc中配置上面的小包->查文档

```js
{
  "presets": ["env"]
}
```

> 结论:

1. 终于可以在webpack中使用babel了
2. 终于可以使用babel的小包编译ES6了

### 16.8 配置 babel-react-jsx

> 在webpack中编写react相关代码

1. 测试class -> 可以用
2. 测试class中的=号方法->发现报错->该写法是jsx的,而不是es6
3. 让babel可以编译react中的jsx->找到对应的包babel/plugin-transform-react-jsx

```shell
npm install --save-dev @babel/plugin-transform-react-jsx
```

4. 配置该插件

```js
{
  "presets": ["env"],
  "plugins": ["@babel/plugin-transform-react-jsx"]

}
```

5. 为了测试react中的jsx->安装react和react-dom
6. main.js->写类组件->测试
7. babel插件babel/plugin-transform-react-jsx的版本要求的是babel主库文件为7+,但我们的是6版本
   1. 把babel主库文件换成7+版
   2. 找该插件低版本->最低的版本是7 -> 这条路不行了
   3. **使用其他的babel工具来做这个事儿**->找babel文档是否有react相关的presets功能
8. 把之前的插件替换成**babel-preset-react**包

```shell
$ npm install --save-dev babel-preset-react
```

9. 卸载之前无用的插件

```shell
npm un  @babel/plugin-transform-react-jsx
```

10. 配置babel-preset-react

```js
{
  "presets": ["env","react"]
}
```

11. 重新运行项目->测试->没问题->在当前的环境下终于可以编写jsx中的渲染标签了

### 16.9 配置jsx

> 通过测试,发现jsx创建元素可以了,但是class中的=箭头函数无法编译

1. 找babel文档->关键字babel class->@babel/plugin-proposal-class-properties>

   > babel7+的包名带@

2. 找npm搜索 babel class properties确定6版本的包

3. 安装并且配置

```shell
npm install --save-dev babel-plugin-transform-class-properties
```

`.babelrc`

```js
{
  "presets": ["env", "react"],
  "plugins": ["transform-class-properties"]
}
```

4. 测试->终于可以自由自在的编写react代码啦
5. main.js->入口文件->导入App
6. App.js->根组件->导出

## 17 webpack-cli

```js
npm i -g create-react-app 全局内安装脚手架工具 装一次即可

npx create-react-app demos(项目名)

npm run start 开始项目
```

> 简化脚手架

1. index.js对应的index.css清空

2. app.js对应的app.css情况

3. app.test.js测试用文件删除

4. app.js中的函数组件改为类组件

## 18 文件目录功能

>  脚手架目录文件-vue中有

1. node_modules->各种 npm的包的源码
2. public
   1. index.html->项目入口
   2. favicon.ico->收藏夹图标
3. .gitignore->git的a排除忽略文件
4. package.json->配置文件(dependencies 该项目的依赖的包)
5. package-lock.json->
   1. 锁定了当前项目的包的包名和版本->安全
   2. 锁定了当前项目的包的下载地址->快
6. readme.md->项目文档->该项目运行的指令

> 脚手架目录文件-新增

1. public/manifest.json->manifest技术是为了解决页面缓存

   1. maniesft.json是manifest这个技术的配置文件
   2. manifest是H5的新特性
   3. manifest技术不光要前端配置,也要服务端配置(就是serviceWorker.j中配置的内容)

2. src->开发者应该关注的文件

   1. index.js->程序的入口文件(相当于main.js)

      ```js
      // 职责:
      1. 导入每个组件都要用的公共样式
      2. 导入App.js
      3. 导入每个组件都要用的库文件
      ```

      

   2. index.css->样式文件=>公共css 相当于gloabl.css

   3. App.js->根组件文件(相当于App.vue)

      ```js
      // 职责:
      1. 导入App.js自己的样式
      2. 导入其他的子组件
      3. 导入路由匹配到的组件
      ```

      

   4. App.css->写的是根组件的样式文件

   5. App.test.js->测试用例(和前端没啥关系)

   6. serviceWorker.js->页面缓存的服务端配置代码

3. readme.md

   1. npm start->启动项目
   2. npm run build->打包项目
   3. npm run eject->展示项目的配置文件->展示webpack配置文件
      1. 不可逆操作!!!!
      2. 如果展示了webpack配置文件,就无法再隐藏

## 19 路由

### 19.1 hash实现

VUE14.2有相关代码

### 19.2 react路由

router相关文档:[https://reacttraining.com/react-router/web/example/custom-link]

1:npm i react-router-dom

2:新建Router01 导入到App.js

Router01.js

```js
// 注意: 此版本对应的是react router v5版本 v6版本有变动
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  )
}

export default BasicExample

// react router v6版本
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function rootRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/topics'>Topics</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/topics' element={<Topics/>} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  )
}

export default rootRouter

```

App.js里引入

```js
import Router01 from './router/Router01.js'

render() {
  return (
    <div>
      <Router01 />
    </div>
  )
}
```

### 19.3 路由嵌套

Router03.js  引入到App.js

```js
// 注意: 此版本对应的是react router v6版本
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          {/* 第一层路由 */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Aaa() {
  return <div>我是a里的内容</div>
}

function Bbb() {
  return <div>我是b里的内容</div>
}

function Ccc() {
  return <div>我是c里的内容</div>
}

function Topics() {
  return (
    <div>
      {/* 第二层路由 */}
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/a">A</Link>
        </li>
        <li>
          <Link to="/topics/b">B</Link>
        </li>
        <li>
          <Link to="/topics/c">C</Link>
        </li>
      </ul>
      <hr />
		{/* exact精准匹配:当exact为false时，根据路由匹配所有组件 “/”、“/home”、“/home/menu”；当exact为true时，则“/” 仅匹配“/”、无法匹配到“/home”。 */}
      <Route exact path="/topics/a" component={Aaa} />
      <Route path="/topics/b" component={Bbb} />
      <Route path="/topics/c" component={Ccc} />
    </div>
  )
}

export default BasicExample


// 注意: 此版本对应的是react router v6版本
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          {/* 第一层路由 */}
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/topics/*' element={<Topics />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Aaa() {
  return <div>我是a里的内容</div>
}

function Bbb() {
  return <div>我是b里的内容</div>
}

function Ccc() {
  return <div>我是c里的内容</div>
}

function Topics() {
  return (
    <div>
      {/* 第二层路由 */}
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to='/topics/a'>A</Link>
        </li>
        <li>
          <Link to='/topics/b'>B</Link>
        </li>
        <li>
          <Link to='/topics/c'>C</Link>
        </li>
      </ul>
      <hr />
      <Routes>
          {/* 注意此处写法: 直接写单层路由即可匹配到 */}
        <Route exact path='/a' element={<Aaa />} />
        <Route path='/b' element={<Bbb />} />
        <Route path='/c' element={<Ccc />} />
      </Routes>
      
    </div>
  )
}

export default BasicExample

```

### 19.4 路由重定向

1. 注意:重定向是发送了两次get请求
2. 场景:无法匹配组件时,返回404/登录

```js
// 注意: 针对的是v6版本的路由
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          {/* 第一层路由 */}
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>

        <hr />
        <Routes>
           {/*书写区分先后顺序 谁先捕获到路由 建议把重定向放在末尾*/}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/topics/*' element={<Topics />} />
          <Route exact path='/404' element={<Notfound />} />
          {/* 上方全是精准匹配 若输入其他路由 则重定向到404 */}
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </div>
    </Router>
  )
}

function Notfound() {
  return <div>404</div>
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Aaa() {
  return <div>我是a里的内容</div>
}

function Bbb() {
  return <div>我是b里的内容</div>
}

function Ccc() {
  return <div>我是c里的内容</div>
}

function Topics() {
  return (
    <div>
      {/* 第二层路由 */}
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to='/topics/a'>A</Link>
        </li>
        <li>
          <Link to='/topics/b'>B</Link>
        </li>
        <li>
          <Link to='/topics/c'>C</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        {/* 注意此处写法: 直接写单层路由即可匹配到 */}
        <Route exact path='/a' element={<Aaa />} />
        <Route path='/b' element={<Bbb />} />
        <Route path='/c' element={<Ccc />} />
      </Routes>
    </div>
  )
}

export default BasicExample


```

### 19.5 动态路由传参

1. vue-router-> path:'/ball/:id' component:Ball
2. 场景:不同的标识,渲染同一个组件-> 项目中的详情页通常使用动态路由
3. 详情页: 数据不同+页面组成一样->动态路由

#### 19.5.1 react router v5

```js
// 此处为react router v5版本
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ball/football">football</Link>
          </li>
          <li>
            <Link to="/ball/beaskball">beaskball</Link>
          </li>
          <li>
            <Link to="/ball/otherball">otherball</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* :是要求的 id可以随便起 习惯为id */}
        <Route path="/ball/:id" component={Ball} />
      </div>
    </Router>
  )
}

function Home(props) {
  console.log(props) // 同Ball一致
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Ball(props) {
  // 正常情况下props为空对象{} 当组件是由路由匹配到的 props才会有match history等值
  // 若组件不是路由匹配的 可以尝试从父组件中传递this.props值到子组件
  // 也可以用react带的方法转换
  // 1) import { withRouter } from 'react-router-dom'
  // 2) export default withRouter(组件名)
  // console.log(props.match.params.id)
  const { id } = props.match.params
  console.log(id)
  // 此处也支持编程式导航
  // const { history } = props
  // history.push('/ball', {arguments})
  // history.goBack() // 返回上一页
  // history.go(0) //0或空为刷新 -1回退上一页 -2回退上两页 1无效
  return (
    <div>
      <h2>Ball</h2>
    </div>
  )
}

export default BasicExample

```

#### 19.5.2 react router v6

- params传递

```js
// 传递:
import React from 'react'
import ComB from './compontents/ComB'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function BasicExample() {
  // 1: 定义要传的参数
  const age = 20
  const name = 'zs'
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            {/* 2:触发跳转时传值 */}
            <Link to={{ pathname: `/foo/${age}/${name}` }}>pathname传参</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* 3:定义路由要传递的值 */}
          <Route exact path='/foo/:age/:name' element={<ComB />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

export default BasicExample

// 接收
import { useParams  } from 'react-router-dom'
function ComB() {
  const params = useParams()
  console.log(params) // {age: '20', name: 'zs'}
  return <div>123</div>
}
export default ComB

```

- search传递 

```js
import React from 'react'
import ComB from './compontents/ComB'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
          <li>
      		{/* 1:传递的参数 */}
            <Link to={`/foo?age=20&name=zhangsan`}>传参</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* 2:此处无需特殊声明 正常注册即可 */}
          <Route exact path='/foo' element={<ComB />} />
        </Routes>
      </div>
    </Router>
  )
}
// 2:ComB组件获取
import { useSearchParams, useLocation } from 'react-router-dom'

function ComB() {
  // 获取方法1 hook式
  const [searchParams, setSearchParams] = useSearchParams()
  console.log('searchParams', searchParams)
  console.log('setSearchParams', setSearchParams)
  console.log(searchParams.get("age")) // 20
    
  // 获取方法2 
  const { search } = useLocation()
  // 获取到的是urlencode编码 import qs from "query-string"; 可用qs转换
  console.log(search) // age=20&name=zhangsan
  return <div>123</div>
}
export default ComB

```

- state传递

```js
// 传递
import React from 'react'
import ComB from './compontents/ComB'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            {/* 1:触发跳转时传值 */}
            <Link to='/foo' state={{ name: 'zs', age: 20 }}>
              state传参
            </Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* 2: 此处无需特殊声明 正常注册即可 */}
          <Route exact path='/foo' element={<ComB />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

export default BasicExample

// 获取
import { useLocation } from 'react-router-dom'

function ComB() {
  const { state } = useLocation()
  console.log(state) // {age: '20', name: 'zs'}
  // 注: useLocation() 返回内容:
  // hash: ""
  // key: "kjo98i8y"
  // pathname: "/foo"
  // search: ""
  // state: {name: 'zs', age: 20}
  return <div>123</div>
}
export default ComB
```

### 19.6 导航链接的激活样式

```js
import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
function BasicExample() {
  return (
    <Router>
      <ul>
        <li>
          {/* 替换Link为NavLick 点击选中会自动生成active类名 需要激活样式 给active写样式即可 */}
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/foo'>foo</NavLink>
        </li>
        <li>
          <NavLink to='/bar'>bar</NavLink>
        </li>
        <li>
          <NavLink to='/baz'>baz</NavLink>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/foo' element={<Foo />} />
        <Route exact path='/bar' element={<Bar />} />
        <Route exact path='/baz' element={<Baz />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function Foo() {
  return <h2>Foo</h2>
}

function Bar() {
  return <h2>Bar</h2>
}

function Baz() {
  return <h2>Baz</h2>
}

export default BasicExample


```

### 19.7 路由守卫

> react-router-dom中的路由守卫

1. 没有提供直接实现路由守卫的API
2. 可以利用自定义组件->封装Route
3. Route标签有一个render属性->render={()=>{return <组件/>}}

```js
// 路由模块

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from './components/login/login.js'
import Home from './components/home/home.js'
import Cal from './components/main/cal.js'
import Map from './components/main/map.js'

import Detail from './components/main/detail.js'

// 本质上此处时函数定义 下方标签是函数调用 也就是组件传值
const Auth = props => {
  let { component: Component } = props
  // console.log(Component)

  // return <Route path="/" component={Home} />
  return (
    <Route
      path="/"
      render={(props) => {
        // 组件中props值 包含history等 可以用来push go
        console.log(props)
        // 如果token存在->home
        // 如果token不存在->重定向到Login
        let token = localStorage.getItem('token')
        // 判断是否有token 若有 直接显示从标签处接受的Home组件(此处接受后重命名为了Component react要求标签首字母必须大写) 若无 重定向到login
        let com = token ? <Component /> : <Redirect to="/login" />
        // 完成后返回组件
        return com
      }}
    />
  )
}

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/detail" component={Detail} />
        <Route path="/cal" component={Cal} />
        <Route path="/map" component={Map} />

        {/* Auth函数调用时 会传来component为home的值 上面用作接收 */}
        <Auth component={Home} />

        {/* <Route path="/" component={Home} /> */}
        {/* 若跳转到未配置的路由/xxx 则会触发重定向 */}
        <Redirect to="/login" />
      </Switch>
    </Router>
  )
}

export default AppRouter
```



## 20 好租客项目

### 20.1 前期准备

phpstudy => 开启mysql服务

navicat配置表文件 加载sql文件

更改myapi中config的数据库配置

### 20.2 引入ant-design-mobile

官网: https://mobile.ant.design/

装载

```shell
npm install antd-mobile --save
```

引入组件

```shell
import { Button } from 'antd-mobile'
```

引入样式

```shell
import 'antd-mobile/dist/antd-mobile.css'
```

react touch loader react的手机端loader库   专门的react的加载更多+刷新的组件(npm+github)-> [react-touch-loader](https://github.com/Broltes/react-touch-loader/blob/master/example/app.jsx)

```shell
npm i react-touch-loader
```



### 20.3 路由配置

1. 新建router.js配置路由
2. 新建components/两个文件夹/login+home
3. login.js+home.js
4. 在App.js引入router.js并且使用

router.js

```js
import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Login from './components/login/login.js'
import Home from './components/home/home.js'
function AppRouter() {
  return (
    <Router>
      <div>
      	{/*注意: 这里的效果不是通过按钮去改标识的,所以Link是不需要的*/}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          {/* 若跳转到未配置的路由/xxx 则会触发重定向 */}
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter

```

## 21 高阶组件

### 21.1 高阶函数

概念:函数的形参或者是返回值也是函数 fn1 fn2就是高阶函数 高阶函数目的**:复用函数**

```js
function add(){}
function fn1(add){
    return 10
}
function fn2(){
    return add
}
```

函数柯里化:每个函数只有一个形参    函数柯里化:使用了高阶函数配合闭包

```js
function calvnew(a) {
      return function (b) {
        return function (c) {
          return a * b * c
        }
      }
    }
const resnew = calvnew(2)(3)(4)
```

### 21.2 高阶组件HOC

高阶组件:一个组件的形参或者返回值也是组件 此时为高阶组件 目的是复用组件

使用场景:当多个组件有重复逻辑时 此时使用HOC封装重复的逻辑部分(可以是方法 也可以是值)

```js
import React from 'react'

// import { withRouter } from 'react-router-dom'

// 演示高阶组件的写法
const Acom = props => {
  // console.log('我是逻辑代码')
  let { num } = props
  return <div> A组件---{num}</div>
}
const Bcom = props => {
  // console.log('我是逻辑代码')
  let { num } = props
  return <div> B组件---{num}</div>
}
// 这里复用的是withComponent的返回值
// withComponent()实参是加工之前的组件 return的是加工后加入公共方法的组件
// react定义好的高阶组件:withRouter()
const withComponent = Com => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        num: 100
      }
    }

    componentWillMount() {
      console.log('我是逻辑代码')
    }

    render() {
      return (
        <div>
          <Com num={this.state.num} />
        </div>
      )
    }
  }
}

// Acom组件最开始的props没有num->把Acom交给Withcomponent方法->Withcomponent()加功Acom组件->给Acom组件添加了属性num
const Acomnew = withComponent(Acom)
const Bcomnew = withComponent(Bcom)

const App = props => {
  // console.log(props)

  return (
    <div>
      App
      <Acomnew />
      <Bcomnew />
    </div>
  )
}

export default App

```

## 22 fetch API

> 原生支持 支持promise



```js
<script>
    fetch('https://rarest-gj.csc108.com/znbdpc/api/topic/hottest', { method: 'GET' })
        .then((res) => {
    	// res的内容类似于axios中的res内容 不能直接用 直接.也没有值 只能用自带的.josn()方法转换
    	// body: ReadableStream
		// bodyUsed: true
		// headers: Headers {}
		// ok: true
		// redirected: false
		// status: 200
		// statusText: "OK"
		// type: "cors"
		// url: "https://rarest-gj.csc108.com/znbdpc/api/topic/hottest"
          console.log(res)
          return res.json()
        })
        .then((res) => {
          console.log(res)
        })
  </script>
```



简单封装(mdn文档内容):

```js
// Example POST method implementation:

postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}
```

response中带的方法

```
res.json() 转换成json格式
res.blob() js自己的数据类型=>转换成进制数据 不常用
res.text()文本
res.formData() 处理表单数据
```



## 23 redux

二者都是基于flux思想 vuex只能用在vue中 redux可以但不限于用在react项目中

- vuex数据管理的流程:

  > 1.state:声明组件中的数据,并且数据是响应式的
  >
  > 2.actions:和后台交互,发送ajax,返回res,把返回的数据交给mutations
  >
  > 3.mutations:接收actions的结果,同时修改state

- redux流程

  > 1. 基于flux的实现
  > 2. redux和react没有任何关系
  > 3. redux可以用于任何项目
  > 4. **组成部分**: store + action + reducer

### 23.1 可忽略:react中使用redux

```shell
npm install redux
```

index.js中

```js
// thunk 和 applyMiddleware是为了处理异步action使用
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
// redux处理数据的函数
function reducerfn(state = 10, action) {
  switch (action.type) {
    case 'add':
      let state1 = state
      state1++
      return state1

    case 'sub':
      let state2 = state
      state2--
      return state2

    default:
      return state
  }
}
// 创建redux仓库
let store = createStore(reducerfn, applyMiddleware(thunk))

// 当 store.dispatch(createAction2())改变state值时 需要通过这里面获取最新的state 否则state更新 但是无法获取的
const unsubscribe = store.subscribe(() =>
  // 通过根标签store传值
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
)
```

action.js

```js
export const createAction1 = num => {
    return {
        type: 'add',
        num: num
    }
}

export const createAction2 = num => {
    return {
        type: 'sub',
        num: num
    }
}
// 异步的action 用作发网络请求
export const createAction3 = num => {
  return dispatch => {
    // dispatch(createAction1())

    setTimeout(() => {
      dispatch(createAction1())
    }, 1000)
  }
}

```

App.js

```js
import {createAction1, createAction2} from 'action.js'

// 此处需要一个类组件
render() {
    const { store } = this.props
    // console.log(store)
    return (
      <div>
        App
        // store下的getState方法 默认调用index.js中的reducerfn函数 state = 10
        <p>{store.getState()}</p>
        <button
          onClick={() => {
            store.dispatch(createAction1())
          }}
        >
          点我+1
        </button>
        <button
          onClick={() => {
            store.dispatch(createAction2())
          }}
        >
          点我-1
        </button>
      </div>
    )
  }
```

### 23.2 重点:react中使用react化的redux

```shell
npm install --save redux react-redux redux-thunk
npm install --save-dev redux-logger
```

文件结构

scr

​	store

​		index.js =>返回store

​		reducer.js =>返回reducer函数

​		action.js =>操作数据



根目录下的:index.js

```js
import { Provider } from 'react-redux'
import store from './store/index.js'
// 简化了上方的使用方式
ReactDOM.render(
    // Provider可以透传给App以外的组件 不用一级一级的传值了 套在最外层即可
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

store下的index.js

```js
// 返回仓库:相当于data
import Reducer from './reducer.js'
// thunk 和 applyMiddleware是为了处理异步action使用
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

let state = {
  num1: 10,
  num2: 20,
  num3: 30,
  // action发请求: 1) state里定义数据
  ajaxData:{},
}

// 创建store仓库:createStore(Reducer,可选参数2) 可选参数2就是项目中所使用的数据state, 参数3 thunk
export default createStore(Reducer, state, applyMiddleware(thunk))

```

store下的reducer.js

```js
// 返回reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      // 不建议直接修改状态 应该深拷贝一份
      let state1 = Object.assign({}, state)
      state1[action.pname]++

      return state1

    case 'sub':
      let state2 = Object.assign({}, state)
      state2[action.pname]--
      return state2
    // action发请求: 2) reducer里处理数据
    case 'ajax':
      let state3 = Object.assign({}, state)
      state3.ajaxData = action.pname
      return state3
     
    default:
      // 必须有default 初始化的时候默认会执行一次Reducer type为随机值 会默认走default
      return state
  }
}
export default Reducer
```

store下的action.js

```js
export const createAction1 = pname => {
  // 此处return的值 会完整保存在reducer中的action形参里
  return {
    type: 'add',
    pname: pname
  }
}

export const createAction2 = pname => {
  return {
    type: 'sub',
    pname: pname
  }
}

// action发请求: 3) action定义异步函数
export const createActionAjax = (data) => ({
  type: 'ajax',
  pname: data,
})

export const createAction3 = (req) => {
  return (dispatch) => {
    console.log(req)
    fetch('https://v1.hitokoto.cn')
      .then((response) => response.json())
      .then((data) => {
        // action要求返回的必须是带type的对象 所以调用createActionAjax 进入reducer.js中的 第2)步
        dispatch(createActionAjax(data))
      })
  }
}

```

组件使用:

Total.js

使用redux计算status总和

```js
import React from 'react'
// 用途:把redux中的数据 映射为当前组件的数据 方便直接用this.props
import { connect } from 'react-redux'

class Total extends React.Component {
  render() {
    const { sum } = this.props
    return <div>商品总数：【{sum}】</div>
  }
}

// 分析: state->num1 num2 num3->映射(改为)当前组件的props数据->connect
//state->store的state  ownProps->当前组件自己的属性{} 
const mapStateToProps = (state, ownProps) => {
  // js自带函数 eval 可以计算字符串
  // 
  let sum = eval(Object.values(state).join('+')) // eval('10+20+30') => 60
  // 返回新props
  return {
    sum
  }
}
// connect是一个方法 有返回值 返回值是函数HOC(接收旧组件返回新组件) 改函数调用Total 正常返回一个react组件 
export default connect(mapStateToProps)(Total)

```

Item.js

动态修改state中的值

```js
import React from 'react'
// 把store的数据映射到当前组件中
import { connect } from 'react-redux'
import { createAction1, createAction2 } from '../store/actions.js'
class Item extends React.Component {
  render() {
     // action发请求: 5) 调用
    const { num, pname, add, sub, ajax, ajaxData } = this.props
    return (
      <div>
        <button
          onClick={add}
        >
          + [修改数据->store->state->dispatch(action)]
        </button>
        <button
          onClick={sub}
        >
          -
        </button>
        <span>
          【{pname}】商品的数量【
          {num}】
        </span>
      </div>
    )
  }
}
// 映射state到props->把store的state改为当前组件的props属性:把仓库的状态数据改为当前组件的属性数据
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps) // {pname:num123} => pname是父组件传来的:  <ComA pname="num1"/>
  // console.log(state) // {num1:10,num2:20,num3:30}
  const num = state[ownProps.pname]
  return {
    num,
    // 父组件传来的数据仍旧可用 redux返回的新属性也能用
    pname: ownProps.pname,
    ajaxData: state.ajaxData,
  }
}
// 把dispath方法映射为组件的props
const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(dispatch, ownProps)
  // console.log(ownProps)
  return {
    // 把acton行为中的函数传给了dispatch 包装成了一个add方法 并返回 通过connect合并到props属性中
    add: dispatch(createAction1(ownProps.pname)),
    sub: dispatch(createAction2(ownProps.pname)),
    // action发请求: 4) 将函数通过connect挂在到组件的props上
    ajax: (req) => dispatch(createAction3(req)),
  }
}
// 参数1:把仓库的状态转换成属性 参数2:把仓库的方法转换成属性
export default connect(mapStateToProps, mapDispatchToProps)(Item)

```

## 24 HOOK

> react中的函数组件默认不支持响应式数据等 HOOK的出现可以完全使用函数组件替代类组件

