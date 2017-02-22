(function(){
  "use strict";

  angular.module("myApp")
    .component("gameRoute",{
      controller: gameRouteController,
      templateUrl: 'gameRoute/gameRoute.html'
    });


  gameRouteController.$inject = ['rollService'];

  function gameRouteController(rollService){
    var vm = this;

    vm.handleSubmit = function(input){
      console.log("submitted in game-route");
      console.log(input);

      rollService.rollDice()
        .then(function(response){
          console.log(response);
        }).catch(function(response){
          console.log("error", response);
        });
    };


  }



})();
