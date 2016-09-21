"use strict";

(function() {
  angular.module('sumwars')
  .directive('monsters', function() {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/monsters.html'
    };
  })
}());
