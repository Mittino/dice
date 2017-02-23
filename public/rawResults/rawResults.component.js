(function(){
  "use strict"

  angular.module("myApp")
    .component("rawResults", {
      controller: rawResultsController,
      templateUrl: "rawResults/rawResults.html",
      bindings: {
        rawResults: '<'
      }
    });

    function rawResultsController(){
      var vm = this;
      console.log(vm.rollResults);


      vm.$onChange = function(){
        console.log(vm.rollResults);
      }


    }

})();
