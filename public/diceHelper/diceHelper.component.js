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

      vm.$onInit = function() {
        vm.helperForm = {};
      };

      vm.updateForm = function(){
        if (vm.helperForm.roll === 'Literal Value') {
          // reset the right ones
        } else {
        
        }
        vm.helperForm.literalValue = null;

      }

      vm.submitForm = function() {
        vm.onSubmit({input: vm.helperForm});
        vm.helperForm = {};
      }
    }
})();
