import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01af844e.js";const p="/assets/1671017924981.fea77370.png",o="/assets/1671018781557.e1faf3fc.png",A=JSON.parse('{"title":"JavaScript 基础 - 第2天","description":"","frontmatter":{},"headers":[],"relativePath":"前端/js/javascript基础第二天笔记.md","filePath":"前端/js/javascript基础第二天笔记.md"}'),e={name:"前端/js/javascript基础第二天笔记.md"},c=l(`<h1 id="javascript-基础-第2天" tabindex="-1">JavaScript 基础 - 第2天 <a class="header-anchor" href="#javascript-基础-第2天" aria-label="Permalink to &quot;JavaScript 基础 - 第2天&quot;">​</a></h1><blockquote><p>理解什么是流程控制，知道条件控制的种类并掌握其对应的语法规则，具备利用循环编写简易ATM取款机程序能力</p></blockquote><ul><li>运算符</li><li>语句</li><li>综合案例</li></ul><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><h3 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-label="Permalink to &quot;算术运算符&quot;">​</a></h3><p>数字是用来计算的，比如：乘法 * 、除法 / 、加法 + 、减法 - 等等，所以经常和算术运算符一起。</p><p>算术运算符：也叫数学运算符，主要包括加、减、乘、除、取余（求模）等</p><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td>+</td><td>求和</td></tr><tr><td>-</td><td>求差</td></tr><tr><td>*</td><td>求积</td></tr><tr><td>/</td><td>求商</td></tr><tr><td><strong>%</strong></td><td>取模（取余数），开发中经常用于作为某个数字是否被整除</td></tr></tbody></table><blockquote><p>注意：在计算失败时，显示的结果是 NaN （not a number）</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 算术运算符</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//  4 </span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(num </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 20</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(num </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> num)  </span><span style="color:#6A737D;">// 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 取模(取余数)  使用场景：  用来判断某个数是否能够被整除</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//  0  </span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//  0</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//  2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//  3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 注意事项 : 如果我们计算失败，则返回的结果是 NaN (not a number)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pink老师&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pink老师&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pink老师&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// pink老师2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 算术运算符</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//  4 </span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(num </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 20</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(num </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num)  </span><span style="color:#6A737D;">// 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 取模(取余数)  使用场景：  用来判断某个数是否能够被整除</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//  0  </span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//  0</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//  2</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//  3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 注意事项 : 如果我们计算失败，则返回的结果是 NaN (not a number)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pink老师&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pink老师&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pink老师&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// pink老师2</span></span></code></pre></div><h3 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h3><p>赋值运算符：对变量进行赋值的运算符</p><p>= 将等号右边的值赋予给左边, 要求左边必须是一个容器</p><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td>+=</td><td>加法赋值</td></tr><tr><td>-+</td><td>减法赋值</td></tr><tr><td>*=</td><td>乘法赋值</td></tr><tr><td>/=</td><td>除法赋值</td></tr><tr><td>%=</td><td>取余赋值</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">let num = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">// num = num + 1</span></span>
<span class="line"><span style="color:#E1E4E8;">// 采取赋值运算符</span></span>
<span class="line"><span style="color:#E1E4E8;">// num += 1</span></span>
<span class="line"><span style="color:#E1E4E8;">num += 3</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(num)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">let num = 1</span></span>
<span class="line"><span style="color:#24292E;">// num = num + 1</span></span>
<span class="line"><span style="color:#24292E;">// 采取赋值运算符</span></span>
<span class="line"><span style="color:#24292E;">// num += 1</span></span>
<span class="line"><span style="color:#24292E;">num += 3</span></span>
<span class="line"><span style="color:#24292E;">console.log(num)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="自增-自减运算符" tabindex="-1">自增/自减运算符 <a class="header-anchor" href="#自增-自减运算符" aria-label="Permalink to &quot;自增/自减运算符&quot;">​</a></h3><table><thead><tr><th>符号</th><th>作用</th><th>说明</th></tr></thead><tbody><tr><td>++</td><td>自增</td><td>变量自身的值加1，例如: x++</td></tr><tr><td>--</td><td>自减</td><td>变量自身的值减1，例如: x--</td></tr></tbody></table><ol><li>++在前和++在后在单独使用时二者并没有差别，而且一般开发中我们都是独立使用</li><li>++在后（后缀式）我们会使用更多</li></ol><blockquote><p>注意：</p><ol><li>只有变量能够使用自增和自减运算符</li><li>++、-- 可以在变量前面也可以在变量后面，比如: x++ 或者 ++x</li></ol></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    // let num = 10</span></span>
<span class="line"><span style="color:#E1E4E8;">    // num = num + 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    // num += 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    // // 1. 前置自增</span></span>
<span class="line"><span style="color:#E1E4E8;">    // let i = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    // ++i</span></span>
<span class="line"><span style="color:#E1E4E8;">    // console.log(i)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    // let i = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    // console.log(++i + 1)</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 2. 后置自增</span></span>
<span class="line"><span style="color:#E1E4E8;">    // let i = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    // i++</span></span>
<span class="line"><span style="color:#E1E4E8;">    // console.log(i)</span></span>
<span class="line"><span style="color:#E1E4E8;">    // let i = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    // console.log(i++ + 1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    // 了解 </span></span>
<span class="line"><span style="color:#E1E4E8;">    let i = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(i++ + ++i + i)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // let num = 10</span></span>
<span class="line"><span style="color:#24292E;">    // num = num + 1</span></span>
<span class="line"><span style="color:#24292E;">    // num += 1</span></span>
<span class="line"><span style="color:#24292E;">    // // 1. 前置自增</span></span>
<span class="line"><span style="color:#24292E;">    // let i = 1</span></span>
<span class="line"><span style="color:#24292E;">    // ++i</span></span>
<span class="line"><span style="color:#24292E;">    // console.log(i)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    // let i = 1</span></span>
<span class="line"><span style="color:#24292E;">    // console.log(++i + 1)</span></span>
<span class="line"><span style="color:#24292E;">    // 2. 后置自增</span></span>
<span class="line"><span style="color:#24292E;">    // let i = 1</span></span>
<span class="line"><span style="color:#24292E;">    // i++</span></span>
<span class="line"><span style="color:#24292E;">    // console.log(i)</span></span>
<span class="line"><span style="color:#24292E;">    // let i = 1</span></span>
<span class="line"><span style="color:#24292E;">    // console.log(i++ + 1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    // 了解 </span></span>
<span class="line"><span style="color:#24292E;">    let i = 1</span></span>
<span class="line"><span style="color:#24292E;">    console.log(i++ + ++i + i)</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符&quot;">​</a></h3><p>使用场景：比较两个数据大小、是否相等，根据比较结果返回一个布尔值（true / false）</p><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td>&gt;</td><td>左边是否大于右边</td></tr><tr><td>&lt;</td><td>左边是否小于右边</td></tr><tr><td>&gt;=</td><td>左边是否大于或等于右边</td></tr><tr><td>&lt;=</td><td>左边是否小于或等于右边</td></tr><tr><td>===</td><td>左右两边是否<code>类型</code>和<code>值</code>都相等（重点）</td></tr><tr><td>==</td><td>左右两边<code>值</code>是否相等</td></tr><tr><td>!=</td><td>左右值不相等</td></tr><tr><td>!==</td><td>左右两边是否不全等</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(3 &gt; 5)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(3 &gt;= 3)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(2 == 2)</span></span>
<span class="line"><span style="color:#E1E4E8;">  // 比较运算符有隐式转换 把&#39;2&#39; 转换为 2  双等号 只判断值</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(2 == &#39;2&#39;)  // true</span></span>
<span class="line"><span style="color:#E1E4E8;">  // console.log(undefined === null)</span></span>
<span class="line"><span style="color:#E1E4E8;">  // === 全等 判断 值 和 数据类型都一样才行</span></span>
<span class="line"><span style="color:#E1E4E8;">  // 以后判断是否相等 请用 ===  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(2 === &#39;2&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(NaN === NaN) // NaN 不等于任何人，包括他自己</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(2 !== &#39;2&#39;)  // true  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(2 != &#39;2&#39;) // false </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(&#39;-------------------------&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(&#39;a&#39; &lt; &#39;b&#39;) // true</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(&#39;aa&#39; &lt; &#39;ab&#39;) // true</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(&#39;aa&#39; &lt; &#39;aac&#39;) // true</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(&#39;-------------------------&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  console.log(3 &gt; 5)</span></span>
<span class="line"><span style="color:#24292E;">  console.log(3 &gt;= 3)</span></span>
<span class="line"><span style="color:#24292E;">  console.log(2 == 2)</span></span>
<span class="line"><span style="color:#24292E;">  // 比较运算符有隐式转换 把&#39;2&#39; 转换为 2  双等号 只判断值</span></span>
<span class="line"><span style="color:#24292E;">  console.log(2 == &#39;2&#39;)  // true</span></span>
<span class="line"><span style="color:#24292E;">  // console.log(undefined === null)</span></span>
<span class="line"><span style="color:#24292E;">  // === 全等 判断 值 和 数据类型都一样才行</span></span>
<span class="line"><span style="color:#24292E;">  // 以后判断是否相等 请用 ===  </span></span>
<span class="line"><span style="color:#24292E;">  console.log(2 === &#39;2&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  console.log(NaN === NaN) // NaN 不等于任何人，包括他自己</span></span>
<span class="line"><span style="color:#24292E;">  console.log(2 !== &#39;2&#39;)  // true  </span></span>
<span class="line"><span style="color:#24292E;">  console.log(2 != &#39;2&#39;) // false </span></span>
<span class="line"><span style="color:#24292E;">  console.log(&#39;-------------------------&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  console.log(&#39;a&#39; &lt; &#39;b&#39;) // true</span></span>
<span class="line"><span style="color:#24292E;">  console.log(&#39;aa&#39; &lt; &#39;ab&#39;) // true</span></span>
<span class="line"><span style="color:#24292E;">  console.log(&#39;aa&#39; &lt; &#39;aac&#39;) // true</span></span>
<span class="line"><span style="color:#24292E;">  console.log(&#39;-------------------------&#39;)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h3><p>使用场景：可以把多个布尔值放到一起运算，最终返回一个布尔值</p><table><thead><tr><th>符号</th><th>名称</th><th>日常读法</th><th>特点</th><th>口诀</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>逻辑与</td><td>并且</td><td>符号两边有一个假的结果为假</td><td>一假则假</td></tr><tr><td>||</td><td>逻辑或</td><td>或者</td><td>符号两边有一个真的结果为真</td><td>一真则真</td></tr><tr><td>!</td><td>逻辑非</td><td>取反</td><td>true变false false变true</td><td>真变假，假变真</td></tr></tbody></table><table><thead><tr><th>A</th><th>B</th><th>A &amp;&amp; B</th><th>A || B</th><th>!A</th></tr></thead><tbody><tr><td>false</td><td>false</td><td>false</td><td>false</td><td>true</td></tr><tr><td>false</td><td>true</td><td>false</td><td>true</td><td>true</td></tr><tr><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td></tr><tr><td>true</td><td>true</td><td>true</td><td>true</td><td>false</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 逻辑与 一假则假</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(true &amp;&amp; true)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(false &amp;&amp; true)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(3 &lt; 5 &amp;&amp; 3 &gt; 2)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(3 &lt; 5 &amp;&amp; 3 &lt; 2)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 逻辑或 一真则真</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(true || true)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(false || true)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(false || false)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 逻辑非  取反</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(!true)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(!false)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    let num = 6</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(num &gt; 5 &amp;&amp; num &lt; 10)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // 逻辑与 一假则假</span></span>
<span class="line"><span style="color:#24292E;">    console.log(true &amp;&amp; true)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(false &amp;&amp; true)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(3 &lt; 5 &amp;&amp; 3 &gt; 2)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(3 &lt; 5 &amp;&amp; 3 &lt; 2)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    // 逻辑或 一真则真</span></span>
<span class="line"><span style="color:#24292E;">    console.log(true || true)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(false || true)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(false || false)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    // 逻辑非  取反</span></span>
<span class="line"><span style="color:#24292E;">    console.log(!true)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(!false)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    let num = 6</span></span>
<span class="line"><span style="color:#24292E;">    console.log(num &gt; 5 &amp;&amp; num &lt; 10)</span></span>
<span class="line"><span style="color:#24292E;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="运算符优先级" tabindex="-1">运算符优先级 <a class="header-anchor" href="#运算符优先级" aria-label="Permalink to &quot;运算符优先级&quot;">​</a></h3><blockquote><p>逻辑运算符优先级： ！&gt; &amp;&amp; &gt; ||</p></blockquote><h2 id="语句" tabindex="-1">语句 <a class="header-anchor" href="#语句" aria-label="Permalink to &quot;语句&quot;">​</a></h2><h3 id="表达式和语句" tabindex="-1">表达式和语句 <a class="header-anchor" href="#表达式和语句" aria-label="Permalink to &quot;表达式和语句&quot;">​</a></h3><p><img src="`+p+`" alt="67101792498"></p><h3 id="分支语句" tabindex="-1">分支语句 <a class="header-anchor" href="#分支语句" aria-label="Permalink to &quot;分支语句&quot;">​</a></h3><p>分支语句可以根据条件判定真假，来选择性的执行想要的代码</p><p>分支语句包含：</p><ol><li>if分支语句（重点）</li><li>三元运算符</li><li>switch语句</li></ol><h4 id="if-分支语句" tabindex="-1">if 分支语句 <a class="header-anchor" href="#if-分支语句" aria-label="Permalink to &quot;if 分支语句&quot;">​</a></h4><p>语法：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(条件表达式) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 满足条件要执行的语句</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(条件表达式) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 满足条件要执行的语句</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>小括号内的条件结果是布尔值，为 true 时，进入大括号里执行代码；为false，则不执行大括号里面代码</p><p>小括号内的结果若不是布尔类型时，会发生类型转换为布尔值，类似Boolean()</p><p>如果大括号只有一个语句，大括号可以省略，但是，俺们不提倡这么做~</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 单分支语句</span></span>
<span class="line"><span style="color:#E1E4E8;">    // if (false) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// if (3 &gt; 5) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// if (2 === &#39;2&#39;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//  1. 除了0 所有的数字都为真</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   if (0) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2.除了 &#39;&#39; 所有的字符串都为真 true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// if (&#39;pink老师&#39;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// if (&#39;&#39;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// // if (&#39;&#39;) console.log(&#39;执行语句&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1. 用户输入</span></span>
<span class="line"><span style="color:#E1E4E8;">    let score </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入成绩&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 进行判断输出</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (score </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">700</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;恭喜考入黑马程序员&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-----------------&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // 单分支语句</span></span>
<span class="line"><span style="color:#24292E;">    // if (false) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// if (3 &gt; 5) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// if (2 === &#39;2&#39;) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//  1. 除了0 所有的数字都为真</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   if (0) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2.除了 &#39;&#39; 所有的字符串都为真 true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// if (&#39;pink老师&#39;) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// if (&#39;&#39;) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// // if (&#39;&#39;) console.log(&#39;执行语句&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1. 用户输入</span></span>
<span class="line"><span style="color:#24292E;">    let score </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#6F42C1;">prompt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;请输入成绩&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 进行判断输出</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (score </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">700</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;恭喜考入黑马程序员&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;-----------------&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h4 id="if双分支语句" tabindex="-1">if双分支语句 <a class="header-anchor" href="#if双分支语句" aria-label="Permalink to &quot;if双分支语句&quot;">​</a></h4><p>如果有两个条件的时候，可以使用 if else 双分支语句</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (条件表达式){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 满足条件要执行的语句</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 不满足条件要执行的语句</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (条件表达式){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 满足条件要执行的语句</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 不满足条件要执行的语句</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 1. 用户输入</span></span>
<span class="line"><span style="color:#E1E4E8;">    let uname = prompt(&#39;请输入用户名:&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    let pwd = prompt(&#39;请输入密码:&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 2. 判断输出</span></span>
<span class="line"><span style="color:#E1E4E8;">    if (uname === &#39;pink&#39; &amp;&amp; pwd === &#39;123456&#39;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;恭喜登录成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户名或者密码错误&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // 1. 用户输入</span></span>
<span class="line"><span style="color:#24292E;">    let uname = prompt(&#39;请输入用户名:&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    let pwd = prompt(&#39;请输入密码:&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    // 2. 判断输出</span></span>
<span class="line"><span style="color:#24292E;">    if (uname === &#39;pink&#39; &amp;&amp; pwd === &#39;123456&#39;) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;恭喜登录成功&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    } else {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;用户名或者密码错误&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="if-多分支语句" tabindex="-1">if 多分支语句 <a class="header-anchor" href="#if-多分支语句" aria-label="Permalink to &quot;if 多分支语句&quot;">​</a></h4><p>使用场景： 适合于有多个条件的时候</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 1. 用户输入</span></span>
<span class="line"><span style="color:#E1E4E8;">    let score = +prompt(&#39;请输入成绩：&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 2. 判断输出</span></span>
<span class="line"><span style="color:#E1E4E8;">    if (score &gt;= 90) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成绩优秀，宝贝，你是我的骄傲&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } else if (score &gt;= 70) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成绩良好，宝贝，你要加油哦~~&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } else if (score &gt;= 60) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成绩及格，宝贝，你很危险~&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成绩不及格，宝贝，我不想和你说话，我只想用鞭子和你说话~&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // 1. 用户输入</span></span>
<span class="line"><span style="color:#24292E;">    let score = +prompt(&#39;请输入成绩：&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    // 2. 判断输出</span></span>
<span class="line"><span style="color:#24292E;">    if (score &gt;= 90) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;成绩优秀，宝贝，你是我的骄傲&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    } else if (score &gt;= 70) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;成绩良好，宝贝，你要加油哦~~&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    } else if (score &gt;= 60) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;成绩及格，宝贝，你很危险~&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    } else {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;成绩不及格，宝贝，我不想和你说话，我只想用鞭子和你说话~&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="三元运算符-三元表达式" tabindex="-1">三元运算符（三元表达式） <a class="header-anchor" href="#三元运算符-三元表达式" aria-label="Permalink to &quot;三元运算符（三元表达式）&quot;">​</a></h4><p><strong>使用场景</strong>： 一些简单的双分支，可以使用 三元运算符（三元表达式），写起来比 if else双分支 更简单</p><p><strong>符号</strong>：? 与 : 配合使用</p><p>语法：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">条件 </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> 表达式1 ： 表达式2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">条件 </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> 表达式1 ： 表达式2</span></span></code></pre></div><p>例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 三元运算符（三元表达式）</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 语法格式</span></span>
<span class="line"><span style="color:#6A737D;">// 条件 ? 表达式1 : 表达式2 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 执行过程 </span></span>
<span class="line"><span style="color:#6A737D;">// 2.1 如果条件为真，则执行表达式1</span></span>
<span class="line"><span style="color:#6A737D;">// 2.2 如果条件为假，则执行表达式2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 验证</span></span>
<span class="line"><span style="color:#6A737D;">// 5 &gt; 3 ? &#39;真的&#39; : &#39;假的&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;真的&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;假的&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// let age = 18 </span></span>
<span class="line"><span style="color:#6A737D;">// age = age + 1</span></span>
<span class="line"><span style="color:#6A737D;">//  age++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 用户输入 </span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请您输入一个数字:&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 判断输出- 小于10才补0</span></span>
<span class="line"><span style="color:#6A737D;">// num = num &lt; 10 ? 0 + num : num</span></span>
<span class="line"><span style="color:#E1E4E8;">num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> num</span></span>
<span class="line"><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(num)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 三元运算符（三元表达式）</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 语法格式</span></span>
<span class="line"><span style="color:#6A737D;">// 条件 ? 表达式1 : 表达式2 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 执行过程 </span></span>
<span class="line"><span style="color:#6A737D;">// 2.1 如果条件为真，则执行表达式1</span></span>
<span class="line"><span style="color:#6A737D;">// 2.2 如果条件为假，则执行表达式2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 验证</span></span>
<span class="line"><span style="color:#6A737D;">// 5 &gt; 3 ? &#39;真的&#39; : &#39;假的&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;真的&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;假的&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// let age = 18 </span></span>
<span class="line"><span style="color:#6A737D;">// age = age + 1</span></span>
<span class="line"><span style="color:#6A737D;">//  age++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 用户输入 </span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prompt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;请您输入一个数字:&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 判断输出- 小于10才补0</span></span>
<span class="line"><span style="color:#6A737D;">// num = num &lt; 10 ? 0 + num : num</span></span>
<span class="line"><span style="color:#24292E;">num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num</span></span>
<span class="line"><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(num)</span></span></code></pre></div><h4 id="switch语句-了解" tabindex="-1">switch语句（了解） <a class="header-anchor" href="#switch语句-了解" aria-label="Permalink to &quot;switch语句（了解）&quot;">​</a></h4><p>使用场景： 适合于有多个条件的时候，也属于分支语句，大部分情况下和 if多分支语句 功能相同</p><p>注意：</p><ol><li>switch case语句一般用于等值判断, if适合于区间判断</li><li>switchcase一般需要配合break关键字使用 没有break会造成case穿透</li><li>if 多分支语句开发要比switch更重要，使用也更多</li></ol><p>例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// switch分支语句</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 语法</span></span>
<span class="line"><span style="color:#6A737D;">// switch (表达式) {</span></span>
<span class="line"><span style="color:#6A737D;">//   case 值1:</span></span>
<span class="line"><span style="color:#6A737D;">//     代码1</span></span>
<span class="line"><span style="color:#6A737D;">//     break</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//   case 值2:</span></span>
<span class="line"><span style="color:#6A737D;">//     代码2</span></span>
<span class="line"><span style="color:#6A737D;">//     break</span></span>
<span class="line"><span style="color:#6A737D;">//   ...</span></span>
<span class="line"><span style="color:#6A737D;">//   default:</span></span>
<span class="line"><span style="color:#6A737D;">//     代码n</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  switch (2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    case </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;您选择的是1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    break  </span><span style="color:#6A737D;">// 退出switch</span></span>
<span class="line"><span style="color:#E1E4E8;">    case </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;您选择的是2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    break  </span><span style="color:#6A737D;">// 退出switch</span></span>
<span class="line"><span style="color:#E1E4E8;">    case </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;您选择的是3&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    break  </span><span style="color:#6A737D;">// 退出switch</span></span>
<span class="line"><span style="color:#E1E4E8;">    default:</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;没有符合条件的&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// switch分支语句</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 语法</span></span>
<span class="line"><span style="color:#6A737D;">// switch (表达式) {</span></span>
<span class="line"><span style="color:#6A737D;">//   case 值1:</span></span>
<span class="line"><span style="color:#6A737D;">//     代码1</span></span>
<span class="line"><span style="color:#6A737D;">//     break</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//   case 值2:</span></span>
<span class="line"><span style="color:#6A737D;">//     代码2</span></span>
<span class="line"><span style="color:#6A737D;">//     break</span></span>
<span class="line"><span style="color:#6A737D;">//   ...</span></span>
<span class="line"><span style="color:#6A737D;">//   default:</span></span>
<span class="line"><span style="color:#6A737D;">//     代码n</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  switch (2) {</span></span>
<span class="line"><span style="color:#24292E;">    case </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;您选择的是1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    break  </span><span style="color:#6A737D;">// 退出switch</span></span>
<span class="line"><span style="color:#24292E;">    case </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;您选择的是2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    break  </span><span style="color:#6A737D;">// 退出switch</span></span>
<span class="line"><span style="color:#24292E;">    case </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;您选择的是3&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    break  </span><span style="color:#6A737D;">// 退出switch</span></span>
<span class="line"><span style="color:#24292E;">    default:</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;没有符合条件的&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="断点调试" tabindex="-1">断点调试 <a class="header-anchor" href="#断点调试" aria-label="Permalink to &quot;断点调试&quot;">​</a></h4><p>**作用：**学习时可以帮助更好的理解代码运行，工作时可以更快找到bug</p><p>浏览器打开调试界面</p><ol><li>按F12打开开发者工具</li><li>点到源代码一栏 （ sources ）</li><li>选择代码文件</li></ol><p>**断点：**在某句代码上加的标记就叫断点，当程序执行到这句有标记的代码时会暂停下来</p><h3 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-label="Permalink to &quot;循环语句&quot;">​</a></h3><p>使用场景：重复执行 指定的一段代码，比如我们想要输出10次 &#39;我学的很棒&#39;</p><p>学习路径：</p><p>1.while循环</p><p>2.for 循环（重点）</p><h4 id="while循环" tabindex="-1">while循环 <a class="header-anchor" href="#while循环" aria-label="Permalink to &quot;while循环&quot;">​</a></h4><p>while : 在…. 期间， 所以 while循环 就是在满足条件期间，重复执行某些代码。</p><p><strong>语法：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (条件表达式) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 循环体    </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (条件表达式) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 循环体    </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// while循环: 重复执行代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 需求: 利用循环重复打印3次 &#39;月薪过万不是梦，毕业时候见英雄&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;月薪过万不是梦，毕业时候见英雄~&lt;br&gt;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 这里千万不要忘了变量自增否则造成死循环</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// while循环: 重复执行代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. 需求: 利用循环重复打印3次 &#39;月薪过万不是梦，毕业时候见英雄&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  document.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;月薪过万不是梦，毕业时候见英雄~&lt;br&gt;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 这里千万不要忘了变量自增否则造成死循环</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>循环三要素：</p><p>1.初始值 （经常用变量）</p><p>2.终止条件</p><p>3.变量的变化量</p><p>例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  // // 1. 变量的起始值</span></span>
<span class="line"><span style="color:#E1E4E8;">  // let i = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  // // 2. 终止条件</span></span>
<span class="line"><span style="color:#E1E4E8;">  // while (i &lt;= 3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   document.write(&#39;我要循环三次 &lt;br&gt;&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   // 3. 变量的变化量</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   i++</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1. 变量的起始值</span></span>
<span class="line"><span style="color:#E1E4E8;">  let end </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入次数:&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">let i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 终止条件</span></span>
<span class="line"><span style="color:#B392F0;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> end) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.write(</span><span style="color:#9ECBFF;">&#39;我要循环三次 &lt;br&gt;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 3. 变量的变化量</span></span>
<span class="line"><span style="color:#E1E4E8;">  i++</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  // // 1. 变量的起始值</span></span>
<span class="line"><span style="color:#24292E;">  // let i = 1</span></span>
<span class="line"><span style="color:#24292E;">  // // 2. 终止条件</span></span>
<span class="line"><span style="color:#24292E;">  // while (i &lt;= 3) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   document.write(&#39;我要循环三次 &lt;br&gt;&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   // 3. 变量的变化量</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   i++</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1. 变量的起始值</span></span>
<span class="line"><span style="color:#24292E;">  let end </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#6F42C1;">prompt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;请输入次数:&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">let i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 终止条件</span></span>
<span class="line"><span style="color:#6F42C1;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> end) {</span></span>
<span class="line"><span style="color:#24292E;">  document.write(</span><span style="color:#032F62;">&#39;我要循环三次 &lt;br&gt;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 3. 变量的变化量</span></span>
<span class="line"><span style="color:#24292E;">  i++</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span></code></pre></div><h4 id="中止循环" tabindex="-1">中止循环 <a class="header-anchor" href="#中止循环" aria-label="Permalink to &quot;中止循环&quot;">​</a></h4><p><code>break</code> 中止整个循环，一般用于结果已经得到, 后续的循环不需要的时候可以使用（提高效率）</p><p><code>continue</code> 中止本次循环，一般用于排除或者跳过某一个选项的时候</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    // let i = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    // while (i &lt;= 5) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(i)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   if (i === 3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     break  // 退出循环</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   i++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    let i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;"> === 3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">continue</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.log(i)</span></span>
<span class="line"><span style="color:#E1E4E8;">      i++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // let i = 1</span></span>
<span class="line"><span style="color:#24292E;">    // while (i &lt;= 5) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(i)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   if (i === 3) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     break  // 退出循环</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   i++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    let i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">i</span><span style="color:#24292E;"> === 3) {</span></span>
<span class="line"><span style="color:#24292E;">        i</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">continue</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      console.log(i)</span></span>
<span class="line"><span style="color:#24292E;">      i++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h4 id="无限循环" tabindex="-1">无限循环 <a class="header-anchor" href="#无限循环" aria-label="Permalink to &quot;无限循环&quot;">​</a></h4><p>1.while(true) 来构造“无限”循环，需要使用break退出循环。（常用）</p><p>2.for(;😉 也可以来构造“无限”循环，同样需要使用break退出循环。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 无限循环  </span></span>
<span class="line"><span style="color:#6A737D;">// 需求： 页面会一直弹窗询问你爱我吗？</span></span>
<span class="line"><span style="color:#6A737D;">// (1). 如果用户输入的是 &#39;爱&#39;，则退出弹窗</span></span>
<span class="line"><span style="color:#6A737D;">// (2). 否则一直弹窗询问</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. while(true) 无限循环</span></span>
<span class="line"><span style="color:#6A737D;">// while (true) {</span></span>
<span class="line"><span style="color:#6A737D;">//   let love = prompt(&#39;你爱我吗?&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">//   if (love === &#39;爱&#39;) {</span></span>
<span class="line"><span style="color:#6A737D;">//     break</span></span>
<span class="line"><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. for(;;) 无限循环</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (; ;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> love </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;你爱我吗?&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (love </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;爱&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 无限循环  </span></span>
<span class="line"><span style="color:#6A737D;">// 需求： 页面会一直弹窗询问你爱我吗？</span></span>
<span class="line"><span style="color:#6A737D;">// (1). 如果用户输入的是 &#39;爱&#39;，则退出弹窗</span></span>
<span class="line"><span style="color:#6A737D;">// (2). 否则一直弹窗询问</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1. while(true) 无限循环</span></span>
<span class="line"><span style="color:#6A737D;">// while (true) {</span></span>
<span class="line"><span style="color:#6A737D;">//   let love = prompt(&#39;你爱我吗?&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">//   if (love === &#39;爱&#39;) {</span></span>
<span class="line"><span style="color:#6A737D;">//     break</span></span>
<span class="line"><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. for(;;) 无限循环</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (; ;) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> love </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prompt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;你爱我吗?&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (love </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;爱&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="综合案例-atm存取款机" tabindex="-1">综合案例-ATM存取款机 <a class="header-anchor" href="#综合案例-atm存取款机" aria-label="Permalink to &quot;综合案例-ATM存取款机&quot;">​</a></h2><p><img src="`+o+`" alt="67101878155"></p><p>分析：</p><p>①：提示输入框写到循环里面（无限循环）</p><p>②：用户输入4则退出循环 break</p><p>③：提前准备一个金额预先存储一个数额 money</p><p>④：根据输入不同的值，做不同的操作</p><p>​ (1) 取钱则是减法操作， 存钱则是加法操作，查看余额则是直接显示金额</p><p>​ (2) 可以使用 if else if 多分支 来执行不同的操作</p><p>完整代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  // 1. 开始循环 输入框写到 循环里面</span></span>
<span class="line"><span style="color:#E1E4E8;">  // 3. 准备一个总的金额</span></span>
<span class="line"><span style="color:#E1E4E8;">  let money = 100</span></span>
<span class="line"><span style="color:#E1E4E8;">while (true) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  let re </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">请您选择操作：</span></span>
<span class="line"><span style="color:#9ECBFF;">1.存钱</span></span>
<span class="line"><span style="color:#9ECBFF;">2.取钱</span></span>
<span class="line"><span style="color:#9ECBFF;">3.查看余额</span></span>
<span class="line"><span style="color:#9ECBFF;">4.退出</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2. 如果用户输入的 4 则退出循环， break  写到if 里面，没有写到switch里面， 因为4需要break退出循环</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (re </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    break</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 4. 根据输入做操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">switch</span><span style="color:#E1E4E8;"> (re) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    case </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 存钱</span></span>
<span class="line"><span style="color:#E1E4E8;">      let cun </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入存款金额&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      money </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> money </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> cun</span></span>
<span class="line"><span style="color:#E1E4E8;">      break</span></span>
<span class="line"><span style="color:#E1E4E8;">      case </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 存钱</span></span>
<span class="line"><span style="color:#E1E4E8;">      let qu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入取款金额&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      money </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> money </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> qu</span></span>
<span class="line"><span style="color:#E1E4E8;">      break</span></span>
<span class="line"><span style="color:#E1E4E8;">      case </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 存钱</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`您的银行卡余额是\${</span><span style="color:#E1E4E8;">money</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      break</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  // 1. 开始循环 输入框写到 循环里面</span></span>
<span class="line"><span style="color:#24292E;">  // 3. 准备一个总的金额</span></span>
<span class="line"><span style="color:#24292E;">  let money = 100</span></span>
<span class="line"><span style="color:#24292E;">while (true) {</span></span>
<span class="line"><span style="color:#24292E;">  let re </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#6F42C1;">prompt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">请您选择操作：</span></span>
<span class="line"><span style="color:#032F62;">1.存钱</span></span>
<span class="line"><span style="color:#032F62;">2.取钱</span></span>
<span class="line"><span style="color:#032F62;">3.查看余额</span></span>
<span class="line"><span style="color:#032F62;">4.退出</span></span>
<span class="line"><span style="color:#032F62;">\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2. 如果用户输入的 4 则退出循环， break  写到if 里面，没有写到switch里面， 因为4需要break退出循环</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (re </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 4. 根据输入做操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">switch</span><span style="color:#24292E;"> (re) {</span></span>
<span class="line"><span style="color:#24292E;">    case </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 存钱</span></span>
<span class="line"><span style="color:#24292E;">      let cun </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#6F42C1;">prompt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;请输入存款金额&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      money </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> money </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> cun</span></span>
<span class="line"><span style="color:#24292E;">      break</span></span>
<span class="line"><span style="color:#24292E;">      case </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 存钱</span></span>
<span class="line"><span style="color:#24292E;">      let qu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#6F42C1;">prompt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;请输入取款金额&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      money </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> money </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> qu</span></span>
<span class="line"><span style="color:#24292E;">      break</span></span>
<span class="line"><span style="color:#24292E;">      case </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 存钱</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`您的银行卡余额是\${</span><span style="color:#24292E;">money</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,107),t=[c];function r(E,y,i,d,h,g){return n(),a("div",null,t)}const u=s(e,[["render",r]]);export{A as __pageData,u as default};
