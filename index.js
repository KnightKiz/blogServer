const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes'); 
const config = require('./config.js'); 

let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Custom-Header, Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Max-Age', 1728000);
  next();
});

routes(app);

app.listen(port, () => {
  console.log('listening on port : ' + port);
});
