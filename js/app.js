
(function () {
	'use strict';
	

	angular.module('LunchCheck', [])

	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.name = "";
		$scope.message = "";

		
		$scope.CheckIfTooMuch = function(name){

			var array = $scope.name.split(',');
				
				if (array == "" || array == null) {
					
					$scope.message = "Please enter data first";
				} else{
						if (array.length<= 3) {

						$scope.message = "Enjoy!";

					} else {

					$scope.message = "Too much!";

					}
				}
				

			};

	};
			
	
})();