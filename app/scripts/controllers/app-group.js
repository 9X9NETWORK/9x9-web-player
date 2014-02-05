'use strict';

ld.controller('AppGroupCtrl', function ($scope, msoService){
  	
	msoService.get().then(function(data){
		$scope.items = data.promote;
		//$scope.$apply();
		console.log($scope.items);
	});
});
