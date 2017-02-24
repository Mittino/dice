(function(){
  "use strict"

  angular.module("myApp")
    .component("results", {
      controller: resultsController,
      templateUrl: "results/results.html",
      bindings: {
        rollResults: '<',
      }
    });

    function resultsController(){
      var vm = this;
  
    }

})();
