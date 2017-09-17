const marked = require('marked');
const hljs = require('highlight.js');
const fs = require('fs');

// 配置marked
marked.setOptions({
	renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
	highlight: function (code) {
		return hljs.highlightAuto(code).value;
	}
});

module.exports = (locate) => {
	return new Promise((resolve, reject) => {
		// 从文件中获取文章内容
		fs.readFile(locate, (err, data) => {
			let content = '';
			if (err) {
				console.log(err);
			}
			if (!!data) {
				let art = data.toString();
				// js解析换行符
				art = art.replace(/\\n/g, ' \n ');
				content = marked(art);
				resolve(content);
			} else {
				resolve('');
			}
		});
	});
}