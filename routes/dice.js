'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const _ = require('lodash');
const dice = require('../modules/dice.js');

router.post('/roll', function(req, res, next){
  let input = req.body;
  var result;

  if(!input.diceProperty){
    result = dice.rollDice(input);
    res.send({"result": result});
  } else if (input.diceProperty === 'Keep Lowest'){
    result = dice.keepLowest(input);
    res.send({"result": result});
  } else if (input.diceProperty === 'Keep Highest'){
    result = dice.keepHighest(input);
    res.send({"result": result});
  }
  //else if (input.diceProperty === 'Explosive'){
  //   console.log(input);
  // }
  //

});

module.exports = router;
