(function(){
  "use strict";

  angular.module("myApp")
    .component("diceExpression", {
      controller: diceExpressionController,
      templateUrl: "diceExpression/diceExpression.html",
      bindings: {
        onSubmit: '&'
      }
    });

    function diceExpressionController(){
      var vm = this;
      vm.rawInput={};
    }
})();
