var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //index sayfasina title field i olan object gonder
  res.render('index', { title: 'nodeprogramlama.com' });
});

module.exports = router;
