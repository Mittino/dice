(function(){
  angular.module("myApp")
    .component("home",{
      controller: 'homeController',
      templateUrl: 'home/home.html'
    });

  function homeController(){
    var vm = this;
  }



})();
