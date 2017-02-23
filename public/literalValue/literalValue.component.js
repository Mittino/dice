(function(){
  "use strict";

  angular.module("myApp")
    .component("literalValue", {
      controller: literalValueController,
      templateUrl: "literalValue/literalValue.html",
      bindings: {
        submitLiteral: '&'
      }
    });

    function literalValueController(){
      var vm = this;
    }

})();
