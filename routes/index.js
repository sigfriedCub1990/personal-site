const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(_, res, _) {
  res.render('index', { title: 'Rubén Salvador - Software Engineer' });
});

module.exports = router;
