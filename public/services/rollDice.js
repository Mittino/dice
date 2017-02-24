
angular.module("myApp")
  .service('rollService', function($http){
    var service = this;

  service.rollDice = function(input){
    return $http.post('/dice/roll/', input)
  }

  service.rawInput = function(input){
    return $http.post('/dice/raw', input)
  }


  });
