'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const _ = require('lodash');

router.post('/roll', function(req, res, next){
  let input = req.body;
  console.log(input);
  var newArray = [];
  var diceRoll;
  var i;
  for (i=0; i<input.numberOfDice; i++){
      diceRoll = _.random(input.numberOfSides);
      newArray.push(diceRoll);
      newArray.sort();
      console.log(newArray);
  } if (input.diceProperty === 'Keep Lowest'){
    newArray.sort();
    newArray = _.drop(newArray, input.dicePropertyValue);
    console.log(newArray);
  } else if (input.diceProperty === 'Keep Highest'){
      newArray = _.drop(newArray, (input.numberOfDice - input.dicePropertyValue));
      console.log(newArray);
  }

  var result = newArray.reduce(function(acc, val){
  return acc + val;
  });
  console.log(result);

  res.send({"data": result});
});

module.exports = router;
