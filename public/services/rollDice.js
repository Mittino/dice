
angular.module("myApp")
  .service('rollService', function($http){
    var service = this;

  service.rollDice = function(input){
    console.log(input, 'input to service');
    return $http.post('/dice/roll/', input)
  }


  });
