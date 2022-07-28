const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(_, res, _) {
  const nonce = res.locals.cspNonce;
  res.render('index', { title: 'Rubén Salvador - Software Engineer', nonce });
});

module.exports = router;
