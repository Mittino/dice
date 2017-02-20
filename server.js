'use strict';

const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join('public')));


const port = 3000;

app.listen(port, () => {
  console.log('listening on port 3000');
});


module.exports = app;
