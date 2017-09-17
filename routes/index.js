const readerRouter = require('./readerRouter.js');

module.exports = (app) => {
	app.use('/', readerRouter);
};