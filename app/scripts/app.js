'use strict';

//angular.module('landing', ['ngCookies','ngResource','ngSanitize','ui.router','landing.controllers', 'landing.services', 'landing.filters', 'landing.directives'])
var getMso = function(){
  var path = location.hostname;
  var mso = path.match(/^(.*)\.(flipr|9x9)\..*/);
  if(mso !== null){
    if(mso.length > 1){
      if(mso[1] === "www") return "9x9";
      if(mso[1] === "dev6") return "cts";
      return mso[1];
    }
  }
  return "9x9";
}
var base = "/view/";
var player;
var mso = getMso();
var search;
var lang = "zh";
//FB graph api
var fbAppId = "110847978946712";
var zeroclip;

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
    nn.global.os = os;

    $("body").addClass(os);

    if(mso!="9x9"){
        if(mso == "cts"){
            fbAppId = "1429057570658015";
        }
        if(mso == "goodtv"){
            fbAppId = "555946694494117";
        }
        if(mso == "ddtv"){
            fbAppId = "496791563769983";
        }
    }
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
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider){

      $locationProvider.html5Mode(true);
      $urlRouterProvider.when("", "/");
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|flipr-.*|market):/);
      
      $stateProvider
        .state("watchEpisode", {
          url: "/p{channelId}/{episodeId}",
          views: {
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');



