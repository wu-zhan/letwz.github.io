#### 表格
`<table>`标签常用属性：`cellspacing`设置单元格之间的距离，`cellpadding`设置单元格内容到单元格边的距离，`border`设置单元格边框宽度。
> 注：以上属性单位皆为px。

`<td>`标签常用属性：`colspan`设置单元格横跨的列数，`rowspan`设置单元格纵跨的行数，通常也称之为合并列与合并行。
```html
<table border="2" cellspacing="20" cellpadding="20">
	<caption>表格标题</caption>
	<thead>
	<tr>
		<th>列1</th>
		<th>列2</th>
		<th>列3</th>
		<th>列4</th>
		<th>列5</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td colspan="2" rowspan="2">元素1</td>
		<td>元素2</td>
		<td>元素3</td>
		<td>元素next</td>
	</tr>
	<tr>
		<td>元素4</td>
		<td>元素5</td>
		<td>元素6</td>
	</tr>
	</tbody>
</table>
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/20181008195147638?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
#### 表单
一个简单的表单结构，`<form>`标签属性：`action`(英译：行动)表单提交路径。`method`(英译：方法)表单提交方式，通常有`post`和`get`两种方式。
>注：说到`post`和`get`两种方式，其各自都有一些特点：
>`get`方式：表单数据通过URL中的`?`参数传递到服务器，可以在地址栏中看到提交的内容，数据长度有限制，因为URL地址长度有限（地址栏长度限制一般为2000个字符）。
>`post`方式：表单数据是通过请求传递到服务端的（数据放于请求报文的请求体中），在界面上看不到，可以提交任何类型数据（包括文件），由于界面看不见，浏览器也不会储存，所以更安全一些

```html
<form action="" method="post">
    用户名：<input type="text">
    密码：<input type="password">
    <input type="submit">
</form>
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/20181009142957797?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
###### > html4中表单内input标签
其中`<label>`标签为`input`元素定义标注。`label`元素不会向用户呈现任何特殊效果。不过在`label`元素内点击文本，就会触发此控件。
>注：`<label>`标签属性：`for`应当与相关元素的`id`属性相同。

```html
<label for="text">输入框</label>
<input type="text" name="" id="text" />
```
```html
<label for="password">密码框</label>
<input type="password" name="" id="password" />
```
```html
<label for="submit">提交</label>
<input type="submit" name="" id="submit" />
```
```html
<label for="reset">重置</label>
<input type="reset" name="" id="reset" />
```
```html
<label for="hidden">隐藏框</label>
<input type="hidden" name="" id="hidden" />
```
> 注：隐藏框，通常用作在表单内存储用户不需要知道的数据，如：id值或是限制上传文件大小（如下)等。

```html
<input type="hidden" name="MAX_FILE_SIZE" value="30000" id="hidden" />
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/2018100914311116?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
>注：js中常用api使一个元素获取焦点，获得焦点inputEle.focus()，使失去焦点inputEle.blur();
###### > html4中表单其他标签
`<textarea>`标签常用属性：`cols`设置每行中的字符数，`rows`设置文本框行数，利用css样式`"resize:none" `可以设置文本框禁止用户拉伸操作。

```html
<label for="textarea">文本框</label>
<textarea cols="30" rows="10" id="textarea"></textarea>
```
> 注：在js中，虽然用value和innerText都可以赋值，但是推荐用value赋值(如下)。

```javascript
textareaElement.value = 'a';
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/20181009143149728?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
复选框常用属性：`checked="checked"`可用于设置默认选中值。
> 在表单提交时，通常数据最小单元都是一个键值对形式，而`checked`的键对应的是`name`属性值，值对应的是`value`属性值。
```html
<input type="checkbox" name="checkbox1" value="checkbox1"  id="checkbox1">
<label for="checkbox1">复选框1</label>
<input type="checkbox" name="checkbox2" value="checkbox2"  id="checkbox2">
<label for="checkbox2">复选框2</label>
<input type="checkbox" name="checkbox3" value="checkbox3"  id="checkbox3">
<label for="checkbox3">复选框3</label>
```
单选框常用属性：`checked="checked"`可用于设置默认选中值。
> 在表单提交时，`radio`的键对应的是`name`属性值（因为单选，`radio`的`name`是相同值），值对应的是`value`属性值。
```html
<input type="radio" name="radio" value="radio1" id="radio1">
<label for="radio1">单选框1</label>
<input type="radio" name="radio" value="radio2" id="radio2">
<label for="radio2">单选框2</label>
```
下拉框，`<option>`标签常用属性：`selected="selected"`可以设置默认选中此选项。
> 注：`<option>`标签内利用css样式`display: none`可以隐藏一个选项。这样一来如“请选择”选项就无法选中了。
```html
<label for="select">单项选择列表</label>
<select name="select" id="select">
	<option value="0" style="display: none">请选择</option>
	<!-- 利用css样式display: none隐藏一个选项-->
	<option value="元素1">元素1</option>
	<option value="元素2">元素2</option>
	<option value="元素3">元素3</option>
	<!-- selected="selected"属性设置默认选中值 -->
</select>
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/20181009143302715?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
###### > 文件上传标签
文件上传标签，常用属性：`accept`校验上传文件类型（不安全的），可以写入文件后缀名或是文件的mime type值（如：`text/xml`，	`image/jpeg`等），`multiple`设置多文件上传，H5新增属性。
>在文件上传时，需要设置`<form>`标签内的`method="post"`和`enctype="multipart/form-data"`。
```html
<form action="" method="post" enctype="multipart/form-data">
<label for="file">上传</label>
<input type="file" name="" id="file" />
<input type="file" name="" id="file2" accept=".lrc,.txt" />
<!-- accept属性，可传入值可以是文件后缀名，也可以是文件的midi属性 -->
<input type="file" name="" id="file3" multiple/>
</form>
```

###### > H5新增的表单标签及属性
>新增表单标签属性ie8存在兼容问题，慎用。
```html
<!-- html5新增标签 -->
<!-- 邮箱格式输入 -->
<input type="email"><br />
<!-- 手机号格式输入 -->
<input type="tel"><br />
<!-- url格式输入 -->
<input type="url"><br />
<!-- 数字格式输入 -->
<input type="number"><br />
<!-- 搜索框 -->
<input type="search"><br />
<!-- 自由拖动滑块 -->
<input type="range"><br />
<!-- 小时分钟选择框 -->
<input type="time"><br />
<!-- 年月日选择框 -->
<input type="date"><br />
<!-- 年月选择框 -->
<input type="month"><br />
<!-- 年周选择框 -->
<input type="week"><br />
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/20181009143336592?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
设置初始值

```html
<input type="text" placeholder="初始值">
```

设置禁用属性
```html
<!-- html5新增属性 -->
<input type="text" disabled value="设置禁用属性">
```
设置只读属性
```html
<input type="text" readonly value="设置只读属性">
```
加载页面结束后自动获取焦点
```html
<input type="text" autofocus value="加载页面结束后自动获取焦点">
```
提价表单时不能为空
```html
<input type="text" required value="提价表单时不能为空">
```
用Alt + s 组合键，为此元素获取焦点
```html
<input type="text" accesskey="s" value="用Alt + s 组合键，为此元素获取焦点">
```
执行结果：
![在这里插入图片描述](https://img-blog.csdn.net/2018100914335176?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)