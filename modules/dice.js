"use strict";

const _ = require('lodash');

var data = { diceProperty: 'Keep Lowest',
  numberOfDice: 8,
  numberOfSides: 6,
  dicePropertyValue: 3 };

  var data2 = { diceProperty: 'Keep Highest',
    numberOfDice: 8,
    numberOfSides: 6,
    dicePropertyValue: 3 };

function rollDice(input){
  var newArray = [];
  var diceRoll;
  var i;
  for (i=0; i<input.numberOfDice; i++){
    diceRoll = _.random(input.numberOfSides);
    newArray.push(diceRoll);
    newArray.sort();
  }
  return {"newArray": newArray,
          "input": input
        };
}

function keepLowest(input){
  var rollResult = rollDice(input);
  var filteredArray = _.dropRight(rollResult.newArray, (input.numberOfDice - input.dicePropertyValue));
  var total = filteredArray.reduce(function(acc, val){
    return acc + val;
  });

  return {
    "input": input,
    "filteredArray": filteredArray,
    "rollResult": rollResult.newArray,
    "total": total
  };
}

function keepHighest(input){
  var rollResult = rollDice(input);
  var filteredArray = _.drop(rollResult.newArray, (input.numberOfDice - input.dicePropertyValue));
  var total = filteredArray.reduce(function(acc, val){
    return acc + val;
  });
  return {
    "input": input,
    "filteredArray": filteredArray,
    "rollResult": rollResult.newArray,
    "total": total
  };
}
//
// function explosive(input){
//
//
// }

//console.log("rollDice Result", rollDice(data));
//console.log("keep Lowest", keepLowest(data));
//console.log("keep Highest", keepHighest(data2));

// var newArray = [];
// var filteredArray;
// var diceRoll;
// var i;
// for (i=0; i<input.numberOfDice; i++){
//   diceRoll = _.random(input.numberOfSides);
//   newArray.push(diceRoll);
//   newArray.sort();
//   console.log(newArray);
// }
// } else if (input.diceProperty === 'Keep Highest'){
//     filteredArray = _.drop(newArray, (input.numberOfDice - input.dicePropertyValue));
//     console.log(filteredArray);
// } else if (input.diceProperty === 'Explosive'){
//   console.log(input);
// }
//
// var result = filteredArray.reduce(function(acc, val){
//   return acc + val;
// });
// console.log(result);
//
// res.send({data:
//   {"result": result,
//   "newArray": newArray,
//   "filteredArray": filteredArray
//   }

module.exports = {
  rollDice: rollDice,
  keepLowest: keepLowest,
  keepHighest: keepHighest
};
