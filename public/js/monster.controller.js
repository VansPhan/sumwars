"use strict";

(function() {
	angular
	.module("sumwars")
	.controller("MonsterController", MonsterControllerFunction);

	MonsterControllerFunction.$inject = ["$scope", "MonsterFactory"];

	function MonsterControllerFunction($scope, MonsterFactory) {
		$scope.getMons = function() {
			MonsterFactory.monsters()
			.success(function(data) {
				$scope.mons = data.mons;
				console.log($scope.mons)
			})
			.error(function(err) {
				console.log(err)
			})
		}
	}

}())