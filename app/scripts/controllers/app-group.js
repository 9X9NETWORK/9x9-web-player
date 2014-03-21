'use strict';

ld.controller('AppGroupCtrl', function ($scope, msoService){
  	
	msoService.get().then(function(data){
		$scope.items = data.link;
		for(var i = 0; i<data.link.length; i++){
			if(data.link[i].ios == ""){
				(function(num){
					setTimeout(function(){
						$("li.app-group-item").eq(num).find("a.app-item-ios").removeAttr("href");
					},10);
				})(i);
			}
			if(data.link[i].android == ""){
				(function(num){
					setTimeout(function(){
						$("li.app-group-item").eq(num).find("a.app-item-android").removeAttr("href");
					},10);
				})(i);
			}
		}
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
