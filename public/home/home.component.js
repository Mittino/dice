(function(){
  angular.module("myApp")
    .component("home",{
      controller: homeController,
      templateUrl: 'home/home.html',
      bindings: {
        playGame: '&'
      }
    });

  function homeController(){
    var vm = this;

  }



})();
