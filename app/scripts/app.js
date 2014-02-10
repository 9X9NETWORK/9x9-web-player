'use strict';

//angular.module('landing', ['ngCookies','ngResource','ngSanitize','ui.router','landing.controllers', 'landing.services', 'landing.filters', 'landing.directives'])
var base = "/view/";
var player;
var mso = nn.global.mso;
var search;

mso = "cts";
nn.global.mso = mso;
$(document).ready(function(){
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
    var os = getOs();
    //console.log(os);
    $("body").addClass(os);
});
var ld = angular.module('landing', [
  'ngCookies','ngResource','ngSanitize','ui.router','landing.controllers', 
  'landing.services', 'landing.filters', 'landing.directives'])
.run(function() {
        // $rootScope.$state = $state;
        // $rootScope.$stateParams = $stateParams;

        // $rootScope.$on('$viewContentLoaded', function() {
        // });
    }
)
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
        .state("watchEpisode", {
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
        });
    }
);

angular.module('landing.controllers', []);
angular.module('landing.services', []);
angular.module('landing.filters', []);
angular.module('landing.directives', []);




