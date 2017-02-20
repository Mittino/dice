'use strict';

const express = require('express');
const app = express();
const path = require('path');
const dice = require('./routes/dice');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/dice', dice);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/angular', express.static('./node_modules/angular'));
app.use('/angular-ui-router', express.static('./node_modules/angular-ui-router'));

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port 3000');
});


module.exports = app;
