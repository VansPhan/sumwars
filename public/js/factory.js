"use strict";

(function() {
	angular
	.module("sumwars")
	.factory("MonsterFactory", MonsterFactoryFunction);

	MonsterFactoryFunction.$inject = ["$http"];

	function MonsterFactoryFunction($http) {
		return {
			monsters: function() {
				return $http({
					url: "/api/mons",
					method: "GET"
				})
			}
		}
	}
}());