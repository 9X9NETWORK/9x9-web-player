'use strict';
ld.controller('PromoteCtrl', function ($scope, $http){
    //$scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];
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
