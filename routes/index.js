var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// module.exports = router; sending the router variable from the route file
// In plain english, we are exporting from index.js file (var router = express.Router();) to app.js file (var indexRouter = require('./routes/index'))

