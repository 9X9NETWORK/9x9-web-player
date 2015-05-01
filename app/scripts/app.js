'use strict';

var base = "/view/";
var player;
var mso = '9x9';
var search;
var lang = "zh";

//FB graph api
var fbAppId = "110847978946712";
var zeroclip;

//var jqInit = function() {
$(document).ready(function(){

    var getOs = function(){
      //console.log(navigator.userAgent);
      if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        return "is-ios";
      } else if(navigator.userAgent.match(/mobile|android|Mobile|Android/)) {
        return "is-android";
      } else {
        return "";
      }
    }
    var os = getOs();
    nn.global.os = os;

    $("body").addClass(os);

    var url = $.url();
    var utm_content = url.param("utm_content");

    if(utm_content){

      setTimeout(function(){
          //app store url
          var appUrl = $(".app-download-appstore>a").attr("href");
          //google play url
          var gplayUrl = $(".app-download-googleplay>a").attr("href");
          if(appUrl.indexOf("?") > 0){
            appUrl += "&utm_content=" + utm_content;
          }else{
            appUrl += "?utm_content=" + utm_content;
          }
          if(gplayUrl.indexOf("?") > 0){
            gplayUrl += "&utm_content=" + utm_content;
          }else{
            gplayUrl += "?utm_content=" + utm_content;
          }
          $(".app-download-appstore>a").attr("href", appUrl);
          gplayUrl = $(".app-download-googleplay>a").attr("href", gplayUrl);
          console.log(appUrl, gplayUrl);
      }, 1100);
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

        mso = document.getElementsByTagName("body")[0].getAttribute("data-mso-name")
        console.log(mso);
        nn.global.mso = mso;
        if(mso != "9x9"){
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
    }
)
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider){

      if ($('html').hasClass('lt-ie10')){

      } else {
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

