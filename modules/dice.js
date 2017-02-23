"use strict";

const _ = require('lodash');

//var data = { diceProperty: 'Explosive',
  // numberOfDice: 3,
  // numberOfSides: 8,
  // dicePropertyValue: 1};

function rollDice(input){
  var newArray = [];
  var diceRoll;
  var i;
  for (i=0; i<input.numberOfDice; i++){
    diceRoll = _.random(input.numberOfSides);
    newArray.push(diceRoll);
    newArray.sort();
  }
  return {"rollResult": newArray,
          "input": input
        };
}

function keepLowest(input){
  var rollResult = rollDice(input);
  var filteredArray = _.dropRight(rollResult.rollResult, (input.numberOfDice - input.dicePropertyValue));
  var total = filteredArray.reduce(function(acc, val){
    return acc + val;
  });

  return {
    "input": input,
    "filteredArray": filteredArray,
    "rollResult": rollResult.rollResult,
    "total": total
  };
}

function keepHighest(input){
  var rollResult = rollDice(input);
  var filteredArray = _.drop(rollResult.rollResult, (input.numberOfDice - input.dicePropertyValue));
  var total = filteredArray.reduce(function(acc, val){
    return acc + val;
  });
  return {
    "input": input,
    "filteredArray": filteredArray,
    "rollResult": rollResult.rollResult,
    "total": total
  };
}

function explosive(input){
  var numberOfDice = input.numberOfDice;
  var filteredArray = [];
  var diceRoll;
  var count = 0;

  while(numberOfDice > 0){
    if(diceRoll < input.dicePropertyValue && numberOfDice === 0){
      numberOfDice--;
      filteredArray.push(diceRoll);
      return filteredArray;
    } else if(diceRoll < input.dicePropertyValue){
      numberOfDice--;
      filteredArray.push(diceRoll);
    } else if(diceRoll >= input.dicePropertyValue){
      diceRoll = _.random(input.numberOfSides);
      count++;
    }
      diceRoll = _.random(input.numberOfSides);
      count++;
  }
  var total = filteredArray.reduce(function(acc, val){
    return acc + val;
  });
  return {
    "input": input,
    "filteredArray": filteredArray,
    "count": count,
    "total": total
  };
}

//console.log("result", explosive(data));


module.exports = {
  rollDice: rollDice,
  keepLowest: keepLowest,
  keepHighest: keepHighest,
  explosive: explosive
};
