# css-flex

## 2 Flex 布局是什么

> Flexible Box 即 弹性布局

```css
.box {
  display: flex;
}
.box {
  /* 行内元素也可以flex布局 */
  display: inline-flex;
  display: -webkit-flex; /* Safari webkit内核要加前缀 */
}
```

> 注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。 本身的 text-align 也会失效

## 2 基本概念

> 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![pci](../assets/css-flex/1.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。

## 3 容器的属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### 3.1 flex-direction

> 决定主轴(main axis)的方向

<!-- https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html -->