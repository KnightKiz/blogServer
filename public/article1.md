
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

#### 无序列表
* 1
* 2
* 3

#### 有序列表
1. 1
2. 2
3. 3
> 引用


#### 插入链接
[baidu](http://www.baidu.com)

#### 插入图片
![Mou icon](http://pic.qjimage.com/alamy001/high/ak8x9m.jpg)

**粗体**

*斜体*

~~删除线~~

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

***

```js 
created () {
	// 评论取消按钮的时间接受
	this.$root.eventHub.$on('cancel', this._hideInput);
	// 配置marked
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: true,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: false,
		highlight: function (code) {
			return hljs.highlightAuto(code).value;
		}
	});
	// 进入组件将页面拉到最高点
	document.body.scrollTop = 0;
	let currentId = this.$route.params.id;
	let articles = this.$store.state.data.articles;
	articles.forEach(value => {
		if (value.id === Number(currentId)) {
			this.currentArticle = value;
		}
	});
	this._createdCommentInfo(this.currentArticle.comments);
},
```