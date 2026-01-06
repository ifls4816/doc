# 1 css-grid

> 整理自<a href="https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html">阮一峰博客</a>

# 2 概述

> Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

# 3 container 容器属性

## 3.1 display

```css
div {
  /* 块级元素容器 */
  display: grid;
  /* 行内元素容器 */
  display: inline-grid;
}
```

## 3.2 grid-template-columns grid-template-rows

```css
/* 列宽 行高 */
.container {
  display: grid;
  /* 定义每一列的列宽 */
  grid-template-columns: 100px 100px 100px;
  /* 定义每一行的行高 */
  grid-template-rows: 100px 100px 100px;
}

/* repeat */
.container {
  display: grid;
  /* 等同于上面的写法 */
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  /* 重复某种模式100px 20px 80px 重复两次 */
  grid-template-columns: repeat(2, 100px 20px 80px);
}

/* auto-fill */
/* 有时，单元格的大小是固定的，但是容器的大小不确定。
  如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充 */
.container {
  display: grid;
  /* 能放下3列 多余的元素自动换行 */
  width: 350px;
  grid-template-columns: repeat(auto-fill, 100px);
  /* 能放下3行 多余元素溢出 */
  height: 350px;
  grid-template-rows: repeat(auto-fill, 100px);
}

/* fr关键字 */
/* 为了方便表示比例关系，网格布局提供了fr关键字（fraction的缩写，意为'片段'）。
  如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。 */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 等同于
  grid-template-columns: 50% 50%;
  */
  /* 三列 150px 剩下的均分剩余宽度 如width:300px 则剩下的为(300px 150px)/3*2 */
  grid-template-columns: 150px 1fr 2fr;
}

/* minmax */
/* 函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。 */
grid-template-columns: 1fr 1fr minmax(100px, 1fr);

/* auto */
/* auto关键字表示由浏览器自己决定长度。 */
grid-template-columns: 100px auto 100px;

/* 网格线的名称 */
/* 可以使用方括号，指定每一根网格线的名字，方便以后的引用。 */
/* 网格布局允许同一根线有多个名字，比如[fifth-line row-5] */
.container {
  display: grid;
  /* 3行 x 3列 因此有4根垂直网格线和4根水平网格线 [c1]-[r4] 是这些网格线的名字*/
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

## 3.3 grid-row-gap grid-column-gap grid-gap

```css
.container {
  row-gap: 10px; // 行间距
  column-gap: 10px; // 列间距
  gap: 10px 10px; // 缩写
  gap: 10px;
}
```

## 3.4 grid-template-areas

> 网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas 属性用于定义区域

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  /* 划分出9个单元格 */
  grid-template-areas:
    'a b c'
    'd e f'
    'g h i';
  /* 合并单元格 */
  grid-template-areas:
    'a a a'
    'b b b'
    'c c c';
  /* 实际使用 */
  grid-template-areas:
    'header header header'
    'main main sidebar'
    'footer footer footer';
  /* 不需要的区域可以用 . 表示 */
  grid-template-areas:
    'a . c'
    'd . f'
    'g . i';
}
.item1 {
  /* 指定item1放在a区域 */
  grid-area: a; // 单元格1的名字为a
}
.item2 {
  grid-area: b; // 单元格2的名字为b
}
.item3 {
  grid-area: c;
}
```

## 3.5 grid-auto-flow

> 网格排序

```css
/* 
 默认值是row 先行后列 
 123
 456
 789
*/
grid-auto-flow: row;
/* 先列后行
  147
  258
  369
*/
grid-auto-flow: column;
/* 先行后列 尽可能填满 */
grid-auto-flow: row dense;
/* 先列后行 尽可能填满 */
grid-auto-flow: column dense;
```

## 3.6 justify-items align-items place-items

> item 内容的位置
> justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格内容的垂直位置（上中下）。

```css
place-items: <align-items> <justify-items>;
```

## 3.7 justify-content align-content place-content

> container 容器的位置
> justify-content 属性是整个内容区域在容器里面的水平位置（左中右），align-content 属性是整个内容区域的垂直位置

```css
place-content: <align-content> <justify-content>;
```

## 3.8 grid-auto-columns grid-auto-rows

> 隐式列/隐式行 指定在网格外的项目 网格内的不受影响
> 有时候，一些项目的指定位置，在现有网格的外部。比如网格只有 3 列，但是某一个项目指定在第 5 行。这时，浏览器会自动生成多余的网格，以便放置项目。
> 用法和 grid-template-rows gird-template-columns 一致

## 3.9 grid-template grid 简写

> grid-template 属性是 grid-template-columns、grid-template-rows 和 grid-template-areas 这三个属性的合并简写形式。

> grid 属性是 grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow 这六个属性的合并简写形式。

# 4 item 项目属性

## 4.1 指定网格线

grid-column-start 属性，
grid-column-end 属性，
grid-row-start 属性，
grid-row-end 属性

> 指定具体的单元格在哪个网格线中开始/结束

```css
/* 基本使用 */
.item-1 {
  /* 第二列开始 */
  grid-column-start: 2;
  /* 第四列结束 */
  grid-column-end: 4;
}

/* 指定的网格线的名字 */
.container {
  grid-template-areas:
    'a b c'
    'd e f'
    'g h i';
}
.item-1 {
  grid-column-start: d;
  grid-column-end: f;
  grid-row-start: d;
  grid-row-end: f;
}

/* span关键字 跨越意思 即跨越多少个网格 */
.item-1 {
  /* 向右跨越两个列 */
  grid-column-start: span 2;
}

/* 简写 */
.item-1 {
  /* 开始2 结束3 */
  grid-column: 1 / 3;
  grid-row: 1 / 2; // 也等同于 grid-row: 1 / span 2;
  /* 等同于 */
  .item-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
}
```

## 4.2 grid-area

> 指定 item 放在哪一个区域 上文有使用 需要配合 gird-template-area

> 也可用作简写

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
  grid-area: 1 / 1 / 3 / 3;
}
```

## 4.3 justify-self align-self place-self

> 设置单元格自身的水平垂直对齐方式 与 justify-items属性用法完全一致 但只作用与单个项目
