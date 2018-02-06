var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Running with PM2 Again 3', name: 'Jason'});
});


//crash the server
router.get('/exit', function(req, res, next){
  process.exit(1);
});

module.exports = router;
