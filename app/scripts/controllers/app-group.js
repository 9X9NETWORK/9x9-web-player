'use strict';

ld.controller('AppGroupCtrl', function ($scope, msoService){
  	
	msoService.get().then(function(data){
		$scope.items = data.link;
		//$scope.$apply();
		// console.log($scope.items);
	});
	var getOs = function(){
	  // console.log(navigator.userAgent);
	  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	    return "ios";
	  }else if(navigator.userAgent.match(/mobile|android|Mobile|Android/)){
	    return "android";
	  }else{
	    return "web";
	  }
	}
	var os = getOs();
	$scope.os = os;
});
