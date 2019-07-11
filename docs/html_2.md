#### 常用标签
值得一说的是，在进行html编写工作时为了方便和语义化，通常`<i><em>`标签会使用css样式去掉其倾斜样式，反而放一些特定的内容（如：图标文字）方便css与js的选择.
```html
<p>p标签</p>
<br /><!--换行标签，单标签，在写时注意标准写法:'br'空格'/>'-->
<pre>
		按照原始可是排列
	 yes   no
</pre>
<b>粗体</b><strong>用于xhtml粗体</strong>
<u>下划线</u><ins>用于xhtml下划线</ins>
<i>斜体</i><em>用于xhtml斜体</em>
<sub>下标</sub><sup>上标</sup>
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/20181008181214856?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
#### 图像标签
常用属性：`src`(来源)图片的地址，`alt`图形不能显示时，替换为文本， `title`鼠标悬停时显示的文字内容（通常是图片说明）
```html
<img src="" alt="" title="" />
```
#### 连接标签
常用属性：`href`连接地址，也可写入`#id`作为锚点，进行定位。
> 注：`target`常用值`_blank`在新窗口打开页面，`_self`默认属性在当前窗口打开页面。
```html
<a href="" target=""></a>
```
#### base标签
上面说到`target`属性，就不得不说一下`base`标签了。
`<base>`标签为页面上的所有链接规定默认地址或默认目标。
```html
<base href="http://www.baidu.com/" />
<base target="_blank" />
```
#### 特殊字符
html中一些特殊字符是具有特定含义的，所以直接打出来是在网页中显示不出来的，所以需要一下方式转义。

`&nbsp`//空格
`&lt`//小于号'<'
`&gt`//大于号'>'
`&amp`//'&'

#### 无序列表标签
无需列表通常会用作菜单栏、导航栏，轮播图等有相同属性样式排列的按钮的地方。
>注：使用时，通常用css`li{list-style:none;}`删除`<li>`标签前面的小点。
>注：在`<ul>`标签内，`<li>`标签外尽量不要写入其他标签。
```html
<ul>
	<li>
    	元素1
    </li>
	<li>
    	元素2
    </li>
    <li>
    	元素3
    </li>
</ul>
```
#### 有序列表标签
>注：`<ol>`标签属性：`type`(类型)可写入a,1,A,I,i,circle，分别代表了`<li>`标签前面的不同样式的序号。
```html
<ol type="i"> 
    	<!-- type = a,1,A,I,i-->
	<li>
		元素1
	</li>
	<li>
		元素2
	</li>
	<li>
		元素3
	</li>
</ol>
```
type为i和A是，执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/20181008190624730?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
#### 自定义列表
常用作赞助商列表等。
> 注：在设置三列（多列）列表时，css调节每列列表间的宽度，不要使用`margin`，直接使用`width`属性调节`<dl>`宽度即可。
```html
<dl>
	<dt>主题</dt>
    <dd>内容</dd>
    <dd>内容</dd>
    <dd>内容</dd>
</dl>
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/2018100819152760?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)