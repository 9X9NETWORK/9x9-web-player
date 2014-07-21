'use strict';

ld.controller('AppGroupCtrl', function ($scope, msoService){
  	
	msoService.get().then(function(data){

		$scope.items = data.link;

		if(data.link){
			for(var i = 0; i<data.link.length; i++){

				if(data.link[i].ios == "" || jQuery.isEmptyObject(data.link[i].ios)){
					(function(num){
						setTimeout(function(){
							var $item = $("li.app-group-item").eq(num);
							$item.find(".app-item-link-group").addClass("lack-ios");
							$item.find("a.app-item-ios").removeAttr("href");
						},800);
					})(i);
				}

				if(data.link[i].android == "" || jQuery.isEmptyObject(data.link[i].android)){
					(function(num){
						setTimeout(function(){
							var $item = $("li.app-group-item").eq(num);
							$item.find(".app-item-link-group").addClass("lack-android");
							$item.find("a.app-item-android").removeAttr("href");
						},800);
					})(i);
				}
			}
		}
		// console.log($scope.items);
	});
	var getOs=function(){if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){return"ios"}else if(navigator.userAgent.match(/mobile|android|Mobile|Android/)){return"android"}else{return"web"}}
	var os = getOs();
	$scope.os = os;
});
