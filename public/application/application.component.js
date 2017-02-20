(function(){

  angular.module("myApp")
    .component("application", {
      controller: ApplicationController,
      templateUrl:"./application/application.html"
    });

    function ApplicationController(){
      var vm = this;
    }

})();
