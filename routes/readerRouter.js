const express = require('express');
const router = express.Router();
const readerController = require('../controllers/readerController.js');

router.get('/api/initData', (req, res, next) => {
	readerController.getInitData().then(results => {
		if (!!results) {
			res.send(results);
		}
	});
});

router.get('/api/article', (req, res ,next) => {
	readerController.getSingleArticle(req.query.article_id).then(results => {
		if (!!results) {
			res.send(results);
		}
	})
});

router.post('/api/togglePraiseArticle', (req, res, next) => {
	readerController.togglePraiseArticle(req.body.article_id, req.body.type).then(results => {
		if (!!results) {
			res.send(results);
		}
	});
});

router.post('/api/addComment', (req, res, next) => {
	readerController.addComment(req.body.commentName, req.body.commentContent, req.body.article_id).then(results => {
		if (!!results) {
			res.send(results);
		}
	});
});

router.post('/api/addReply', (req, res, next) => {
	readerController.addReply(req.body.replyFrom, req.body.replyTo, req.body.replyContent, req.body.comment_id).then(results => {
		if (!!results) {
			res.send(results);
		}
	});
});

router.post('/api/togglePraiseComment', (req, res, next) => {
	readerController.togglePraiseComment(req.body.comment_id, req.body.type).then(results => {
		if (!!results) {
			res.send(results);
		}
	});
});

module.exports = router;