'use strict';

//angular.module('landing', ['ngCookies','ngResource','ngSanitize','ui.router','landing.controllers', 'landing.services', 'landing.filters', 'landing.directives'])
var base = "/view/";
var player;
var mso = nn.global.mso;
var search;
var ld = angular.module('landing', [
  'ngCookies','ngResource','ngSanitize','ui.router','landing.controllers', 
  'landing.services', 'landing.filters', 'landing.directives'])
.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$viewContentLoaded', function() {
        });
    }
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){

      $locationProvider.html5Mode(true);
      $urlRouterProvider.when("", "/");

      $stateProvider
        .state('channel', {
          url : "/",
          templateUrl: 'views/blank.html',
          controller : "MainCtrl"
        })
        .state('episode', {
          url : "/p{channelId}",
          templateUrl: 'views/blank.html',
          controller : "MainCtrl"
        })
        .state("watch", {
          url: "/p{channelId}/{episodeId}",
          views: {
            'player': {
              templateUrl: 'views/player.html',
              controller:'PlayerCtrl'
            },
            'promote': {
              templateUrl: 'views/promote.html',
              controller:'PromoteCtrl'
            },
            'appGroup': {
              templateUrl: 'views/app_group.html',
              controller:'AppGroupCtrl'
            }
          }
        })
        .state('testb', {
          url: '/awert',
          templateUrl: 'views/promote.html'
        });
    }
);

angular.module('landing.controllers', []);
angular.module('landing.services', []);
angular.module('landing.filters', []);
angular.module('landing.directives', []);




