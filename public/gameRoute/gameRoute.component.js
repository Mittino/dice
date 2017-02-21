(function(){
  angular.module("myApp")
    .component("gameRoute",{
      controller: gameRouteController,
      templateUrl: 'gameRoute/gameRoute.html'
    });

  function gameRouteController(){
    var vm = this;
  }



})();
