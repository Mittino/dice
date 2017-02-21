(function(){
  angular.module("myApp")
    .component("homeRoute", {
      controller: homeRouteController,
      templateUrl: 'homeRoute/homeRoute.html'
    });

  function homeRouteController($stateParams, $state){
    var vm = this;

    vm.changeState = function(){
      $state.go('gameRoute');
    }
  }



})();
