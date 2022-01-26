# tailwindcss安装及配置

## 安装

> 以 vite 构建的项目为例 具体配置项参考官方文档

安装 tailwindcss 本体

```shell
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

新建 postcss.config.js

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

初始化配置

```shell
npx tailwindcss init -p
```

新建 tailwind.config.js

```js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

引入根样式

index.css

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

main.js

```js
import './index.css'
```

## vscode 配置

> 主要是关闭样式校验

.vscode/settings.json

```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}
```

安装 vscode 插件

- vscode-stylelint
- Tailwind CSS IntelliSense

安装 stylelint

```shell
npm i stylelint-config-standard -D
```

新建 stylelint.config.js

```js
module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
```
