'use strict';
(function(e){if(typeof define==="function"&&define.amd){define(e)}else{window.purl=e()}})(function(){function s(e,n){var i=decodeURI(e),s=r[n||false?"strict":"loose"].exec(i),o={attr:{},param:{},seg:{}},u=14;while(u--){o.attr[t[u]]=s[u]||""}o.param["query"]=l(o.attr["query"]);o.param["fragment"]=l(o.attr["fragment"]);o.seg["path"]=o.attr.path.replace(/^\/+|\/+$/g,"").split("/");o.seg["fragment"]=o.attr.fragment.replace(/^\/+|\/+$/g,"").split("/");o.attr["base"]=o.attr.host?(o.attr.protocol?o.attr.protocol+"://"+o.attr.host:o.attr.host)+(o.attr.port?":"+o.attr.port:""):"";return o}function o(t){var n=t.tagName;if(typeof n!=="undefined")return e[n.toLowerCase()];return n}function u(e,t){if(e[t].length===0)return e[t]={};var n={};for(var r in e[t])n[r]=e[t][r];e[t]=n;return n}function a(e,t,n,r){var s=e.shift();if(!s){if(d(t[n])){t[n].push(r)}else if("object"==typeof t[n]){t[n]=r}else if("undefined"==typeof t[n]){t[n]=r}else{t[n]=[t[n],r]}}else{var o=t[n]=t[n]||[];if("]"==s){if(d(o)){if(""!==r)o.push(r)}else if("object"==typeof o){o[v(o).length]=r}else{o=t[n]=[t[n],r]}}else if(~s.indexOf("]")){s=s.substr(0,s.length-1);if(!i.test(s)&&d(o))o=u(t,n);a(e,o,s,r)}else{if(!i.test(s)&&d(o))o=u(t,n);a(e,o,s,r)}}}function f(e,t,n){if(~t.indexOf("]")){var r=t.split("[");a(r,e,"base",n)}else{if(!i.test(t)&&d(e.base)){var s={};for(var o in e.base)s[o]=e.base[o];e.base=s}if(t!==""){c(e.base,t,n)}}return e}function l(e){return p(String(e).split(/&|;/),function(e,t){try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(n){}var r=t.indexOf("="),i=h(t),s=t.substr(0,i||r),o=t.substr(i||r,t.length);o=o.substr(o.indexOf("=")+1,o.length);if(s===""){s=t;o=""}return f(e,s,o)},{base:{}}).base}function c(e,t,n){var r=e[t];if(typeof r==="undefined"){e[t]=n}else if(d(r)){r.push(n)}else{e[t]=[r,n]}}function h(e){var t=e.length,n,r;for(var i=0;i<t;++i){r=e[i];if("]"==r)n=false;if("["==r)n=true;if("="==r&&!n)return i}}function p(e,t){var n=0,r=e.length>>0,i=arguments[2];while(n<r){if(n in e)i=t.call(undefined,i,e[n],n,e);++n}return i}function d(e){return Object.prototype.toString.call(e)==="[object Array]"}function v(e){var t=[];for(var n in e){if(e.hasOwnProperty(n))t.push(n)}return t}function m(e,t){if(arguments.length===1&&e===true){t=true;e=undefined}t=t||false;e=e||window.location.toString();return{data:s(e,t),attr:function(e){e=n[e]||e;return typeof e!=="undefined"?this.data.attr[e]:this.data.attr},param:function(e){return typeof e!=="undefined"?this.data.param.query[e]:this.data.param.query},fparam:function(e){return typeof e!=="undefined"?this.data.param.fragment[e]:this.data.param.fragment},segment:function(e){if(typeof e==="undefined"){return this.data.seg.path}else{e=e<0?this.data.seg.path.length+e:e-1;return this.data.seg.path[e]}},fsegment:function(e){if(typeof e==="undefined"){return this.data.seg.fragment}else{e=e<0?this.data.seg.fragment.length+e:e-1;return this.data.seg.fragment[e]}}}}var e={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href",embed:"src",object:"data"},t=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],n={anchor:"fragment"},r={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},i=/^[0-9]+$/;m.jQuery=function(e){if(e!=null){e.fn.url=function(t){var n="";if(this.length){n=e(this).attr(o(this[0]))||""}return m(n,t)};e.url=m}};m.jQuery(window.jQuery);return m})
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