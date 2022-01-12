import{r as p,o as e,a as c,b as n,d as t,F as l,c as s,e as o}from"./app.a7225dcf.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s(`<h1 id="stylus\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#stylus\u7B14\u8BB0" aria-hidden="true">#</a> stylus\u7B14\u8BB0</h1><p>\u5192\u53F7\u53EF\u6709\u53EF\u65E0 \u5206\u53F7\u53EF\u6709\u53EF\u65E0 \u9017\u53F7\u53EF\u6709\u53EF\u65E0 \u62EC\u53F7\u53EF\u6709\u53EF\u65E0 \u53D8\u91CF \u63D2\u503C\uFF08Interpolation\uFF09 \u6DF7\u5408\uFF08Mixin\uFF09 \u6570\u5B66\u8BA1\u7B97 \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362 \u52A8\u6001\u5F15\u5165 \u6761\u4EF6\u8868\u8FBE\u5F0F \u8FED\u4EE3 \u5D4C\u5957\u9009\u62E9\u5668 \u7236\u7EA7\u5F15\u7528 Variable function calls \u8BCD\u6CD5\u4F5C\u7528\u57DF \u5185\u7F6E\u51FD\u6570\uFF08\u8D85\u8FC7 60 \u4E2A\uFF09 \u8BED\u6CD5\u5185\u51FD\u6570\uFF08In-language functions\uFF09 \u538B\u7F29\u53EF\u9009 \u56FE\u50CF\u5185\u8054\u53EF\u9009 Stylus \u53EF\u6267\u884C\u7A0B\u5E8F \u5065\u58EE\u7684\u9519\u8BEF\u62A5\u544A \u5355\u884C\u548C\u591A\u884C\u6CE8\u91CA CSS \u5B57\u9762\u91CF \u5B57\u7B26\u8F6C\u4E49 TextMate \u6346\u7ED1</p><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1 \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save stylus-loader stylus
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u9009\u62E9\u5668" aria-hidden="true">#</a> 2 \u9009\u62E9\u5668</h2><h3 id="_2-1-\u6392\u7248" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6392\u7248" aria-hidden="true">#</a> 2.1 \u6392\u7248</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u7ED9div\u52A0\u4E0A\u80CC\u666F\u8272pink */</span>
div
  background-color pink
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-2-\u5D4C\u5957-\u7236\u7EA7\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5D4C\u5957-\u7236\u7EA7\u5F15\u7528" aria-hidden="true">#</a> 2.2 \u5D4C\u5957&amp;\u7236\u7EA7\u5F15\u7528</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* &amp; \u6307\u5411\u7236\u7EA7\u9009\u62E9\u5668 */</span>
ul
  li
    color #fff
    &amp;<span class="token punctuation">:</span>hover
      color #000
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-3-\u6B67\u4E49" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6B67\u4E49" aria-hidden="true">#</a> 2.3 \u6B67\u4E49</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u6B64\u5904\u8D1F\u503C\u53EF\u80FD\u5F15\u8D77\u6B67\u4E49 \u9700\u8981\u52A0\u62EC\u53F7 */</span>
<span class="token function">pad</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  padding <span class="token punctuation">(</span>- n<span class="token punctuation">)</span>

body
  <span class="token function">pad</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-\u53D8\u91CF" aria-hidden="true">#</a> 3 \u53D8\u91CF</h2><h3 id="_3-1-\u81EA\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-1-\u81EA\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> 3.1 \u81EA\u5B9A\u4E49\u53D8\u91CF</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>fonts = Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif
color = #ccc
body
  padding 50px
  font 14px/1.4 fonts
  background-color color

<span class="token comment">/* \u89E3\u6790\u4E3A */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 14px/1.4 Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  background-color #ccc
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-2-\u5C5E\u6027\u67E5\u627E-\u9700\u8981\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5C5E\u6027\u67E5\u627E-\u9700\u8981\u58F0\u660E" aria-hidden="true">#</a> 3.2 \u5C5E\u6027\u67E5\u627E-\u9700\u8981\u58F0\u660E</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u9002\u7528\u573A\u666F:\u6839\u636E\u4E00\u4E2A\u9AD8\u5EA6\u8BA1\u7B97\u5176\u4ED6\u9AD8\u5EA6\u7B49\u60C5\u51B5 */</span>
ul
  width 100px
  height $ = 200px
  margin-top <span class="token function">-</span><span class="token punctuation">(</span>$/2<span class="token punctuation">)</span>
<span class="token comment">/* \u89E3\u6790\u4E3A */</span>
<span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_3-3-\u5C5E\u6027\u67E5\u627E-\u65E0\u9700\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5C5E\u6027\u67E5\u627E-\u65E0\u9700\u58F0\u660E" aria-hidden="true">#</a> 3.3 \u5C5E\u6027\u67E5\u627E-\u65E0\u9700\u58F0\u660E</h3><p>\u4E0D\u9700\u8981\u58F0\u660E\u53D8\u91CF \u76F4\u63A5\u53EF\u4EE5\u4F7F\u7528@\u52A0\u5C5E\u6027 \u8FDB\u884C\u5F15\u7528</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u53EF\u7528@\u76F4\u63A5\u8868\u793Aheight\u7684200px \u5E76\u8FDB\u884C\u8FD0\u7B97 */</span>
ul
  width 100px
  height 200px
  margin-top @height*2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_4-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_4-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 4 \u8FD0\u7B97\u7B26</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>body
  <span class="token property">foo</span><span class="token punctuation">:</span> 5px + 10  //15px
  <span class="token property">foo</span><span class="token punctuation">:</span> 2 ** 8  // 256
  <span class="token property">foo</span><span class="token punctuation">:</span> 5px * 2 // 10px
  <span class="token property">foo</span><span class="token punctuation">:</span> !!<span class="token string">&#39;&#39;</span> // false
  <span class="token property">foo</span><span class="token punctuation">:</span> foo and bar and baz  
  <span class="token property">foo</span><span class="token punctuation">:</span> foo or bar or baz
  <span class="token property">foo</span><span class="token punctuation">:</span> 1..5
  <span class="token property">foo</span><span class="token punctuation">:</span> 1...5
  <span class="token property">foo</span><span class="token punctuation">:</span> <span class="token string">&#39;foo&#39;</span> is a <span class="token string">&#39;string&#39;</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1 2 3<span class="token punctuation">)</span> == <span class="token punctuation">(</span>1 2 3<span class="token punctuation">)</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1 2 3<span class="token punctuation">)</span> == <span class="token punctuation">(</span>1 2<span class="token punctuation">)</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>one 1<span class="token punctuation">)</span> <span class="token punctuation">(</span>two 2<span class="token punctuation">)</span><span class="token punctuation">)</span> == <span class="token punctuation">(</span><span class="token punctuation">(</span>one 1<span class="token punctuation">)</span> <span class="token punctuation">(</span>two 2<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>one 1<span class="token punctuation">)</span> <span class="token punctuation">(</span>two 2<span class="token punctuation">)</span><span class="token punctuation">)</span> == <span class="token punctuation">(</span><span class="token punctuation">(</span>one 1<span class="token punctuation">)</span> <span class="token punctuation">(</span>two<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>one 1<span class="token punctuation">)</span> <span class="token punctuation">(</span>two 2<span class="token punctuation">)</span><span class="token punctuation">)</span>[0]
  <span class="token property">foo</span><span class="token punctuation">:</span> 3 in <span class="token punctuation">(</span>1 2 3 4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_5-mixins-\u6DF7\u5408\u4E66\u5199" tabindex="-1"><a class="header-anchor" href="#_5-mixins-\u6DF7\u5408\u4E66\u5199" aria-hidden="true">#</a> 5 mixins-\u6DF7\u5408\u4E66\u5199</h2><h3 id="_5-1-\u7C7B\u4F3C\u4E8E\u51FD\u6570\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_5-1-\u7C7B\u4F3C\u4E8E\u51FD\u6570\u5B9A\u4E49" aria-hidden="true">#</a> 5.1 \u7C7B\u4F3C\u4E8E\u51FD\u6570\u5B9A\u4E49</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">border-radius</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n

form input[type=button]
  <span class="token function">border-radius</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span>
  <span class="token comment">/* \u6B64\u5904\u62EC\u53F7\u53EF\u5FFD\u7565 */</span>
  border-radius 5px
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5B9A\u4E49\u7C7B\u51FD\u6570 */</span>
<span class="token function">set-font-ize</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> color<span class="token punctuation">,</span> weight<span class="token punctuation">)</span>
  font-size size
  color color
  font-weight weight
<span class="token comment">/* \u5728a\u6807\u7B7E\u4E0A\u4F7F\u7528\u7C7B\u51FD\u6570 */</span>
a
  <span class="token function">set-font-ize</span><span class="token punctuation">(</span>20px<span class="token punctuation">,</span> pink<span class="token punctuation">,</span> 700<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-2-\u7528arguments\u4EE3\u66FF\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-2-\u7528arguments\u4EE3\u66FF\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> 5.2 \u7528arguments\u4EE3\u66FF\u9ED8\u8BA4\u53C2\u6570</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">set-radius</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> arguments
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> arguments
  <span class="token property">border-radius</span><span class="token punctuation">:</span> arguments
ul
  <span class="token function">set-radius</span><span class="token punctuation">(</span>5px 10px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_5-3-\u6DF7\u5408\u4E66\u5199\u4E2D\u53EF\u518D\u6B21\u5199\u6DF7\u5408\u4E66\u5199" tabindex="-1"><a class="header-anchor" href="#_5-3-\u6DF7\u5408\u4E66\u5199\u4E2D\u53EF\u518D\u6B21\u5199\u6DF7\u5408\u4E66\u5199" aria-hidden="true">#</a> 5.3 \u6DF7\u5408\u4E66\u5199\u4E2D\u53EF\u518D\u6B21\u5199\u6DF7\u5408\u4E66\u5199</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">inline-list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  li
    display inline

<span class="token function">comma-list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">inline-list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  li
    &amp;<span class="token punctuation">:</span>after
      content <span class="token string">&#39;, &#39;</span>
    &amp;<span class="token punctuation">:</span><span class="token property">last-child</span><span class="token punctuation">:</span>after
      content <span class="token string">&#39;&#39;</span>

ul
  <span class="token function">comma-list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/* \u7F16\u8BD1 */</span>
<span class="token selector">ul li:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul li:last-child:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul li</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="_6-function\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_6-function\u51FD\u6570" aria-hidden="true">#</a> 6 Function\u51FD\u6570</h2><h3 id="_6-1-\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_6-1-\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> 6.1 \u9ED8\u8BA4\u53C2\u6570</h3><p>\u4F7F\u7528\u65B9\u6CD5\u4E0Emixins\u4E00\u81F4 \u4F46\u662F\u51FD\u6570\u6709\u8FD4\u56DE\u503C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u53EF\u4EE5\u6307\u5B9A\u9ED8\u8BA4\u53C2\u6570 */</span>
<span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b = <span class="token function">unit</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> px<span class="token punctuation">)</span><span class="token punctuation">)</span>
  a + b
body
  padding <span class="token function">add</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 5<span class="token punctuation">)</span>
<span class="token comment">/* \u89E3\u6790 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6B64\u5904unit(a, b)\u662Fstylus\u5185\u7F6E\u51FD\u6570 \u9ED8\u8BA4\u62FC\u63A5a b\u53C2\u6570 a\u4E3A\u6570\u503C \u82E5\u9001\u516515px \u4F1A\u88AB\u8BC6\u522B\u4E3A15 b\u4E3A\u5355\u4F4D</p></div><h3 id="_6-2-\u65E0\u89C6\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#_6-2-\u65E0\u89C6\u5355\u4F4D" aria-hidden="true">#</a> 6.2 \u65E0\u89C6\u5355\u4F4D</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b = a<span class="token punctuation">)</span>
  a = <span class="token function">unit</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> px<span class="token punctuation">)</span>
  b = <span class="token function">unit</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> px<span class="token punctuation">)</span>
  a + b
li
  padding <span class="token function">add</span><span class="token punctuation">(</span>15%<span class="token punctuation">,</span> 10deg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_6-3-\u591A\u4E2A\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_6-3-\u591A\u4E2A\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 6.3 \u591A\u4E2A\u8FD4\u56DE\u503C</h3><p>\u53D8\u91CF\u58F0\u660E\u53EF\u4F7F\u7528</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>sizes = 15px 10px 5px 0

li
  font-size sizes[0] //15px
  font-size sizes[1] //10px
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u51FD\u6570\u4E2D\u4E5F\u53EF\u4F7F\u7528</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">sizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 15px 10px

<span class="token function">sizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>[0]
<span class="token comment">/* \u6CE8\u610F:\u5355\u7EAF\u53D8\u91CF\u65F6\u9700\u8981\u5E26\u62EC\u53F7(normal bold)\u6216\u8005\u5199return */</span>
<span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  return normal bold
body
  font-weight <span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_6-4-\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#_6-4-\u522B\u540D" aria-hidden="true">#</a> 6.4 \u522B\u540D</h3><p>\u6CE8\u610F: \u4E0Ejs\u4E0D\u540C \u6B64\u5904\u8D77\u4E86\u522B\u540D \u539F\u540D\u4ECD\u65E7\u53EF\u7528</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
  a + b
plus = add

<span class="token function">plus</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_7-stylus\u5185\u7F6E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_7-stylus\u5185\u7F6E\u65B9\u6CD5" aria-hidden="true">#</a> 7 stylus\u5185\u7F6E\u65B9\u6CD5</h2>`,45),b={href:"https://www.zhangxinxu.com/jq/stylus/bifs.php",target:"_blank",rel:"noopener noreferrer"},d=o("\u8BE6\u60C5\u5730\u5740"),m=s(`<h2 id="_8-\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_8-\u6CE8\u91CA" aria-hidden="true">#</a> 8 \u6CE8\u91CA</h2><p>\u5355\u884C\u6CE8\u91CA</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>// \u6211\u662F\u6CE8\u91CA
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u591A\u884C\u6CE8\u91CA</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*
 * \u6211\u662F\u6CE8\u91CA
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u591A\u884C\u7F13\u51B2\u6CE8\u91CA</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*!
 * stylus\u7F16\u8BD1\u65F6\u4E0D\u8FDB\u884C\u538B\u7F29 \u76F4\u63A5\u8F93\u51FA
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_9-\u6761\u4EF6\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_9-\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a> 9 \u6761\u4EF6\u5224\u65AD</h2><h3 id="_9-1-if" tabindex="-1"><a class="header-anchor" href="#_9-1-if" aria-hidden="true">#</a> 9.1 if</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>lock = false
body
  if lock
    padding 0
  else
    padding 100
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">stringish</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  if val is a <span class="token string">&#39;string&#39;</span> or val is a <span class="token string">&#39;ident&#39;</span>
    yes
  else
    no
<span class="token function">stringish</span><span class="token punctuation">(</span><span class="token string">&#39;yay&#39;</span><span class="token punctuation">)</span> == yes // =&gt; true
<span class="token function">stringish</span><span class="token punctuation">(</span>yay<span class="token punctuation">)</span> == yes // =&gt; true
<span class="token function">stringish</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span> == no // =&gt; true

<span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
  if a &gt; b
    higher
  else if a &lt; b
    lower
  else
    equal
<span class="token function">compare</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 2<span class="token punctuation">)</span> // =&gt; higher
<span class="token function">compare</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 5<span class="token punctuation">)</span> // =&gt; lower
<span class="token function">compare</span><span class="token punctuation">(</span>10<span class="token punctuation">,</span> 10<span class="token punctuation">)</span> // =&gt; equal
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_9-2-unless" tabindex="-1"><a class="header-anchor" href="#_9-2-unless" aria-hidden="true">#</a> 9.2 unless</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5982\u679Clock\u662Fdefined\u548Cfalse \u5C31\u66FF\u6362padding\u4E3Amargin \u76F8\u5F53\u4E8Eif\u5224\u65AD\u6761\u4EF6\u7684\u53CD\u8F6C */</span>
lock = true

unless lock is defined and lock
  <span class="token function">padding</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    margin y x

body
  padding 5px 10px
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_10-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_10-\u5FAA\u73AF" aria-hidden="true">#</a> 10 \u5FAA\u73AF</h2><h3 id="_10-1-for" tabindex="-1"><a class="header-anchor" href="#_10-1-for" aria-hidden="true">#</a> 10.1 for</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>table
  for index in 1 2 3 4 5
    <span class="token property">tr</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
      height index * 30px
<span class="token comment">/* \u7F16\u8BD1\u4E3A */</span>
<span class="token selector">table tr:nth-child(index)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table tr:nth-child(index)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table tr:nth-child(index)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table tr:nth-child(index)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table tr:nth-child(index)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

body
  for index in 1 2 3 4 5
    foo index
<span class="token comment">/* \u7F16\u8BD1\u4E3A */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* item,index */</span>
body
  font = Impact Arial sans-serif
  for item<span class="token punctuation">,</span> index in font
    foo index item
<span class="token comment">/* \u7F16\u8BD1\u4E3A */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 0 Impact<span class="token punctuation">;</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 1 Arial<span class="token punctuation">;</span>
  <span class="token property">foo</span><span class="token punctuation">:</span> 2 sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="_10-2-\u6DF7\u5408\u4E66\u5199\u4E2D\u7684for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_10-2-\u6DF7\u5408\u4E66\u5199\u4E2D\u7684for\u5FAA\u73AF" aria-hidden="true">#</a> 10.2 \u6DF7\u5408\u4E66\u5199\u4E2D\u7684for\u5FAA\u73AF</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">apply(props)
  props = arguments
  if length(arguments) &gt; 1
    for prop in props</span>
      <span class="token punctuation">{</span>prop[0]<span class="token punctuation">}</span> prop[1]

body
  <span class="token function">apply</span><span class="token punctuation">(</span>one 1<span class="token punctuation">,</span> two 2<span class="token punctuation">,</span> three 3<span class="token punctuation">)</span>

body
  list = <span class="token punctuation">(</span>one 1<span class="token punctuation">)</span> <span class="token punctuation">(</span>two 2<span class="token punctuation">)</span> <span class="token punctuation">(</span>three 3<span class="token punctuation">)</span>
  <span class="token function">apply</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
<span class="token comment">/* \u7F16\u8BD1\u4E3A */</span>
<span class="token selector">body[data-v-227179ae]</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">two</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body[data-v-227179ae]</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">two</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_10-3-\u51FD\u6570\u4E2D\u7684for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_10-3-\u51FD\u6570\u4E2D\u7684for\u5FAA\u73AF" aria-hidden="true">#</a> 10.3 \u51FD\u6570\u4E2D\u7684for\u5FAA\u73AF</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">sum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
  sum = 0
  for n in nums
    sum += n

<span class="token function">sum</span><span class="token punctuation">(</span>1 2 3<span class="token punctuation">)</span>
// =&gt; 6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_11-import\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_11-import\u5BFC\u5165" aria-hidden="true">#</a> 11 import\u5BFC\u5165</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u52A0css\u540E\u7F00 \u6B63\u5E38\u8BC6\u522B\u4E3Acss\u6587\u4EF6*/</span>
@import <span class="token string">&quot;reset.css&quot;</span>
<span class="token comment">/* \u4E0D\u52A0css\u540E\u7F00 \u4F1A\u88AB\u8BC6\u522B\u4E3Astylus\u6587\u4EF6 \u6B64\u5904\u4E0D\u52A0\u5F15\u53F7\u4E5F\u53EF@import reset */</span>
@import <span class="token string">&#39;reset&#39;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_12-extend\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_12-extend\u7EE7\u627F" aria-hidden="true">#</a> 12 @extend\u7EE7\u627F</h2><p>\u5F15\u7528father\u7684\u5C5E\u6027 \u76F4\u63A5\u7ED9son \u5199\u6CD5\u4E0A\u66F4\u7B80\u7EC3 \u4E5F\u53EF\u8FDB\u884C\u591A\u5C42\u5D4C\u5957</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.father
  padding 100px
  margin 100px
.son
  @extend .father
  color red
.grandson
  @extend .son
  font-size 16px
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8981\u7EE7\u627F\u591A\u5C42\u7EA7\u5D4C\u5957\u7684\u5C5E\u6027 \u9700\u8981\u4ECE\u5934\u5F00\u59CB\u5199</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>div
  ul
    li
      width 100px
      height 100px
<span class="token comment">/* \u6B64\u5904\u5199\u6210 @extend ul li\u4E0D\u884C \u5149\u5199li \u4E5F\u4E0D\u884C */</span>
.other
  @extend div ul li
  color red
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_13-url-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_13-url-\u51FD\u6570" aria-hidden="true">#</a> 13 url()\u51FD\u6570</h2><p>stylus\u66FF\u6362\u4E86\u539F\u672Ccss\u7684url() \u4F7F\u7528\u4E86base64 Data URIs\u6709\u6761\u4EF6\u5730\u5185\u8054\u5B83\u4EEC</p><p>\u5728\u4F7F\u7528webpack\u4E2D \u6B64\u5904\u4F5C\u7528\u4E0D\u5927</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token function">bg-image</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  background-image <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&#39;../assets/images/&#39;</span> + url<span class="token punctuation">)</span>
div
  <span class="token function">bg-image</span><span class="token punctuation">(</span><span class="token string">&#39;waring.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_14-stylus\u4E2D\u6B63\u5E38\u5199css" tabindex="-1"><a class="header-anchor" href="#_14-stylus\u4E2D\u6B63\u5E38\u5199css" aria-hidden="true">#</a> 14 stylus\u4E2D\u6B63\u5E38\u5199css</h2><p>\u82E5\u9047\u5230stylus\u65E0\u6CD5\u89E3\u51B3\u7684\u95EE\u9898 \u53EF\u4EE5\u5728stylus\u4E2D\u76F4\u63A5\u5199css \u4E5F\u53EF\u4EE5\u5199\u5728@css\u4E2D</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@css</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,34);function k(h,g){const a=p("ExternalLinkIcon");return e(),c(l,null,[u,n("p",null,[n("a",b,[d,t(a)])]),m],64)}var v=r(i,[["render",k]]);export{v as default};
