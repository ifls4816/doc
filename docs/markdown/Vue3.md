# Vue3

## 安装

- 普通 Vue Cli

```shell
# 升级vuecli到最新
yarn global add @vue/cli
# OR
npm install -g @vue/cli
# 初始化
vue upgrade --next
```

- 使用 vite

```shell
# npm
npm init @vitejs/app <project-name>
# yarn
yarn create @vitejs/app <project-name>
```

- vite 中的 ts 配置

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    /* Basic Options */
    "target": "esnext" /* target用于指定编译之后的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    "module": "esnext" /* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "lib": ["esnext", "dom"] /* lib用于指定要包含在编译中的库文件 */,
    "allowJs": true /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */,
    "checkJs": true /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */,
    "jsx": "preserve" /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */,
    "declaration": true /* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true */,
    "declarationMap": true /* 值为true或false，指定是否为声明文件.d.ts生成map文件 */,
    //"sourceMap": true,                     /* sourceMap的值为true或false，用来指定编译时是否生成.map文件 */
    //"outFile": "./",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
    "outDir": "./" /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */,
    "rootDir": "./" /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */,
    "composite": true /* 是否编译构建引用项目  */,
    "incremental": true /* 是否启用增量编译*/,
    "tsBuildInfoFile": "./" /* 指定文件用来存储增量编译信息 */,
    "removeComments": true /* removeComments的值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */,
    "noEmit": true /* 不生成编译文件，这个一般比较少用 */,
    "importHelpers": true /* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false */,
    "downlevelIteration": true /* 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持 */,
    "isolatedModules": true /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定 */,

    /* Strict Type-Checking Options */
    "strict": true /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */,
    "noImplicitAny": true /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。默认值为false */,
    "strictNullChecks": true /* strictNullChecks为true时，null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。还有个例外就是undefined可以赋值给void类型 */,
    "strictFunctionTypes": true /* strictFunctionTypes的值为true或false，用于指定是否使用函数参数双向协变检查 */,
    "strictBindCallApply": true /* 设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */,
    "strictPropertyInitialization": true /* 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks，默认为false */,
    "noImplicitThis": true /* 当this表达式的值为any类型的时候，生成一个错误 */,
    "alwaysStrict": true /* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式 */,

    /* Additional Checks */
    "noUnusedLocals": true /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false */,
    "noUnusedParameters": true /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查，默认为false */,
    "noImplicitReturns": true /* 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */,
    "noFallthroughCasesInSwitch": true /* 用于检查switch中是否有case没有使用break跳出switch，默认为false */,

    /* Module Resolution Options */
    "moduleResolution": "node" /* 用于选择模块解析策略，有'node'和'classic'两种类型' */,
    "baseUrl": "./" /* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */,
    "paths": {} /* 用于设置模块名称到基于baseUrl的路径映射 */,
    "rootDirs": [] /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */,
    "typeRoots": [] /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */,
    "types": [
      "vite/client"
    ] /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */,
    "allowSyntheticDefaultImports": true /* 用来指定允许从没有默认导出的模块中默认导入 */,
    "esModuleInterop": true /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */,
    "preserveSymlinks": true /* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */,

    /* Source Map Options */
    "sourceRoot": "" /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */,
    "mapRoot": "" /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */,
    //"inlineSourceMap": true,               /* 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部 */
    //"inlineSources": true,                 /* 用于指定是否进一步将.ts文件的内容也包含到输入文件中 */

    /* Experimental Options */
    "experimentalDecorators": true /* 用于指定是否启用实验性的装饰器特性 */,
    "emitDecoratorMetadata": true /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
  },
  // "files": [], // files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件，如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用* ? **/ 等通配符
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"], // include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
  "exclude": [], // exclude表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符
  //"extends": "",   // extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件
  "compileOnSave": true, // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
  "references": [] // 一个对象数组，指定要引用的项目
}
```

## 组件实例

### 创建应用实例

在 main.js 中

```js
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
```

### 组件实例 property

常规 property:methods，props，computed，inject 和 setup
内置 property:$attrs $emit 等(\$是为了避免和用户声明的冲突)
本质上都是在 data 中声明的变量或方法

### 生命周期

beforeCreated created beforeMount mounted beforUpdate updated
beforeDestroy destroyed 替换为 功能未变:beforeUnmount unmounted

## 模板语法

### 插值

v-once 可以使插值变为一次性的 用来做性能优化

### 指令

- v-if

#### 参数

```js
<a v-bind:href="url"> ... </a>

<a v-on:click="doSomething"> ... </a>
```

#### 动态参数

```js
<a v-bind:[attributeName]="url"> ... </a>

data() {
  return {
    attributeName: 'focus' // href src
  }
}
```

#### 修饰符

```js
<form v-on:submit.prevent="onSubmit">...</form> // 告知v-on 触发event.preventDefault()
```

## 过滤器替代

```js
// 局部过滤器推荐使用computed计算属性替代
// 全局过滤器可以使用全局方法挂载到vue实例上
app.config.globalProperties.$filters = {
  myFilters(value) {
    return '$' + value
  },
}
$filters.myFilters('123')
```

## 计算属性

```js
<div id="computed-basics">
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</div>

data() {
  return {
    author: {
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    }
  }
},
computed: {
  //只要author.books不发生改变 值不重新计算 而是取缓存结果 不想缓存可以直接把方法写在methods里
  publishedBooksMessage() {
    return this.author.books.length > 0 ? 'Yes' : 'No'
  }
}
```

计算属性里默认只有 getter 可以自定义 setter

```js
computed: {
  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      // 设置了某些属性的值
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}

this.fullName = 'John Doe' // 触发set 更新了firstName lastName 然后触发get
```

## watch-vue2

更多用来处理用户输入的信息 v-model 使用上优先使用计算属性 满足不了时在用 watch

```js
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</div>

data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer() {
      // send some ajax
    }
  }
```

## Class 与 Style 绑定

- 对象语法

```js
<div :class="{ active: isActive }"></div>

<div :class="classObject"></div>
data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

- 数组语法

```js
<div :class="[activeClass, errorClass]"></div>
// 数组包对象语法
<div :class="[{ active: isActive }, errorClass]"></div>
```

- 绑定内联样式

```js
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

## 列表渲染

- v-for (区别 vue2)

  > vue3 中 `v-if` 具有比 `v-for` 更高的优先级 但也不推荐一起使用

```js
v-for="(item,index) in/of items" // 遍历数组
v-for="(value,key, index) in/of obj" // 遍历对象

```

### 数组更新检测方法

- 改变原数组-触发视图更新:

  - push()
  - pop()
  - shift()
  - unshift()
  - splice()
  - sort()
  - reverse()

- 返回新数组-重新赋值触发更新(局部更新):
  - filter()
  - concat()
  - slice()

```js
example1.items = example1.items.filter(item => item.message.match(/Foo/))
```

- 想变更数组又不改变原数组-计算属性

  - v-for 嵌套中不适用计算属性 也可使用 methods 定义函数方式

  ```js
  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>

  data() {
    return {
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    }
  },
  methods: {
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    }
  }
  ```

## 事件监听

```js
// 传值 并且获取原始的$evnet事件
<button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
methods: {
  warn(message, event) {
    // event
  }
}
// 绑定多个事件
<button @click="one($event), two($event)">Submit</button>
// 事件修饰符
使用频率低 详见文档
// 按键修饰符
<input @keyup.enter="submit" />// 按下enter后触发方法 详见文档
```

## 组件基础

### 注册组件

- 全局

```js
Vue.component('my-component-name', {
  data() {
    return {
      count: 0,
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`,
})
```

- 局部

```js
import ComponentA from './ComponentA.vue'
export default {
  components: {
    ComponentA,
  },
  // ...
}
```

### 组件传值

同级组件间传值 evenBus 原生支持被剔除 需要引入第三方插件

```js
// evenBus.js
// 安装: npm install tiny-emitter --save
import emitter from 'tiny-emitter/instance'
export default {
  $on: (...args: any) => emitter.on(...args),
  $once: (...args: any) => emitter.once(...args),
  $off: (...args: any) => emitter.off(...args),
  $emit: (...args: any) => emitter.emit(...args),
}
```

### 插槽

- 匿名插槽

```js
// 匿名插槽的备用内容
// father
<con-son></con-son>
// son 此处slot中 若父组件不传值 则默认显示slot中的文字
<div>
  <h1>my name is son</h1>
  <slot>备用容内</slot>
</div>
```

- 命名插槽(区别 vue2)

```js
// father template必须写 default可改其他名字 default不写 就是匿名插槽
<con-son>
  <template v-slot:default>
    <h1>Here might be a page title</h1>
  </template>
</con-son>
// son
<slot name="default"></slot>
```

- 作用域插槽(区别 vue2)

```js
// 子组件中的item反向送给父组件 经过父组件处理后的数据(标签) 再经插槽送给子组件渲染
// son
data() {
  return{
    items: ['Feed a cat', 'Buy milk']
  }
}
<ul>
  <li v-for="(item, index) in items" :key="index">
    <slot :item="item" :index="index"></slot>
  </li>
</ul>
// father
<con-son>
//此处名字可随意起 default可省略 本质上是函数实现 可以解构赋值
// v-slot:default={ item } v-slot:default={ item: id } v-slot:default={ item = 'Placeholder' } // 设置默认选项
  <template v-slot:default="slotProps"> // v-slot:可以缩写为 #default="slotProps"
    <i>---</i>
    <span>{{ slotProps.item }}</span>
  </template>
</con-son>
```

### 动态组件

```js
// currentTabComponent 组件名字
<component :is="currentTabComponent"></component>

// kep-alive动态缓存 切走的标签会被缓存
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

### 异步组件

```js
// 不使用就不加载
import { defineAsyncComponent } from 'vue'
components: {
  AsyncComponent: defineAsyncComponent(() =>
    import('./components/AsyncComponent.vue')
  )
}

// 可以写在组件中 不能写在router.js里
const AsyncComp = defineAsyncComponent(() => import('./AsyncComponent.vue'))
// 异步组件的选项
const AsyncComp = defineAsyncComponent({
  loader: () => import('./AsyncComponent.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent, // 错误时显示的组件
  loadingComponent: LoadingComponent, // 加载时显示的组件
})
app.component('async-component', AsyncComp)
```

## Props

> Props 一般为单向数据流 传递过来的数据需避免直接更改 可采用将 props 放在子组件 data 中 或者放在计算属性中

### Props 验证

```js
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    // 具有默认值的函数
    propG: {
      type: Function,
      // 与对象或数组默认值不同，这不是一个工厂函数 —— 这是一个用作默认值的函数
      default: function() {
        return 'Default function'
      }
    }
  }
```

## Attribute(非 props 属性)

写在组件标签上的属性会被默认继承到根节点 常见的 class、style 和 id

### Attribute 继承

```js
<data-picker data-status="current" @change="submitChange"></data-picker>
// 到子组件上:
<div data-status="current" @change="submitChange">
  <input type="text"/>
</div>
```

### 禁用 Attribute 继承

- 禁用:

```js
inheritAttrs: false,
data(){return{}},
method:{}
```

- 场景:
  想把属性或方法应用到根节点之外的标签上 上面例子中不想绑定在 div 上 而是绑定在 input 上

```js
<data-picker data-status="current" @change="submitChange"></data-picker>
// 到子组件上:
app.component('date-picker', {
  inheritAttrs: false,
  template: `
    <div class="date-picker">
      <input type="datetime-local" v-bind="$attrs" />
    </div>
  `
})
// 渲染出来:
<div class="date-picker">
  <input type="text" data-status="current" @change="submitChange" />
</div>
```

### 多个根节点上的 Attribute 继承

vue3 允许组件有多个根节点, 写 attri 时要做显性绑定

```js
<custom-layout id="custom-layout" @click="changeValue"></custom-layout>
// 这将发出警告
app.component('custom-layout', {
  template: `
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  `
})

// 没有警告，$attrs被传递到<main>元素
app.component('custom-layout', {
  template: `
    <header>...</header>
    <main v-bind="$attrs">...</main>
    <footer>...</footer>
  `
})
```

## v-model 跨组件改值

父组件中定义的 bookTitle 可以通过子组件的@input 进行修改

```js
// 父组件
<com-son v-model:title="bookTitle"> </com-son>
// 子组件
<input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
props: ['title'],
emits: ['update:title'], // 可不写 作用暂时不清楚
// 类似于props 也可以在emits定义部分功能了 详见文档
<a href="https://v3.cn.vuejs.org/api/options-data.html#emits">emits</a>
```

## Provide / Inject

- 场景: 父组件提供方法/属性 (多层级嵌套的)子组件注入

  ```js
  // 父组件
  const app = Vue.createApp({})
  app.component('todo-list', {
    data() {
      return {
        todos: ['Feed a cat', 'Buy tickets']
      }
    },
    provide() {
      return {
        todoLength: this.todos.length,
        test: this.test
      }
    },
    methods: {
        test() {
            // do something
        }
    }
    template: `
      <div>
        {{ todos.length }}
        <!-- 模板的其余部分 -->
      </div>
    `
  })

  // 子组件
  app.component('todo-list-statistics', {
    inject: ['user'],
    created() {
      console.log(`Injected property: ${this.user}`) // > 注入 property: John Doe
    }
  })
  ```

- 注意: 此种写法传递的数据并不是响应式的 要响应式数据要通过下面写法

  ```js
  todoLength: Vue.computed(() => this.todos.length)
  ```

## setup 组合式 API

### 基本用法

传统的 data methods 称为选项式 API

- 场景: 业务多的时候 查找相关业务需要不同代码块间反复跳转 setup 中写 能够使代码更加集中

```js
// 在组件创建之前执行 无法访问this 有props和context两个参数 return的值可以被组件内其他部分访问
import { ref } from 'vue'
setup (props) {
  // const repositories = [] // 直接声明的变量不是响应式 要通过ref
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(props.user)
  }

  return {
    repositories,
    getUserRepositories // 返回的函数与方法的行为相同
  }
}
```

示例: (未拆分 setup 后续有拆分示例)

```js
// 父组件
<template>
  我是父组件:
  {{ user }}
  <hr />
  <com-son :user="user"> </com-son>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // 此处写法是为了启用ts的类型推断 不写也不影响vue功能
import ComSon from './components/com-son.vue'
export default defineComponent({
  name: 'App',
  components: {
    ComSon,
  },
  data() {
    return {
      user: 'test',
    }
  },
  mounted() {
    // 模拟送给子组件的值发生变化
    setTimeout(() => {
      this.user = 'zhangsan'
    }, 2000)
  },
})
</script>


// 子组件
<template>
  <div>子元素</div>
  {{ repositories.name }}
  {{ repositories.age }}
  {{ repositories.user }}
  <hr />
</template>

<script lang="ts">
// 模拟api
const fetchUserRepositories = (user: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '张三',
        age: 18,
        user,
      })
    }, 1000)
  })
}
import { ref, onMounted, watch, toRefs, computed, defineComponent } from 'vue'
export default defineComponent({
  computed: {},
  name: 'comSon',
  props: ['user'],
  // 传统选项式watch写法
  // watch: {
  //   user: 'getUserRepositories', // 父组件的user发生变化时 再次调用函数
  // },
  setup(props: any) {
    const repositories: any = ref([]) // 声明响应式数组
    const getUserRepositories = async () => {
      repositories.value = await fetchUserRepositories(props.user)
    }

    // 组合式API引入的生命周期
    // 和传统声明周期一致 快于传统生命周期
    // 打印结果为: created:1 onMounted:3 mounted:2
    // 也可以直接写作:onMounted(getUserRepositories) 在 `mounted` 时调用 `getUserRepositories`
    onMounted(() => {
      console.log('3')
      getUserRepositories()
    })

    // watch写法
    // 注意: 默认监听props.user是无效的 setup参数不是响应式数据
    // 也可以直接写作:watch(user, getUserRepositories)
    const { user } = toRefs(props) // 此处toRefs() 函数能把props转换成响应式数据
    watch(user, (oldValue, newValue) => {
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
      getUserRepositories()
    })

    // computed写法
    const searchQuery = ref('')
    const repositoriesMatchingSearchQuery = computed(() => {
      return repositories.value.filter((repository: any) =>
        repository.name.includes(searchQuery.value)
      )
    })

    return {
      repositories,
      getUserRepositories,
      repositoriesMatchingSearchQuery
    }
  },
  created() {
    console.log('1')
  },
  mounted() {
    console.log('2')
  },
})
</script>

```

### 参数

- props

```js
// props本身是响应式的 但是解构出来的值不是 需要用toRefs转
import { toRefs } from 'vue'

setup(props) {
  const { title } = toRefs(props)
  console.log(title.value)
  console.log(title?.value)

  // 若title属性是可选的 可用toRef转 否则title.value会报错 此问题影响不大
  const title = toRef(props, 'title')
  console.log(title.value)
}

```

- context

```js
export default {
  setup(props, { attrs, slots, emit }) {
    // context非响应式 随意解构
    // Attribute (非响应式对象)
    console.log(context.attrs)

    // 插槽 (非响应式对象)
    console.log(context.slots)

    // 触发事件 (方法)
    console.log(context.emit)
  },
}
```

### 模板使用

> setup return 出来的数据可以直接通过 this 访问到

> ref 自动浅解包:

```js
<template>
  <div>
    <span>{{ count }}</span>
    <button @click="count ++">Increment count</button>
    <button @click="nested.count.value ++">Nested Increment count</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const count = ref(0)
      return {
        count,

        nested: { // return出来的是个对象时 需要通过.value访问 其他情况下会触发自动浅解包 不需要.value
          count
        }
      }
    }
  }
</script>
```

### 生命周期

| 选项式 API        | Hook inside `setup` |
| ----------------- | ------------------- |
| `beforeCreate`    | Not needed\*        |
| `created`         | Not needed\*        |
| `beforeMount`     | `onBeforeMount`     |
| `mounted`         | `onMounted`         |
| `beforeUpdate`    | `onBeforeUpdate`    |
| `updated`         | `onUpdated`         |
| `beforeUnmount`   | `onBeforeUnmount`   |
| `unmounted`       | `onUnmounted`       |
| `errorCaptured`   | `onErrorCaptured`   |
| `renderTracked`   | `onRenderTracked`   |
| `renderTriggered` | `onRenderTriggered` |
| `activated`       | `onActivated`       |
| `deactivated`     | `onDeactivated`     |

> setup 本身就相当于 beforeCrated 和 created 写的时候不需要这两个 直接写在 setup 中即可

### setup 中的 Provide / Inject

```js
// 父组件
export default {
  name: 'App',
  components: {
    ComSon,
  },
  setup() {
    // 1 父组件提供数据
    provide('location', '南')
    provide('geolocation', {
      longitude: 90,
      latitude: 135,
    })
    // 注意: 此种写法不是响应式数据 提供数据前转换成响应式即可:
    const nan = ref('南')
    provide('locationNew', nan)

    // 注意2: 修改响应式数据应该在provide时修改 若非要在inject修改 需要provide提供方法
    const updateLocation = (newValu: any) => {
      nan.value = newValu
    }
    // provide提供修改方法
    provide('updateLocation', updateLocation)

    // 注意3: 为保证provide的数据不被inject更改 可以使用readonly属性
    provide('location', readonly(nan))
  },
}

// 子组件
export default {
  setup() {
    // 2 子组件注入 使用
    const userLocation = inject('location')
    const userGeolocation = inject('geolocation')
    console.log(userLocation)
    console.log(userGeolocation)

    const locationNew = inject('locationNew')

    // 注意3: inject使用修改方法
    const updateLocation: any = inject('updateLocation')
    updateLocation('北')
    console.log(locationNew)
  },
}
```

### \$refs

```js
<template>
  <div ref="root">子元素</div>
  <div ref="root2">子元素222</div>
  <hr />
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
export default {
  props: {
    user: String,
  },
  setup() {
    // vue3 组合式api写法(setup中没有this)
    const root = ref(null)
    onMounted(() => {
      console.log(root.value)
    })
    // 注意 这里需要return才能访问 不然是null (挂载时虚拟dom进行的操作 不return虚拟dom无法捕捉)
    return {
      root,
    }
  },
  mounted() {
    // vue2 选项式api写法
    console.log(this.$refs.root2)
  },
}
</script>
```

### 完整 setup 使用

api.ts

```js
// 模拟api
const fetchUserRepositories = (user: string) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: '张三',
        age: 18,
        user,
      })
    }, 1000)
  })
}
export { fetchUserRepositories }
```

getData.ts

```js
import { fetchUserRepositories } from './api'
import { ref, toRefs, onMounted, watch } from 'vue'
// 接收props属性
export default function(props: any) {
  const repositories: any = ref([]) // 声明响应式数组
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(props.user)
  }
  onMounted(getUserRepositories)

  const { user } = toRefs(props) // 此处toRefs() 函数能把props转换成响应式数据
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories,
  }
}
```

computed.ts

```js
import { computed } from 'vue'
// 接收repositories
export default function(repositories: any) {
  const repositories2 = computed(() => {
    if (repositories.value.name) {
      repositories.value.name = repositories.value.name + '--has benn computed'
    }
    return repositories.value
  })

  return {
    repositories2,
  }
}
```

com-son.vue

```js
<template>
  <div>子元素</div>
  {{ repositories.name }}
  {{ repositories.age }}
  {{ repositories.user }}
  <hr />
</template>

<script lang="ts">
import getData from './getData'
import comput from './computed'
export default {
  computed: {},
  name: 'comSon',
  props: ['user'],
  setup(props: any) {
    // repositories (data中的数据) getUserRepositories(获取数据的方法)
    const { repositories, getUserRepositories } = getData(props)

    // computed
    const { repositories2 } = comput(repositories)
    console.log(repositories2)

    return {
      repositories: repositories2, // 导出的是计算属性的值
      getUserRepositories,
    }
  },
}
</script>

```

## 自定义指令

基本使用:

```js
directives: {
    focus111: {
      // 指令的定义
      mounted(el) {
        console.log(el) // <input></input>
        el.focus()
      },
    },
  }

<input type="text" v-focus111 />
```

## 全局挂载(插件)

```js
// base.ts
const test = () => {
  console.log('test fn')
}

// 往vue全局中添加方法
export default {
  // app: 部分vue方法  options:函数调用时自定义的值
  install: (app: any, options: any) => {
    // 组件中setup访问: vm: any = getCurrentInstance()  vm.ctx.$test
    app.config.globalProperties.$test = test

    app.provide('i18n', options) // 组件中通过inject('i18n')获取

    app.directive('my-directive', {
      // 自定义指令 可以直接在模板中使用my-directive
      mounted(el: any, binding: any, vnode: any, oldVnode: any) {
        // some logic ...
      },
    })

    app.mixin({
      // setup中暂时没有找到访问方法 存疑  setup目的是替代mixin 可能也不需要访问   可用选项式api访问
      data() {
        return {
          mixinData: 'my name is mixin',
        }
      },
      methods: {
        mixinFn() {
          console.log('my name is minxin Fn')
        },
      },
    })
  },
}

//main.ts
import base from './assets/libs/base'

const app: any = createApp(App)
app.use(base, 'test diy')
app.mount('#app')
```

## 响应式声明 ref reactive toRef toRefs区别

- ref reactive =>可触发页面更新

  - ref 可用于任何类型的数据创建响应式 => 通过 ref 创建引用类型响应式数据时 实际上也是调用 reactive

  - reactive 只用于创建引用类型数据的响应式

    > 通过 ref reactive 转换的响应式数据不能解构 会破坏响应式 正常 value.属性即可

    > reactive 创建的属性 需要.value 访问 模版中因为有浅解析可以不用

- toRef toRefs =>不可触发页面更新

  - toRef 用于创建对象指定的属性响应式，只能控制一个对象中的一个属性 类似 ref

    > toRef(obj, 'target') // obj 要创建响应式的对象 'target' 要创建响应式的属性 不驱动视图 此处不能解构

  - toRefs 用于创建对象响应式 类似 reactive > toRef(obj) // 整个 obj 都改为响应式 不驱动视图 能解构
    | 类型 | 是否触发页面改变 | 是否可以解构 | 创建的响应式数据 |
    | -------- | ---------------- | ------------ | --------------------- |
    | ref | `是` | 否 | 简单/复杂数据类型都可 |
    | reactive | `是` | 否 | 复杂数据类型 |
    | toRef | 否 | 否 | 针对对象的某一属性 |
    | toRefs | 否 | `是` | 针对整个对象 |

## 响应式变量的 computed 和 watch

### computed 计算值

```js
const count = ref(1)
const plusOne = computed({
  // 计算属性默认触发set
  get: () => count.value + 1,
  // 当重新定义plusOne当值时 会触发set属性
  set: val => {
    console.log('val', val) // 1
    // 修改count的值
    count.value = val - 1
  },
})
// 重新定义plusOne值
plusOne.value = 1
console.log(count.value) // 0
```

### watchEffect 副作用

- 使用

```js
const count = ref(0) // 经验证: 仅简单数据类型有效 obj无效
// const obj = ref({a:1}) // 改变obj的值 watchEffect无法监听到
watchEffect(() => {
  // 类似与computed 首次默认执行 监测到响应式数据变化时会再执行
  console.log('effect', count.value) // 首次:0 第二次:1
})

setTimeout(() => {
  count.value++
}, 2000)
```

- 停止

```js
// 2.1:当 watchEffect 在组件的 setup() 函数或生命周期钩子被调用时，侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。
// 2.2:手动停止
const stop = watchEffect(() => {
  /* do sth*/
})
stop()
```

- 异步副作用清除

```js
const data = ref(null)
watchEffect(onInvalidate => {
  const token = fetchData(id.value) // 异步操作
  onInvalidate(() => {
    // 某一时刻id值变化了 或者整个watchEffect被停止了 此时需要打断上面的异步操作
    token.cancel() // 此处.cancel只是模拟打断异步操作 不是vue上带的函数 具体可以参考axios打断异步操作.cancel()
  })
})
```

- 副作用的刷新时机
  > 副作用会在 update 生命周期执行前触发用户自定义的 watchEffect 实际上 update 也是一种 watchEffect
  > 若要改变副作用的刷新时机 <a target="_blanks" href="https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA">参照文档</a>

### watch

> 区别于 watchEffect 副作用
>
> - watch 默认不执行
> - 能更精准的监听什么状态下执行
> - 能访问变化前后的值 oldValue newValue

- 单个监听:

```js
setup() {
    // 监听ref
    let num: any = ref(0)
    watch(num, (newValue, oldValue) => {
      console.log(newValue) // 1
      console.log(oldValue) // 0
    })
    // 监听getter 首个参数接收一个函数
    const arr: any = ref([1, 2])
    watch(
      () => arr.value.length,
      (newValue, oldValue) => {
        console.log('newValue', newValue) // 3
        console.log('oldValue', oldValue) // 2
      }
    )
    setTimeout(() => {
      num.value++
      arr.value.push(3)
    }, 2000)

}
```

- 多个监听(以数组形式传入)

```js
const firstName = ref('')
const lastName = ref('')
watch([firstName, lastName], (newValues, prevValues) => {
  console.log(newValues, prevValues)
})
firstName.value = 'John' // 第一次: 新值:["John",""] 旧值:["", ""]
lastName.value = 'Smith' // 第二次: 新值:["John", "Smith"] 旧值: ["John", ""]
```

- 监听对象或数组

```js
const numbers = reactive([1, 2, 3, 4])

watch(
  () => [...numbers], // 对象或数组要以深拷贝方式传入
  (numbers, prevNumbers) => {
    console.log(numbers, prevNumbers)
  }
)

numbers.push(5) // logs: [1,2,3,4,5] [1,2,3,4]

// 深层嵌套时 需要加deep
const state = reactive({
  id: 1,
  attributes: {
    name: '',
  },
})
watch(
  () => {
    return { ...state }
  },
  (state, prevState) => {
    console.log('deep ', state.attributes.name, prevState.attributes.name) // 日志: "deep " "Alex" "Alex"
  },
  { deep: true }
)
```

> 注意: watch 中的停止 清除 刷新时机等 和 watchEffect 一致 参照上文

## 遗留部分整理

### 全局 api 变更

```js
// 全局挂载属性
// vue2
Vue.prototype.$http
// vue3
const app = createApp({})
app.config.globalProperties.$http

// Vue.use
// vue2
Vue.use(VueRouter)
// vue3
const app = createApp(MyApp)
app.use(VueRouter)

// nextTick
// vue2
this.nextTick(() => {})
// vue3
import { nextTick } from 'vue'
nextTick(() => {})
```

### template 标签的 v-for

vue2 中 template 标签的 v-for 不能设置 key vue3 可以了

## 配合 ts 的部分写法

### vue 推荐的 ts 配置

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // 这样就可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

### 定义 data 中的数据类型-TS 定义接口

```ts
// 一般情况下ts能正常推断出data中的数据类型 但是可以自行定义
interface Book {
  title: string
  author: string
  year: number
}

const Component = defineComponent({
  data() {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020,
      } as Book,
    }
  },
})
```

### computed 注解

```ts
// 选项式 需要手动注解
computed: {
  greeting(): string {
    return this.message + '111'
  }
}
// 组合式 不需要 vue可推断
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'CounterButton',
  setup() {
    let count = ref(0)
    // 只读
    const doubleCount = computed(() => count.value * 2)
    const result = doubleCount.value.split('') // => Property 'split' does not exist on type 'number'
  }
})
```

### props 注解

```ts
import { PropType } from 'vue'
interface Book {
  title: string
  author: string
  year: number
}

props: {
  name: String,
  success: { type: String },
  callback: {
    type: Function as PropType<() => void>
  },
  book: {
    type: Object as PropType<Book>,
    required: true
  }
}

```

### setup 注解

> setup 的参数 props 不需要进行注解 会直接从 props:{}处推断

```ts
props: {
  message: {
    type: String,
    required: true
  }
},
setup(props) {
  const result = props.message.split('') // 正确, 'message' 被声明为字符串
  const filtered = props.message.filter(p => p.value) // 将引发错误: Property 'filter' does not exist on type 'string'
}
```

### ref 注解

```ts
import { ref } from 'vue'
setup() {
  const year = ref(2020)
  // 此处ref会被vue自动推断类型为number
  const result = year.value.split('') // => Property 'split' does not exist on type 'number'
  // 也可指定ref类型
  const newYear = ref<string | number>(2020)
}
```

### reactvie 注解

```ts
import { defineComponent, reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const book = reactive<Book>({ title: 'Vue 3 Guide' })
    // or
    const book: Book = reactive({ title: 'Vue 3 Guide' })
    // or
    const book = reactive({ title: 'Vue 3 Guide' }) as Book
  },
})
```

### 为组件中自定义方法定义类型

```ts
// 父组件
<template>
  <box1 ref="modal"></box1>
  <button @click="openModal">按钮</button>
  <hr />
</template>

<script lang="ts">
import box1 from './components/box1.vue'
import { ref, defineComponent } from 'vue'
export default defineComponent({
  components: {
    box1,
  },
  setup() {
    // 此处相当于this.$refs.modal
    const modal = ref<InstanceType<typeof box1>>() //定义model类型为子组件类型
    const openModal = () => {
      modal.value?.open()
    }
    return { modal, openModal }
  },
})
</script>
// 子组件
<template>
  <div id="box">
    <p v-if="isContentShown">我是box1</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const isContentShown = ref(false)
    const open = () => (isContentShown.value = true)
    return {
      isContentShown,
      open,
    }
  },
})
</script>

```

## script setup 语法糖

### props 使用

接收父组件传值使用

```ts
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  content: {
    type: String,
    require: true,
  },
})
```
