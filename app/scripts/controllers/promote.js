'use strict';
ld.controller('PromoteCtrl', function ($scope, $http, msoService){
    //$scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];
    var getOs = function(){
      //console.log(navigator.userAgent);
      if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        return "is-ios";
      }else if(navigator.userAgent.match(/mobile|android|Mobile|Android/)){
        return "is-android";
      }else{
        return "";
      }
    }
    msoService.get().then(function(data){
        $scope.promotionItems = data.promote;
        $scope.social = data.social;
        
        var os = getOs();
        if(os === "is-android"){
            $scope.isAndroid = true;
        }
        if(os === "is-ios"){
            $scope.isIos = true;
        }
        $scope.app = data.app[0];

        if(data.promote){
            if(data.promote.length === 0){
                $("div.promote-programe-wrap, div.promote-app-wrap").hide();
            }
        }
        //$scope.$apply();
        //console.log($scope.promotionItems);
        // console.log($scope.items);
    });

    return;
    $http({
        url: "promotion.json",
        method: "GET",
        data: {}
    }).success(function(data, status, headers, config) {
        //console.log(data);
        $scope.promotionItems = data;
    }).error(function(data, status, headers, config) {
        //$scope.status = status;
    });
});
