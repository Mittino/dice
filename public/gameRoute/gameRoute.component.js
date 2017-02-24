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
      if(input.literalValue){
        vm.rollResults = input;
        return;
      } else {
        rollService.rollDice(input.input)
        .then(function(response){
          vm.rollResults = response.data.result;
        }).catch(function(response){
          console.log("error", response);
        });
    }
  };

  vm.handleRawInput = function(input){
    rollService.rawInput(input.input)
    .then(function(response){
      vm.rawResults = response.data.result;
    }).catch(function(response){
      console.log("error", response);
    });
  }

  vm.handleLiteral = function(input){
    vm.rollResults = {};
    vm.rollResults.literalValue = input.input;
  };

  vm.handleChange = function(){
    vm.rollResults = null;
    vm.rawResults = null;
  };

  }



})();
