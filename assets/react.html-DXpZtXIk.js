import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-6qBmPyyI.js";const l={};function p(d,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h1><h2 id="创建和嵌套组件" tabindex="-1"><a class="header-anchor" href="#创建和嵌套组件"><span>创建和嵌套组件</span></a></h2><p>React 应用程序是由 <strong>组件</strong> 组成的。一个组件是 UI（用户界面）的一部分，它拥有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。</p><p>React 组件是返回标签的 JavaScript 函数：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function MyButton() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button&gt;</span></span>
<span class="line"><span>      我是一个按钮</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function MyApp() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;欢迎来到我的应用&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;MyButton /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。</p><p><code>export default</code> 关键字指定了文件中的主要组件。</p></blockquote><h2 id="使用-jsx-编写标签" tabindex="-1"><a class="header-anchor" href="#使用-jsx-编写标签"><span>使用 JSX 编写标签</span></a></h2><p>上面所使用的标签语法被称为 <em>JSX</em>，是可选的但是大多数React项目也会使用</p><p>JSX 比 HTML 更加严格，可以留意学习JSX的要求</p><h2 id="添加样式" tabindex="-1"><a class="header-anchor" href="#添加样式"><span>添加样式</span></a></h2><p>以使用 <code>className</code> 来指定一个 CSS 的 class。它与 HTML 的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/class" target="_blank" rel="noopener noreferrer"><code>class</code></a> 属性的工作方式相同</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>&lt;img className=&quot;avatar&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后，你可以在一个单独的 CSS 文件中为它编写 CSS 规则</p><blockquote><p>React 并没有规定你如何添加 CSS 文件。最简单的方式是使用 HTML 的 <code>&lt;link&gt;</code>标签。</p></blockquote><h2 id="显示数据" tabindex="-1"><a class="header-anchor" href="#显示数据"><span>显示数据</span></a></h2><p>JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>return (</span></span>
<span class="line"><span>  &lt;h1&gt;</span></span>
<span class="line"><span>    {user.name}</span></span>
<span class="line"><span>  &lt;/h1&gt;</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以将 JSX 属性 “转义到 JavaScript”，但你必须使用大括号 <strong>而非</strong> 引号</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>const user = {</span></span>
<span class="line"><span>  name: &#39;Hedy Lamarr&#39;,</span></span>
<span class="line"><span>  imageUrl: &#39;https://i.imgur.com/yXOvdOSs.jpg&#39;,</span></span>
<span class="line"><span>  imageSize: 90,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// className=&quot;avatar&quot; 是将 &quot;avatar&quot; 字符串传递给 className，作为 CSS 的 class。但 src={user.imageUrl} 会读取 JavaScript 的 user.imageUrl 变量</span></span>
<span class="line"><span>export default function Profile() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;{user.name}&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;img</span></span>
<span class="line"><span>        className=&quot;avatar&quot;</span></span>
<span class="line"><span>        src={user.imageUrl}</span></span>
<span class="line"><span>        alt={&#39;Photo of &#39; + user.name}</span></span>
<span class="line"><span>        style={{
          width: user.imageSize,
          height: user.imageSize
        }}</span></span>
<span class="line"><span>      /&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>也可以把更为复杂的表达式放入 JSX 的大括号内，例如 字符串拼接</p></blockquote><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h2><p>React 没有特殊的语法来编写条件语句，因此你使用的就是普通的 JavaScript 代码</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>let content;</span></span>
<span class="line"><span>if (isLoggedIn) {</span></span>
<span class="line"><span>  content = &lt;AdminPanel /&gt;;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  content = &lt;LoginForm /&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>return (</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    {content}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  {isLoggedIn ? (</span></span>
<span class="line"><span>    &lt;AdminPanel /&gt;</span></span>
<span class="line"><span>  ) : (</span></span>
<span class="line"><span>    &lt;LoginForm /&gt;</span></span>
<span class="line"><span>  )}</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  {isLoggedIn &amp;&amp; &lt;AdminPanel /&gt;}</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渲染列表" tabindex="-1"><a class="header-anchor" href="#渲染列表"><span>渲染列表</span></a></h2><p>依赖 JavaScript 的特性，例如 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for" target="_blank" rel="noopener noreferrer"><code>for</code> 循环</a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">array 的 <code>map()</code> 函数</a> 来渲染组件列表</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>const products = [</span></span>
<span class="line"><span>  { title: &#39;卷心菜&#39;, isFruit: false, id: 1 },</span></span>
<span class="line"><span>  { title: &#39;大蒜&#39;, isFruit: false, id: 2 },</span></span>
<span class="line"><span>  { title: &#39;苹果&#39;, isFruit: true, id: 3 },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function ShoppingList() {</span></span>
<span class="line"><span>  const listItems = products.map(product =&gt;</span></span>
<span class="line"><span>    &lt;li</span></span>
<span class="line"><span>      key={product.id}</span></span>
<span class="line"><span>      style={{
        color: product.isFruit ? &#39;magenta&#39; : &#39;darkgreen&#39;
      }}</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      {product.title}</span></span>
<span class="line"><span>    &lt;/li&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ul&gt;{listItems}&lt;/ul&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应事件" tabindex="-1"><a class="header-anchor" href="#响应事件"><span>响应事件</span></a></h2><p>你可以通过在组件中声明 <strong>事件处理</strong> 函数来响应事件：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function MyButton(){</span></span>
<span class="line"><span>    function handleClick(){</span></span>
<span class="line"><span>        alert(&#39;You clicked me!&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        &lt;button onClick={handleClick}&gt;</span></span>
<span class="line"><span>        	点我</span></span>
<span class="line"><span>        &lt;/button&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，<code>onClick={handleClick}</code> 的结尾没有小括号！不要 <strong>调用</strong> 事件处理函数：你只需 <strong>把函数传递给事件</strong> 即可。当用户点击按钮时 React 会调用你传递的事件处理函数。</p></blockquote><h2 id="更新界面" tabindex="-1"><a class="header-anchor" href="#更新界面"><span>更新界面</span></a></h2><p>状态管理，通常你会希望你的组件 “记住” 一些信息并展示出来，比如一个按钮被点击的次数。要做到这一点，你需要在你的组件中添加 <strong>state</strong></p><p>首先，从 React 引入 <a href="https://zh-hans.react.dev/reference/react/useState" target="_blank" rel="noopener noreferrer"><code>useState</code></a>：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以在你的组件中声明一个 <strong>state 变量</strong>：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function MyButton() {</span></span>
<span class="line"><span>  const [count, setCount] = useState(0);</span></span>
<span class="line"><span>  // ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你将从 <code>useState</code> 中获得两样东西：当前的 state（<code>count</code>），以及用于更新它的函数（<code>setCount</code>）。你可以给它们起任何名字，但按照惯例会像 <code>[something, setSomething]</code> 这样为它们命名。</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function MyButton() {</span></span>
<span class="line"><span>  const [count, setCount] = useState(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handleClick() {</span></span>
<span class="line"><span>    //当你想改变 state 时，调用 setCount() 并将新的值传递给它</span></span>
<span class="line"><span>    setCount(count + 1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button onClick={handleClick}&gt;</span></span>
<span class="line"><span>      Clicked {count} times</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-hook" tabindex="-1"><a class="header-anchor" href="#使用-hook"><span>使用 Hook</span></a></h2><p>以 <code>use</code> 开头的函数被称为 <strong>Hook</strong>。<code>useState</code> 是 React 提供的一个内置 Hook。</p><p>可以在 <a href="https://zh-hans.react.dev/reference/react" target="_blank" rel="noopener noreferrer">React API 参考</a> 中找到其他内置的 Hook。你也可以通过组合现有的 Hook 来编写属于你自己的 Hook。</p><p>Hook 比普通函数更为严格。你只能在你的组件（或其他 Hook）的 <strong>顶层</strong> 调用 Hook。如果你想在一个条件或循环中使用 <code>useState</code>，请提取一个新的组件并在组件内部使用它。</p><h2 id="组件间共享数据" tabindex="-1"><a class="header-anchor" href="#组件间共享数据"><span>组件间共享数据</span></a></h2><p>我们通常需要组件间共享一份数据</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function MyApp() {</span></span>
<span class="line"><span>  const [count, setCount] = useState(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handleClick() {</span></span>
<span class="line"><span>    setCount(count + 1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;共同更新的计数器&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;MyButton count={count} onClick={handleClick} /&gt;</span></span>
<span class="line"><span>      &lt;MyButton count={count} onClick={handleClick} /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function MyButton({ count, onClick }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button onClick={onClick}&gt;</span></span>
<span class="line"><span>      点了 {count} 次</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这种方式传递的信息被称作 <strong>prop</strong>。此时 <code>MyApp</code> 组件包含了 <code>count</code> state 以及 <code>handleClick</code> 事件处理函数，并将它们作为 <strong>prop 传递给</strong> 了每个按钮。</p><h1 id="开发" tabindex="-1"><a class="header-anchor" href="#开发"><span>开发</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>安装Node.js</p><p>创建react应用</p><div class="language-w line-numbers-mode" data-highlighter="shiki" data-ext="w" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-w"><span class="line"><span>npx create-react-app my-react-app</span></span>
<span class="line"><span>cd my-react-app</span></span>
<span class="line"><span>npm start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="井字棋项目" tabindex="-1"><a class="header-anchor" href="#井字棋项目"><span>井字棋项目</span></a></h2><p>创建好了项目之后</p><h3 id="来看app-js" tabindex="-1"><a class="header-anchor" href="#来看app-js"><span>来看<code>App.js</code></span></a></h3><p><code>App.js</code> 的代码创建了一个 <strong>组件</strong>。在 React 中，组件是一段可重用代码，它通常作为 UI 界面的一部分。</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Square() {</span></span>
<span class="line"><span>  // 命名了一个函数，default 关键字表明它是文件中的主要函数。</span></span>
<span class="line"><span>  return &lt;button className=&quot;square&quot;&gt;X&lt;/button&gt; </span></span>
<span class="line"><span>    //JavaScript 的 return 关键字意味着后面的内容都作为值返回给函数的调用者。&lt;button&gt; 是一个 JSX 元素。</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建棋盘" tabindex="-1"><a class="header-anchor" href="#构建棋盘"><span>构建棋盘</span></a></h3><p>想要创建多个按钮</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Square() {</span></span>
<span class="line"><span>  return &lt;button className=&quot;square&quot;&gt;X&lt;/button&gt;&lt;button className=&quot;square&quot;&gt;X&lt;/button&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会报错</p><p>React 组件必须返回单个 JSX 元素，不能像两个按钮那样返回多个相邻的 JSX 元素。可以使用 Fragment（<code>&lt;&gt;</code> 与 <code>&lt;/&gt;</code>）包裹多个相邻的 JSX 元素，如下所示：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Square() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;button className=&quot;square&quot;&gt;X&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button className=&quot;square&quot;&gt;X&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后需要9个方块</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Board() {//名称更改为 Board </span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;1&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;2&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;3&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;4&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;5&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;6&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;7&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;8&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button className=&quot;square&quot;&gt;9&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是样式还没渲染好，加上样式</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-css"><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.board-row</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">flex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  justify-content: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.square</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">24</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-weight: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">bold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">333</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">f9f9f9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">ddd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border-radius: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  cursor: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">pointer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transition: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> ease</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.square</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:hover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">e6f7ff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">1890ff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.square</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">d6e4ff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">2b8aef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">scale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.95</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.board</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">flex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  flex-direction: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">column</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  align-items: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">ccc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border-radius: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  box-shadow: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> rgba</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">36</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">333</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  text-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin-bottom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过props传递数据" tabindex="-1"><a class="header-anchor" href="#通过props传递数据"><span>通过props传递数据</span></a></h3><p>当用户单击方块时，我们要将方块的值从空更改为“X”，这样会不会是使用一个复用的组件提供他们调用就好了呢？</p><p>React 的组件架构可以创建可重用的组件，以避免混乱、重复的代码。</p><p>如下面的代码：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function Square({ value }) {</span></span>
<span class="line"><span>  return &lt;button className=&quot;square&quot;&gt;{value}&lt;/button&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;1&quot; /&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;2&quot; /&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;3&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;4&quot; /&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;5&quot; /&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;6&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;7&quot; /&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;8&quot; /&gt;</span></span>
<span class="line"><span>        &lt;Square value=&quot;9&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建一个具有交互性的组件" tabindex="-1"><a class="header-anchor" href="#创建一个具有交互性的组件"><span>创建一个具有交互性的组件</span></a></h3><p>当你单击它的时候，<code>Square</code> 组件需要显示“X”。在 <code>Square</code> 内部声明一个名为 <code>handleClick</code> 的函数。然后，将 <code>onClick</code> 添加到由 <code>Square</code> 返回的 JSX 元素的 button 的 props 中：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function Square({ value }) {</span></span>
<span class="line"><span>  function handleClick() {</span></span>
<span class="line"><span>    console.log(&#39;clicked!&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button</span></span>
<span class="line"><span>      className=&quot;square&quot;</span></span>
<span class="line"><span>      onClick={handleClick}</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们希望 Square 组件能够“记住”它被单击过，并用“X”填充它。为了“记住”一些东西，组件使用 <em><strong>state</strong></em>。</p><p>使用后如下：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square() {</span></span>
<span class="line"><span>  const [value, setValue] = useState(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handleClick() {</span></span>
<span class="line"><span>    setValue(&#39;X&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button</span></span>
<span class="line"><span>      className=&quot;square&quot;</span></span>
<span class="line"><span>      onClick={handleClick}</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>        &lt;Square /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过了一下基础的知识之后，我们就要：</p><h2 id="完成这个游戏" tabindex="-1"><a class="header-anchor" href="#完成这个游戏"><span>完成这个游戏！！</span></a></h2><p>我们现在有了棋盘的基本模块了，要实现完整的游戏：在需要在棋盘上交替放置“X”和“O”，并且需要一种确定获胜者的方法</p><h3 id="状态提升" tabindex="-1"><a class="header-anchor" href="#状态提升"><span>状态提升</span></a></h3><p>目前，每个 <code>Square</code> 组件都维护着游戏 state 的一部分。要检查井字棋游戏中的赢家，<code>Board</code> 需要以某种方式知道 9 个 <code>Square</code> 组件中每个组件的 state。</p><p><strong>要从多个子组件收集数据，或让两个子组件相互通信，请改为在其父组件中声明共享 state。父组件可以通过 props 将该 state 传回给子组件。这使子组件彼此同步并与其父组件保持同步。</strong></p><p>重构 React 组件时，将状态提升到父组件中</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square({ value }) {</span></span>
<span class="line"><span>  return &lt;button className=&quot;square&quot;&gt;{value}&lt;/button&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  const [squares, setSquares] = useState(Array(9).fill(null));</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[0]} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[1]} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[2]} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[3]} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[4]} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[5]} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[6]} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[7]} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[8]} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在，每个 Square 都会收到一个 <code>value</code> props，对于空方块，该 props 将是 <code>&#39;X&#39;</code>、<code>&#39;O&#39;</code> 或 <code>null</code>。</p><p>下面创建点击事件，点击方块实现赋值</p><p>调用函数</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function Square({ value, onSquareClick }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button className=&quot;square&quot; onClick={onSquareClick}&gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>JavaScript 支持 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer">闭包</a>，这意味着内部函数（例如 <code>handleClick</code>）可以访问外部函数（例如 <code>Board</code>）中定义的变量和函数。<code>handleClick</code> 函数可以读取 <code>squares</code> state 并调用 <code>setSquares</code> 方法，因为它们都是在 <code>Board</code> 函数内部定义的。</p></blockquote><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square({ value, onSquareClick }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button className=&quot;square&quot; onClick={onSquareClick}&gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  const [squares, setSquares] = useState(Array(9).fill(null));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handleClick(i) {</span></span>
<span class="line"><span>    const nextSquares = squares.slice(); //调用了 .slice() 来创建 squares 数组的副本</span></span>
<span class="line"><span>    nextSquares[i] = &#39;X&#39;;</span></span>
<span class="line"><span>    setSquares(nextSquares);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[0]} onSquareClick={() =&gt; handleClick(0)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[1]} onSquareClick={() =&gt; handleClick(1)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[2]} onSquareClick={() =&gt; handleClick(2)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[3]} onSquareClick={() =&gt; handleClick(3)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[4]} onSquareClick={() =&gt; handleClick(4)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[5]} onSquareClick={() =&gt; handleClick(5)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[6]} onSquareClick={() =&gt; handleClick(6)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[7]} onSquareClick={() =&gt; handleClick(7)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[8]} onSquareClick={() =&gt; handleClick(8)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们在 <code>Board</code> 组件中处理 state， <code>Board</code> 父组件将 props 传递给 <code>Square</code> 子组件，以便它们可以正确显示。</p><h3 id="交替落子" tabindex="-1"><a class="header-anchor" href="#交替落子"><span>交替落子</span></a></h3><p>每次玩家落子时，<code>xIsNext</code>（一个布尔值）将被翻转以确定下一个玩家，游戏 state 将被保存。你将更新 <code>Board</code> 的 <code>handleClick</code> 函数以翻转 <code>xIsNext</code> 的值：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  const [xIsNext, setXIsNext] = useState(true);</span></span>
<span class="line"><span>  const [squares, setSquares] = useState(Array(9).fill(null));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handleClick(i) {</span></span>
<span class="line"><span>    const nextSquares = squares.slice();</span></span>
<span class="line"><span>    if (xIsNext) {</span></span>
<span class="line"><span>      nextSquares[i] = &quot;X&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      nextSquares[i] = &quot;O&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    setSquares(nextSquares);</span></span>
<span class="line"><span>    setXIsNext(!xIsNext);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要注意方块的覆盖问题 就是要做一个判断</p><p>完整代码如下：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square({value, onSquareClick}) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button className=&quot;square&quot; onClick={onSquareClick}&gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  const [xIsNext, setXIsNext] = useState(true);</span></span>
<span class="line"><span>  const [squares, setSquares] = useState(Array(9).fill(null));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handleClick(i) {</span></span>
<span class="line"><span>    if (squares[i]) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const nextSquares = squares.slice();</span></span>
<span class="line"><span>    if (xIsNext) {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;X&#39;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;O&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    setSquares(nextSquares);</span></span>
<span class="line"><span>    setXIsNext(!xIsNext);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[0]} onSquareClick={() =&gt; handleClick(0)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[1]} onSquareClick={() =&gt; handleClick(1)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[2]} onSquareClick={() =&gt; handleClick(2)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[3]} onSquareClick={() =&gt; handleClick(3)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[4]} onSquareClick={() =&gt; handleClick(4)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[5]} onSquareClick={() =&gt; handleClick(5)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[6]} onSquareClick={() =&gt; handleClick(6)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[7]} onSquareClick={() =&gt; handleClick(7)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[8]} onSquareClick={() =&gt; handleClick(8)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="宣布获胜者" tabindex="-1"><a class="header-anchor" href="#宣布获胜者"><span>宣布获胜者</span></a></h3><p>现在你可以轮流对战了，接下来我们应该显示游戏何时获胜。为此，你将添加一个名为 <code>calculateWinner</code> 的辅助函数用来判断是否获胜</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  //...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function calculateWinner(squares) {</span></span>
<span class="line"><span>  const lines = [</span></span>
<span class="line"><span>    [0, 1, 2],</span></span>
<span class="line"><span>    [3, 4, 5],</span></span>
<span class="line"><span>    [6, 7, 8],</span></span>
<span class="line"><span>    [0, 3, 6],</span></span>
<span class="line"><span>    [1, 4, 7],</span></span>
<span class="line"><span>    [2, 5, 8],</span></span>
<span class="line"><span>    [0, 4, 8],</span></span>
<span class="line"><span>    [2, 4, 6]</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  for (let i = 0; i &lt; lines.length; i++) {</span></span>
<span class="line"><span>    const [a, b, c] = lines[i];</span></span>
<span class="line"><span>    if (squares[a] &amp;&amp; squares[a] === squares[b] &amp;&amp; squares[a] === squares[c]) {</span></span>
<span class="line"><span>      return squares[a];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过将辅助函数放在最后</p></blockquote><p>还有加上让执行这个函数以及显示玩家获胜的信息，完整代码如下：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square({value, onSquareClick}) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button className=&quot;square&quot; onClick={onSquareClick}&gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Board() {</span></span>
<span class="line"><span>  const [xIsNext, setXIsNext] = useState(true);</span></span>
<span class="line"><span>  const [squares, setSquares] = useState(Array(9).fill(null));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handleClick(i) {</span></span>
<span class="line"><span>    if (calculateWinner(squares) || squares[i]) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const nextSquares = squares.slice();</span></span>
<span class="line"><span>    if (xIsNext) {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;X&#39;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;O&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    setSquares(nextSquares);</span></span>
<span class="line"><span>    setXIsNext(!xIsNext);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const winner = calculateWinner(squares);</span></span>
<span class="line"><span>  let status;</span></span>
<span class="line"><span>  if (winner) {</span></span>
<span class="line"><span>    status = &#39;Winner: &#39; + winner;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    status = &#39;Next player: &#39; + (xIsNext ? &#39;X&#39; : &#39;O&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;status&quot;&gt;{status}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[0]} onSquareClick={() =&gt; handleClick(0)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[1]} onSquareClick={() =&gt; handleClick(1)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[2]} onSquareClick={() =&gt; handleClick(2)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[3]} onSquareClick={() =&gt; handleClick(3)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[4]} onSquareClick={() =&gt; handleClick(4)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[5]} onSquareClick={() =&gt; handleClick(5)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[6]} onSquareClick={() =&gt; handleClick(6)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[7]} onSquareClick={() =&gt; handleClick(7)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[8]} onSquareClick={() =&gt; handleClick(8)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function calculateWinner(squares) {</span></span>
<span class="line"><span>  const lines = [</span></span>
<span class="line"><span>    [0, 1, 2],</span></span>
<span class="line"><span>    [3, 4, 5],</span></span>
<span class="line"><span>    [6, 7, 8],</span></span>
<span class="line"><span>    [0, 3, 6],</span></span>
<span class="line"><span>    [1, 4, 7],</span></span>
<span class="line"><span>    [2, 5, 8],</span></span>
<span class="line"><span>    [0, 4, 8],</span></span>
<span class="line"><span>    [2, 4, 6],</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  for (let i = 0; i &lt; lines.length; i++) {</span></span>
<span class="line"><span>    const [a, b, c] = lines[i];</span></span>
<span class="line"><span>    if (squares[a] &amp;&amp; squares[a] === squares[b] &amp;&amp; squares[a] === squares[c]) {</span></span>
<span class="line"><span>      return squares[a];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加时间旅行" tabindex="-1"><a class="header-anchor" href="#添加时间旅行"><span>添加时间旅行</span></a></h2><p>作为最后的练习，让我们能够“回到”到游戏中之前的动作。</p><h3 id="存储落子历史" tabindex="-1"><a class="header-anchor" href="#存储落子历史"><span>存储落子历史</span></a></h3><p>之前创造的数组的副本就是为了时间旅行做准备的</p><p>所以创造一个<code>history</code> 的数组</p><h3 id="再一次-状态提升" tabindex="-1"><a class="header-anchor" href="#再一次-状态提升"><span>再一次“状态提升”</span></a></h3><p>现在将编写一个名为 <code>Game</code> 的新顶级组件来显示过去的着法列表。这就是放置包含整个游戏历史的 <code>history</code> state 的地方。</p><p>将 <code>history</code> state 放入 <code>Game</code> 组件将使你可以从其 <code>Board</code> 子组件中删除 <code>squares</code> state。</p><p>首先，添加一个带有 <code>export default</code> 的 <code>Game</code> 组件。让它渲染 <code>Board</code> 组件和一些标签：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>function Board() {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Game() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;game&quot;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-board&quot;&gt;</span></span>
<span class="line"><span>        &lt;Board /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-info&quot;&gt;</span></span>
<span class="line"><span>        &lt;ol&gt;{/*TODO*/}&lt;/ol&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向 <code>Game</code> 组件添加一些 state 以跟踪下一个玩家和落子历史：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Game() {</span></span>
<span class="line"><span>  const [xIsNext, setXIsNext] = useState(true);</span></span>
<span class="line"><span>  const [history, setHistory] = useState([Array(9).fill(null)]);</span></span>
<span class="line"><span>  const currentSquares = history[history.length - 1];</span></span>
<span class="line"><span>  // ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，在 <code>Game</code> 组件中创建一个 <code>handlePlay</code> 函数，<code>Board</code> 组件将调用该函数来更新游戏。将 <code>xIsNext</code>、<code>currentSquares</code> 和 <code>handlePlay</code> 作为 props 传递给 <code>Board</code> 组件：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>export default function Game() {</span></span>
<span class="line"><span>  const [xIsNext, setXIsNext] = useState(true);</span></span>
<span class="line"><span>  const [history, setHistory] = useState([Array(9).fill(null)]);</span></span>
<span class="line"><span>  const currentSquares = history[history.length - 1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handlePlay(nextSquares) {</span></span>
<span class="line"><span>    // TODO</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;game&quot;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-board&quot;&gt;</span></span>
<span class="line"><span>        &lt;Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /&gt;</span></span>
<span class="line"><span>        //...</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码：</p><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square({ value, onSquareClick }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button className=&quot;square&quot; onClick={onSquareClick}&gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Board({ xIsNext, squares, onPlay }) {</span></span>
<span class="line"><span>  function handleClick(i) {</span></span>
<span class="line"><span>    if (calculateWinner(squares) || squares[i]) {</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const nextSquares = squares.slice()</span></span>
<span class="line"><span>    if (xIsNext) {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;X&#39;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;O&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    onPlay(nextSquares)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const winner = calculateWinner(squares)</span></span>
<span class="line"><span>  let status</span></span>
<span class="line"><span>  if (winner) {</span></span>
<span class="line"><span>    status = &#39;Winner: &#39; + winner</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    status = &#39;Next player: &#39; + (xIsNext ? &#39;X&#39; : &#39;O&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;status&quot;&gt;{status}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[0]} onSquareClick={() =&gt; handleClick(0)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[1]} onSquareClick={() =&gt; handleClick(1)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[2]} onSquareClick={() =&gt; handleClick(2)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[3]} onSquareClick={() =&gt; handleClick(3)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[4]} onSquareClick={() =&gt; handleClick(4)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[5]} onSquareClick={() =&gt; handleClick(5)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[6]} onSquareClick={() =&gt; handleClick(6)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[7]} onSquareClick={() =&gt; handleClick(7)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[8]} onSquareClick={() =&gt; handleClick(8)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Game() {</span></span>
<span class="line"><span>  const [xIsNext, setXIsNext] = useState(true)</span></span>
<span class="line"><span>  const [history, setHistory] = useState([Array(9).fill(null)])</span></span>
<span class="line"><span>  const currentSquares = history[history.length - 1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handlePlay(nextSquares) {</span></span>
<span class="line"><span>    setHistory([...history, nextSquares])</span></span>
<span class="line"><span>    setXIsNext(!xIsNext)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;game&quot;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-board&quot;&gt;</span></span>
<span class="line"><span>        &lt;Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-info&quot;&gt;</span></span>
<span class="line"><span>        &lt;ol&gt;{/*TODO*/}&lt;/ol&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function calculateWinner(squares) {</span></span>
<span class="line"><span>  const lines = [</span></span>
<span class="line"><span>    [0, 1, 2],</span></span>
<span class="line"><span>    [3, 4, 5],</span></span>
<span class="line"><span>    [6, 7, 8],</span></span>
<span class="line"><span>    [0, 3, 6],</span></span>
<span class="line"><span>    [1, 4, 7],</span></span>
<span class="line"><span>    [2, 5, 8],</span></span>
<span class="line"><span>    [0, 4, 8],</span></span>
<span class="line"><span>    [2, 4, 6],</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>  for (let i = 0; i &lt; lines.length; i++) {</span></span>
<span class="line"><span>    const [a, b, c] = lines[i]</span></span>
<span class="line"><span>    if (squares[a] &amp;&amp; squares[a] === squares[b] &amp;&amp; squares[a] === squares[c]) {</span></span>
<span class="line"><span>      return squares[a]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示过去的落子" tabindex="-1"><a class="header-anchor" href="#显示过去的落子"><span>显示过去的落子</span></a></h3><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square({ value, onSquareClick }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button className=&quot;square&quot; onClick={onSquareClick}&gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Board({ xIsNext, squares, onPlay }) {</span></span>
<span class="line"><span>  function handleClick(i) {</span></span>
<span class="line"><span>    if (calculateWinner(squares) || squares[i]) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const nextSquares = squares.slice();</span></span>
<span class="line"><span>    if (xIsNext) {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;X&#39;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;O&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    onPlay(nextSquares);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const winner = calculateWinner(squares);</span></span>
<span class="line"><span>  let status;</span></span>
<span class="line"><span>  if (winner) {</span></span>
<span class="line"><span>    status = &#39;Winner: &#39; + winner;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    status = &#39;Next player: &#39; + (xIsNext ? &#39;X&#39; : &#39;O&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;status&quot;&gt;{status}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[0]} onSquareClick={() =&gt; handleClick(0)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[1]} onSquareClick={() =&gt; handleClick(1)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[2]} onSquareClick={() =&gt; handleClick(2)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[3]} onSquareClick={() =&gt; handleClick(3)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[4]} onSquareClick={() =&gt; handleClick(4)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[5]} onSquareClick={() =&gt; handleClick(5)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[6]} onSquareClick={() =&gt; handleClick(6)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[7]} onSquareClick={() =&gt; handleClick(7)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[8]} onSquareClick={() =&gt; handleClick(8)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Game() {</span></span>
<span class="line"><span>  const [xIsNext, setXIsNext] = useState(true);</span></span>
<span class="line"><span>  const [history, setHistory] = useState([Array(9).fill(null)]);</span></span>
<span class="line"><span>  const currentSquares = history[history.length - 1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handlePlay(nextSquares) {</span></span>
<span class="line"><span>    setHistory([...history, nextSquares]);</span></span>
<span class="line"><span>    setXIsNext(!xIsNext);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function jumpTo(nextMove) {</span></span>
<span class="line"><span>    // TODO</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const moves = history.map((squares, move) =&gt; {</span></span>
<span class="line"><span>    let description;</span></span>
<span class="line"><span>    if (move &gt; 0) {</span></span>
<span class="line"><span>      description = &#39;Go to move #&#39; + move;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      description = &#39;Go to game start&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;li&gt;</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; jumpTo(move)}&gt;{description}&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;game&quot;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-board&quot;&gt;</span></span>
<span class="line"><span>        &lt;Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-info&quot;&gt;</span></span>
<span class="line"><span>        &lt;ol&gt;{moves}&lt;/ol&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function calculateWinner(squares) {</span></span>
<span class="line"><span>  const lines = [</span></span>
<span class="line"><span>    [0, 1, 2],</span></span>
<span class="line"><span>    [3, 4, 5],</span></span>
<span class="line"><span>    [6, 7, 8],</span></span>
<span class="line"><span>    [0, 3, 6],</span></span>
<span class="line"><span>    [1, 4, 7],</span></span>
<span class="line"><span>    [2, 5, 8],</span></span>
<span class="line"><span>    [0, 4, 8],</span></span>
<span class="line"><span>    [2, 4, 6],</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  for (let i = 0; i &lt; lines.length; i++) {</span></span>
<span class="line"><span>    const [a, b, c] = lines[i];</span></span>
<span class="line"><span>    if (squares[a] &amp;&amp; squares[a] === squares[b] &amp;&amp; squares[a] === squares[c]) {</span></span>
<span class="line"><span>      return squares[a];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现时间旅行" tabindex="-1"><a class="header-anchor" href="#实现时间旅行"><span>实现时间旅行</span></a></h3><div class="language-react line-numbers-mode" data-highlighter="shiki" data-ext="react" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-react"><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Square({ value, onSquareClick }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;button className=&quot;square&quot; onClick={onSquareClick}&gt;</span></span>
<span class="line"><span>      {value}</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Board({ xIsNext, squares, onPlay }) {</span></span>
<span class="line"><span>  function handleClick(i) {</span></span>
<span class="line"><span>    if (calculateWinner(squares) || squares[i]) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const nextSquares = squares.slice();</span></span>
<span class="line"><span>    if (xIsNext) {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;X&#39;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      nextSquares[i] = &#39;O&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    onPlay(nextSquares);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const winner = calculateWinner(squares);</span></span>
<span class="line"><span>  let status;</span></span>
<span class="line"><span>  if (winner) {</span></span>
<span class="line"><span>    status = &#39;Winner: &#39; + winner;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    status = &#39;Next player: &#39; + (xIsNext ? &#39;X&#39; : &#39;O&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;status&quot;&gt;{status}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[0]} onSquareClick={() =&gt; handleClick(0)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[1]} onSquareClick={() =&gt; handleClick(1)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[2]} onSquareClick={() =&gt; handleClick(2)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[3]} onSquareClick={() =&gt; handleClick(3)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[4]} onSquareClick={() =&gt; handleClick(4)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[5]} onSquareClick={() =&gt; handleClick(5)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;board-row&quot;&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[6]} onSquareClick={() =&gt; handleClick(6)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[7]} onSquareClick={() =&gt; handleClick(7)} /&gt;</span></span>
<span class="line"><span>        &lt;Square value={squares[8]} onSquareClick={() =&gt; handleClick(8)} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Game() {</span></span>
<span class="line"><span>  const [history, setHistory] = useState([Array(9).fill(null)]);</span></span>
<span class="line"><span>  const [currentMove, setCurrentMove] = useState(0);</span></span>
<span class="line"><span>  const xIsNext = currentMove % 2 === 0;</span></span>
<span class="line"><span>  const currentSquares = history[currentMove];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function handlePlay(nextSquares) {</span></span>
<span class="line"><span>    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];</span></span>
<span class="line"><span>    setHistory(nextHistory);</span></span>
<span class="line"><span>    setCurrentMove(nextHistory.length - 1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function jumpTo(nextMove) {</span></span>
<span class="line"><span>    setCurrentMove(nextMove);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const moves = history.map((squares, move) =&gt; {</span></span>
<span class="line"><span>    let description;</span></span>
<span class="line"><span>    if (move &gt; 0) {</span></span>
<span class="line"><span>      description = &#39;Go to move #&#39; + move;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      description = &#39;Go to game start&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;li key={move}&gt;</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; jumpTo(move)}&gt;{description}&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;game&quot;&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-board&quot;&gt;</span></span>
<span class="line"><span>        &lt;Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div className=&quot;game-info&quot;&gt;</span></span>
<span class="line"><span>        &lt;ol&gt;{moves}&lt;/ol&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function calculateWinner(squares) {</span></span>
<span class="line"><span>  const lines = [</span></span>
<span class="line"><span>    [0, 1, 2],</span></span>
<span class="line"><span>    [3, 4, 5],</span></span>
<span class="line"><span>    [6, 7, 8],</span></span>
<span class="line"><span>    [0, 3, 6],</span></span>
<span class="line"><span>    [1, 4, 7],</span></span>
<span class="line"><span>    [2, 5, 8],</span></span>
<span class="line"><span>    [0, 4, 8],</span></span>
<span class="line"><span>    [2, 4, 6],</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  for (let i = 0; i &lt; lines.length; i++) {</span></span>
<span class="line"><span>    const [a, b, c] = lines[i];</span></span>
<span class="line"><span>    if (squares[a] &amp;&amp; squares[a] === squares[b] &amp;&amp; squares[a] === squares[c]) {</span></span>
<span class="line"><span>      return squares[a];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后再来个加强版的如下：</p>`,125)])])}const r=n(l,[["render",p]]),v=JSON.parse('{"path":"/studyNote/react.html","title":"基础","lang":"zh-CN","frontmatter":{"description":"基础 创建和嵌套组件 React 应用程序是由 组件 组成的。一个组件是 UI（用户界面）的一部分，它拥有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。 React 组件是返回标签的 JavaScript 函数： React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。 export default 关键字指定了文件中的主...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KlayPeter\\",\\"url\\":\\"https://github.com/KlayPeter\\"}]}"],["meta",{"property":"og:url","content":"https://klaypeter.github.io/learning-share/studyNote/react.html"}],["meta",{"property":"og:site_name","content":"KlayPeter的学习博客"}],["meta",{"property":"og:title","content":"基础"}],["meta",{"property":"og:description","content":"基础 创建和嵌套组件 React 应用程序是由 组件 组成的。一个组件是 UI（用户界面）的一部分，它拥有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。 React 组件是返回标签的 JavaScript 函数： React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。 export default 关键字指定了文件中的主..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":14.73,"words":4419},"filePathRelative":"studyNote/react.md","autoDesc":true}');export{r as comp,v as data};
