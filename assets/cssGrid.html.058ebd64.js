import{c as n}from"./app.522f05cd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="css-grid" tabindex="-1"><a class="header-anchor" href="#css-grid" aria-hidden="true">#</a> css-grid</h1><blockquote><p>\u6574\u7406\u81EA<a href="https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html">\u962E\u4E00\u5CF0\u535A\u5BA2</a></p></blockquote><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1 \u6982\u8FF0</h2><blockquote><p>Flex \u5E03\u5C40\u662F\u8F74\u7EBF\u5E03\u5C40\uFF0C\u53EA\u80FD\u6307\u5B9A&quot;\u9879\u76EE&quot;\u9488\u5BF9\u8F74\u7EBF\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u7EF4\u5E03\u5C40\u3002Grid \u5E03\u5C40\u5219\u662F\u5C06\u5BB9\u5668\u5212\u5206\u6210&quot;\u884C&quot;\u548C&quot;\u5217&quot;\uFF0C\u4EA7\u751F\u5355\u5143\u683C\uFF0C\u7136\u540E\u6307\u5B9A&quot;\u9879\u76EE\u6240\u5728&quot;\u7684\u5355\u5143\u683C\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F\u4E8C\u7EF4\u5E03\u5C40\u3002Grid \u5E03\u5C40\u8FDC\u6BD4 Flex \u5E03\u5C40\u5F3A\u5927\u3002</p></blockquote><h2 id="_2-container-\u5BB9\u5668\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-container-\u5BB9\u5668\u5C5E\u6027" aria-hidden="true">#</a> 2 container \u5BB9\u5668\u5C5E\u6027</h2><h3 id="_2-1-display" tabindex="-1"><a class="header-anchor" href="#_2-1-display" aria-hidden="true">#</a> 2.1 display</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u5757\u7EA7\u5143\u7D20\u5BB9\u5668 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* \u884C\u5185\u5143\u7D20\u5BB9\u5668 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-2-grid-template-columns-grid-template-rows" tabindex="-1"><a class="header-anchor" href="#_2-2-grid-template-columns-grid-template-rows" aria-hidden="true">#</a> 2.2 grid-template-columns grid-template-rows</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5217\u5BBD \u884C\u9AD8 */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* \u5B9A\u4E49\u6BCF\u4E00\u5217\u7684\u5217\u5BBD */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token comment">/* \u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u884C\u9AD8 */</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* repeat */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* \u7B49\u540C\u4E8E\u4E0A\u9762\u7684\u5199\u6CD5 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* \u91CD\u590D\u67D0\u79CD\u6A21\u5F0F100px 20px 80px \u91CD\u590D\u4E24\u6B21 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 100px 20px 80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* auto-fill */</span>
<span class="token comment">/* \u6709\u65F6\uFF0C\u5355\u5143\u683C\u7684\u5927\u5C0F\u662F\u56FA\u5B9A\u7684\uFF0C\u4F46\u662F\u5BB9\u5668\u7684\u5927\u5C0F\u4E0D\u786E\u5B9A\u3002
  \u5982\u679C\u5E0C\u671B\u6BCF\u4E00\u884C\uFF08\u6216\u6BCF\u4E00\u5217\uFF09\u5BB9\u7EB3\u5C3D\u53EF\u80FD\u591A\u7684\u5355\u5143\u683C\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528auto-fill\u5173\u952E\u5B57\u8868\u793A\u81EA\u52A8\u586B\u5145 */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* \u80FD\u653E\u4E0B3\u5217 \u591A\u4F59\u7684\u5143\u7D20\u81EA\u52A8\u6362\u884C */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* \u80FD\u653E\u4E0B3\u884C \u591A\u4F59\u5143\u7D20\u6EA2\u51FA */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* fr\u5173\u952E\u5B57 */</span>
<span class="token comment">/* \u4E3A\u4E86\u65B9\u4FBF\u8868\u793A\u6BD4\u4F8B\u5173\u7CFB\uFF0C\u7F51\u683C\u5E03\u5C40\u63D0\u4F9B\u4E86fr\u5173\u952E\u5B57\uFF08fraction\u7684\u7F29\u5199\uFF0C\u610F\u4E3A&#39;\u7247\u6BB5&#39;\uFF09\u3002
  \u5982\u679C\u4E24\u5217\u7684\u5BBD\u5EA6\u5206\u522B\u4E3A1fr\u548C2fr\uFF0C\u5C31\u8868\u793A\u540E\u8005\u662F\u524D\u8005\u7684\u4E24\u500D\u3002 */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
  <span class="token comment">/* \u7B49\u540C\u4E8E
  grid-template-columns: 50% 50%;
  */</span>
  <span class="token comment">/* \u4E09\u5217 150px \u5269\u4E0B\u7684\u5747\u5206\u5269\u4F59\u5BBD\u5EA6 \u5982width:300px \u5219\u5269\u4E0B\u7684\u4E3A(300px 150px)/3*2 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* minmax */</span>
<span class="token comment">/* \u51FD\u6570\u4EA7\u751F\u4E00\u4E2A\u957F\u5EA6\u8303\u56F4\uFF0C\u8868\u793A\u957F\u5EA6\u5C31\u5728\u8FD9\u4E2A\u8303\u56F4\u4E4B\u4E2D\u3002\u5B83\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4E3A\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\u3002 */</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* auto */</span>
<span class="token comment">/* auto\u5173\u952E\u5B57\u8868\u793A\u7531\u6D4F\u89C8\u5668\u81EA\u5DF1\u51B3\u5B9A\u957F\u5EA6\u3002 */</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px auto 100px<span class="token punctuation">;</span>

<span class="token comment">/* \u7F51\u683C\u7EBF\u7684\u540D\u79F0 */</span>
<span class="token comment">/* \u53EF\u4EE5\u4F7F\u7528\u65B9\u62EC\u53F7\uFF0C\u6307\u5B9A\u6BCF\u4E00\u6839\u7F51\u683C\u7EBF\u7684\u540D\u5B57\uFF0C\u65B9\u4FBF\u4EE5\u540E\u7684\u5F15\u7528\u3002 */</span>
<span class="token comment">/* \u7F51\u683C\u5E03\u5C40\u5141\u8BB8\u540C\u4E00\u6839\u7EBF\u6709\u591A\u4E2A\u540D\u5B57\uFF0C\u6BD4\u5982[fifth-line row-5] */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* 3\u884C x 3\u5217 \u56E0\u6B64\u67094\u6839\u5782\u76F4\u7F51\u683C\u7EBF\u548C4\u6839\u6C34\u5E73\u7F51\u683C\u7EBF [c1]-[r4] \u662F\u8FD9\u4E9B\u7F51\u683C\u7EBF\u7684\u540D\u5B57*/</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1] 100px [c2] 100px [c3] auto [c4]<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1] 100px [r2] 100px [r3] auto [r4]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><h3 id="_2-3-grid-row-gap-grid-column-gap-grid-gap" tabindex="-1"><a class="header-anchor" href="#_2-3-grid-row-gap-grid-column-gap-grid-gap" aria-hidden="true">#</a> 2.3 grid-row-gap grid-column-gap grid-gap</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">row-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> // \u884C\u95F4\u8DDD
  <span class="token property">column-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> // \u5217\u95F4\u8DDD
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span> // \u7F29\u5199
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-4-grid-template-areas" tabindex="-1"><a class="header-anchor" href="#_2-4-grid-template-areas" aria-hidden="true">#</a> 2.4 grid-template-areas</h3><blockquote><p>\u7F51\u683C\u5E03\u5C40\u5141\u8BB8\u6307\u5B9A&quot;\u533A\u57DF&quot;\uFF08area\uFF09\uFF0C\u4E00\u4E2A\u533A\u57DF\u7531\u5355\u4E2A\u6216\u591A\u4E2A\u5355\u5143\u683C\u7EC4\u6210\u3002grid-template-areas \u5C5E\u6027\u7528\u4E8E\u5B9A\u4E49\u533A\u57DF</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token comment">/* \u5212\u5206\u51FA9\u4E2A\u5355\u5143\u683C */</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a b c&#39;</span>
    <span class="token string">&#39;d e f&#39;</span>
    <span class="token string">&#39;g h i&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">/* \u5408\u5E76\u5355\u5143\u683C */</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a a a&#39;</span>
    <span class="token string">&#39;b b b&#39;</span>
    <span class="token string">&#39;c c c&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">/* \u5B9E\u9645\u4F7F\u7528 */</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;header header header&#39;</span>
    <span class="token string">&#39;main main sidebar&#39;</span>
    <span class="token string">&#39;footer footer footer&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">/* \u4E0D\u9700\u8981\u7684\u533A\u57DF\u53EF\u4EE5\u7528 . \u8868\u793A */</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a . c&#39;</span>
    <span class="token string">&#39;d . f&#39;</span>
    <span class="token string">&#39;g . i&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u6307\u5B9Aitem1\u653E\u5728a\u533A\u57DF */</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> a<span class="token punctuation">;</span> // \u5355\u5143\u683C1\u7684\u540D\u5B57\u4E3Aa
<span class="token punctuation">}</span>
<span class="token selector">.item2</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span> // \u5355\u5143\u683C2\u7684\u540D\u5B57\u4E3Ab
<span class="token punctuation">}</span>
<span class="token selector">.item3</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="_2-5-grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#_2-5-grid-auto-flow" aria-hidden="true">#</a> 2.5 grid-auto-flow</h3><blockquote><p>\u7F51\u683C\u6392\u5E8F</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* 
 \u9ED8\u8BA4\u503C\u662Frow \u5148\u884C\u540E\u5217 
 123
 456
 789
*/</span>
<span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
<span class="token comment">/* \u5148\u5217\u540E\u884C
  147
  258
  369
*/</span>
<span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token comment">/* \u5148\u884C\u540E\u5217 \u5C3D\u53EF\u80FD\u586B\u6EE1 */</span>
<span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row dense<span class="token punctuation">;</span>
<span class="token comment">/* \u5148\u5217\u540E\u884C \u5C3D\u53EF\u80FD\u586B\u6EE1 */</span>
<span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column dense<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-6-justify-items-align-items-place-items" tabindex="-1"><a class="header-anchor" href="#_2-6-justify-items-align-items-place-items" aria-hidden="true">#</a> 2.6 justify-items align-items place-items</h3><blockquote><p>item \u5185\u5BB9\u7684\u4F4D\u7F6E justify-items \u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u6C34\u5E73\u4F4D\u7F6E\uFF08\u5DE6\u4E2D\u53F3\uFF09\uFF0Calign-items \u5C5E\u6027\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9\u7684\u5782\u76F4\u4F4D\u7F6E\uFF08\u4E0A\u4E2D\u4E0B\uFF09\u3002</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">place-items</span><span class="token punctuation">:</span> &lt;align-items&gt; &lt;justify-items&gt;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-7-justify-content-align-content-place-content" tabindex="-1"><a class="header-anchor" href="#_2-7-justify-content-align-content-place-content" aria-hidden="true">#</a> 2.7 justify-content align-content place-content</h3><blockquote><p>container \u5BB9\u5668\u7684\u4F4D\u7F6E justify-content \u5C5E\u6027\u662F\u6574\u4E2A\u5185\u5BB9\u533A\u57DF\u5728\u5BB9\u5668\u91CC\u9762\u7684\u6C34\u5E73\u4F4D\u7F6E\uFF08\u5DE6\u4E2D\u53F3\uFF09\uFF0Calign-content \u5C5E\u6027\u662F\u6574\u4E2A\u5185\u5BB9\u533A\u57DF\u7684\u5782\u76F4\u4F4D\u7F6E</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">place-content</span><span class="token punctuation">:</span> &lt;align-content&gt; &lt;justify-content&gt;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-8-grid-auto-columns-grid-auto-rows" tabindex="-1"><a class="header-anchor" href="#_2-8-grid-auto-columns-grid-auto-rows" aria-hidden="true">#</a> 2.8 grid-auto-columns grid-auto-rows</h3><blockquote><p>\u9690\u5F0F\u5217/\u9690\u5F0F\u884C \u6307\u5B9A\u5728\u7F51\u683C\u5916\u7684\u9879\u76EE \u7F51\u683C\u5185\u7684\u4E0D\u53D7\u5F71\u54CD \u6709\u65F6\u5019\uFF0C\u4E00\u4E9B\u9879\u76EE\u7684\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u5728\u73B0\u6709\u7F51\u683C\u7684\u5916\u90E8\u3002\u6BD4\u5982\u7F51\u683C\u53EA\u6709 3 \u5217\uFF0C\u4F46\u662F\u67D0\u4E00\u4E2A\u9879\u76EE\u6307\u5B9A\u5728\u7B2C 5 \u884C\u3002\u8FD9\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u751F\u6210\u591A\u4F59\u7684\u7F51\u683C\uFF0C\u4EE5\u4FBF\u653E\u7F6E\u9879\u76EE\u3002 \u7528\u6CD5\u548C grid-template-rows gird-template-columns \u4E00\u81F4</p></blockquote><h3 id="_2-9-grid-template-grid-\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#_2-9-grid-template-grid-\u7B80\u5199" aria-hidden="true">#</a> 2.9 grid-template grid \u7B80\u5199</h3><blockquote><p>grid-template \u5C5E\u6027\u662F grid-template-columns\u3001grid-template-rows \u548C grid-template-areas \u8FD9\u4E09\u4E2A\u5C5E\u6027\u7684\u5408\u5E76\u7B80\u5199\u5F62\u5F0F\u3002</p></blockquote><blockquote><p>grid \u5C5E\u6027\u662F grid-template-rows\u3001grid-template-columns\u3001grid-template-areas\u3001 grid-auto-rows\u3001grid-auto-columns\u3001grid-auto-flow \u8FD9\u516D\u4E2A\u5C5E\u6027\u7684\u5408\u5E76\u7B80\u5199\u5F62\u5F0F\u3002</p></blockquote><h2 id="_3-item-\u9879\u76EE\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-item-\u9879\u76EE\u5C5E\u6027" aria-hidden="true">#</a> 3 item \u9879\u76EE\u5C5E\u6027</h2><h3 id="_3-1-\u6307\u5B9A\u7F51\u683C\u7EBF" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6307\u5B9A\u7F51\u683C\u7EBF" aria-hidden="true">#</a> 3.1 \u6307\u5B9A\u7F51\u683C\u7EBF</h3><p>grid-column-start \u5C5E\u6027\uFF0C grid-column-end \u5C5E\u6027\uFF0C grid-row-start \u5C5E\u6027\uFF0C grid-row-end \u5C5E\u6027</p><blockquote><p>\u6307\u5B9A\u5177\u4F53\u7684\u5355\u5143\u683C\u5728\u54EA\u4E2A\u7F51\u683C\u7EBF\u4E2D\u5F00\u59CB/\u7ED3\u675F \u8BE5\u503C\u53EF\u4EE5\u4E3A\u8D1F\u6570 \u8D1F\u503C\u5C31\u662F\u4ECE\u53F3\u5F80\u5DE6\u6570</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u57FA\u672C\u4F7F\u7528 */</span>
<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u7B2C\u4E8C\u5217\u5F00\u59CB */</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token comment">/* \u7B2C\u56DB\u5217\u7ED3\u675F */</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u6307\u5B9A\u7684\u7F51\u683C\u7EBF\u7684\u540D\u5B57 */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a b c&#39;</span>
    <span class="token string">&#39;d e f&#39;</span>
    <span class="token string">&#39;g h i&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> d<span class="token punctuation">;</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> f<span class="token punctuation">;</span>
  <span class="token property">grid-row-start</span><span class="token punctuation">:</span> d<span class="token punctuation">;</span>
  <span class="token property">grid-row-end</span><span class="token punctuation">:</span> f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* span\u5173\u952E\u5B57 \u8DE8\u8D8A\u610F\u601D \u5373\u8DE8\u8D8A\u591A\u5C11\u4E2A\u7F51\u683C */</span>
<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u5411\u53F3\u8DE8\u8D8A\u4E24\u4E2A\u5217 */</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u7B80\u5199 */</span>
<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u5F00\u59CB2 \u7ED3\u675F3 */</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span> // \u4E5F\u7B49\u540C\u4E8E <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / span 2<span class="token punctuation">;</span>
  <span class="token comment">/* \u7B49\u540C\u4E8E */</span>
  <span class="token selector">.item-1</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="_3-2-grid-area" tabindex="-1"><a class="header-anchor" href="#_3-2-grid-area" aria-hidden="true">#</a> 3.2 grid-area</h3><blockquote><p>\u6307\u5B9A item \u653E\u5728\u54EA\u4E00\u4E2A\u533A\u57DF \u4E0A\u6587\u6709\u4F7F\u7528 \u9700\u8981\u914D\u5408 gird-template-area</p></blockquote><blockquote><p>\u4E5F\u53EF\u7528\u4F5C\u7B80\u5199</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> &lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;<span class="token punctuation">;</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1 / 1 / 3 / 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-3-justify-self-align-self-place-self" tabindex="-1"><a class="header-anchor" href="#_3-3-justify-self-align-self-place-self" aria-hidden="true">#</a> 3.3 justify-self align-self place-self</h3><blockquote><p>\u8BBE\u7F6E\u5355\u5143\u683C\u81EA\u8EAB\u7684\u6C34\u5E73\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F \u4E0E justify-items\u5C5E\u6027\u7528\u6CD5\u5B8C\u5168\u4E00\u81F4 \u4F46\u53EA\u4F5C\u7528\u4E0E\u5355\u4E2A\u9879\u76EE</p></blockquote>`,39);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
