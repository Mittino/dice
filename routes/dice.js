'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res, next){
  res.send('get request success');
});

module.exports = router;