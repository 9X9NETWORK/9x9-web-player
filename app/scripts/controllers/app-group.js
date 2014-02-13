'use strict';

ld.controller('AppGroupCtrl', function ($scope, msoService){
  	
	msoService.get().then(function(data){
		$scope.items = data.link;
		//$scope.$apply();
		// console.log($scope.items);
	});

	$scope.os = nn.global.os;
});
