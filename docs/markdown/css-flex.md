# 1 css-flex

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

## 3 容器(container)的属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### 3.1 flex-direction 主轴方向

> 决定主轴(main axis)的方向

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
  /* row（默认值）：主轴为水平方向，起点在左端。 */
  /* row-reverse：主轴为水平方向，起点在右端。 */
  /* r=column：主轴为垂直方向，起点在上沿。 */
  /* column-reverse：主轴为垂直方向，起点在上沿。 */
}
```

### 3.2 flex-wrap 主轴是否换行

> 若是一行显示不下 设置换行方式

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
  /* nowrap（默认值）: 牺牲flex-item的宽度 保持不换行 */
  /* wrap: flex-containter宽度不够时换行 */
  /* wrap-reverse: 宽度不够时换行 保持后面的元素在前 */
}
```

### 3.3 flex-flow 方向+换行 简写

> flex-direction 和 flex-flow 简写形式

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
  /* row nowrap(默认值): 主轴方向row  不换行nowrap  */
  /* 其余属性和flex-direction flex-wrap一致 */
}
```

### 3.4 justify-content 主轴上的对齐方式

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
  /* flex-start（默认值）：左对齐 */
  /* flex-end：右对齐 */
  /* center： 居中 */
  /* space-between：两端对齐，项目之间的间隔都相等。 */
  /* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 */
}
```

### 3.5 align-item 垂直轴上的对齐方式

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
  /* stretch（默认值）：如果flex-item未设置高度或设为auto，将占满整个容器的高度。若flex-item设置高度 则该属性不生效 */
  /* flex-start：交叉轴的起点对齐。 */
  /* flex-end：交叉轴的终点对齐。 */
  /* center：交叉轴的中点对齐。 */
  /* baseline: 项目的第一行文字的基线对齐。 */
}
```

### 3.6 align-content 多根主轴情况(一行显示不下 出现换行时)

> 类似于 justify-content 只不过 align-content 控制的是多个主轴 justify-content 控制的是一个主轴上的 flex-item 情况

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
  /* stretch（默认值）：轴线占满整个交叉轴。 */
  /* flex-start：与交叉轴的起点对齐。 */
  /* flex-end：与交叉轴的终点对齐。 */
  /* center：与交叉轴的中点对齐。 */
  /* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。 */
  /* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。 */
}
```

## 4 项目(flex-item)的属性

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

<!-- https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html -->