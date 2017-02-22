(function(){
  angular.module("myApp")
    .component("gameRoute",{
      controller: gameRouteController,
      templateUrl: 'gameRoute/gameRoute.html'
    });

  function gameRouteController(){
    var vm = this;

    vm.handleSubmit = function(input){
      console.log("submitted in game-route");
      console.log(input);
    }


  }



})();
