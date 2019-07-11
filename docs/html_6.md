#### CSS 的继承性
样式的继承性总结：
[CSS中可以和不可以继承的属性](https://www.cnblogs.com/thislbq/p/5882105.html)
###### > 有继承性
与文本有关的如颜色（`color`），字号，以`text-`、`font-`、`line-`开头的都可以继承。

除上面外还有一些特殊的样式具有继承性：
元素可见性（`visibility`）列表布局属性（`list-style-type`等）光标属性（`cursor`）页面样式属性（`page`、`windows`、`orphans`）

###### > 无继承性：
盒子模型的属性（`width`、`height`、`margin` 、`border`、`padding`等），背景属性（`background`等），定位属性（`float`、`position`、`left`、`overflow`、`z-index`等），生成内容属性（`content`等），轮廓样式属性（`outline-style`等）。

在文本属性也有一些特殊的没有继承性的：
`vertical-align`：垂直文本对齐、`text-decoration`：规定添加到文本的装饰、`text-shadow`：文本阴影效果、`white-space`：空白符的处理、`unicode-bidi`：设置文本的方向。

#### background样式
`background-repeat`指定如何重复背景图像，属性：`repeat`平铺，`no-repeat`不平铺，`repeat-x`|`repeat-y`水平/垂直方向设置平铺。
```css
background-repeat: no-repeat;
```
`background-position`指定背景图像的位置，属性：`center`水平居中等。
> 注：可以传入两个参数，分别对应水平和垂直方向

```css
background-position: left bottom;
```
`background-attachment`设置背景图像是否固定，属性：`fixed`固定不动，`scroll`默认，随对象滚动。
```css
background-attachment:fixed;
```
`background`设置背景属性。属性连写，以空格为间隔，分别对应背景颜色（可省略），图片url，是否平铺，是否固定（可省略），位置。
```css
background: #ccc url("img/button.jpg") no-repeat fixed left top;
```
> 注：可以使用`rgba()`方式设置背景半透明（属于css3），如：`background-color: rgba(255,0,0,0.3)`
###### > 实现鼠标进入按钮图片切换
具体实现思路：通过快速改变背景图片的相对位置，实现鼠标进入按钮，按钮发生变化。如图：
![在这里插入图片描述](https://img-blog.csdn.net/2018101020591447?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

```css
 a{
	width:100px;
	height: 50px;
	display: block;
	background: url("img/button.jpg") no-repeat left top;
}
a:hover{
 	background-position: left bottom;
}
```
```html
<a href="javascript:;"></a>
```
###### > 实现input标签内加入小图标
实现思路：为`input`标签添加`padding-left`值，使之写入的内容右移，而左边空出的区域设置背景。
```css
input{
    background-image: url(img/timg.jpg);
    background-repeat: no-repeat;
    background-position: 2px center;
    padding-left: 20px;
    border:1px solid #000;
}
```
```html
<input type="text" name="">
```
![在这里插入图片描述](https://img-blog.csdn.net/20181010210811923?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDE4ODkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)