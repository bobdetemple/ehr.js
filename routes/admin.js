var express  = require('express');
var router   = express.Router();

//  /admin
router.get('/', function(req, res) {
  res.render('admin/index', { title: 'Express' });
});

module.exports = router;