'use strict';
ld.controller('PromoteCtrl', function ($scope, $http, msoService){
    //$scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];

    msoService.get().then(function(data){
        $scope.promotionItems = data.promote;
        $scope.social = data.social;
        $scope.app = data.app[0];
        console.log($scope.app);
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
