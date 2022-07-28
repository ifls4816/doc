# vueuse 使用

## State 响应式数据

### createGlobalState 全局 state

> 配合 useStorage 可以实现全局 vue 数据保持

```js
// store.js
import { createGlobalState, useStorage } from '@vueuse/core'

// createGlobalState函数调用 返回的是ref响应值
export const useGlobalState = createGlobalState(() =>
  useStorage('vueuse-local-storage', 'initData'),
)
// ComA.vue
import { useGlobalState } from '../store'

const state = useGlobalState()

const change = () => {
  state.value = 'someData'
}
```

### createSharedComposable 组合函数用于多个 vue 实例

```js
import { createSharedComposable, useMouse } from '@vueuse/core'
const useSharedMouse = createSharedComposable(useMouse)
// CompA.vue
const { x, y } = useSharedMouse()
// CompB.vue - 此处的函数将会获取CompA的数据 而不是重新监听
const { x, y } = useSharedMouse()
```

### useRefHistory ref 历史记录 自动触发

```js
const counter = ref(0)
const { history, undo, redo } = useRefHistory(counter)
```

### useManualRefHistory ref 历史记录 手动触发

```js
const counter = ref(0)
const { canUndo, canRedo, history, commit, undo, redo } = useManualRefHistory(counter, {
  deep: true,
  debounce, // 防抖时间
  capacity: 4, // 记录保存个数
})
counter.value = 1
commit() // 需要手动调用commit 计数器才会增加
```

### useDebouncedRefHistory 防抖函数自动触发

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useDebouncedRefHistory } from '@vueuse/core'

const counter = ref(0)
const debounce = 1000
const { history, undo, redo, canUndo, canRedo } = useDebouncedRefHistory(counter, {
  deep: true,
  debounce, // 防抖时间
  capacity: 4, // 记录保存个数
})
</script>

<template>
  <h1>ComHello</h1>

  {{ JSON.stringify(history) }}
  <input type="number" v-model="debounce" />
  <div>
    <button @click="counter++">btn</button>
  </div>
  <div><button @click="undo" :disabled="!canUndo">undo</button></div>
  <div><button @click="redo" :disabled="!canRedo">redo</button></div>
</template>
```

### useStorage 本地存储

```js
const flag = useStorage('my-flag', true, sessionStorage) // 返回响应式flag
// 改值需要操作value 直接useStorage不会覆盖原来存在的值
flag.value = false
// 删除 my-flag
state.value = null
```

## Element 元素

### useDraggable 拖动元素

```vue
<script setup lang="ts">
import { ref } from 'vue'
// 组件式
import { UseDraggable } from '@vueuse/components'
// 函数式
import { useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)

const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <!-- 注意:要给固定定位 -->
  <UseDraggable
    storage-key="vueuse-draggable"
    storage-type="session"
    style="position: fixed;"
    :initialValue="{ x: 100, y: 100 }"
    v-slot="{ x, y }"
  >
    我是可以拖动的 {{ x }} , {{ y }}
  </UseDraggable>
  <div ref="el" :style="style" style="position: fixed">我也是可以拖动的!!!{{ x }}, {{ y }}</div>
</template>
```

### useDropZone 拖动到指定区域

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'

const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  // called when files are dropped on zone
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)
</script>

<template>
  <div ref="dropZoneRef">
    Drop files here
    {{ isOverDropZone }}
    <img
      src="../assets/Snipaste_2022-06-02_23-15-16.jpg"
      style="width:100px;height:100px;"
      alt=""
    />
  </div>
</template>
```

### useElementVisibility 检查特定元素是否在视窗内

### useIntersectionObserver 检测目标元素在特定区域内的可见性

### useMutationObserver 监听 dom 变化

### useResizeObserver 监听元素宽高变化

### useWindowSize 监听页面宽高变化

### useWindowFocus 监听页面是否聚焦

> 使用 window.onfocus 实现 window.onblur

### useWindowScroll 响应式监听页面滚动

## Browser 浏览器

### useClipboard 剪切板

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
  <button @click="copy()">
    <!-- by default, `copied` will be reset in 1.5s -->
    <span v-if="!copied">Copy</span>
    <span v-else>Copied!</span>
  </button>
</template>
```

### useColorMode 暗色模式

```vue
<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    // dim: 'dim',
    // cafe: 'cafe'
  },
})
</script>

<template>
  <button @click="mode === 'dark' ? (mode = 'light') : (mode = 'dark')">change</button>
</template>

<style>
html[theme='dark'] {
  background: pink;
}
html[theme='light'] {
  background: green;
}
</style>
```

### useDark 是否暗色

```vue
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html', // 挂载目标 body html ...
  attribute: 'class', // 挂载的attribute 可以为 任意字符串
  valueDark: 'dark',
  valueLight: 'light',
})
console.log(isDark.value)
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">toggle</button>
</template>

<style>
html.light {
  background-color: pink;
}
html.dark {
  background-color: blue;
}
</style>
```

### useEventListener 可自动卸载掉事件监听

```js
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => {
  console.log(evt)
})
```

### useEyeDropper 取色器

### useFullscreen 全屏

### useImage 图片加载

### useScriptTag 动态加载 script 标签

> 组件销毁后会自动移除

### useStyleTag 动态加载样式

```vue
<script setup lang="ts">
import { useStyleTag } from '@vueuse/core'

const { id, css, load, unload, isLoaded } = useStyleTag('.foo {background: blue; }', {
  immediate: true,
})
</script>

<template>
  <div class="foo"></div>
  <button @click="load">load</button>
  <button @click="unload">unload</button>
</template>

<style scoped>
.foo {
  width: 100px;
  height: 100px;
}
</style>
```

### useTextareaAutosize 文本域根据输入内容调整宽高

## Sensors 传感器

### onClickOutside 点击弹层外部

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
const modal = ref(false)
function closeModal() {
  modal.value = false
}
</script>

<template>
  <button @click="modal = true">Open Modal</button>
  <div v-if="modal" v-on-click-outside="closeModal">Hello World</div>
</template>
```

### onLongPress 监听长按

### useElementHover 响应式hover

### usePointerSwipe 鼠标滑动

### useSwipe 触摸滑动

## Animation

### useInterval / useTimeout 递增计数器

```js
import { useInterval } from '@vueuse/core'
// count will increase every 200ms
const counter = useInterval(200)

// or
const { counter, pause, resume } = useInterval(200, { controls: true })
```

### useIntervalFn / useTimeoutFn 可控定时器

### useNow 响应式获取当前时间

### useTimestamp 响应式获取时间戳

