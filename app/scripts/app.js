'use strict';

//angular.module('landing', ['ngCookies','ngResource','ngSanitize','ui.router','landing.controllers', 'landing.services', 'landing.filters', 'landing.directives'])
var base = "/web";
var ld = angular.module('landing', [
  'ngCookies','ngResource','ngSanitize','ui.router','landing.controllers', 
  'landing.services', 'landing.filters', 'landing.directives'])
.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
])
.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.when("", base).when("/", base);

      $stateProvider
        .state('channel', {
          url : base,
          templateUrl: 'views/blank.html',
          controller : "MainCtrl"
        })
        .state('episode', {
          url : base + "/{channelId}",
          templateUrl: 'views/blank.html',
          controller : "MainCtrl"
        })
        .state("watch", {
          url: base + "/{channelId}/{episodeId}",
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






