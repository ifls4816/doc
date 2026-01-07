import{c as n}from"./app.522f05cd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/doc/assets/test1.1cb6247a.png";const p={},e=n(`<h1 id="js-\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#js-\u57FA\u7840" aria-hidden="true">#</a> js \u57FA\u7840</h1><h2 id="_1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-\u53D8\u91CF" aria-hidden="true">#</a> 1 \u53D8\u91CF</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53D8\u91CF\u7684\u4F5C\u7528\uFF1A\u7528\u6765\u64CD\u4F5C\u6570\u636E\u7684\uFF0C\u53EF\u4EE5\u5B58\u50A8\uFF0C\u4E5F\u53EF\u4EE5\u8BFB\u53D6</span>
<span class="token comment">// \u53D8\u91CF\u7684\u58F0\u660E\uFF1A var name;\u6CA1\u8D4B\u503C</span>
<span class="token comment">// var name=&#39;\u5C0F\u9ED1&#39;;\u8D4B\u503C\u4E86</span>
<span class="token comment">// js\u58F0\u660E\u53D8\u91CF\u90FD\u7528var</span>
<span class="token comment">// js\u4E2D\u7684\u6BCF\u4E00\u884C\u4EE3\u7801\u90FD\u8981\u5E26\u5206\u53F7</span>
<span class="token comment">// js\u533A\u5206\u5927\u5C0F\u5199</span>
<span class="token comment">// js\u4E2D\u7684\u5B57\u7B26\u4E32\u53EF\u4EE5\u4F7F\u7528\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7\uFF0C\u76EE\u524D\u7528\u5355\u5F15\u53F7\u3002</span>

<span class="token comment">// \u53D8\u91CF\u547D\u540D\u7684\u89C4\u8303\uFF1A</span>
<span class="token comment">// 1.\u53D8\u91CF\u540D\u8981\u6709\u610F\u4E49</span>
<span class="token comment">// 2.\u53D8\u91CF\u540D\u6709\u4E00\u5B9A\u7684\u89C4\u8303\uFF1A\u4E00\u822C\u4EE5\u5B57\u6BCD\u6216$\u7B26\u53F7\u3001\u4E0B\u5212\u7EBF\u5F00\u5934\uFF0C\u4E2D\u95F4\u6216\u540E\u9762\u53EF\u4EE5\u6709$\u7B26\u53F7\uFF0C\u5B57\u6BCD\u6216\u6570\u5B57</span>
<span class="token comment">// 3.\u4E00\u822C\u662F\u5C0F\u5199</span>
<span class="token comment">// 4.\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF1A\u591A\u4E2A\u5355\u8BCD\u4E0B\uFF0C\u9996\u5B57\u6BCD\u662F\u5C0F\u5199\uFF0C\u540E\u9762\u7684\u662F\u5927\u5199var bigNumber=10;</span>

<span class="token comment">// \u58F0\u660E\u53D8\u91CF\u5E76\u521D\u59CB\u5316/\u53D8\u91CF\u7684\u521D\u59CB\u5316/\u58F0\u660E\u53D8\u91CF\u503C</span>

<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">//\u58F0\u660E\u4E86\u4E00\u4E2Anum\u7684\u53D8\u91CF\uFF0C\u50A8\u5B58\u4E86\u4E00\u4E2A\u6570\u5B57100\uFF1B</span>
<span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//\u5F39\u7A97 \u8F93\u51FA100\u8FD9\u4E2A\u503C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">//\u5728\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u53F0\u4E2D\u8F93\u51FA100</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_2-\u4E94\u79CD\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-\u4E94\u79CD\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2 \u4E94\u79CD\u6570\u636E\u7C7B\u578B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
js\u4E2D\u7684\u6570\u636E\u7C7B\u578B\uFF1Anumber string boolean null undefined object symbol bigint
number\u6570\u5B57\u7C7B\u578B
string\u5B57\u7B26\u4E32\u7C7B\u578B \u4E00\u822C\u7528\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7\u62EC\u8D77\u6765
boolean\u5E03\u5C14\u7C7B\u578B \u503C\u6709\u4E24\u4E2A\uFF1Atrue\u771F\uFF081\uFF09 false\u5047\uFF080\uFF09
null \u7A7A\u7C7B\u578B \u4E00\u4E2A\u5BF9\u8C61\u6307\u5411\u4E3A\u7A7A\uFF0C\u6B64\u65F6\u53EF\u4EE5\u8D4B\u503C\u4E3Anull
undefined \u672A\u5B9A\u4E49  \u503C\u53EA\u6709\u4E00\u4E2A\uFF1Aundefined
symbol\uFF08ES6\uFF09\u552F\u4E00\u4E0D\u53EF\u53D8\u6807\u8BC6\u7B26\uFF0C\u5E38\u7528\u4E8E\u5BF9\u8C61\u5C5E\u6027\u952E
bigint\uFF08ES2020\uFF09\uFF1A\u8868\u793A\u4EFB\u610F\u7CBE\u5EA6\u6574\u6570\uFF08\u540E\u7F00n\uFF0C\u5982123n\uFF09
\u53D8\u91CF\u58F0\u660E\u4E86\u4F46\u6CA1\u6709\u8D4B\u503C\u65F6\u663E\u793A\u8BE5\u503C\u548C\u51FD\u6570\u6CA1\u6709\u660E\u786E\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u63A5\u6536\u4E86\uFF0C\u7ED3\u679C\u4E5F\u662F\u73B0\u5B9Eundefined
\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u7684\u7ED3\u679C\u662Fundefined\u548C\u4E00\u4E2A\u6570\u5B57\u8FDB\u884C\u8BA1\u7B97\uFF0C\u7ED3\u679C\uFF1ANaN\uFF08not a number\uFF09
object\u5BF9\u8C61
*/</span>
<span class="token comment">/*
typeof \u7684\u4F7F\u7528\u8BED\u6CD5
typeof \u53D8\u91CF\u540D
 */</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">var</span> nll <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">var</span> undef
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> num<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u4E3A\uFF1Anumber</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str<span class="token punctuation">)</span> <span class="token comment">//string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> flag<span class="token punctuation">)</span> <span class="token comment">//boolean</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//\u6CE8\u610F\uFF1A\u4E0D\u662Fnull  \u662Fobject</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> undef<span class="token punctuation">)</span> <span class="token comment">//undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">)</span> <span class="token comment">//object</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="_2-1-\u6570\u5B57\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6570\u5B57\u7C7B\u578B" aria-hidden="true">#</a> 2.1 \u6570\u5B57\u7C7B\u578B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8FDB\u5236\uFF1A</span>
<span class="token comment">// \u516B\u8FDB\u5236 \u4EE50\u5F00\u5934</span>
<span class="token comment">// \u5341\u8FDB\u5236 \u5C31\u662F\u6B63\u5E38\u7684\u6570\u5B57</span>
<span class="token comment">//  \u5341\u516D\u8FDB\u52360x\u5F00\u5934</span>

<span class="token comment">// \u6570\u5B57\u7C7B\u578B\u7684\u8303\u56F4\uFF1A \u6700\u5927\u503C\u548C\u6700\u5C0F\u503C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span>

<span class="token comment">//\u4E0D\u8981\u7528\u5C0F\u6570\u9A8C\u8BC1\u5C0F\u6570</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0.1</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">0.2</span>
<span class="token keyword">var</span> sum <span class="token operator">=</span> x <span class="token operator">+</span> y
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">0.3</span><span class="token punctuation">)</span>

<span class="token comment">//\u9A8C\u8BC1NaN</span>
<span class="token comment">//\u9519\u8BEF\u793A\u8303\uFF1A</span>
<span class="token keyword">var</span> num
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">)</span>
<span class="token comment">//\u5982\u4F55\u9A8C\u8BC1\u8FD9\u4E2A\u7ED3\u679C\u662F\u4E0D\u662FNaN \u7528isNaN()</span>
<span class="token comment">//\u6B63\u786E\u793A\u8303\uFF1A</span>
<span class="token keyword">var</span> num
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57\uFF1F \u4E0D\u662F  \u8F93\u51FAtrue</span>
<span class="token comment">//\u4E0D\u662F\u6570\u5B57\u4E3Atrue \u662F\u6570\u5B57\u4E3Afalse</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_2-2-\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a> 2.2 \u5B57\u7B26\u4E32\u7C7B\u578B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var str=&#39;10&#39;;</span>
<span class="token comment">//var str=&quot;10&quot;; \u5355\u5F15\u53F7\u53CC\u5F15\u53F7\u90FD\u53EF\u4EE5</span>

<span class="token comment">//\u5982\u4F55\u770B\u5B57\u7B26\u4E32\u7684\u957F\u5EA6:\u53D8\u91CF\u540D.length</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;what are you doing&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

<span class="token comment">//\u8F6C\u4E49\u7B26\uFF1A</span>
<span class="token comment">//html\u8F6C\u4E49\u7B26\uFF1A&amp;lt; &amp;nbsp;</span>
<span class="token comment">//js\u4E2D\u7684\u8F6C\u4E49\u7B26</span>
<span class="token comment">//tab\u662F\\t</span>
<span class="token comment">// &#39; \u662F\\&#39;</span>
<span class="token comment">//console.log(&quot;\u54C8\u54C8\u54C8\\t\u54C8\u54C8&quot;)</span>

<span class="token comment">//\u5B57\u7B26\u4E32\u7684\u62FC\u63A5\uFF1A\u53EA\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u62FC\u63A5\u5728\u4E00\u8D77\u7ED3\u679C\u5C31\u662F\u6570\u5B57\u800C\u4E0D\u662F\u8FD0\u7B97</span>
<span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">&#39;\u4F60\u597D&#39;</span>
<span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">&#39;\u6211\u597D&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1 <span class="token operator">+</span> str2<span class="token punctuation">)</span>

<span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">&#39;10&#39;</span>
<span class="token keyword">var</span> str4 <span class="token operator">=</span> <span class="token string">&#39;20&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3 <span class="token operator">+</span> str4<span class="token punctuation">)</span>
<span class="token comment">//\u5B57\u7B26\u4E32\u9690\u5F0F\u8F6C\u6362\uFF1A</span>
<span class="token keyword">var</span> str5 <span class="token operator">=</span> <span class="token string">&#39;10&#39;</span>
<span class="token keyword">var</span> str6 <span class="token operator">=</span> <span class="token number">5</span>
<span class="token comment">//\u6D4F\u89C8\u5668\u81EA\u52A8\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u5B57\uFF0C\u5373\u9690\u5F0F\u8F6C\u6362</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str5 <span class="token operator">-</span> str6<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_2-3-\u7C7B\u578B\u95F4\u76F8\u4E92\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7C7B\u578B\u95F4\u76F8\u4E92\u8F6C\u6362" aria-hidden="true">#</a> 2.3 \u7C7B\u578B\u95F4\u76F8\u4E92\u8F6C\u6362</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u7C7B\u578B\u8F6C\u6362\uFF1A</span>
<span class="token comment">//\u6570\u5B57\u7C7B\uFF1A</span>
<span class="token comment">//\u5176\u4ED6\u7C7B\u578B\u8F6C\u6574\u6570</span>
<span class="token comment">//parseInt();</span>
<span class="token comment">//console.log(parseInt(&quot;10&quot;))     //10</span>
<span class="token comment">//console.log(parseInt(&quot;10sadf&quot;))//10</span>
<span class="token comment">//console.log(parseInt(&quot;gasd10&quot;))//NaN</span>
<span class="token comment">//console.log(parseInt(&quot;10.98&quot;))//10</span>
<span class="token comment">//console.log(parseInt(&quot;10.98sd&quot;))//10</span>
<span class="token comment">//\u5176\u4ED6\u7C7B\u578B\u8F6C\u5C0F\u6570</span>
<span class="token comment">//parseFloat();</span>
<span class="token comment">//console.log(parseFloat(&quot;10&quot;))     //10</span>
<span class="token comment">//console.log(parseFloat(&quot;10sadf&quot;))//10</span>
<span class="token comment">//console.log(parseFloat(&quot;gasd10&quot;))//NaN</span>
<span class="token comment">//console.log(parseFloat(&quot;10.98&quot;))//10.98</span>
<span class="token comment">//console.log(parseFloat(&quot;10.98sd&quot;))//10.98</span>
<span class="token comment">//\u5176\u4ED6\u7C7B\u578B\u8F6C\u6570\u5B57</span>
<span class="token comment">//Number();</span>
<span class="token comment">//console.log(Number(&quot;10&quot;))     //10</span>
<span class="token comment">//console.log(Number(&quot;10sadf&quot;))//NaN</span>
<span class="token comment">//console.log(Number(&quot;gasd10&quot;))//NaN</span>
<span class="token comment">//console.log(Number(&quot;10.98&quot;))//10.98</span>
<span class="token comment">//console.log(Number(&quot;10.98sd&quot;))//NaN</span>
<span class="token comment">//\u603B\u7ED3\uFF1A\u60F3\u8981\u8F6C\u6574\u6570\u7528parseInt()</span>
<span class="token comment">//\u60F3\u8981\u8F6C\u5C0F\u6570\u7528parseFloat()</span>
<span class="token comment">//\u60F3\u8981\u8F6C\u6570\u5B57\u7528Number() \u8F83\u4E0A\u4E24\u79CD\u4E25\u683C</span>

<span class="token comment">//\u5176\u4ED6\u7C7B\u578B\u8F6C\u5B57\u7B26\u4E32\u7C7B\u578B\uFF1A</span>
<span class="token comment">//.toString()</span>
<span class="token keyword">var</span> num1 <span class="token comment">//(\u65E0\u610F\u4E49)</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span>
<span class="token comment">//\u82E5\u53D8\u91CF\u6709\u610F\u4E49\uFF0C\u5219\u7528.toString()    \u591A\u6570\u7528.toString,\u4F46\u5176\u4E0D\u80FD\u8F6Cundefined \u548Cnull</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//\u82E5\u53D8\u91CF\u6CA1\u610F\u4E49\uFF0C\u5219\u7528String()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//!!!!!!!!!!!!\u91CD\u70B9\u8BB0\u5FC6\uFF0C\u9700\u8981\u5224\u65AD!!!!!!!!!!!!!!!!!</span>
<span class="token comment">//\u5176\u4ED6\u7C7B\u578B\u8F6Cboolean\uFF08\u503C\uFF09</span>
<span class="token comment">// Boolean(\u503C\uFF09</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u54C8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="_3-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#_3-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> 3 \u64CD\u4F5C\u7B26</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u64CD\u4F5C\u7B26\uFF1A\u7B26\u53F7 \uFF0C\u7528\u6765\u8BA1\u7B97</span>

<span class="token comment">//\u7B97\u6570\u8FD0\u7B97\u7B26\uFF1A + - * /  %(\u4F59\u6570)</span>
<span class="token comment">//var num=20;</span>
<span class="token comment">//var result=num%3;</span>
<span class="token comment">//console.log(result); //2</span>
<span class="token comment">//\u9664\u4E86\u52A0\u6CD5\u5916\uFF0C\u51CF\u4E58\u9664\u90FD\u4F1A\u8FDB\u884C\u9690\u5F0F\u6570\u636E\u7C7B\u578B\u8F6C\u6362\uFF0C\u8F6C\u6362\u540E\u4ECD\u65E0\u6CD5\u8BA1\u7B97,\u8F93\u51FA\u503C\u4E3ANaN</span>

<span class="token comment">/*\u4E00\u5143\u8FD0\u7B97\u7B26\uFF1A\u4E00\u4E2A\u64CD\u4F5C\u6570\u5C31\u53EF\u4EE5\u8FD0\u7B97\u7684\u7B26\u53F7
    \u4E8C\u5143\u8FD0\u7B97\u7B26\uFF1A\u9700\u8981\u4E24\u4E2A\u64CD\u4F5C\u6570\u8FDB\u884C\u8FD0\u7B97\u7684\u7B26\u53F7
    \u4E09\u5143\u8FD0\u7B97\u7B26\uFF1A\u4E09\u4E2A...



    \u590D\u5408\u8FD0\u7B97\u7B26\uFF1A +=  -=  *=  /=\uFF08num=num+10\u7B80\u5316\u5199\u6CD5\uFF1Anum+=10\uFF09



    \u5173\u7CFB\u8FD0\u7B97\u7B26\uFF1A &gt; &lt; &gt;= &lt;=  ==\u4E0D\u4E25\u683C\u7684\u5224\u65AD\uFF08\u4EC5\u5224\u65AD\u503C\uFF09 === \u4E25\u683C\uFF08\u65E2\u5224\u65AD\u503C\uFF0C\u53C8\u5224\u65AD\u7C7B\u578B\uFF09    \u8FD0\u7B97\u7684\u7ED3\u679C\u662F\u5E03\u5C14\u7C7B\u578B\u3002
                          !==   \u4E0D\u7B49\u4E8E  \u4E0D\u4E25\u683C      !=== \u4E25\u683C
    var str=&#39;10&#39;;
    var num1=10;
    console.log(str==num1);



    \u903B\u8F91\u8FD0\u7B97\u7B26\uFF1A
    &amp;&amp; \u903B\u8F91\u4E0E : \u4E00\u4E2A\u4E3Afalse \u7ED3\u679C\u5C31\u662Ffalse   \u4E00\u5047\u5219\u5047
    || \u903B\u8F91\u6216 \uFF1A\u4E00\u4E2A\u4E3Atrue \u7ED3\u679C\u662Ftrue       \u4E00\u771F\u5219\u771F
    !\u975E \u53D6\u53CD
    var num2=10;
    var num3=20;
    console.log(num2==num2&amp;&amp;5&gt;6)
             //false    false     false&amp;&amp;false=false


    /*\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF1A = += -= *= /= %= */</span>

<span class="token comment">/*\u4F18\u5148\u7EA7\uFF1A
    \u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u5E95
1. ()  \u4F18\u5148\u7EA7\u6700\u9AD8
2. \u4E00\u5143\u8FD0\u7B97\u7B26  ++   --   !
3. \u7B97\u6570\u8FD0\u7B97\u7B26  \u5148*  /  %   \u540E +   -
4. \u5173\u7CFB\u8FD0\u7B97\u7B26  &gt;   &gt;=   &lt;   &lt;=
5. \u76F8\u7B49\u8FD0\u7B97\u7B26  ==   !=    ===    !==
6. \u903B\u8F91\u8FD0\u7B97\u7B26  \u5148&amp;&amp;   \u540E||
7. \u8D4B\u503C\u8FD0\u7B97\u7B26  =
  */</span>

<span class="token comment">//\u5B57\u9762\u91CF:\u628A\u4E00\u4E2A\u503C\u76F4\u63A5\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF</span>
<span class="token comment">//var num=10;</span>
<span class="token comment">//var flag=true;</span>
<span class="token comment">//var str=&quot;\u54C8\u54C8\u54C8&quot;\uFF1B</span>
<span class="token comment">//var y=10;    var y=x\uFF08\u4E0D\u5408\u9002\u79F0\u4E4B\u4E3A\u5B57\u9762\u91CF\uFF09</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h2 id="_4-for-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_4-for-\u5FAA\u73AF" aria-hidden="true">#</a> 4 for \u5FAA\u73AF</h2><h3 id="_4-1-\u753B\u661F\u661F\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-1-\u753B\u661F\u661F\u6848\u4F8B" aria-hidden="true">#</a> 4.1 \u753B\u661F\u661F\u6848\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u753B\u661F\u661F</span>

<span class="token comment">//\u63A7\u5236\u884C\u6570\u7684---\u6B63\u65B9\u5F62\u7684</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u63A7\u5236\u6BCF\u4E00\u884C\u6709\u51E0\u4E2A\u661F\u661F</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u2605&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br/&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token comment">//    for(var j=0;j&lt;=2;j++){</span>
<span class="token comment">//      document.write(&quot;\u2605&quot;);</span>
<span class="token comment">//    }</span>

<span class="token comment">//\u4E09\u89D2\u5F62\u7684---\u4E94\u89D2\u661F----\u968F\u7740\u884C\u6570\u7684\u589E\u52A0,\u6BCF\u4E00\u884C\u90FD\u4F1A\u6BD4\u4E0A\u4E00\u884C\u591A\u4E00\u4E2A\u4E94\u89D2\u661F</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u63A7\u5236\u6BCF\u4E00\u884C\u6709\u51E0\u4E2A\u661F\u661F</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\u2605&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br/&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_4-2-\u4E58\u6CD5\u53E3\u8BC0\u8868\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4E58\u6CD5\u53E3\u8BC0\u8868\u6848\u4F8B" aria-hidden="true">#</a> 4.2 \u4E58\u6CD5\u53E3\u8BC0\u8868\u6848\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// for (var i = 1; i &lt;= 9; i++) {</span>
<span class="token comment">//     for (var h = 1; h &lt;= i; h++) {</span>
<span class="token comment">//         document.write(h + &#39;*&#39; + i + &#39;=&#39; + h * i);</span>
<span class="token comment">//     }</span>
<span class="token comment">//     document.write(&#39;&lt;br&gt;&#39;)</span>
<span class="token comment">// }</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;table border=1 colspacing=0 cellspacing=0&gt; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;tr&gt;&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> h <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> h<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;td&gt;&#39;</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>h <span class="token operator">+</span> <span class="token string">&#39;*&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> h <span class="token operator">*</span> i<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;/td&gt;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;/tr&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;/table&gt;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_5-continue-\u548C-break" tabindex="-1"><a class="header-anchor" href="#_5-continue-\u548C-break" aria-hidden="true">#</a> 5 continue \u548C break</h2><h3 id="_5-1-break" tabindex="-1"><a class="header-anchor" href="#_5-1-break" aria-hidden="true">#</a> 5.1 break</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//break\u5173\u952E\u5B57:\u5982\u679C\u5728\u5FAA\u73AF\u4E2D\u4F7F\u7528,\u9047\u5230\u4E86break,\u5219\u7ACB\u523B\u8DF3\u51FA\u5F53\u524D\u6240\u5728\u7684\u5FAA\u73AF</span>

<span class="token comment">//    for(var i=0;i&lt;10;i++){</span>
<span class="token comment">//      while (true){</span>
<span class="token comment">//        console.log(&quot;\u54C8\u54C8&quot;);</span>
<span class="token comment">//        break;//</span>
<span class="token comment">//      }</span>
<span class="token comment">//    }</span>
<span class="token comment">//</span>
<span class="token comment">//    console.log(&quot;\u54C8\u54C8,\u6211\u51FA\u6765\u4E86&quot;);</span>

<span class="token comment">//\u627E\u5230100\u5230200\u4E4B\u95F4\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u88AB7\u6574\u9664\u7684\u6570\u5B57,</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">200</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">7</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_5-2-continue" tabindex="-1"><a class="header-anchor" href="#_5-2-continue" aria-hidden="true">#</a> 5.2 continue</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//continue:\u5728\u5FAA\u73AF\u4E2D\u5982\u679C\u9047\u5230continue\u5173\u952E\u5B57,\u76F4\u63A5\u5F00\u59CB\u4E0B\u4E00\u6B21\u5FAA\u73AF</span>

<span class="token comment">//    var i=0;</span>
<span class="token comment">//    while (i&lt;10){</span>
<span class="token comment">//      console.log(&quot;\u54C8\u54C8&quot;);</span>
<span class="token comment">//      //continue;</span>
<span class="token comment">//      i++;</span>
<span class="token comment">//    }</span>

<span class="token comment">//\u6848\u4F8B:\u6C42100-200\u4E4B\u95F4\u6240\u6709\u7684\u5947\u6570\u7684\u548C\uFF08\u7528continue\uFF09</span>

<span class="token comment">//    var sum=0;</span>
<span class="token comment">//    var i=100;</span>
<span class="token comment">//    while(i&lt;=200){</span>
<span class="token comment">//      //\u5224\u65AD\u662F\u4E0D\u662F\u5076\u6570</span>
<span class="token comment">//      if(i%2==0){</span>
<span class="token comment">//       //\u5982\u679C\u662F\u5076\u6570-----&gt;\u8DF3\u8FC7\u8FD9\u4E2A\u6570\u5B57</span>
<span class="token comment">//        i++;//102</span>
<span class="token comment">//        continue;</span>
<span class="token comment">//      }</span>
<span class="token comment">//      sum+=i;</span>
<span class="token comment">//      i++;</span>
<span class="token comment">//    }</span>
<span class="token comment">//    console.log(sum);</span>

<span class="token comment">//\u6848\u4F8B:\u6C42\u6574\u6570100\uFF5E200\u7684\u7D2F\u52A0\u503C\uFF0C\u4F46\u8981\u6C42\u8DF3\u8FC7\u6240\u6709\u4E2A\u4F4D\u4E3A3\u7684\u6570</span>

<span class="token comment">//    var sum=0;</span>
<span class="token comment">//    var i=100;</span>
<span class="token comment">//    while(i&lt;=200){</span>
<span class="token comment">//      if(i%10==3){</span>
<span class="token comment">//        //\u4E2A\u4F4D\u6570\u662F3,\u4E0D\u8981</span>
<span class="token comment">//        i++;</span>
<span class="token comment">//        continue;</span>
<span class="token comment">//      }</span>
<span class="token comment">//      sum+=i;</span>
<span class="token comment">//      i++;</span>
<span class="token comment">//    }</span>
<span class="token comment">//    console.log(sum);</span>

<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u4E2A\u4F4D\u6570\u662F3,\u4E0D\u8981</span>
    i<span class="token operator">++</span>
    <span class="token keyword">continue</span>
  <span class="token punctuation">}</span>
  sum <span class="token operator">+=</span> i
  i<span class="token operator">++</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>

<span class="token comment">// console.log(3%10  ==3);</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h2 id="_6-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_6-\u6570\u7EC4" aria-hidden="true">#</a> 6 \u6570\u7EC4</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6570\u7EC4:\u4E00\u7EC4\u6709\u5E8F\u7684\u6570\u636E</span>
<span class="token comment">//\u6570\u7EC4\u7684\u4F5C\u7528:\u53EF\u4EE5\u4E00\u6B21\u6027\u5B58\u50A8\u591A\u4E2A\u6570\u636E</span>
<span class="token comment">//\u6570\u7EC4\u7684\u5B9A\u4E49:</span>
<span class="token comment">/*
 *
 * 1. \u901A\u8FC7\u6784\u9020\u51FD\u6570\u521B\u5EFA\u6570\u7EC4
 * \u8BED\u6CD5:
 * var \u6570\u7EC4\u540D=new Array();
 * var array=new Array();//\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6570\u7EC4
 * \u6570\u7EC4\u7684\u540D\u5B57\u5982\u679C\u76F4\u63A5\u8F93\u51FA,\u90A3\u4E48\u76F4\u63A5\u5C31\u53EF\u4EE5\u628A\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u663E\u793A\u51FA\u6765,\u5982\u679C\u6CA1\u6709\u6570\u636E,\u5C31\u770B\u4E0D\u5230\u6570\u636E
 *
 * var \u6570\u7EC4\u540D=new Array(\u957F\u5EA6);
 * \u5982\u679C\u6570\u7EC4\u4E2D\u6CA1\u6709\u6570\u636E,\u4F46\u662F\u6709\u957F\u5EA6---,\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u503C\u5C31\u662Fundefined
 * \u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F\u521B\u5EFA\u6570\u7EC4\u7684\u65F6\u5019,\u5982\u679C\u5728Array(\u4E00\u4E2A\u6570\u5B57)---&gt;\u6570\u7EC4\u7684\u957F\u5EA6(\u6570\u7EC4\u5143\u7D20\u7684\u4E2A\u6570)
 * \u5982\u679C\u5728Array(\u591A\u4E2A\u503C);\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u5C31\u6709\u6570\u636E\u4E86,\u6570\u7EC4\u7684\u957F\u5EA6\u5C31\u662F\u8FD9\u4E9B\u6570\u636E\u7684\u4E2A\u6570
 *
 *
 * 2. \u901A\u8FC7\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u521B\u5EFA\u6570\u7EC4
 *
 * var \u6570\u7EC4\u540D=[];//\u7A7A\u6570\u7EC4
 * var array=[];
 *
 *
 * \u65E0\u8BBA\u662F\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F\u8FD8\u662F\u5B57\u9762\u91CF\u7684\u65B9\u5F0F,\u5B9A\u4E49\u7684\u6570\u7EC4,\u5982\u679C\u6709\u957F\u5EA6,\u90A3\u4E48\u9ED8\u8BA4\u662Fundefined
 *
 * \u6570\u7EC4:\u4E00\u7EC4\u6709\u5E8F\u7684\u6570\u636E
 * \u6570\u7EC4\u5143\u7D20:\u6570\u7EC4\u4E2D\u5B58\u50A8\u7684\u6BCF\u4E2A\u6570\u636E,\u90FD\u53EF\u4EE5\u53EB\u6570\u7EC4\u7684\u5143\u7D20,\u6BD4\u5982:\u5B58\u50A8\u4E863\u4E2A\u6570\u636E,\u6570\u7EC4\u4E2D3\u4E2A\u5143\u7D20
 * \u6570\u7EC4\u957F\u5EA6:\u5C31\u662F\u6570\u7EC4\u7684\u5143\u7D20\u7684\u4E2A\u6570,\u6BD4\u5982\u67093\u4E2A\u5143\u7D20,\u5C31\u8BF4,\u8FD9\u4E2A\u6570\u7EC4\u7684\u957F\u5EA6\u662F3
 * \u6570\u7EC4\u7D22\u5F15(\u4E0B\u6807):\u7528\u6765\u5B58\u50A8\u6216\u8005\u8BBF\u95EE\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u7684,\u7D22\u5F15\u4ECE0\u5F00\u59CB,\u5230\u957F\u5EA6\u51CF1\u7ED3\u675F
 * \u6570\u7EC4\u7684\u7D22\u5F15\u548C\u6570\u7EC4\u7684\u957F\u5EA6\u7684\u5173\u7CFB:\u957F\u5EA6\u51CF1\u5C31\u662F\u6700\u5927\u7684\u7D22\u5F15\u503C
 *
 * \u5982\u4F55\u8BBE\u7F6E\u6570\u7EC4\u4E2D\u67D0\u4E2A\u4F4D\u7F6E\u7684\u503C
 * \u6570\u7EC4\u540D[\u4E0B\u6807]=\u503C;
 * arr[3]=100;
 * \u5982\u4F55\u83B7\u53D6\u6570\u7EC4\u4E2D\u67D0\u4E2A\u4F4D\u7F6E\u7684\u503C
 * var result=\u6570\u7EC4\u540D[\u4E0B\u6807];
 * console.log(result);
 *
 *
 *
 *
 * */</span>

<span class="token comment">//\u901A\u8FC7\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F\u5B9A\u4E49\u4E00\u4E2A\u6570\u7EC4</span>
<span class="token comment">//    var array=new Array(5);//\u6CA1\u6709\u6570\u636E,\u7A7A\u6570\u7EC4</span>
<span class="token comment">//    console.log(array);</span>
<span class="token comment">//alert(array);</span>

<span class="token comment">//\u5C31\u662F\u4E00\u4E2A\u6570\u7EC4----&gt;\u5B57\u9762\u91CF\u7684\u65B9\u5F0F</span>
<span class="token comment">//    var arr=[];</span>
<span class="token comment">//    console.log(arr);</span>

<span class="token comment">//    var arr1=new Array();//\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F---\u7A7A\u6570\u7EC4</span>
<span class="token comment">//    var arr2=new Array(5);//\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6570\u7EC4,\u6570\u7EC4\u4E2D\u67095\u4E2A\u5143\u7D20,\u6570\u7EC4\u957F\u5EA6\u662F5,\u6BCF\u4E2A\u6570\u636E\u662Fundefined</span>
<span class="token comment">//</span>
<span class="token comment">//    var arr3=new Array(10,20,1000,40,50,60);</span>
<span class="token comment">//    console.log(arr3);</span>

<span class="token comment">//    var arr=new Array(10,20,30,40,100);</span>
<span class="token comment">//    //console.log(arr[4]);//\u83B7\u53D6</span>
<span class="token comment">//    //\u8BBE\u7F6E</span>
<span class="token comment">//    arr[3]=1000;</span>
<span class="token comment">//    console.log(arr);</span>

<span class="token comment">//\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u66F4\u7B80\u5355</span>

<span class="token comment">//    var arr=[10,20,30,40,50,60,70,80,10,20,3043,5];//\u7A7A\u6570\u7EC4</span>
<span class="token comment">//    console.log(arr.length);</span>

<span class="token comment">/*
 *
 * \u8BF7\u8F93\u5165\u73ED\u7EA7\u4EBA\u6570,\u6839\u636E\u73ED\u7EA7\u4EBA\u6570,\u8F93\u5165\u6BCF\u4E2A\u5B66\u751F\u7684\u6570\u5B66\u6210\u7EE9,\u6C42\u603B\u6210\u7EE9,\u6C42\u5E73\u5747\u6210\u7EE9,\u6C42\u6700\u9AD8\u5206,\u6C42\u6700\u4F4E\u5206
 *
 *
 *
 * */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><p>\u6CE8\u610F\u95EE\u9898\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//var arr=[10,2,3,4,1];</span>
<span class="token comment">//\u957F\u5EA6:5</span>
<span class="token comment">//\u7D22\u5F15:0-4</span>
<span class="token comment">//console.log(arr);</span>
<span class="token comment">//alert(arr);</span>

<span class="token comment">//\u6570\u7EC4\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u7C7B\u578B\u4E00\u5B9A\u662F\u4E00\u6837\u7684\u5417? \u7C7B\u578B\u53EF\u4EE5\u4E0D\u4E00\u6837</span>
<span class="token comment">//    var arr=[10,&quot;\u54C8\u54C8&quot;,true,null,undefined,new Object()];</span>
<span class="token comment">//    console.log(arr);</span>
<span class="token comment">//\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u4E0D\u662F\u53EF\u4EE5\u6539\u53D8\u5462?</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">//\u901A\u8FC7\u7D22\u5F15\u6765\u8BBE\u7F6E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7684\u503C</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">//\u83B7\u53D6\u5143\u7D20\u7684\u503C,\u901A\u8FC7\u7D22\u5F15\u7684\u65B9\u5F0F</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">//\u5411\u6570\u7EC4\u4E2D\u8FFD\u52A0\u65B0\u5143\u7D20</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">//\u65B0arr.length\u4EE3\u66FF\u65E7\u7684arr.length</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">//\u6784\u9020\u51FD\u6570\u6CD5\u548C\u5B57\u9762\u91CF\u53D1\u521B\u5EFA\u6570\u7EC4\u957F\u5EA6\u7684\u533A\u522B\uFF1A</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//4\u4E2A\u7A7A\u5143\u7D20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment">//\u4E00\u4E2A4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u603B\u7ED3\u6570\u7EC4\u7684\u57FA\u7840\u77E5\u8BC6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 *
 * \u6570\u7EC4:\u5B58\u50A8\u4E00\u7EC4\u6709\u5E8F\u7684\u6570\u636E
 * \u6570\u7EC4\u7684\u4F5C\u7528:\u4E00\u6B21\u6027\u5B58\u50A8\u591A\u4E2A\u6570\u636E
 * \u6570\u7EC4\u7684\u5B9A\u4E49\u65B9\u5F0F:
 * 1.\u6784\u9020\u51FD\u6570\u5B9A\u4E49\u6570\u7EC4: var \u6570\u7EC4\u540D=new Array();
 * 2.\u5B57\u9762\u91CF\u65B9\u5F0F\u5B9A\u4E49\u6570\u7EC4: var \u6570\u7EC4\u540D=[];
 *
 * var \u6570\u7EC4\u540D=new Array();\u7A7A\u6570\u7EC4
 * var \u6570\u7EC4\u540D=new Array(8);\u5B9A\u4E49\u4E86\u6570\u7EC4,\u67098\u4E2A\u957F\u5EA6
 * var \u6570\u7EC4\u540D=new Array(\u503C1,\u503C2,\u503C3....);\u5B9A\u4E49\u6570\u7EC4\u5E76\u4E14\u6709\u591A\u4E2A\u6570\u636E
 *
 * var \u6570\u7EC4\u540D=[];\u7A7A\u6570\u7EC4
 * var \u6570\u7EC4\u540D=[\u503C1,\u503C2,\u503C3];\u6709\u4E09\u4E2A\u6570\u636E
 * \u6570\u7EC4\u5143\u7D20:\u5C31\u662F\u6570\u7EC4\u4E2D\u5B58\u50A8\u7684\u6570\u636E
 * \u6570\u7EC4\u957F\u5EA6:\u5C31\u662F\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u4E2A\u6570
 * \u6570\u7EC4\u7D22\u5F15(\u4E0B\u6807):\u4ECE0\u5F00\u59CB,\u5230\u6570\u7EC4\u7684\u957F\u5EA6\u51CF1\u7ED3\u675F
 * \u901A\u8FC7\u4E0B\u6807\u8BBE\u7F6E\u6570\u7EC4\u7684\u5143\u7D20\u503C: \u6570\u7EC4\u540D[\u7D22\u5F15]=\u503C
 * \u901A\u8FC7\u4E0B\u6807\u8BBF\u95EE\u6570\u7EC4\u7684\u5143\u7D20\u503C: \u6570\u7EC4\u540D[\u7D22\u5F15]
 *
 *
 *
 *
 * */</span>

<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u7A7A\u6570\u7EC4</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">//\u957F\u5EA6\u4E3A5\u7684\u6570\u7EC4,\u6BCF\u4E2A\u6570\u636E\u7684\u503C\u662Fundefined</span>
<span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">//\u957F\u5EA6\u4E3A5\u5206\u6570\u7EC4,</span>
<span class="token keyword">var</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//\u7A7A\u6570\u7EC4</span>
<span class="token keyword">var</span> arr5 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//\u957F\u5EA6\u4E3A3\u7684\u6570\u7EC4</span>
<span class="token keyword">var</span> arr6 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span> <span class="token comment">//\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u503C\u7684\u7C7B\u578B\u53EF\u4EE5\u4E0D\u4E00\u6837</span>

<span class="token keyword">var</span> arr7 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">//\u8BBE\u7F6E\u6570\u7EC4\u7684\u5143\u7D20\u7684\u503C</span>
arr7<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
arr7<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="_6-1-\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_6-1-\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> 6.1 \u5192\u6CE1\u6392\u5E8F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5192\u6CE1\u6392\u5E8F:\u628A\u6240\u6709\u7684\u6570\u636E\u6309\u7167\u4E00\u5B9A\u7684\u987A\u5E8F\u8FDB\u884C\u6392\u5217(\u4ECE\u5C0F\u5230\u5927,\u4ECE\u5927\u5230\u4E0B)</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
<span class="token comment">//\u5FAA\u73AF\u63A7\u5236\u6BD4\u8F83\u7684\u8F6E\u6570</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u63A7\u5236\u6BCF\u4E00\u8F6E\u7684\u6BD4\u8F83\u7684\u6B21\u6570</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
      arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_7-\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_7-\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u95EE\u9898" aria-hidden="true">#</a> 7 \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u95EE\u9898</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u51FD\u6570\u7684\u8FD4\u56DE\u503C:\u5728\u51FD\u6570\u5185\u90E8\u6709return\u5173\u952E\u5B57,\u5E76\u4E14\u5728\u5173\u952E\u5B57\u540E\u9762\u6709\u5185\u5BB9,\u8FD9\u4E2A\u5185\u5BB9\u88AB\u8FD4\u56DE\u4E86</span>
<span class="token comment">//\u5F53\u51FD\u6570\u8C03\u7528\u4E4B\u540E,\u9700\u8981\u8FD9\u4E2A\u8FD4\u56DE\u503C,\u90A3\u4E48\u5C31\u5B9A\u4E49\u53D8\u91CF\u63A5\u6536,\u5373\u53EF</span>

<span class="token comment">/*
 * \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u4E2D\u6709return ,\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5C31\u6709\u8FD4\u56DE\u503C
 * \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u4E2D\u6CA1\u6709return,\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5C31\u6CA1\u6709\u8FD4\u56DE\u503C
 * \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u4E2D\u6CA1\u6709\u660E\u786E\u7684\u8FD4\u56DE\u503C,\u90A3\u4E48\u8C03\u7528\u7684\u65F6\u5019\u63A5\u6536\u4E86,\u7ED3\u679C\u5C31\u662Fundefined
 * (\u4EC0\u4E48\u662F\u6CA1\u6709\u660E\u786E\u8FD4\u56DE\u503C:\u51FD\u6570\u4E2D\u6CA1\u6709return,\u6216\u8005\u51FD\u6570\u4E2D\u6709return,\u4F46\u662Freturn\u540E\u9762\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9)
 * \u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C,\u4F46\u662F\u5728\u8C03\u7528\u7684\u65F6\u5019\u63A5\u6536\u4E86,\u90A3\u4E48\u7ED3\u679C\u5C31\u662Fundefined,\u53D8\u91CF\u58F0\u660E\u4E86,\u6CA1\u6709\u8D4B\u503C,\u7ED3\u679C\u4E5F\u662Fundefined
 * \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u6709\u53C2\u6570,\u6709\u53C2\u6570\u7684\u51FD\u6570
 * \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u6CA1\u6709\u53C2\u6570,\u6CA1\u6709\u53C2\u6570\u7684\u51FD\u6570
 * \u5F62\u53C2\u7684\u4E2A\u6570\u548C\u5B9E\u53C2\u7684\u4E2A\u6570\u53EF\u4EE5\u4E0D\u4E00\u81F4
 * return \u4E0B\u9762\u7684\u4EE3\u7801\u662F\u4E0D\u4F1A\u6267\u884C\u7684
 */</span>

<span class="token comment">//\u51FD\u6570\u5B9A\u4E49: \u6709\u53C2\u6570\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token comment">//\u628A\u548C\u8FD4\u56DE</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u51FD\u6570\u8C03\u7528</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_8-\u590D\u4E60" tabindex="-1"><a class="header-anchor" href="#_8-\u590D\u4E60" aria-hidden="true">#</a> 8 \u590D\u4E60</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">/*
     *
     * break:\u5728\u5FAA\u73AF\u4E2D\u9047\u5230\u8FD9\u4E2A\u5173\u952E\u5B57,\u76F4\u63A5\u8DF3\u51FA\u5F53\u524D\u6240\u5728\u7684\u5FAA\u73AF
     * continue:\u5728\u5FAA\u73AF\u4E2D\u9047\u5230\u8FD9\u4E2A\u5173\u952E\u5B57,\u76F4\u63A5\u8FDB\u884C\u4E0B\u4E00\u6B21\u5FAA\u73AF
     * \u6570\u7EC4:\u5B58\u50A8\u4E00\u7EC4\u6709\u5E8F\u7684\u6570\u636E,\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u4E0D\u4E00\u6837
     * \u6570\u7EC4\u7684\u4F5C\u7528:\u4E00\u6B21\u6027\u5B58\u50A8\u591A\u4E2A\u6570\u636E
     * \u6570\u7EC4\u5143\u7D20:\u6570\u7EC4\u4E2D\u5B58\u50A8\u7684\u6BCF\u4E2A\u6570\u636E,\u53EB\u6570\u7EC4\u5143\u7D20,\u5B58\u50A8\u4E865\u4E2A\u6570\u636E,\u67095\u4E2A\u6570\u7EC4\u5143\u7D20
     * \u6570\u7EC4\u7684\u957F\u5EA6:\u6570\u7EC4\u7684\u5143\u7D20\u7684\u4E2A\u6570,\u53EB\u6570\u7EC4\u7684\u957F\u5EA6:\u6570\u7EC4\u540D.length---&gt;\u5C31\u662F\u957F\u5EA6,\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u53EF\u4EE5\u6539\u53D8\u7684
     * \u7D22\u5F15(\u4E0B\u6807):\u5B58\u50A8\u6570\u7EC4\u5143\u7D20\u7684\u7F16\u53F7,\u4ECE0\u5F00\u59CB,\u5230\u6570\u7EC4\u7684\u957F\u5EA6-1\u7ED3\u675F
     * \u7D22\u5F15\u662F\u7528\u6765\u5B58\u50A8\u548C\u8BFB\u53D6\u6570\u7EC4\u5143\u7D20\u7684
     * \u904D\u5386\u6570\u7EC4:\u901A\u8FC7\u5FAA\u73AF\u7684\u65B9\u5F0F\u627E\u5230\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u6570\u636E
     * \u5192\u6CE1\u6392\u5E8F:
     * \u6C42\u6570\u7EC4\u7684\u548C,\u6700\u5927\u503C,\u6700\u5C0F\u503C,\u5E73\u5747\u503C
     *
     * \u6570\u7EC4\u5B9A\u4E49\u7684\u65B9\u5F0F:
     * 1. \u901A\u8FC7\u6784\u9020\u51FD\u6570\u5B9A\u4E49\u6570\u7EC4
     * var \u6570\u7EC4\u540D=new Array();\u7A7A\u6570\u7EC4 Array()\u5C31\u662F\u6784\u9020\u51FD\u6570
     * var \u6570\u7EC4\u540D=new Array(\u957F\u5EA6);\u662F\u8BBE\u7F6E\u6570\u7EC4\u7684\u521D\u59CB\u7684\u957F\u5EA6,\u957F\u5EA6\u662F\u53EF\u4EE5\u6539\u53D8\u7684
     * var \u6570\u7EC4\u540D=new Array(\u503C,\u503C,\u503C...);\u5B9A\u4E49\u6570\u7EC4\u5E76\u8BBE\u7F6E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u503C
     * 2. \u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u5B9A\u4E49\u6570\u7EC4
     * var \u6570\u7EC4\u540D=[];\u7A7A\u6570\u7EC4
     * var \u6570\u7EC4\u540D=[10];\u8FD9\u4E2A\u6570\u7EC4\u6709\u4E00\u4E2A\u5143\u7D20,\u503C\u662F10,\u957F\u5EA6\u662F1
     * \u6570\u7EC4\u53D8\u91CF
     * for(var i=0;i&lt;\u6570\u7EC4\u540D.length;i++){
     *
     * }
     *
     *
     * \u51FD\u6570:\u628A\u4E00\u4E9B\u91CD\u590D\u7684\u4EE3\u7801\u5C01\u88C5\u8D77\u6765,\u5728\u9700\u8981\u7684\u65F6\u5019\u76F4\u63A5\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u5C31\u53EF\u4EE5\u4E86
     * \u51FD\u6570\u4F5C\u7528:\u4EE3\u7801\u7684\u91CD\u7528
     * \u51FD\u6570\u5B9A\u4E49:
     * function \u51FD\u6570\u540D(){
     *     \u51FD\u6570\u4F53
     * }
     * \u51FD\u6570\u8C03\u7528:
     * \u51FD\u6570\u540D();
     *
     * \u53C2\u6570:\u5F62\u53C2\u548C\u5B9E\u53C2
     * \u5F62\u53C2:\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019\u51FD\u6570\u540D\u5B57\u540E\u9762\u7684\u5C0F\u62EC\u53F7\u91CC\u7684\u53D8\u91CF\u5C31\u662F\u53C2\u6570,\u662F\u4E0D\u9700\u8981\u5199var
     * \u5B9E\u53C2:\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\u5C0F\u62EC\u53F7\u91CC\u4F20\u5165\u7684\u53D8\u91CF\u6216\u8005\u662F\u503C,\u90FD\u662F\u5B9E\u53C2
     * \u8FD4\u56DE\u503C:\u51FD\u6570\u4E2D\u5982\u679C\u6709return,\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5C31\u6709\u8FD4\u56DE\u503C
     * \u5982\u679C\u51FD\u6570\u4E2D\u6CA1\u6709return,\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C
     * \u5982\u679C\u51FD\u6570\u4E2D\u6709return,\u4F46\u662F\u540E\u9762\u4EC0\u4E48\u5185\u5BB9\u90FD\u6CA1\u6709,\u8FD9\u4E2A\u51FD\u6570\u6CA1\u6709\u660E\u786E\u8FD4\u56DE\u503C
     * \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u6CA1\u6709\u660E\u786E\u7684\u8FD4\u56DE\u503C,\u51FD\u6570\u8C03\u7528\u4E86,\u5E76\u4E14\u63A5\u6536\u4E86,\u90A3\u4E48\u6B64\u65F6\u63A5\u6536\u7684\u7ED3\u679Cundefined
     * \u5982\u679C\u76F4\u63A5\u8F93\u51FA\u51FD\u6570\u540D\u5B57,\u90A3\u4E48\u662F\u8FD9\u4E2A\u51FD\u6570\u7684\u4EE3\u7801
     * \u65E0\u53C2\u6570\u65E0\u8FD4\u56DE\u503C\u7684\u51FD\u6570
     * function f1(){
     *
     * }
     * \u6709\u53C2\u6570\u65E0\u8FD4\u56DE\u503C\u7684\u51FD\u6570,2\u4E2A\u53C2\u6570
     * function f2(x,y){
     *
     * }
     * \u65E0\u53C2\u6570\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570
     * function f3(){
     *   return 100;
     * }
     * \u6709\u53C2\u6570\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570
     * function f4(x){
     *  return &quot;\u60A8\u597D&quot;;
     * }
     *
     *
     *
     *
     * */</span>


    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5FAA\u73AF\u63A7\u5236\u6BD4\u8F83\u7684\u8F6E\u6570</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u6B64\u65F6\u53EA\u662F\u6BD4\u8F83\u4E86\u4E00\u6B21---\u5982\u679C\u60F3\u8981\u6BD4\u8F83\u591A\u6B21--for\u5FAA\u73AF</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
          arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token comment">//    //\u9690\u5F0F\u5168\u5C40\u53D8\u91CF</span>
    <span class="token comment">//    for( i=0;i&lt;10;i++){</span>
    <span class="token comment">//      console.log(&quot;\u4ECA\u5929\u5929\u6C14\u771F\u597D&quot;);</span>
    <span class="token comment">//    }</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h2 id="_9-\u51FD\u6570\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#_9-\u51FD\u6570\u6C47\u603B" aria-hidden="true">#</a> 9 \u51FD\u6570\u6C47\u603B</h2><h3 id="_9-1-arguments-\u4F2A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_9-1-arguments-\u4F2A\u6570\u7EC4" aria-hidden="true">#</a> 9.1 arguments \u4F2A\u6570\u7EC4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8BA1\u7B97n\u4E2A\u6570\u5B57\u7684\u548C</span>
<span class="token comment">//    function f1() {</span>
<span class="token comment">//      //\u83B7\u53D6\u7684\u662F\u51FD\u6570\u5728\u8C03\u7528\u7684\u65F6\u5019,\u4F20\u5165\u4E86\u51E0\u4E2A\u53C2\u6570</span>
<span class="token comment">//      //console.log(arguments.length);</span>
<span class="token comment">//      //\u4F7F\u7528arguments\u5BF9\u8C61\u53EF\u4EE5\u83B7\u53D6\u4F20\u5165\u7684\u6BCF\u4E2A\u53C2\u6570\u7684\u503C</span>
<span class="token comment">//      console.log(arguments);</span>
<span class="token comment">//    }</span>
<span class="token comment">//    f1(10,20,30,40,100,200);//\u8C03\u7528</span>

<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//arguments-----&gt;\u6570\u7EC4\u4F7F\u7528------\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2A\u4F2A\u6570\u7EC4</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_9-2-\u51FD\u6570\u7684\u5176\u4ED6\u5B9A\u4E49\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_9-2-\u51FD\u6570\u7684\u5176\u4ED6\u5B9A\u4E49\u65B9\u5F0F" aria-hidden="true">#</a> 9.2 \u51FD\u6570\u7684\u5176\u4ED6\u5B9A\u4E49\u65B9\u5F0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * \u547D\u540D\u51FD\u6570:\u51FD\u6570\u5982\u679C\u6709\u540D\u5B57,\u5C31\u662F\u547D\u540D\u51FD\u6570
 * \u533F\u540D\u51FD\u6570:\u51FD\u6570\u5982\u679C\u6CA1\u6709\u540D\u5B57,\u5C31\u662F\u533F\u540D\u51FD\u6570 !!\u6CE8\u610F:!!\u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u540E\u9762,\u8D4B\u503C\u7ED3\u675F\u540E,\u8981\u52A0\u5206\u53F7
 *
 * \u51FD\u6570\u7684\u53E6\u4E00\u79CD\u5B9A\u4E49\u65B9\u5F0F
 * \u51FD\u6570\u8868\u8FBE\u5F0F:
 * var f1=function (){};
 * \u5982\u679C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F,\u90A3\u4E48\u6B64\u65F6\u524D\u9762\u7684\u53D8\u91CF\u4E2D\u5B58\u50A8\u7684\u5C31\u662F\u4E00\u4E2A\u51FD\u6570,\u800C\u8FD9\u4E2A\u53D8\u91CF\u5C31\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A\u51FD\u6570,\u5C31\u53EF\u4EE5\u76F4\u63A5\u52A0\u5C0F\u62EC\u53F7\u8C03\u7528\u4E86
 * f1();
 */</span>

<span class="token comment">//\u51FD\u6570\u7684\u81EA\u8C03\u7528,\u6CA1\u6709\u540D\u5B57--\u58F0\u660E\u7684\u540C\u65F6,\u76F4\u63A5\u8C03\u7528</span>
<span class="token comment">//\u4E0D\u4E0E\u5176\u4ED6\u51FD\u6570\u51B2\u7A81\uFF0C\u4E0D\u80FD\u91CD\u590D\u8C03\u7528\uFF0C\u4E00\u6B21\u6027\u7684------</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u963F\u6D85\u54C8\u65AF\u8BF6\u5466&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u560E\u560E&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//\u51FD\u6570\u58F0\u660E</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52A9\u6559\u597D\u5E05\u54E6&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u82CF\u597D\u7325\u7410\u54E6&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u8986\u76D6\u4E0A\u9762\u7684\uFF0C\u4E24\u6B21fl();\u90FD\u662F\u8C03\u7528\u7684\u5C0F\u82CF\u597D\u7325\u7410</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//\u51FD\u6570\u8868\u8FBE\u5F0F</span>
<span class="token keyword">var</span> <span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52A9\u6559\u6CA1\u6709\u5C0F\u6768\u5E05&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u6768\u771F\u7684\u5F88\u5E05&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u4E24\u6B21\u90FD\u80FD\u8F93\u51FA</span>
<span class="token punctuation">}</span>
<span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//\u51FD\u6570\u81EA\u8C03\u7528</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u963F\u6D85\u54C8\u65AF\u8BF6\u5466&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u560E\u560E&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u51FD\u6570\u4E5F\u662F\u4E00\u79CD\u6570\u636E\u7C7B\u578B</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u51FD\u6570&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u5982\u4F55\u83B7\u53D6\u67D0\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B? typeof</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> f1<span class="token punctuation">)</span>
<span class="token comment">//\u51FD\u6570\u662F\u6709\u6570\u636E\u7C7B\u578B,\u6570\u636E\u7C7B\u578B:\u662Ffunction \u7C7B\u578B\u7684</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="_9-3-\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_9-3-\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F7F\u7528" aria-hidden="true">#</a> 9.3 \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u51FD\u6570\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u6570\u4F7F\u7528,\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570,\u90A3\u4E48\u6211\u4EEC\u8BF4\u8FD9\u4E2A\u53C2\u6570(\u51FD\u6570)\u53EF\u4EE5\u53EB\u56DE\u8C03\u51FD\u6570</span>
<span class="token comment">//\u53EA\u8981\u662F\u770B\u5230\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F7F\u7528\u4E86,\u90A3\u5C31\u662F\u56DE\u8C03\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u60A8\u597D\u554A&#39;</span><span class="token punctuation">)</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//fn\u6B64\u65F6\u5E94\u8BE5\u662F\u4E00\u4E2A\u51FD\u6570</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">suSay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u7325\u7410,\u6211\u90AA\u6076,\u6211\u9F8C\u9F8A,\u5C0F\u82CF\u8BF4&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span>suSay<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_10-\u4F5C\u7528\u57DF-\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_10-\u4F5C\u7528\u57DF-\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> 10 \u4F5C\u7528\u57DF&amp;\u5168\u5C40\u53D8\u91CF</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u4F5C\u7528\u57DF:\u4F7F\u7528\u7684\u8303\u56F4</span>
<span class="token comment">/*
 * \u5168\u5C40\u53D8\u91CF:\u58F0\u660E\u7684\u53D8\u91CF\u662F\u4F7F\u7528var\u58F0\u660E\u7684,\u90A3\u4E48\u8FD9\u4E2A\u53D8\u91CF\u5C31\u662F\u5168\u5C40\u53D8\u91CF,\u5168\u5C40\u53D8\u91CF\u53EF\u4EE5\u5728\u9875\u9762\u7684\u4EFB\u4F55\u4F4D\u7F6E\u4F7F\u7528
 * \u9664\u4E86\u51FD\u6570\u4EE5\u5916,\u5176\u4ED6\u7684\u4EFB\u4F55\u4F4D\u7F6E\u5B9A\u4E49\u7684\u53D8\u91CF\u90FD\u662F\u5168\u5C40\u53D8\u91CF
 * \u5C40\u90E8\u53D8\u91CF:\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF,\u662F\u5C40\u90E8\u53D8\u91CF,\u5916\u9762\u4E0D\u80FD\u4F7F\u7528 eg:\u5F62\u53C2\u662F\u5C40\u90E8\u53D8\u91CF
 * \u5168\u5C40\u53D8\u91CF,\u5982\u679C\u9875\u9762\u4E0D\u5173\u95ED,\u90A3\u4E48\u5C31\u4E0D\u4F1A\u91CA\u653E,\u5C31\u4F1A\u5360\u7A7A\u95F4,\u6D88\u8017\u5185\u5B58
 *
 * \u5168\u5C40\u4F5C\u7528\u57DF:\u5168\u5C40\u53D8\u91CF\u7684\u4F7F\u7528\u8303\u56F4
 * \u5C40\u90E8\u4F5C\u7528\u57DF:\u5C40\u90E8\u53D8\u91CF\u7684\u4F7F\u7528\u8303\u56F4
 *
 * \u5757\u7EA7\u4F5C\u7528\u57DF:\u4E00\u5BF9\u5927\u62EC\u53F7\u5C31\u53EF\u4EE5\u770B\u6210\u662F\u4E00\u5757,\u5728\u8FD9\u5757\u533A\u57DF\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF,\u53EA\u80FD\u5728\u8FD9\u4E2A\u533A\u57DF\u4E2D\u4F7F\u7528,\u4F46\u662F\u5728js\u4E2D\u5728\u8FD9\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF,\u5916\u9762\u4E5F\u80FD\u4F7F\u7528;
 * \u8BF4\u660E:js\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF,\u53EA\u6709\u51FD\u6570\u9664\u5916
 *
 * \u9690\u5F0F\u5168\u5C40\u53D8\u91CF:\u58F0\u660E\u7684\u53D8\u91CF\u6CA1\u6709var,\u5C31\u53EB\u9690\u5F0F\u5168\u5C40\u53D8\u91CF
 * \u5168\u5C40\u53D8\u91CF\u662F\u4E0D\u80FD\u88AB\u5220\u9664\u7684,\u9690\u5F0F\u5168\u5C40\u53D8\u91CF\u662F\u53EF\u4EE5\u88AB\u5220\u9664\u7684
 * \u5B9A\u4E49\u53D8\u91CF\u4F7F\u7528var\u662F\u4E0D\u4F1A\u88AB\u5220\u9664\u7684,\u6CA1\u6709var\u662F\u53EF\u4EE5\u5220\u9664\u7684
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_11-\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#_11-\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> 11 \u4F5C\u7528\u57DF\u94FE</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">20</span>

  <span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">30</span>

    <span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">50</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_12-\u9884\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_12-\u9884\u89E3\u6790" aria-hidden="true">#</a> 12 \u9884\u89E3\u6790</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u9884\u89E3\u6790:\u63D0\u524D\u89E3\u6790\u4EE3\u7801</span>
<span class="token comment">/*
 *
 * \u9884\u89E3\u6790:\u5C31\u662F\u5728\u89E3\u6790\u4EE3\u7801\u4E4B\u524D
 * \u9884\u89E3\u6790\u505A\u4EC0\u4E48\u4E8B?
 * \u628A\u53D8\u91CF\u7684\u58F0\u660E\u63D0\u524D\u4E86----\u63D0\u524D\u5230\u5F53\u524D\u6240\u5728\u7684\u4F5C\u7528\u57DF\u7684\u6700\u4E0A\u9762
 * \u51FD\u6570\u7684\u58F0\u660E\u4E5F\u4F1A\u88AB\u63D0\u524D---\u63D0\u524D\u5230\u5F53\u524D\u6240\u5728\u7684\u4F5C\u7528\u57DF\u7684\u6700\u4E0A\u9762
 *
 *
 */</span>

<span class="token comment">//\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019,\u628A\u4F1A\u51FD\u6570\u7684\u58F0\u660E\u63D0\u5347\u5230\u4F5C\u7528\u57DF\u7684\u4E0A\u9762</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">//\u8FD9\u4E2A\u53D8\u91CF\u7684\u58F0\u660E\u4F1A\u63D0\u5347\u5230\u53D8\u91CF\u4F7F\u7528\u4E4B\u524D</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token comment">//var num=10;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u628A\u53D8\u91CF\u7684\u58F0\u660E\u63D0\u524D\u4E86</span>
<span class="token keyword">var</span> num
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
num <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u54C8,\u52A9\u6559\u597D\u7325\u7410\u54E6&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u62A5\u9519</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_12-1-\u9884\u89E3\u6790\u4E2D\u7684\u5C40\u90E8\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#_12-1-\u9884\u89E3\u6790\u4E2D\u7684\u5C40\u90E8\u4F5C\u7528\u57DF" aria-hidden="true">#</a> 12.1 \u9884\u89E3\u6790\u4E2D\u7684\u5C40\u90E8\u4F5C\u7528\u57DF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token comment">//\u9884\u89E3\u6790\u4E2D,\u53D8\u91CF\u7684\u63D0\u5347,\u53EA\u4F1A\u5728\u5F53\u524D\u7684\u4F5C\u7528\u57DF\u4E2D\u63D0\u5347,\u63D0\u524D\u5230\u5F53\u524D\u7684\u4F5C\u7528\u57DF\u7684\u6700\u4E0A\u9762</span>
    <span class="token comment">//\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u53EA\u4F1A\u63D0\u524D\u5230\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u6700\u524D\u9762,\u4E0D\u4F1A\u51FA\u53BB</span>
    <span class="token comment">//\u9884\u89E3\u6790\u4F1A\u5206\u6BB5(\u591A\u5BF9\u7684script\u6807\u7B7E\u4E2D\u51FD\u6570\u91CD\u540D,\u9884\u89E3\u6790\u7684\u65F6\u5019\u4E0D\u4F1A\u51B2\u7A81)</span>

<span class="token comment">//    function f1() {</span>
<span class="token comment">//</span>
<span class="token comment">//      console.log(num);//undefined</span>
<span class="token comment">//      var num=10;</span>
<span class="token comment">//    }</span>
<span class="token comment">//    f1();</span>
<span class="token comment">//    console.log(num);//</span>
    <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u54C8\u54C8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u560E\u560E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_12-2-\u9884\u89E3\u6790\u7EC3\u4E60\u9898" tabindex="-1"><a class="header-anchor" href="#_12-2-\u9884\u89E3\u6790\u7EC3\u4E60\u9898" aria-hidden="true">#</a> 12.2 \u9884\u89E3\u6790\u7EC3\u4E60\u9898</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var a = 25;</span>

<span class="token comment">// function abc() {</span>
<span class="token comment">//   alert(a); //undefined</span>
<span class="token comment">//   var a = 10;</span>
<span class="token comment">// }</span>
<span class="token comment">// abc();</span>
<span class="token comment">// console.log(a); //25</span>

<span class="token comment">// var a;</span>

<span class="token comment">// function a() {</span>
<span class="token comment">//   console.log(&#39;aaaaa&#39;);</span>
<span class="token comment">// }</span>
<span class="token comment">// console.log(a); //\u51FD\u6570\u7684\u4EE3\u7801</span>

<span class="token comment">// a = 1;</span>
<span class="token comment">// console.log(a); //1</span>

<span class="token comment">// var a = 18;</span>

<span class="token comment">// function f1() {</span>
<span class="token comment">//   var b = 9;</span>
<span class="token comment">//   console.log(a); //undefined</span>
<span class="token comment">//   console.log(b); //9</span>
<span class="token comment">//   var a = &quot;123&quot;;</span>
<span class="token comment">// }</span>
<span class="token comment">// f1();</span>

<span class="token comment">// function f1() {</span>
<span class="token comment">//   var a; //\u5C40\u90E8\u53D8\u91CF</span>
<span class="token comment">//   a = 9;</span>
<span class="token comment">//   //\u9690\u5F0F\u5168\u5C40\u53D8\u91CF</span>
<span class="token comment">//   b = 9;</span>
<span class="token comment">//   c = 9;</span>
<span class="token comment">//   console.log(a); //9</span>
<span class="token comment">//   console.log(b); //9</span>
<span class="token comment">//   console.log(c); //9</span>
<span class="token comment">// }</span>
<span class="token comment">// f1();</span>
<span class="token comment">// console.log(c); //  9</span>
<span class="token comment">// console.log(b); // 9</span>
<span class="token comment">// console.log(a); //\u62A5\u9519</span>

<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//f1 not a function</span>
<span class="token keyword">var</span> <span class="token function-variable function">f1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>\u590D\u4E60:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * \u590D\u4E60:
 * \u51FD\u6570:\u628A\u4E00\u4E9B\u91CD\u590D\u7684\u4EE3\u7801\u5C01\u88C5\u5728\u4E00\u4E2A\u5730\u65B9,\u5728\u9700\u8981\u7684\u65F6\u5019\u76F4\u63A5\u8C03\u7528\u8FD9\u4E2A\u5730\u65B9\u7684\u4EE3\u7801\u5C31\u53EF\u4EE5\u4E86
 *
 * \u51FD\u6570\u4F5C\u7528:\u4EE3\u7801\u91CD\u7528
 *
 * \u51FD\u6570\u7684\u53C2\u6570:
 * 1.\u5F62\u53C2:\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019,\u51FD\u6570\u540D\u5B57\u540E\u9762\u7684\u5C0F\u62EC\u53F7\u91CC\u7684\u53D8\u91CF
 * 2.\u5B9E\u53C2:\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019,\u51FD\u6570\u540D\u5B57\u540E\u9762\u7684\u5C0F\u62EC\u53F7\u91CC\u7684\u53D8\u91CF\u6216\u8005\u503C
 *
 * \u8FD4\u56DE\u503C:
 * \u51FD\u6570\u4E2D\u6709return\uFF0C\u51FD\u6570\u6709\u8FD4\u56DE\u503C
 * \u51FD\u6570\u4E2D\u6CA1\u6709return,\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C
 * \u6CA1\u6709\u660E\u786E\u8FD4\u56DE\u503C:\u51FD\u6570\u4E2D\u6CA1\u6709return\u6216\u8005return\u540E\u9762\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9
 * \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u6CA1\u6709\u660E\u786E\u7684\u8FD4\u56DE\u503C,\u63A5\u6536\u8FD9\u4E2A\u51FD\u6570,\u7ED3\u679C\u662Fundefined
 *
 * \u65E0\u53C2\u6570\u65E0\u8FD4\u56DE\u503C\u7684\u51FD\u6570
 * \u65E0\u53C2\u6570\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570
 * \u6709\u53C2\u6570\u65E0\u8FD4\u56DE\u503C\u7684\u51FD\u6570
 * \u6709\u53C2\u6570\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570
 *
 * arguments-----&gt;\u53EF\u4EE5\u83B7\u53D6\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019,\u4F20\u5165\u7684\u5B9E\u53C2\u7684\u4E2A\u6570
 * arguments\u662F\u4E00\u4E2A\u5BF9\u8C61,\u662F\u4E00\u4E2A\u4F2A\u6570\u7EC4
 * arguments.length---&gt;\u662F\u5B9E\u53C2\u7684\u4E2A\u6570
 * arguments[\u7D22\u5F15]----&gt;\u5B9E\u53C2\u7684\u503C
 *
 * \u4F5C\u7528\u57DF:\u53D8\u91CF\u7684\u4F7F\u7528\u8303\u56F4
 * \u5168\u5C40\u4F5C\u7528\u57DF:\u5168\u5C40\u53D8\u91CF\u5728\u4EFB\u4F55\u4F4D\u7F6E\u90FD\u53EF\u4EE5\u4F7F\u7528\u7684\u8303\u56F4
 * \u5C40\u90E8\u4F5C\u7528\u57DF:\u5C40\u90E8\u53D8\u91CF\u53EA\u80FD\u5728\u67D0\u4E2A\u5730\u65B9\u4F7F\u7528---\u51FD\u6570\u5185
 * \u4F5C\u7528\u57DF\u94FE:\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF,\u5148\u5728\u8BE5\u51FD\u6570\u4E2D\u641C\u7D22\u8FD9\u4E2A\u53D8\u91CF,\u627E\u5230\u4E86\u5219\u4F7F\u7528,\u627E\u4E0D\u5230\u5219\u7EE7\u7EED\u5411\u5916\u9762\u627E\u8FD9\u4E2A\u53D8\u91CF,\u627E\u5230\u5219\u4F7F\u7528,\u4E00\u76F4\u627E\u5230\u5168\u5C40\u4F5C\u7528\u57DF,\u627E\u4E0D\u5230\u5219\u662Fundefined
 * \u5168\u5C40\u53D8\u91CF:\u53EA\u8981\u662F\u5728\u51FD\u6570\u5916\u9762\u58F0\u660E\u7684\u53D8\u91CF\u90FD\u53EF\u4EE5\u770B\u6210\u6216\u8005\u662F\u7406\u89E3\u6210\u662F\u5168\u5C40\u53D8\u91CF
 * \u5C40\u90E8\u53D8\u91CF:\u5728\u51FD\u6570\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF
 *
 * \u9884\u89E3\u6790:\u5728\u6267\u884C\u4EE3\u7801\u4E4B\u524D\u505A\u7684\u4E8B\u60C5
 * \u53D8\u91CF\u7684\u58F0\u660E\u548C\u51FD\u6570\u7684\u58F0\u660E\u88AB\u63D0\u524D\u4E86,\u53D8\u91CF\u548C\u51FD\u6570\u7684\u58F0\u660E\u4F1A\u63D0\u5347\u5230\u5F53\u524D\u6240\u5728\u7684\u4F5C\u7528\u57DF\u7684\u6700\u4E0A\u9762
 * \u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u58F0\u660E,\u4F1A\u63D0\u5347\u5230\u8BE5\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u7684\u6700\u4E0A\u9762(\u91CC\u9762)
 * \u5982\u679C\u6709\u591A\u5BF9\u7684script\u6807\u7B7E\u90FD\u6709\u76F8\u540C\u540D\u5B57\u7684\u51FD\u6570,\u9884\u89E3\u6790\u7684\u65F6\u5019\u662F\u5206\u6BB5\u7684,\u4E92\u4E0D\u5F71\u54CD
 *
 * */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_13-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_13-\u5BF9\u8C61" aria-hidden="true">#</a> 13 \u5BF9\u8C61</h2><h3 id="_13-1-\u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_13-1-\u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> 13.1 \u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> zs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//\u8BBE\u7F6E\u5C5E\u60271   \u5BF9\u8C61\u540D.\u952E\u540D = \u503C;  \u5E38\u7528</span>
zs<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span>
zs<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
zs<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">160</span>
<span class="token comment">//\u8BBE\u7F6E\u5C5E\u60272  \u5BF9\u8C61\u540D[&#39;\u952E\u540D&#39;] = \u503C;</span>
zs<span class="token punctuation">[</span><span class="token string">&#39;weight&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">170</span>
<span class="token comment">// \u8BBE\u7F6E\u5BF9\u8C61\u65B9\u6CD51(\u884C\u4E3A)  \u7528\u7684\u662F\u51FD\u6570</span>
zs<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\u559C\u6B22\u5403\u69B4\u83B2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8BBE\u7F6E\u5BF9\u8C61\u65B9\u6CD52(\u884C\u4E3A)</span>
zs<span class="token punctuation">[</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\u559C\u6B22\u770B\u76F4\u64AD&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u8C03\u7528\u5C5E\u60271    \u5BF9\u8C61\u540D.\u952E\u540D</span>
<span class="token comment">// console.log(zs.age);</span>
<span class="token comment">// console.log(zs.weight);</span>
<span class="token comment">// \u8C03\u7528\u5C5E\u60272</span>
<span class="token comment">// console.log(zs[&#39;weight&#39;]);  \u5BF9\u8C61\u540D[&#39;\u952E\u540D&#39;]</span>
<span class="token comment">// console.log(zs[&#39;age&#39;]);</span>
<span class="token comment">// \u8C03\u7528\u5BF9\u8C61\u7684\u65B9\u6CD51</span>
<span class="token comment">// zs.eat();</span>
<span class="token comment">// \u8C03\u7528\u5BF9\u8C61\u65B9\u6CD52</span>
zs<span class="token punctuation">[</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5220\u9664\u548C\u68C0\u6D4B\u5C5E\u6027\u7684\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> zs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5B57\u9762\u91CF\u6784\u9020\u51FD\u6570</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">170</span><span class="token punctuation">,</span>
  <span class="token function-variable function">eat</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\u559C\u6B22\u5403\u69B4\u83B2&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5220\u9664\u5BF9\u8C61\u5C5E\u6027\u548C\u65B9\u6CD5  delete \u5BF9\u8C61\u540D.\u952E\u540D  delete \u5BF9\u8C61\u540D[&#39;\u952E\u540D&#39;]</span>
<span class="token keyword">delete</span> zs<span class="token punctuation">.</span>age
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">//\u5C5E\u6027\u5DF2\u5220\u9664\uFF0C\u663E\u793Aundefined</span>
<span class="token comment">// delete zs.eat;</span>
<span class="token comment">// zs.eat(); //\u5C5E\u6027\u5DF2\u5220\u9664\uFF0C\u62A5\u9519</span>

<span class="token comment">// \u68C0\u6D4B\u662F\u5426\u6709\u67D0\u4E2A\u5C5E\u6027\u6216\u8005\u65B9\u6CD5 \u5982\u679C\u5B58\u5728,\u5C31\u8FD4\u56DE\u4E00\u4E2Atrue,\u4E0D\u5B58\u5728\u8FD4\u56DE\u4E00\u4E2Afalse</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> zs<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_13-2-\u81EA\u5B9A\u4E49\u6784\u9020\u51FD\u6570\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_13-2-\u81EA\u5B9A\u4E49\u6784\u9020\u51FD\u6570\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> 13.2 \u81EA\u5B9A\u4E49\u6784\u9020\u51FD\u6570\u521B\u5EFA\u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u81EA\u5B9A\u4E49\u51FD\u6570\u6784\u9020\u521B\u5EFA\u5BF9\u8C61:</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> studentNumber<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> favour<span class="token punctuation">,</span> like</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>studentNumber <span class="token operator">=</span> studentNumber
  <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
  <span class="token keyword">this</span><span class="token punctuation">.</span>favour <span class="token operator">=</span> favour
  <span class="token keyword">this</span><span class="token punctuation">.</span>like <span class="token operator">=</span> like
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">goodAt</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\u559C\u6B22&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>like<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> xm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">9527</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6572\u4EE3\u7801&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5531\u6B4C&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> xh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">4816</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6572\u4EE3\u7801&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8DF3\u821E&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> xb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">4811</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6572\u4EE3\u7801&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8DF3\u5E7F\u573A\u821E&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> xl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u7EFF&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">4812</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6572\u4EE3\u7801&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8DF3\u8857\u821E&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> xf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u7C89&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">4813</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6572\u4EE3\u7801&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8DF3\u8FEA\u65AF\u79D1&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xm<span class="token punctuation">,</span> xh<span class="token punctuation">,</span> xb<span class="token punctuation">,</span> xl<span class="token punctuation">,</span> xf<span class="token punctuation">)</span>
xl<span class="token punctuation">.</span><span class="token function">goodAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> xm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&#39;===========&#39;</span> <span class="token operator">+</span> xm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>new \u65B9\u6CD5\u521B\u5EFA\u5BF9\u8C61\u540E\u505A\u7684\u56DB\u4EF6\u4E8B\uFF1AJSPRO \u4E2D\u6709</p><p>add:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * js\u662F\u4E00\u95E8\u4EC0\u4E48\u6837\u7684\u8BED\u8A00?
 * \u662F\u4E00\u95E8\u89E3\u91CA\u6027\u7684\u8BED\u8A00
 * \u662F\u4E00\u95E8\u811A\u672C\u8BED\u8A00
 * \u662F\u4E00\u95E8\u5F31\u7C7B\u578B\u8BED\u8A00,\u58F0\u660E\u53D8\u91CF\u90FD\u7528var
 * \u662F\u4E00\u95E8\u57FA\u4E8E\u5BF9\u8C61\u7684\u8BED\u8A00
 * \u662F\u4E00\u95E8\u52A8\u6001\u7C7B\u578B\u7684\u8BED\u8A00:
 * 1. \u4EE3\u7801(\u53D8\u91CF)\u53EA\u6709\u6267\u884C\u5230\u8FD9\u4E2A\u4F4D\u7F6E\u7684\u65F6\u5019,\u624D\u77E5\u9053\u8FD9\u4E2A\u53D8\u91CF\u4E2D\u5230\u5E95\u5B58\u50A8\u7684\u662F\u4EC0\u4E48,
 * \u5982\u679C\u662F\u5BF9\u8C61,\u5C31\u6709\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5,\u5982\u679C\u662F\u53D8\u91CF\u5C31\u662F\u53D8\u91CF\u7684\u4F5C\u7528
 * 2. \u5BF9\u8C61\u6CA1\u6709\u4EC0\u4E48,\u53EA\u8981\u70B9\u4E86,\u901A\u8FC7\u70B9\u8BED\u6CD5,\u90A3\u4E48\u5C31\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u6216\u8005\u65B9\u6CD5
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_13-3-for-in-\u904D\u5386\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_13-3-for-in-\u904D\u5386\u5BF9\u8C61" aria-hidden="true">#</a> 13.3 for in \u904D\u5386\u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u904D\u5386\u5BF9\u8C61,\u4E0D\u80FD\u901A\u8FC7for\u5FAA\u73AF\u904D\u5386,\u56E0\u4E3A\u5BF9\u8C61\u65E0\u5E8F</span>
<span class="token comment">//key\u662F\u4E00\u4E2A\u53D8\u91CF,\u8FD9\u4E2A\u53D8\u91CF\u4E2D\u5B58\u50A8\u7684\u662F\u8BE5\u5BF9\u8C61\u7684\u6240\u6709\u7684\u5C5E\u6027\u7684\u540D\u5B57</span>
<span class="token comment">//\u904D\u5386\u53EF\u4EE5\u901A\u8FC7for in\u5FAA\u73AF</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> json<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//key\u8868\u793A\u5BF9\u8C61\u4E2D\u6240\u6709\u5C5E\u6027\u7684\u540D\u5B57</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u80FD\u4F7F\u7528json.key   \u4F1A\u8BA9\u7CFB\u7EDF\u8BEF\u4F1A\u4E3A\u67D0\u4E00\u5BF9\u8C61\u5185\u5BB9</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_14-\u590D\u6742\u6570\u636E\u7C7B\u578B\u548C\u7B80\u5355\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_14-\u590D\u6742\u6570\u636E\u7C7B\u578B\u548C\u7B80\u5355\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 14 \u590D\u6742\u6570\u636E\u7C7B\u578B\u548C\u7B80\u5355\u6570\u636E\u7C7B\u578B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*\u539F\u59CB\u6570\u636E\u7C7B\u578B: number,string,boolean,undefined, null,object{
        1. \u57FA\u672C\u7C7B\u578B(\u7B80\u5355\u7C7B\u578B), \u503C\u7C7B\u578B: number, string, boolean
        2. \u590D\u6742\u7C7B\u578B(\u5F15\u7528\u7C7B\u578B): object Array
        3. \u7A7A\u7C7B\u578B: undefined, null
    }*/</span>

<span class="token comment">//\u503C\u7C7B\u578B\u7684\u503C\u5728\u54EA\u4E00\u5757\u7A7A\u95F4\u4E2D\u5B58\u50A8? \u6808\u4E2D\u5B58\u50A8</span>
<span class="token comment">//\u5F15\u7528\u7C7B\u578B\u7684\u503C\u5728\u54EA\u4E00\u5757\u7A7A\u95F4\u4E2D\u5B58\u50A8?\u5730\u5740\u5728\u6808\u4E0A\u5B58\u50A8\uFF0C\u5BF9\u8C61\u5728\u5806\u4E0A\u5B58\u50A8,\u5360\u7528\u4E86\u4E24\u5757\u7A7A\u95F4</span>

<span class="token comment">//var num=10;//\u503C\u7C7B\u578B,\u503C\u5728\u6808\u4E0A</span>
<span class="token comment">//var obj={};//\u590D\u6742\u7C7B\u578B,\u5BF9\u8C61\u5728\u5806,\u5730\u5740(\u5F15\u7528)\u5728\u6808</span>

<span class="token comment">//\u503C\u7C7B\u578B\u4E4B\u95F4\u4F20\u9012,\u4F20\u9012\u7684\u662F\u503C</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> num2 <span class="token operator">=</span> num <span class="token comment">//\u4F20\u9012\u7684\u503C</span>
<span class="token comment">//\u5F15\u7528\u7C7B\u578B\u4E4B\u95F4\u4F20\u9012,\u4F20\u9012\u7684\u662F\u5730\u5740(\u5F15\u7528)\u5373\u5806\u4E0A\u7684\u5BF9\u8C61\u6240\u6307\u5411\u6808\u7684\u5730\u5740</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter">obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//</span>
<span class="token function">f2</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_15-\u590D\u6742\u7C7B\u578B\u7684\u503C\u7684\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_15-\u590D\u6742\u7C7B\u578B\u7684\u503C\u7684\u4F20\u9012" aria-hidden="true">#</a> 15 \u590D\u6742\u7C7B\u578B\u7684\u503C\u7684\u4F20\u9012</h2><p><img src="`+a+`" alt="\u56FE\u7247"></p><h2 id="_16-\u5185\u7F6E\u5BF9\u8C61\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_16-\u5185\u7F6E\u5BF9\u8C61\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 16 \u5185\u7F6E\u5BF9\u8C61\u7684\u65B9\u6CD5</h2><p>Math Date String Array Object \u5185\u7F6E\u5BF9\u8C61\uFF1A js \u7CFB\u7EDF\u81EA\u5E26\u7684\u5BF9\u8C61</p><h3 id="_16-1-math-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_16-1-math-\u5BF9\u8C61" aria-hidden="true">#</a> 16.1 Math \u5BF9\u8C61</h3><p>\u53EF\u67E5 MDN----\u5728\u7EBF\u7684\u5E2E\u52A9\u6587\u6863</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5B9E\u4F8B\u5BF9\u8C61:\u901A\u8FC7\u6784\u9020\u51FD\u6570\u521B\u5EFA\u51FA\u6765,\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5FC5\u987B\u901A\u8FC7\u5B9E\u4F8B\u5BF9\u8C61\u8C03\u7528</span>
<span class="token comment">//\u9759\u6001\u5BF9\u8C61:\u4E0D\u9700\u8981\u521B\u5EFA,\u76F4\u63A5\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61,\u65B9\u6CD5(\u9759\u6001\u65B9\u6CD5)\u76F4\u63A5\u901A\u8FC7\u8FD9\u4E2A\u5BF9\u8C61\u540D\u5B57\u8C03\u7528,\u9759\u6001\u65B9\u6CD5\u5FC5\u987B\u901A\u8FC7\u5927\u5199\u7684\u5BF9\u8C61\u8C03\u7528</span>

<span class="token comment">//Math.PI----\u03C0---</span>
<span class="token comment">//console.log(Math.PI);</span>
<span class="token comment">// Math.round(\u6570\u5B57);   \u56DB\u820D\u4E94\u5165</span>

<span class="token comment">//Math.E----\u5E38\u6570\u7684\u5E95\u6570</span>
<span class="token comment">//console.log(Math.E);</span>

<span class="token comment">//Math.abs(\u503C)-----\u7EDD\u5BF9\u503C</span>
<span class="token comment">//    console.log( Math.abs(&#39;-1&#39;));//1</span>
<span class="token comment">//    console.log( Math.abs(-2));//2</span>
<span class="token comment">//    console.log(Math.abs(null));//---------0  \u91CD\u70B9</span>
<span class="token comment">//    console.log(Math.abs(&quot;string&quot;));//NaN</span>

<span class="token comment">//Math.ceil(\u503C)----\u5411\u4E0A\u53D6\u6574</span>
<span class="token comment">//    console.log(Math.ceil(12.3));   //\u8F93\u51FA\u7684\u503C\u5747\u4E3A13</span>
<span class="token comment">//    console.log(Math.ceil(12.9));</span>
<span class="token comment">//    console.log(Math.ceil(12.09));</span>
<span class="token comment">//    console.log(Math.ceil(12.03));</span>
<span class="token comment">//    console.log(Math.ceil(12.92));</span>

<span class="token comment">//Math.floor(\u503C)---\u5411\u4E0B\u53D6\u6574</span>
<span class="token comment">//    console.log(Math.floor(12.3)); //\u8F93\u51FA\u7684\u503C\u5747\u4E3A12</span>
<span class="token comment">//    console.log(Math.floor(12.9));</span>
<span class="token comment">//    console.log(Math.floor(12.09));</span>
<span class="token comment">//    console.log(Math.floor(12.03));</span>
<span class="token comment">//    console.log(Math.floor(12.92));</span>

<span class="token comment">//\u627E\u4E00\u5768\u6570\u5B57\u4E2D\u7684\u6700\u5927\u503C</span>
<span class="token comment">//    console.log(Math.max(10,1,9,100,200,45,78));</span>
<span class="token comment">//\u627E\u4E00\u5768\u6570\u5B57\u4E2D\u7684\u6700\u5C0F\u503C</span>
<span class="token comment">//    console.log(Math.min(10,1,9,100,200,45,78));</span>

<span class="token comment">//\u968F\u673A\u6570\uFF1A</span>
<span class="token comment">//console.log(parseInt(Math.random() * 5) + 1); //0-4\u968F\u673A\u53D6   \u6CA1\u67095   +1\u540E\u67095</span>
<span class="token comment">//console.log(parseInt(Math.random() * 100) + 1); //0-100\u968F\u673A\u53D6   \u6CA1\u6709100   +1\u540E\u6709100</span>

<span class="token comment">// add:</span>
<span class="token comment">// Math.ceil()---\u5411\u4E0A\u53D6\u6574</span>
<span class="token comment">// Math.floor()---\u5411\u4E0B\u53D6\u6574</span>
<span class="token comment">// Math.Pi----\u5706\u5468\u7387\u7684\u503C</span>
<span class="token comment">// Math.max()---\u4E00\u7EC4\u6570\u5B57\u4E2D\u7684\u6700\u5927\u503C</span>
<span class="token comment">// Math.min()---\u4E00\u7EC4\u6570\u5B57\u4E2D\u7684\u6700\u5C0F\u503C</span>
<span class="token comment">// Math.abs()----\u7EDD\u5BF9\u503C</span>
<span class="token comment">// Math.random---\u968F\u673A\u6570\u5B57</span>
<span class="token comment">// Math.sqrt()----\u5F00\u5E73\u65B9</span>
<span class="token comment">// Math.pow()----\u4E00\u4E2A\u6570\u5B57\u7684\u591A\u5C11\u6B21\u5E42</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h3 id="_16-2-date-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_16-2-date-\u5BF9\u8C61" aria-hidden="true">#</a> 16.2 Date \u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61</span>
<span class="token comment">// var dt = new Date(&quot;2017-08-12&quot;);  //\u6B64\u5904\u8BB0\u5F97\u52A0\u5B57\u7B26\u4E32,\u4E5F\u53EF\u5199\u4F5C(&quot;2017/08/12&quot;)</span>
<span class="token comment">// //\u4F20\u5165\u7684\u65F6\u95F4</span>
<span class="token comment">// console.log(dt);</span>

<span class="token comment">//var dt=new Date;//\u4F20\u5165\u7684\u65F6\u95F4</span>
<span class="token comment">//console.log(dt);</span>

<span class="token comment">// var dt = Date.now(); //\u83B7\u53D6\u65F6\u95F4\u7684\u5BF9\u8C61    //\u6B64\u65B9\u6CD5\u83B7\u53D6\u5230\u7684\u662F\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\u7684\u5F53\u524D\u65F6\u95F4</span>
<span class="token comment">// console.log(dt);</span>

<span class="token comment">// var dt = new Date(); //\u8981\u5148\u4F20\u5165\u5F53\u524D\u65F6\u95F4</span>

<span class="token comment">//console.log(dt.getFullYear()); //\u83B7\u53D6\u5E74\u4EFD</span>

<span class="token comment">//console.log(dt.getMonth()+1); ///\u6CE8\u610F\uFF01\uFF01\uFF01\uFF01\u83B7\u53D6\u6708\u4EFD\uFF0C\u5F97\u5230\u7684\u6570\u503C\u662F\u4ECE0\u5F00\u59CB\u7684 \u771F\u5B9E\u7684\u6708\u4EFD\u662F\u9700\u8981\u52A01\u7684</span>

<span class="token comment">//console.log(dt.getDate());//\u83B7\u53D6\u65E5</span>

<span class="token comment">//console.log(dt.getHours()); //\u83B7\u53D6\u5C0F\u65F6</span>

<span class="token comment">//console.log(dt.getMinutes());  //\u83B7\u53D6\u5206\u949F</span>

<span class="token comment">//console.log(dt.getSeconds());//\u83B7\u53D6\u79D2</span>

<span class="token comment">//console.log(dt.getDay());////\u83B7\u53D6\u661F\u671F\uFF0C\u6CE8\u610F\uFF01\uFF01\uFF01\uFF01\u661F\u671F\u4ECE0\u5F00\u59CB\u7684</span>

<span class="token comment">// \u603B\u7ED3\uFF1A</span>
<span class="token comment">//var dt=new Date();</span>
<span class="token comment">//var dt=+new Date();//\u524D\u9762\u7684\u52A0\u53F7\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5199\u6CD5,\u53EA\u9002\u7528\u4E8E\u8FD9\u4E2ADate\u7684\u5BF9\u8C61</span>
<span class="token comment">//console.log(dt);</span>

<span class="token comment">//dt.getFullYear();//\u5E74</span>
<span class="token comment">//dt.getMonth();//\u6708---\u4ECE0\u5F00\u59CB</span>
<span class="token comment">//dt.getDate();//\u65E5</span>
<span class="token comment">//dt.getHours();//\u5C0F\u65F6</span>
<span class="token comment">//dt.getMinutes();//\u5206\u949F</span>
<span class="token comment">//dt.getSeconds();//\u79D2</span>
<span class="token comment">//dt.getDay();//\u661F\u671F---\u4ECE0\u5F00\u59CB</span>
<span class="token comment">//dt.toDateString();//\u65E5\u671F</span>
<span class="token comment">//dt.toLocaleDateString();//\u65E5\u671F</span>
<span class="token comment">//dt.toTimeString();//\u65F6\u95F4</span>
<span class="token comment">//dt.toLocaleTimeString();//\u65F6\u95F4</span>
<span class="token comment">//dt.valueOf();//\u6BEB\u79D2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="_16-3-string-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_16-3-string-\u5BF9\u8C61" aria-hidden="true">#</a> 16.3 String \u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * String----&gt;\u662F\u4E00\u4E2A\u5BF9\u8C61
 * \u5B57\u7B26\u4E32\u53EF\u4EE5\u770B\u6210\u662F\u5B57\u7B26\u7EC4\u6210\u7684\u6570\u7EC4,\u4F46\u662Fjs\u4E2D\u6CA1\u6709\u5B57\u7B26\u7C7B\u578B
 * \u5B57\u7B26\u662F\u4E00\u4E2A\u4E00\u4E2A\u7684,\u5728\u522B\u7684\u8BED\u8A00\u4E2D\u5B57\u7B26\u7528\u4E00\u5BF9\u5355\u5F15\u53F7\u62EC\u8D77\u6765
 * \u5728js\u4E2D\u5B57\u7B26\u4E32\u53EF\u4EE5\u4F7F\u7528\u5355\u5F15\u53F7\u4E5F\u53EF\u4EE5\u4F7F\u7528\u53CC\u5F15\u53F7
 * \u56E0\u4E3A\u5B57\u7B26\u4E32\u53EF\u4EE5\u770B\u6210\u662F\u6570\u7EC4,\u6240\u4EE5,\u53EF\u4EE5\u901A\u8FC7for\u5FAA\u73AF\u8FDB\u884C\u904D\u5386
 *
 * \u5B57\u7B26\u4E32\u7279\u6027:\u4E0D\u53EF\u53D8\u6027,\u5B57\u7B26\u4E32\u7684\u503C\u662F\u4E0D\u80FD\u6539\u53D8
 *
 * \u5B57\u7B26\u4E32\u7684\u503C\u4E4B\u6240\u4EE5\u770B\u8D77\u6765\u662F\u6539\u53D8\u7684,\u90A3\u662F\u56E0\u4E3A\u6307\u5411\u6539\u53D8\u4E86,\u5E76\u4E0D\u662F\u771F\u7684\u503C\u6539\u53D8\u4E86
 *
 */</span>

<span class="token comment">//    var str=&quot;hello&quot;;</span>
<span class="token comment">//    str[1]=&quot;W&quot;;  \u5B57\u7B26\u4E32\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u8BBF\u95EE\u5B57\u7B26\u4E32\u4E2D\u7684\u67D0\u4E2A\u503C \u4F46\u662F,\u662F\u53EF\u4EE5\u8BBF\u95EE---\u8BFB\u53D6---\u53EA\u8BFB,\u4E0D\u80FD\u66F4\u6539</span>

<span class="token comment">//\u5BF9\u8C61\u7684\u65B9\u5F0F\u6765\u770B\u5F85</span>

<span class="token comment">//    var str=&quot;\u5C0F\u82CF\u597D\u7325\u7410&quot;;</span>
<span class="token comment">//    str=&quot;\u5C0F\u82CF\u597D\u90AA\u6076\u4E86&quot;;//\u91CD\u65B0\u8D4B\u503C\u7684\u8FC7\u7A0B\uFF0C\u5B57\u7B26\u4E32\u6CA1\u53D1\u751F\u6539\u53D8\uFF0C\u4EC5\u4EC5\u662F\u5728\u5806\u4E2D\u7684\u6307\u5411\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u800C\u4E0D\u662F\u66F4\u6539\u5B57\u7B26\u4E32</span>
<span class="token comment">//    console.log(str);</span>

<span class="token comment">//String\u5BF9\u8C61</span>

<span class="token comment">//    string ----&gt;\u5B57\u7B26\u4E32\u7C7B\u578B----\u57FA\u672C\u7C7B\u578B</span>
<span class="token comment">//    String----&gt;\u5B57\u7B26\u4E32\u7C7B\u578B----\u5F15\u7528\u7C7B\u578B</span>

<span class="token comment">//\u5B57\u7B26\u4E32\u5BF9\u8C61----String\u5BF9\u8C61</span>

<span class="token comment">//js\u4E2D\u6CA1\u6709\u5B57\u7B26\u7C7B\u578B</span>
<span class="token comment">//\u5B57\u7B26\u7C7B\u578B</span>
<span class="token comment">//\u5B57\u7B26\u4E32\u7C7B\u578B</span>

<span class="token comment">//    var str=&quot;hello&quot;;//\u53EF\u4EE5\u770B\u6210\u662F\u4E00\u4E2A\u5B57\u7B26\u6570\u7EC4</span>
<span class="token comment">//    for(var i=0;i&lt;str.length;i++){</span>
<span class="token comment">//      console.log(str[i]);    //\u904D\u5386\u5B57\u7B26\u4E32</span>
<span class="token comment">//    }</span>

<span class="token comment">// \u603B\u7ED3</span>

<span class="token comment">/*
 *
 * \u5B9E\u4F8B\u65B9\u6CD5----&gt;\u5FC5\u987B\u8981\u901A\u8FC7new\u7684\u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8C61(\u5B9E\u4F8B\u5BF9\u8C61)\u6765\u8C03\u7528\u7684\u65B9\u6CD5
 * \u9759\u6001\u65B9\u6CD5----&gt;\u76F4\u63A5\u901A\u8FC7\u5927\u5199\u7684\u6784\u9020\u51FD\u6570\u7684\u540D\u5B57\u8C03\u7528\u7684\u65B9\u6CD5(\u76F4\u63A5\u901A\u8FC7\u5927\u5199\u7684\u5BF9\u8C61\u540D\u5B57\u8C03\u7528\u7684)
 *
 * */</span>

<span class="token comment">//\u5B57\u7B26\u4E32\u7684\u5E38\u7528\u5C5E\u6027:</span>
<span class="token comment">// .length------&gt;\u5B57\u7B26\u4E32\u7684\u957F\u5EA6</span>
<span class="token comment">//console.log(str.length);</span>

<span class="token comment">// .charAt(\u7D22\u5F15),\u8FD4\u56DE\u503C\u662F\u6307\u5B9A\u7D22\u5F15\u4F4D\u7F6E\u7684\u5B57\u7B26\u4E32,\u8D85\u51FA\u7D22\u5F15,\u7ED3\u679C\u662F\u7A7A\u5B57\u7B26\u4E32</span>
<span class="token comment">// var str = &quot;whatareyounoshalei&quot;;</span>
<span class="token comment">// var result = str.charAt(10000);</span>
<span class="token comment">// console.log(result); //\u7A7A\u5B57\u7B26\u4E32</span>

<span class="token comment">// String.fromCharCode(\u6570\u5B57\u503C,\u53EF\u4EE5\u662F\u591A\u4E2A\u53C2\u6570),\u8FD4\u56DE\u7684\u662FASCII\u7801\u5BF9\u5E94\u7684\u503C</span>
<span class="token comment">// var str = String.fromCharCode(83, 79, 83);;</span>
<span class="token comment">// console.log(str);</span>

<span class="token comment">// .concat(\u5B57\u7B26\u4E321,\u5B57\u7B26\u4E322,...);\u8FD4\u56DE\u7684\u662F\u62FC\u63A5\u4E4B\u540E\u7684\u65B0\u7684\u5B57\u7B26\u4E32</span>
<span class="token comment">// var str = &quot;\u5C0F\u82CF&quot;;</span>
<span class="token comment">// console.log(str.concat(&quot;\u559C\u6B22&quot;, &quot;\u51E4\u59D0&quot;, &quot;\u8FD9\u662F&quot;, &quot;\u771F\u7684&quot;));</span>

<span class="token comment">// .indexOf(\u8981\u627E\u7684\u5B57\u7B26\u4E32,\u4ECE\u67D0\u4E2A\u4F4D\u7F6E\u5F00\u59CB\u7684\u7D22\u5F15);\u8FD4\u56DE\u7684\u662F\u8FD9\u4E2A\u5B57\u7B26\u4E32\u7684\u7D22\u5F15\u503C,\u6CA1\u627E\u5230\u5219\u8FD4\u56DE-1</span>
<span class="token comment">// var str1 = &#39;hello amen&#39;;</span>
<span class="token comment">// var index1 = str1.indexOf(&#39;e&#39;);</span>
<span class="token comment">// console.log(index1);</span>

<span class="token comment">// .lastIndexOf(\u8981\u627E\u7684\u5B57\u7B26\u4E32);\u4ECE\u540E\u5411\u524D\u627E,\u4F46\u662F\u7D22\u5F15\u4ECD\u7136\u662F\u4ECE\u5DE6\u5411\u53F3\u7684\u65B9\u5F0F,\u627E\u4E0D\u5230\u5219\u8FD4\u56DE-1</span>
<span class="token comment">// var str = &quot;helo amen&quot;;</span>
<span class="token comment">// var index = str.lastIndexOf(&quot;e&quot;);</span>
<span class="token comment">// console.log(index);</span>

<span class="token comment">// .replace(&quot;\u539F\u6765\u7684\u5B57\u7B26\u4E32&quot;,&quot;\u65B0\u7684\u5B57\u7B26\u4E32&quot;);\u7528\u6765\u66FF\u6362\u5B57\u7B26\u4E32</span>
<span class="token comment">// var str = &quot;\u5C0F\u82CF\u597D\u5E05\u54E6,\u771F\u7684\u597D\u52C7\u6562\u54E6&quot;;</span>
<span class="token comment">// str = str.replace(&#39;\u5E05&#39;, &#39;\u4E11&#39;); //\u7B2C\u4E00\u4E2A\u503C\u4E3A\u539F\u5B57\u7B26\u4E32\u7684\u503C\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u662F\u8981\u66FF\u6362\u6210\u7684\u503C,\u4F46\u662F\u53EA\u80FD\u5B57\u7B26\u4E32\u4E2D\u7684\u66FF\u6362\u7B2C\u4E00\u4E2A\u5B57</span>
<span class="token comment">// console.log(str);</span>

<span class="token comment">// .slice\u63D0\u53D6\u5B57\u7B26\u4E32\uFF0C(\u5F00\u59CB\u7684\u7D22\u5F15,\u7ED3\u675F\u7684\u7D22\u5F15)\uFF1A \u4ECE\u7D22\u5F155\u7684\u4F4D\u7F6E\u5F00\u59CB\u63D0\u53D6,\u5230\u7D22\u5F15\u4E3A10\u7684\u524D\u4E00\u4E2A\u7ED3\u675F,\u6CA1\u670910\uFF0C\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u63D0\u53D6\u540E\u7684\u5B57\u7B26\u4E32</span>
<span class="token comment">// var str = &quot;\u5982\u679C\u6709\u4E00\u5929\u6211\u90AA\u6076\u4E86,\u8BF7\u8BB0\u4F4F,\u6211\u66FE\u7EAF\u6D01\u8FC7&quot;;</span>
<span class="token comment">// str = str.slice(5, 10);</span>
<span class="token comment">// console.log(str); //\u7ED3\u679C\uFF1A\u6211\u90AA\u6076\u4E86,</span>

<span class="token comment">// .split(&quot;\u8981\u5E72\u6389\u7684\u5B57\u7B26\u4E32&quot;,\u5207\u5272\u540E\u7559\u4E0B\u7684\u4E2A\u6570);\u5207\u5272\u5B57\u7B26\u4E32</span>
<span class="token comment">// var str = &quot;\u4E54\u5CF0|\u6155\u5BB9|\u51E4\u59D0|\u6885\u8D85\u98CE|\u5C0F\u82CF|\u5927\u86C7\u4E38&quot;;</span>
<span class="token comment">// var str1 = str.split(&quot;|&quot;);</span>
<span class="token comment">// console.log(str1); //\u7ED3\u679C\u5207\u5272\u6210\u4E86\u6570\u7EC4\u6837\u5F0F\u7684\u5B57\u7B26\u4E32</span>
<span class="token comment">// for (var i = 0; i &lt; str1.length; i++) {</span>
<span class="token comment">//   console.log(str1[i]); //\u904D\u5386\u6570\u7EC4</span>
<span class="token comment">// }</span>

<span class="token comment">// .substr\u622A\u53D6\u65B0\u7684\u5B57\u7B26\u4E32\uFF1A(\u5F00\u59CB\u7684\u4F4D\u7F6E,\u4E2A\u6570);</span>
<span class="token comment">// var str = &quot;\u54C8\u54C8,\u5C0F\u82CF\u771F\u7684\u662F\u597D\u5E05\u54E6&quot;;</span>
<span class="token comment">// str = str.substr(5, 5);</span>
<span class="token comment">// console.log(str); //\u7ED3\u679C\uFF1A\u771F\u7684\u662F\u597D\u5E05</span>

<span class="token comment">// .substring\u622A\u53D6\u65B0\u7684\u5B57\u7B26\u4E32\uFF1A(\u5F00\u59CB\u7684\u7D22\u5F15,\u7ED3\u675F\u7684\u7D22\u5F15)</span>
<span class="token comment">// var str = &quot;\u54C8\u54C8,\u5C0F\u82CF\u771F\u7684\u662F\u597D\u5E05\u54E6&quot;;</span>
<span class="token comment">// str = str.substring(5, 9); //\u4E0D\u5305\u542B\u7B2C9\u4E2A</span>
<span class="token comment">// console.log(str); //\u7ED3\u679C\uFF1A\u771F\u7684\u662F\u597D</span>

<span class="token comment">// .toLocaleLowerCase();\u8F6C\u5C0F\u5199</span>
<span class="token comment">// .toLowerCase();\u8F6C\u5C0F\u5199</span>
<span class="token comment">// var str = &quot;HELLO&quot;;</span>
<span class="token comment">// str = str.toLocaleLowerCase();</span>
<span class="token comment">// console.log(str);</span>

<span class="token comment">// // .toLocaleUpperCase()\u8F6C\u5927\u5199</span>
<span class="token comment">// // .toUpperCase();\u8F6C\u5927\u5199</span>
<span class="token comment">// var str = &quot;hello&quot;;</span>
<span class="token comment">// str = str.toLocaleUpperCase();</span>
<span class="token comment">// console.log(str);</span>

<span class="token comment">// // .trim();\u5E72\u6389\u5B57\u7B26\u4E32\u4E24\u7AEF\u7684\u7A7A\u683C</span>
<span class="token comment">// var str = &quot;   \u54E6,\u8FD9    \u662F\u4E00\u4E2A\u795E\u5947\u7684\u4E00\u5929   &quot;;</span>
<span class="token comment">// str = str.trim();</span>
<span class="token comment">// console.log(str);</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br></div></div><h3 id="_16-4-array-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_16-4-array-\u5BF9\u8C61" aria-hidden="true">#</a> 16.4 Array \u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Array.isArray(\u5BF9\u8C61)----&gt;\u5224\u65AD\u8FD9\u4E2A\u5BF9\u8C61\u662F\u4E0D\u662F\u6570\u7EC4</span>
<span class="token comment">//1.instanceof\u5173\u952E\u5B57</span>
<span class="token comment">// var obj = [];</span>
<span class="token comment">// console.log(obj instanceof Array); //true</span>
<span class="token comment">//2.\u4F7F\u7528\u6570\u7EC4\u7684</span>
<span class="token comment">// console.log(Array.isArray(obj)); //true</span>

<span class="token comment">//!!!!! //  .push(\u503C);---&gt;\u628A\u503C\u8FFD\u52A0\u5230\u6570\u7EC4\u4E2D,\u52A0\u5230\u6700\u540E---\u8FD4\u56DE\u503C\u4E5F\u662F\u8FFD\u52A0\u6570\u636E\u4E4B\u540E\u7684\u6570\u7EC4\u957F\u5EA6</span>
<span class="token comment">// var arr = [10, 20, 30, 40, 50];</span>
<span class="token comment">// var result = arr.push(100);</span>
<span class="token comment">// console.log(result); //6\uFF0C\u8F93\u51FA\u7684\u662F\u8FFD\u52A0\u65B0\u5143\u7D20\u540E\u6570\u7EC4\u7684\u957F\u5EA6</span>
<span class="token comment">// console.log(arr); //\u8F93\u51FA\u7684\u662F\u8FFD\u52A0\u65B0\u5143\u7D20\u540E\u7684\u6570\u7EC4</span>

<span class="token comment">//!!!!! //  .pop();---&gt;\u5220\u9664\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u4E2A\u5143\u7D20,\u8FD4\u56DE\u503C\u5C31\u662F\u5220\u9664\u7684\u8FD9\u4E2A\u503C</span>
<span class="token comment">// var arr = [10, 20, 30, 40, 50];</span>
<span class="token comment">// var result = arr.pop();</span>
<span class="token comment">// console.log(result); //50\uFF0C\u8F93\u51FA\u7684\u662F\u5220\u9664\u7684\u503C</span>
<span class="token comment">// console.log(arr); //\u8F93\u51FA\u7684\u662F\u5220\u9664\u5143\u7D20\u540E\u7684\u6570\u7EC4</span>

<span class="token comment">//!!!!! //  .shift();---&gt;\u5220\u9664\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20,\u8FD4\u56DE\u503C\u5C31\u662F\u5220\u9664\u7684\u8FD9\u4E2A\u503C</span>
<span class="token comment">// var arr = [10, 20, 30, 40, 50];</span>
<span class="token comment">// var result = arr.shift();</span>
<span class="token comment">// console.log(result); //10\uFF0C\u8F93\u51FA\u7684\u662F\u5220\u9664\u7684\u503C</span>
<span class="token comment">// console.log(arr); //\u8F93\u51FA\u7684\u662F\u5220\u9664\u5143\u7D20\u540E\u7684\u6570\u7EC4</span>

<span class="token comment">//!!!!! //  .unshift();---&gt;\u5411\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u524D\u9762\u63D2\u5165\u4E00\u4E2A\u65B0\u7684\u5143\u7D20,----\u8FD4\u56DE\u503C\u662F\u63D2\u5165\u540E\u7684\u957F\u5EA6</span>
<span class="token comment">// var arr = [10, 20, 30, 40, 50];</span>
<span class="token comment">// var result = arr.unshift(1);</span>
<span class="token comment">// console.log(result); //6\uFF0C\u8F93\u51FA\u7684\u662F\u8FFD\u52A0\u65B0\u5143\u7D20\u540E\u6570\u7EC4\u7684\u957F\u5EA6</span>
<span class="token comment">// console.log(arr); //\u8F93\u51FA\u7684\u662F\u8FFD\u52A0\u65B0\u5143\u7D20\u540E\u7684\u6570\u7EC4</span>

<span class="token comment">//  .concat(\u6570\u7EC4,\u6570\u7EC4,\u6570\u7EC4,...) \u7528\u6765\u7EC4\u5408\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4</span>
<span class="token comment">// var arr1 = [10, 20, 30];</span>
<span class="token comment">// var arr2 = [40, 50, 60];</span>
<span class="token comment">// console.log(arr1.concat(arr2));</span>

<span class="token comment">//  .every(\u51FD\u6570)--\u7528\u6765\u7B5B\u9009\u6570\u7EC4\u4E2D\u7684\u503C:\u51FD\u6570\u4E2D\u8FDB\u884C\u5BF9\u6BD4 \u82E5\u6BCF\u4E00\u4E2A\u503C\u90FD\u7B26\u5408\u6761\u4EF6 \u5219\u8FD4\u56DEtrue</span>
<span class="token comment">//\u51FD\u6570\u4E2D\u6709\u4E09\u4E2A\u53C2\u6570,\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u5143\u7D20\u7684\u503C\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7D22\u5F15\u503C,\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u539F\u6765\u7684\u6570\u7EC4(\u6CA1\u7528)</span>
<span class="token comment">//\u8FD4\u56DE\u503C\u662F\u5E03\u5C14\u7C7B\u578B,\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F7F\u7528\uFF0C\u5982\u679C\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u90FD\u7B26\u5408\u6761\u4EF6,\u6700\u540E\u624D\u8FD4\u56DE\u7684\u662Ftrue</span>
<span class="token comment">// var arr = [1000, 2000, 3000];</span>
<span class="token comment">// //a----: \u5143\u7D20\u7684\u503C</span>
<span class="token comment">// //b----: \u7D22\u5F15\u7684\u503C</span>
<span class="token comment">// //c----:\u8C01\u8C03\u7528\u4E86\u8FD9\u4E2A\u65B9\u6CD5,\u90A3\u4E48c\u5C31\u662F\u8C01----&gt;arr</span>
<span class="token comment">// var flag = arr.every(function (a, b) {</span>
<span class="token comment">//   return a &gt; 2000; //\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u90FD\u8981\u5927\u4E8E2000\u7684\u60C5\u51B5,\u6700\u540E\u624D\u8FD4\u56DEtrue</span>
<span class="token comment">// });</span>
<span class="token comment">// console.log(flag); //false</span>

<span class="token comment">// .some \u76F8\u5F53\u4E8Eevery\u7FFB\u8F6C -- \u7528\u6765\u7B5B\u9009\u6570\u7EC4\u4E2D\u7684\u503C:\u51FD\u6570\u4E2D\u8FDB\u884C\u5BF9\u6BD4 \u82E5\u6709\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6 \u5219\u8FD4\u56DEtrue</span>

<span class="token operator">:</span><span class="token operator">:</span><span class="token operator">:</span>tip
currentValue \u5FC5\u9009\u3002\u5FAA\u73AF\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u4E2A\u5143\u7D20\u7684\u503C

index \u53EF\u9009\u3002\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\u503C

arr \u53EF\u9009\u3002\u5C31\u662F\u5BF9\u5F53\u524D\u64CD\u4F5C\u7684\u6570\u7EC4\uFF1B

thisValue \u53EF\u9009\u3002\u5C31\u662F\u6307\u7684<span class="token keyword">this</span>\uFF1B\u5982\u679C\u4E0D\u5199\u8BE5\u503C\uFF0C\u5219\u5728callback\u4E2D\u7684<span class="token keyword">this</span>\u6307\u5411\u7684\u65F6window\uFF0C\u5982\u679C\u5199\u4E86\u5219<span class="token keyword">this</span><span class="token literal-property property">\u6307\u5411\u4F60\u5199\u7684\u503C\uFF1B</span>

<span class="token operator">:</span><span class="token operator">:</span><span class="token operator">:</span>

<span class="token comment">//  .filter(\u51FD\u6570);\u8FD4\u56DE\u7684\u662F\u6570\u7EC4\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u90FD\u7B26\u5408\u6761\u4EF6\u7684\u5143\u7D20,\u7EC4\u6210\u4E86\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4</span>
<span class="token comment">// var arr = [1000, 2000, 3000];</span>
<span class="token comment">// //a----: \u5143\u7D20\u7684\u503C</span>
<span class="token comment">// //b----: \u7D22\u5F15\u7684\u503C</span>
<span class="token comment">// var flag = arr.filter(function (a, b) {</span>
<span class="token comment">//   return a &gt; 2000; //\u7B5B\u9009\u6570\u7EC4\u4E2D\u5927\u4E8E2000\u7684\u5143\u7D20\u5E76\u8F93\u51FA</span>
<span class="token comment">// });</span>
<span class="token comment">// console.log(flag); //3000</span>

<span class="token comment">//  .map(\u51FD\u6570);---&gt;\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u8981\u6267\u884C\u8FD9\u4E2A\u51FD\u6570,\u628A\u6267\u884C\u540E\u7684\u7ED3\u679C\u91CD\u65B0\u7684\u5168\u90E8\u7684\u653E\u5728\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u4E2D</span>
<span class="token comment">// var numbers = [1, 4, 9];</span>
<span class="token comment">// var roots = numbers.map(Math.sqrt); //sqrt\u5F00\u6839\u53F7</span>
<span class="token comment">// console.log(roots);</span>

<span class="token comment">//  .forEach(\u51FD\u6570)\u65B9\u6CD5---\u904D\u5386\u6570\u7EC4\u7528---\u76F8\u5F53\u4E8Efor\u5FAA\u73AF</span>
<span class="token comment">// var arr = [10, 20, 30, 40];</span>
<span class="token comment">// arr.forEach(function (ele, index) { //ele\u6570\u7EC4\u7684\u5143\u7D20\u503C,index\u5143\u7D20\u4E0B\u6807    Orz...\u5176\u4ED6\u503C\u4E5F\u53EF\u4EE5</span>
<span class="token comment">//   console.log(ele + &#39;======&#39; + index);</span>
<span class="token comment">// });</span>

<span class="token comment">// //  .indexOf(\u5143\u7D20\u503C);\u8FD4\u56DE\u7684\u662F\u7D22\u5F15,\u4ECE\u524D\u5F80\u540E\u6570,\u6CA1\u6709\u5219\u662F-1  // lastIndexOf  \u7528\u6CD5\u4E00\u81F4\uFF0C\u4ECE\u540E\u5F80\u524D\u6570\u7D22\u5F15</span>
<span class="token comment">// var arr = [10, 20, 30, 40];</span>
<span class="token comment">// var index = arr.indexOf(400);</span>
<span class="token comment">// console.log(index); //-1</span>

<span class="token comment">//  .join(&quot;\u5B57\u7B26\u4E32&quot;);\u5728\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u4E2D\u95F4\u52A0\u4E00\u4E2A\u5B57\u7B26\u4E32----\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token comment">// var arr = [&quot;\u5C0F\u767D&quot;, &quot;\u5C0F\u9ED1&quot;, &quot;\u5C0F\u7EA2&quot;, &quot;\u5C0F\u82B3&quot;, &quot;\u5C0F\u7EFF&quot;, &quot;\u5C0F\u82CF&quot;];</span>
<span class="token comment">// var str = arr.join(&quot;|&quot;);</span>
<span class="token comment">// console.log(str);</span>


<span class="token comment">//  .reverse();-----&gt;\u53CD\u8F6C\u6570\u7EC4</span>
<span class="token comment">// var arr = [10, 20, 30, 40, 50];</span>
<span class="token comment">// arr.reverse(); //\u53CD\u8F6C\u6570\u7EC4\u5143\u7D20\uFF0C\u62EC\u53F7\u91CC\u7684\u503C\u4E3A\u7A7A</span>
<span class="token comment">// console.log(arr);</span>

<span class="token comment">//  .sort();---\u6392\u5E8F\u7684,\u53EF\u80FD\u4E0D\u7A33\u5B9A,\u5982\u679C\u4E0D\u7A33\u5B9A,\u8BF7\u5199MDN\u4E2D\u7684\u90A3\u4E2A\u56FA\u5B9A\u7684\u4EE3\u7801</span>
<span class="token comment">// var arr = [1, 40, 20, 10, 100];</span>
<span class="token comment">// arr.sort(function (a, b) { //\u7A33\u5B9A\u5199\u6CD5  \u4ECE\u5C0F\u5230\u5927</span>
<span class="token comment">//   return a - b;</span>
<span class="token comment">// })</span>
<span class="token comment">// console.log(arr);</span>
<span class="token comment">// arr.sort(function (a, b) { //\u7A33\u5B9A\u5199\u6CD5  \u4ECE\u5927\u5230\u5C0F</span>
<span class="token comment">//   return b - a;</span>
<span class="token comment">// })</span>
<span class="token comment">// console.log(arr);</span>

<span class="token comment">//.slice(\u5F00\u59CB\u7684\u7D22\u5F15,\u7ED3\u675F\u7684\u7D22\u5F15);------\u628A\u622A\u53D6\u7684\u6570\u7EC4\u7684\u503C\u653E\u5728\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u4E2D</span>
<span class="token comment">// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];</span>
<span class="token comment">// var newArr = arr.slice(3, 7); //\u4E0D\u5305\u62EC7</span>
<span class="token comment">// console.log(newArr);</span>

<span class="token comment">//.splice(\u5F00\u59CB\u7684\u4F4D\u7F6E,\u8981\u5220\u9664\u7684\u4E2A\u6570,\u66FF\u6362\u7684\u5143\u7D20\u7684\u503C);\u4E00\u822C\u662F\u7528\u4E8E\u5220\u9664\u6570\u7EC4\u4E2D\u7684\u5143\u7D20,\u6216\u8005\u662F\u66FF\u6362\u5143\u7D20,\u6216\u8005\u662F\u63D2\u5165\u5143\u7D20</span>
<span class="token comment">// var myFish = [1, 2, 3, 4];</span>
<span class="token comment">// myFish.splice(2, 0, &#39;h&#39;,&#39;i&#39;); // \u5728\u7D22\u5F15\u4E3A2\u7684\u4F4D\u7F6E\u540E\u63D2\u5165&#39;h&#39;</span>
<span class="token comment">// console.log(myFish);</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br></div></div><p>\u8865\u5145\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">/*
    \u6570\u636E\u76F8\u5173api
    map
    filter
    some
    forEach
    findIndex
    push
    unshift
    slice
    splice
  */</span>
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// var arr1 = [];</span>
  <span class="token comment">// arr.forEach(item=&gt;{</span>
  <span class="token comment">//   arr1.push(item + 1);</span>
  <span class="token comment">// });</span>
  <span class="token comment">// console.log(arr1)</span>

  <span class="token comment">// map\u7684\u4F5C\u7528\uFF1A\u5BF9\u6570\u7EC4\u4E2D\u539F\u6709\u6570\u636E\u8FDB\u884C\u52A0\u5DE5\u5904\u7406\uFF0C\u5F62\u6210\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u65B0\u6570\u7EC4\u4E2D\u5305\u542B\u6240\u6709\u52A0\u5DE5\u4E4B\u540E\u7684\u6570\u636E</span>
  <span class="token comment">// var arr1 = arr.map(item=&gt;{</span>
  <span class="token comment">//   // return item + 1;</span>
  <span class="token comment">//   // return item * item;</span>
  <span class="token comment">//   return 123;</span>
  <span class="token comment">// });</span>
  <span class="token comment">// console.log(arr1)</span>

  <span class="token comment">// filter\u7684\u4F5C\u7528\uFF1A\u8FC7\u6EE4\u51FA\u539F\u6709\u6570\u7EC4\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E</span>
  <span class="token comment">// var arr2 = arr.filter(item=&gt;{</span>
  <span class="token comment">//   // \u8FD4\u56DE\u503C\u8868\u793A\u8FC7\u6EE4\u6761\u4EF6</span>
  <span class="token comment">//   // return item &gt; 4;</span>
  <span class="token comment">//   return item &gt; 2 &amp;&amp; item &lt; 5;</span>
  <span class="token comment">// });</span>
  <span class="token comment">// console.log(arr2)</span>

  <span class="token comment">// some \u4F5C\u7528\uFF1A\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542B\u7B26\u5408\u6761\u4EF6\u7684\u6570\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u5C31\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse\u636E</span>
  <span class="token comment">// var flag = arr.some(item=&gt;{</span>
  <span class="token comment">//   return item &gt; 3;</span>
  <span class="token comment">// });</span>
  <span class="token comment">// console.log(flag)</span>
  
  <span class="token comment">// var currentIndex = null;</span>
  <span class="token comment">// arr.forEach((item, index)=&gt;{</span>
  <span class="token comment">//   if(item == 3) {</span>
  <span class="token comment">//     currentIndex = index;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// });</span>
  <span class="token comment">// console.log(currentIndex)</span>

  <span class="token comment">// var currentIndex = null;</span>
  <span class="token comment">// arr.some((item, index) =&gt; {</span>
  <span class="token comment">//   if(item == 3) {</span>
  <span class="token comment">//     // \u627E\u5230\u4E86\u6570\u636E\uFF0C\u4FDD\u5B58\u5BF9\u5E94\u7D22\u5F15\uFF0C\u7EC8\u6B62\u7EE7\u7EED\u904D\u5386</span>
  <span class="token comment">//     currentIndex = index</span>
  <span class="token comment">//     // \u7EC8\u6B62\u904D\u5386</span>
  <span class="token comment">//     return true;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   console.log(&#39;------------&#39;)</span>
  <span class="token comment">// })</span>
  <span class="token comment">// console.log(currentIndex)</span>

  <span class="token comment">// findIndex \u67E5\u627E\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\u7684\u7D22\u5F15</span>
  <span class="token keyword">var</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> item <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="_17-\u57FA\u672C\u5305\u88C5\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_17-\u57FA\u672C\u5305\u88C5\u7C7B\u578B" aria-hidden="true">#</a> 17 \u57FA\u672C\u5305\u88C5\u7C7B\u578B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u57FA\u672C\u5305\u88C5\u7C7B\u578B</span>

<span class="token comment">//\u666E\u901A\u53D8\u91CF\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528\u5C5E\u6027\u6216\u8005\u65B9\u6CD5</span>
<span class="token comment">//\u5BF9\u8C61\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u5C5E\u6027\u548C\u65B9\u6CD5</span>

<span class="token comment">//\u57FA\u672C\u5305\u88C5\u7C7B\u578B:\u672C\u8EAB\u662F\u57FA\u672C\u7C7B\u578B,\u4F46\u662F\u5728\u6267\u884C\u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D,\u5982\u679C\u8FD9\u79CD\u7C7B\u578B\u7684\u53D8\u91CF\u8C03\u7528\u4E86\u5C5E\u6027\u6216\u8005\u662F\u65B9\u6CD5,</span>
<span class="token comment">//\u90A3\u4E48\u8FD9\u79CD\u7C7B\u578B\u5C31\u4E0D\u518D\u662F\u57FA\u672C\u7C7B\u578B\u4E86,\u800C\u662F\u57FA\u672C\u5305\u88C5\u7C7B\u578B,\u8FD9\u4E2A\u53D8\u91CF\u4E5F\u4E0D\u662F\u666E\u901A\u7684\u53D8\u91CF\u4E86,\u800C\u662F\u57FA\u672C\u5305\u88C5\u7C7B\u578B\u5BF9\u8C61</span>
<span class="token comment">//string number boolean</span>

<span class="token comment">//    var str=&quot;hello&quot;;</span>
<span class="token comment">//    str=str.replace(&quot;ll&quot;,&quot;HH&quot;); //\u8C03\u7528\u4E86\u65B9\u6CD5 \u6240\u4EE5\u5C31\u4E0D\u662F\u57FA\u672C\u7C7B\u578B\u4E86 \u800C\u662F\u57FA\u672C\u5305\u88C5\u7C7B\u578B</span>
<span class="token comment">//    console.log(str);</span>

<span class="token comment">//    var str=new String(&quot;hello&quot;);</span>
<span class="token comment">//    str=str.replace(&quot;ll&quot;,&quot;HH&quot;);</span>
<span class="token comment">//    console.log(str);</span>
<span class="token comment">//    str=null;</span>

<span class="token comment">//    var num=10;//number----&gt;</span>
<span class="token comment">//    console.log(num.toString());</span>

<span class="token comment">//\u5E03\u5C14\u503C\u4E0B\uFF1A</span>
<span class="token comment">//\u5982\u679C\u662F\u4E00\u4E2A\u5BF9\u8C61&amp;&amp;true,\u90A3\u4E48\u7ED3\u679C\u662Ftrue</span>
<span class="token comment">//\u5982\u679C\u662F\u4E00\u4E2Atrue&amp;&amp;\u5BF9\u8C61,\u90A3\u4E48\u7ED3\u679C\u662F\u5BF9\u8C61</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> flag <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token comment">//\u8F93\u51FA\u4E3Atrue</span>
<span class="token comment">//  var result=true&amp;&amp;flag;  //\u8F93\u51FA\u4E3Aflag\u5BF9\u8C61</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">//    var num=10;</span>
<span class="token comment">//    var num2=Number(&quot;10&quot;);//\u8F6C\u6362,\u6CA1\u6709new---\u7C7B\u578B\u8F6C</span>
<span class="token comment">//    var num3=new Number(&quot;10&quot;);//\u57FA\u672C\u5305\u88C5\u7C7B\u578B</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,85);function t(l,c){return e}var u=s(p,[["render",t]]);export{u as default};
