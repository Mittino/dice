(function(){
  "use strict";

  angular.module("myApp")
    .component("diceHelper", {
      controller: diceHelperController,
      templateUrl: "diceHelper/diceHelper.html",
      bindings: {
        onSubmit: '&'
      }
    });

    function diceHelperController(){
      var vm = this;
      vm.helperForm = {};

      vm.updateForm = function(){
        vm.helpferForm = {};
      }

    }
})();
