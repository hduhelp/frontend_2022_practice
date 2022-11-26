# My JavaScript Learning Record ---Begin From Zero

## 1 . 我对JavaScript的认识

### 	1.弱类型语言

### 	2.不区分整数型和浮点数型

### 	3.双精度的64位格式



------



## 2 . 引用 .js 文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="test.js"></script>
</body>
</html>
```

### 1.尝试用math数学对象进行数学运算

​	比如Math.PI,Math.sin()

​	用console来悄悄试试

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="test.js">
    	alert(Math.PI)
    </script>
</body>
</html>
```

​	如果用这个代码的话会上面这个会弹个窗口👆

### 2.外部文件

#### 	1.字符相连

```html
<script src="main.js"></script>
```

​	把这玩意儿丢到main.js

​	main.js里面写

```javascript
alert("hello"+"world")
```

​	和VB一样加号连接两个字符串

​	main.js里直接写

```javascript
"hello",length;
```

​	可以在console里用console.log打印出来

​	只要把main.js的写成

```javascript
console.log("hello",length;)
```

## n.对于实例的学习

### 疑问：

document.getElemmentByID("demo").什么东西是怎么写法

### 1.改变

​	下方代码基本通过这个：`getElementById()`， 是一种 JavaScript HTML 	方法

```html
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>点击我！</button>
```



#### 	1.对于 html内容的改变

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript 能做什么</h2>

<p id="demo">JavaScript 能够改变 HTML 内容。</p>

<button type="button" onclick='document.getElementById("你输的id").innerHTML = "Hello JavaScript!"'>点击我！</button>

</body>
</html>

```

​	通过下方👇

```html
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>点击我！</button>
```

​	将

​	JavaScript 能够改变 HTML 内容。

​	改变为了

​	Hello JavaScript!

​	`getElementById()` 是多个 JavaScript HTML 	方法之一。

​	本例使用该方法来“查找” id="demo" 的 HTML 	元素，并把元素内容（`innerHTML`）更改为 	"Hello JavaScript"：

#### 2.对于html属性值的改变(比如改变 `<img>` 标签的 `src` 属性)

```html
![eg_bulboff](C:\Users\ASUS\Downloads\eg_bulboff.gif)<!DOCTYPE html>
<html>
<body>

<h2>JavaScript 能做什么？</h2>

<p>JavaScript 能够改变 HTML 属性值。</p>

<p>在本例中，JavaScript 改变了图像的 src 属性值。</p>

<button onclick="document.getElementById('myImage').src='/i/eg_bulbon.gif'">开灯</button>

<img id="myImage" border="0" src="/i/eg_bulboff.gif" style="text-align:center;">

<button onclick="document.getElementById('myImage').src='/i/eg_bulboff.gif'">关灯</button>

</body>
</html>
```

通过下方👇

```html
<button onclick="document.getElementById('myImage').src='/i/eg_bulbon.gif'">开灯</button>


<button onclick="document.getElementById('myImage').src='/i/eg_bulboff.gif'">关灯</button>
```

将

![](C:\Users\ASUS\Downloads\eg_bulboff.gif)

```html
<img id="myImage" border="0" src="/i/eg_bulboff.gif" style="text-align:center;">
```

的img的eg_bulboff.gif的src属性改变成了

![](C:\Users\ASUS\Downloads\eg_bulbon.gif)

思考：话说这个gif后缀和png后缀或者别的什么后缀好像都行

#### 3.对于html的css的改变（css样式改变）

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript 能够做什么</h2>

<p id="demo">JavaScript 能够改变 HTML 元素的样式。</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">
点击我！
</button>


</body>
</html> 

```

​	通过下方👇

```html
<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">
点击我！
</button>
```

fontsize将

```html
<p id="demo">JavaScript 能够改变 HTML 元素的样式。</p>
```

的字体大小调大了

#### 4.对于html的元素的隐藏（display样式改变）

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript 能够做什么</h2>

<p id="demo">JavaScript 能够隐藏 HTML 元素。</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">
点击我！
</button>


</body>
</html>

```

​	通过下方👇

```html
<button type="button" onclick="document.getElementById('demo').style.display='none'">
点击我！
</button>
```

将



```html
<p id="demo">JavaScript 能够隐藏 HTML 元素。</p>
```

id="demo"中的元素隐藏掉了

#### 5.对于html中被隐藏的元素重现（display样式改变）

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript 能够做什么</h2>

<p>JavaScript 能够显示隐藏的 HTML 元素。</p>

<p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">
点击我！
</button>

</body>
</html>

```

​	通过下方👇

```html
<button type="button" onclick="document.getElementById('demo').style.display='block'">
点击我！
</button>
```

将被隐藏的



```html
<p id="demo" style="display:none">Hello JavaScript!</p>
```

中的Hello JavaScript!重新显示出来了

### 2.插入

#### 1.在"head"中插入"javascript"

```html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>
</head>

<body>

<h2>Head 中的 JavaScript</h2>

<p id="demo">一个段落。</p>

<button type="button" onclick="myFunction()">试一试</button>

</body>
</html>

```

通过下方👇

```html
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>
</head>
```

将

```html
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>
```

插入到了<head></head>中

通过下方👇

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
```

实现把原来

```html
<p id="demo">一个段落。</p>
```

中的“一个段落”改变为"段落已被更改。"

#### 2.在"body"中插入"javascript"

```html
<!DOCTYPE html>
<html>
<body>

<h2>Body 中的 JavaScript</h2>

<p id="demo">一个段落。</p>

<button type="button" onclick="myFunction()">试一试</button>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>

</body>
</html>

```

通过下方👇

```html
<body>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>

</body>
```

将

```html
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>
```

插入到了“body"中

通过下方👇

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
```

实现把原来

```html
<p id="demo">一个段落。</p>
```

中的“一个段落”改变为"段落已被更改。"

#### 3.引用外部js文件

```html
<!DOCTYPE html>
<html>
<body>

<h2>外部 JavaScript</h2>

<p id="demo">一个段落。</p>

<button type="button" onclick="myFunction()">试一试</button>

<p>（myFunction 存储在名为 "myScript.js" 的外部文件中。）</p>

<script src="/demo/myScript.js"></script>

</body>
</html>


```

通过下方👇

```html
<script src="/demo/myScript.js"></script>
```

将外部文件中的

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
```

插入到了“body"中

通过下方👇

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
```

实现把原来

```html
<p id="demo">一个段落。</p>
```

中的“一个段落”改变为"段落已被更改。"

