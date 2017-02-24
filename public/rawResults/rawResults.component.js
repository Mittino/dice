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
      vm.rawResults;
      vm.grandTotal;
      var newArray = [];

      vm.$onChanges = function(){
        var results = vm.rawResults;
        var newArray = [];
        for (let i=0; i<results.length; i++){
          if(i === 0 || i % 2 === 0){
            newArray.push(parseInt(results[i].total, 10));
          } else {
            newArray.push(results[i].math);
          }
        }
        return vm.totalNumbers(newArray);
      };


      vm.totalNumbers = function(array){
        var total = array[0];
        var number;
        var operator;
        var i;
        for (i=0; i<array.length; i++){
          if(i === 0 || i % 2 === 0 ){
            number = array[i];
            if(operator === "+"){
              total = total + number;
            } else if (operator === "-"){
              total = total - number;
            }
          } else if (i % 2 !== 0 ){
            operator = array[i];
          }
      }
      vm.grandTotal = total;
      return total;
    };



  }


})();
