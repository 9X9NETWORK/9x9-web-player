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

      if ($('html').hasClass('lt-ie10')){

      }else{
          $locationProvider.html5Mode(true);
          $urlRouterProvider.when("", "/");
          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|flipr-.*|market):/);
      }


      // $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
      // var ie = (function(){
      //     var undef,
      //         v = 3,
      //         div = document.createElement('div'),
      //         all = div.getElementsByTagName('i');

      //     while (
      //         div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
      //         all[0]
      //     );

      //     return v > 4 ? v : undef;

      // }());


      // console.log($.browser.msie);
      // console.log(ie);
      
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