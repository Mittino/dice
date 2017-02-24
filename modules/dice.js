"use strict";

const _ = require('lodash');

function rollDice(input){
  var newArray = [];
  var diceRoll;
  for (let i=0; i<input.numberOfDice; i++){
    diceRoll = _.random(1, input.numberOfSides);
    newArray.push(diceRoll);
  }
  newArray = _.orderBy(newArray);
  var total = newArray.reduce(function(acc, val){
    return acc + val;
  });

  return {"rollResult": newArray,
          "input": input,
          "total": total
        };
}

function dropLowest(input){
  var rollResult = rollDice(input);
  var filteredArray = _.drop(rollResult.rollResult, input.dicePropertyValue);
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

function transformRaw(input){
  var expression = input.expression;
  var splitExpression = expression.split(/\s/g); //split at spaces
  var array = [];

  for (let i=0; i<splitExpression.length; i++){
    var numbers = splitExpression[i].split(/[d,k,x]/g); //split at alpha value
    var letters = splitExpression[i].split(/\d/g); //split at numeric value

    var object = {};
    for (let j=0; j<splitExpression[i].length; j++){
      var iteration = splitExpression[i];
      if(j === 0 && !isNaN(iteration[j])){
        object.numberOfDice = numbers[j];
      } else if(j === 0 && isNaN(iteration[j])){
        object.math = splitExpression[i];
      } else if(j === 1){
        object.numberOfSides = numbers[j];
      } else if(j === 2){
        object.dicePropertyValue = numbers[j];
      }
      else if(j === 3){
        object.diceProperty = letters[2];
      }
    }
    array.push(object);
    object = {};
  }
  return determineRoll(array);
}

function determineRoll(array){
  var resultArray = [];

  for (let i=0; i<array.length; i++){
    if(array[i].math){
      resultArray.push(array[i]);
    } else if (array[i].diceProperty === 'k'){
      resultArray.push(keepHighest(array[i]));
    } else if (array[i].diceProperty === 'd'){
      resultArray.push(dropLowest(array[i]));
    } else if (array[i].diceProperty === 'x'){
      resultArray.push(explosive(array[i]));
    } else if(!array[i].numberOfSides){
      array[i].total = array[i].numberOfDice;
      resultArray.push(array[i]);
    } else {
      resultArray.push(rollDice(array[i]));
    }
  }
  return resultArray;
}

module.exports = {
  rollDice: rollDice,
  dropLowest: dropLowest,
  keepHighest: keepHighest,
  explosive: explosive,
  transformRaw: transformRaw
};
