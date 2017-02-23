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
    result = dice.rollDice(input); //roll dice NdX
    res.send({"result": result});
  } else if (input.diceProperty === 'Keep Lowest'){
    result = dice.keepLowest(input); //drop lowest NdXdD
    res.send({"result": result});
  } else if (input.diceProperty === 'Keep Highest'){
    result = dice.keepHighest(input); //keep highest NdXkK
    res.send({"result": result});
  }
  else if (input.diceProperty === 'Explosive'){ //explosive NdXxE
    if(input.dicePropertyValue >= input.numberOfSides){
      res.send("Explosive number must be less than the number of dice sides");
    } else if((input.numberOfSides - input.dicePropertyValue) > 10000000){ //at 10Million the response time drastically decreased - this is to prevent any server hang-ups.
      res.send('Error - Reached limit. Please enter smaller dice side or explosive number value');
    } else {result = dice.explosive(input);
    res.send({"result": result});
    }
  }
});

router.post('/raw', function(req, res, next){
  let input = req.body;
  var result = dice.transformRaw(input);
  res.send({"result": result});
});

module.exports = router;
