var express = require('express');
var router = express.Router();

// All routes in this file are prepended by user

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
