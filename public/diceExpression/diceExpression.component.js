(function(){
  "use strict";

  angular.module("myApp")
    .component("diceExpression", {
      controller: diceExpressionController,
      templateUrl: "diceExpression/diceExpression.html"
    });

    function diceExpressionController(){
      var vm = this;
    }
})();
