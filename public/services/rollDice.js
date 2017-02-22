
angular.module("myApp")
  .service('rollService', function($http){
    var service = this;

  service.rollDice = function(){
    return $http.get('/dice/roll')
  }


  });
