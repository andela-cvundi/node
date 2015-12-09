var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hellonode', function(req, res, next) {
  res.render('hello', { title: 'Hello node' });
});

module.exports = router;
