(function(){
  angular.module("myApp")
    .component("homeRoute", {
      controller: homeRouteController,
      templateUrl: 'homeRoute/homeRoute.html'
    });

  function homeRouteController($stateParams, $state){
    var vm = this;

    vm.$onInit = function getAdData(){
        console.log('init')
      };

    vm.changeState = function(){
      console.log("home route change state");
      $state.go('gameRoute');
    }
  }



})();
