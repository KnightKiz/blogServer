const dbTemplate = require('../utils/DBTemplate.js');
const timeChange = require('../utils/timeChange.js');
const getContent = require('../utils/getContent.js');
const utils = require('../utils/utils.js');

module.exports = {

	// 获取首页数据
	getInitData: async () => {
		let ret = [];
		let articleState = 'select id, title, createTime, article.like, type from blog.article';
		let artRes = await dbTemplate.findAll(articleState).catch(reject => {
			console.log(reject);
		});
		ret = artRes;
		for (let i = 0; i < artRes.length; i++) {
			// 转换时间格式
			artRes[i].createTime = timeChange(artRes[i].createTime);
			// 获取评论长度
			let commentState = 'select * from blog.comment where blog.comment.article_id =' + artRes[i].id;
			let comRes = await dbTemplate.findAll(commentState).catch(reject => {
				console.log(reject);
			});
			artRes[i].commentLength = comRes.length;
		}
		return ret;
	},

	// 获取文章详情
	getSingleArticle: async (article_id) => {
		let ret = {};
		// 查找当前文章
		let artState = 'select * from blog.article where blog.article.id = ?';
		let value1 = [article_id];
		let artRes = await dbTemplate.findById(artState, value1).catch(reject => {
			console.log(reject);
		});
		// 通过地址获取文章
		artRes[0].content = await getContent(artRes[0].content);
		// 转换时间格式
		artRes[0].createTime = timeChange(artRes[0].createTime);
		ret.article = artRes[0];
		// 查找文章对应的评论
		let comState = 'select * from blog.comment where blog.comment.article_id = ?';
		let value2 = [artRes[0].id];
		let comRes = await dbTemplate.findById(comState, value2).catch(reject => {
			console.log(reject);
		});
		if (comRes) {
			comRes = utils.sortTime(comRes, 0);
			artRes[0].comments = comRes;
			console.log('comment' + JSON.stringify(comRes, null, 2));
		} else {
			artRes[0].comments = [];
		}
		// 查找每个评论对应的回复
		for (let i = 0; i < comRes.length; i++) {
			// 评论时间转换
			comRes[i].commentTime = timeChange(comRes[i].commentTime);
			let replyState = 'select * from blog.reply where blog.reply.comment_id = ?';
			let value3 = [comRes[i].id];
			let replyRes = await dbTemplate.findById(replyState, value3).catch(reject => {
				console.log(reject);
			});
			if (replyRes) {
				replyRes = replyRes.map(val => {
					val.replyTime = timeChange(val.replyTime);
					return val;
				});
				replyRes = utils.sortTime(replyRes, 1);
				comRes[i].reply = replyRes;
			} else {
				comRes[i].reply = [];
			}
		}
		return ret;
	},

	// 文章点赞
	togglePraiseArticle: async (article_id, type) => {
		// localstorge实现islike
		let state = '';
		let ret = {};
		if (type === 'add') {
			state = 'update blog.article set article.like = article.like+1 where id = ?';
		} else if (type === 'cancel') {
			state = 'update blog.article set article.like = article.like-1 where id = ?';
		}
		let value = [article_id];
		let result = await dbTemplate.update(state, value).catch(reject => {
			console.log(reject);
		});
		if (result) {
			ret.status = 0;
		} else {
			ret.status = -1;
		}
		return ret;
	},

	// 添加评论
	addComment: async (commentName, commentContent, article_id) => {
		if (!commentName || !commentContent || !article_id) {
			ret.status = -1;
			return ret;
		}
		let ret = {};
		let state = 'insert into blog.comment (article_id, name, commentTime, commentContent, `like`) values (?,?,?,?,?)';
		let commentTime = new Date();
		let values = [article_id, commentName, commentTime, commentContent, 0];
		let result = await dbTemplate.insert(state, values).catch(reject => {
			console.log(reject);
		});
		if (result) {
			ret.status = 0;
			let newState = 'select * from blog.comment where article_id = ?';
			let newData = [article_id];
			let newRes = await dbTemplate.findById(newState, newData).catch(reject => {
				console.log(reject);
			});
			ret.newComment = newRes[newRes.length-1];
			ret.newComment.commentTime = timeChange(ret.newComment.commentTime);
		} else {
			ret.status = -1;
		}
		return ret;
	},
	
	// 添加回复
	addReply: async (replyFrom, replyTo, replyContent, comment_id) => {
		let ret = {};
		if (!replyFrom || !replyTo || !replyContent || !comment_id) {
			ret.status = -1;
			return ret;
		}
		let state = 'insert into blog.reply (comment_id, replyFrom, replyTo, replyTime, replyContent) values (?,?,?,?,?)';
		let replyTime = new Date();
		let values = [comment_id, replyFrom, replyTo, replyTime, replyContent];
		let result = await dbTemplate.insert(state, values).catch(reject => {
			console.log(reject);
		});
		if (result) {
			ret.status = 0;
			let newState = 'select * from blog.reply where reply.comment_id = ?';
			let newData = [comment_id];
			let newRes = await dbTemplate.findById(newState, newData).catch(reject => {
				console.log(reject);
			});
			ret.newReply = newRes[newRes.length-1];
			ret.newReply.replyTime = timeChange(ret.newReply.replyTime);
		} else {
			ret.status = -1;
		}
		return ret;
	},

	// 评论点赞
	togglePraiseComment: async (comment_id, type) => {
		// localstorge实现islike
		let state = '';
		let ret = {};
		if (type === 'add') {
			state = 'update blog.comment set `like` = `like`+1 where id = ?';
		} else if (type === 'cancel') {
			state = 'update blog.comment set `like` = `like`-1 where id = ?';
		}
		let value = [comment_id];
		let result = await dbTemplate.update(state, value).catch(reject => {
			console.log(reject);
		});
		if (result) {
			ret.status = 0;
		} else {
			ret.status = -1;
		}
		return ret;
	}
};