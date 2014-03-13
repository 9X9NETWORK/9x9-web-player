'use strict';
ld.controller('PlayerCtrl', function ($scope, $stateParams, sharedObjects, $location, $rootScope, msoService){

    // var un = $rootScope.$on('$stateChangeStart', function (event) {
    //     event.preventDefault();
    //     un();
    // });
    // $scope.$on('$viewContentLoaded', function() {

    // });

    msoService.get().then(function(data){
        // console.log(data);
        $scope.app = data.app[0];
        $scope.social = data.social;
        if(data.app[0].playeronly === true){
          $("body").addClass("playeronly")
        }
    });

    var acct = document.location.host.match (/(dev|stage|alpha)/) ? 'UA-31930874-1' : 'UA-47454448-1';
    var watchedSec = 0, watchedInterval, _d = $.Deferred(), _d1 = $.Deferred();
    var channelId,
        episodeId,
        channel, episodes, episode, programs, episodeIndex,
        gaid;

    var loadChannel = function(cid){
        //cid = "8846";
        channel = new nn.model.Channel(cid);
        channel.get().then(function(){
            channel.loadEpisodes().then(onChannelLoaded);
            $("body").show();
        });
        channel.watched = 0;
    }

    var onChannelLoaded = function(){

      episodes = channel.episodes;
      if(episodeId){
          episode = episodes.findByAttr("id", 'e' + episodeId);
          episodeIndex = episodes.index;
      }else{
          episode = episodes.first();
          episodeIndex = 0;
      }

      var path = '/p' + channel.id + '/' + episode.id;
      $location.path(path);

      programs = new nn.utils.NnArray(episode.programs, false);

      $scope.channel = channel;
      $scope.episodes = episodes;
      $scope.episodeIndex = episodeIndex;
      $scope.episode = episode;

      $scope.$apply();

      startPlay();
      initListPosition();
    }

    var initListPosition = function(){
      setTimeout(function(){
        var list = $(".episode-list");
        var wrap = $(".episode-list-wrap");
        var item = list.find("li.is-playing");
        var getOs = function(){
          // console.log(navigator.userAgent);
          if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            return "ios";
          }else if(navigator.userAgent.match(/mobile|android|Mobile|Android/)){
            return "android";
          }else{
            return "web";
          }
        }
        var os = getOs();
        if(item.length === 1){
          var left = item.position().left;
          if(os === "android"){

            $(".episode-list-wrap").width($(window).width());
            $(".episode-list").width(125 * episodes.length);

            wrap.scrollLeft(left);

          }else if(os === "ios"){

            $(".episode-list-wrap").width($(window).width());
            $(".episode-list").width(125 * episodes.length);

            //** dirty fix the ios rendering problem
            wrap.animate({scrollLeft : left}, 10);
            $("body").animate({scrollTop:10}, 10);

          }
          else{
            list.css("left", -left);
          }
        }
      }, 1000);
    }

    var loadApi = function(){
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    var update = function(){
        $scope.channel = channel;
        $scope.episodes = channel.episodes;
        $scope.episodeIndex = episodeIndex;
        $scope.episode = episode;
    }

    var onVideoEnd = function(){

        var path = '/p' + channel.id + '/' + episode.id;
        var path1 = channel.name + "/" + episode.name;
        var rs = programs.next();
        if(rs !== false){
            player.ready().then(function(){
              player.cueVideoById(programs.current().videoId);
           });
        }else{
          _d.resolve();
        }
    }

    var startPlay = function(){
       player.ready().then(function(){
          player.cueVideoById(programs.current().videoId);
       });

       episode.watched = 0;
       watchedSec = 0;

       _d = $.Deferred();
       $.when(_d).then(function(){
          var path = '/p' + channel.id + '/' + episode.id;
          var path1 = channel.name + "/" + episode.name;
          if(episode.watched > 6){
             GaReportEvent(path, "epWatched", path1, episode.watched);
          }
       });

       $.when(_d1).then(function(){
          var path = '/p' + channel.id;
          GaReportEvent(path, "pgWatched", channel.name, channel.watched);
       });

       $(player).unbind();
       $(player).bind("ended", onVideoEnd);
       $(player).bind("stateChange", function(){
            clearInterval(watchedInterval);
            if(player.state === "playing"){
              watchedInterval = setInterval(function(){
                watchedSec++;
                channel.watched++;
                episode.watched++;
              }, 1000);
            }
        });
    }

    var init = function(){

        var href = location.href.replace("http://", "").replace("https://", "");

        channelId = href.match(/.*\/p([0-9]+)\//);
        episodeId = href.match(/.*\/e([0-9]+)/);

        if(episodeId !== null){
            if(typeof episodeId === "object" && episodeId != null){
                if(episodeId.length > 1){
                  episodeId = episodeId[1];
                }
            }
        }
        if(typeof channelId === "object" && channelId != null){
              if(channelId.length > 1){
                  channelId = channelId[1];
              }
        }
        if(channelId === null){
        //if(true){  
            var portal = new nn.model.Portal(mso, true, lang);
            var set, setInfo, cid, channel;
            portal.get().then(function(){
                set = portal.first();
                setInfo = new nn.model.Set(set.id);
                setInfo.get().then(function(){
                    var cid = setInfo.channels.first().id;
                    channelId = cid;
                    loadChannel(cid);
                });
            });        
        }else{
            loadChannel(channelId);
        }

        player  = new nn.Player("ytplayer-1", true);
        loadApi();
    }

    var GaReportView = function(name){
      _gaq = [];
      _gaq.push(['_setAccount', acct]);
      _gaq.push(['_trackPageview', name]);
      _ga();
    }

    var GaReportEvent = function(category, action, label, value){
      _gaq = [];
      _gaq.push(['_setAccount', acct]);
      _gaq.push (['_trackEvent', category, action, label, value]);
      _ga(); 
    }

    var initGA = function(){

        //console.log(acct);

        GaReportView("webplayer");

        $(".app-download-appstore a").click(function(){
          console.info("download android");
          GaReportEvent("install", "toDownload-android", mso);
        });

        $(".app-download-googleplay a").click(function(){
          console.info("download ios");
          GaReportEvent("install", "toDownload-iOS", mso);
        });

        $(".social-media-list li a").click(function(){
          var i = $(".social-media-list li a").index($(this));
          console.info("toLink" + (i+1));
          GaReportEvent("promotion", "toLink" + (i+1), "toLink" + (i+1));
        });

        window.onbeforeunload = function() {
            _d.resolve();
            _d1.resolve();
            return "Are you sure you want to leave this page?";
        };
    }

    $.get("/playerAPI/brandInfo?mso=" + mso, function(res){
        var rs = res.match(/supported-region\s([a-zA-z]*)/);
        if(rs !== null){
            lang = rs[1]; 
        }
        rs = res.match(/ga\s([a-zA-z\-0-9]*)/);
        if(rs !== null){
            gaid = rs[1]; 
            acct = gaid;
        }
        init();
        initGA();
    });

    $scope.getListStyle = function(){
    }

    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    $scope.onEpisodeClick = function(eid){

        _d.resolve();

        episode = episodes.findByAttr("id", eid);
        episodeIndex = episodes.findIndex(episode);
        programs = new nn.utils.NnArray(episode.programs, false);


        var path = '/p' + channelId + '/' + eid;
        $location.path(path);
        var path1 = channel.name + "/" + episode.name;

        $scope.safeApply(update);

        startPlay();
        //initListPosition();
    }

    var list = $(".episode-list");
    var left = 0;
    var amount = 250;
    $scope.slidePrev = function(){
        list = $("ul.episode-list");
        left = list.position().left;
        left += amount;
        if(left > 0) left = 0;
        list.animate({
          left : left
        }, 500);
        return false;
    }

    $scope.slideNext = function(){
        list = $("ul.episode-list");
        left = list.position().left;
        left -= amount;
        if(left < -list.width() + 516) left = -list.width()  + 516;
        list.animate({
          left : left
        }, 500);
        return false;
    }
});


// .directive("episodeList", function($document){
//   return function($scope, ele, attrs){
//       // properties

//       //Draggable.create(".episode-list", {type:"x", edgeResistance:0.65, bounds:".episode-list-wrap", throwProps:true});

//       return;
//       var bool = false;
//       var ox = 0;
//       var mouseX = 0;
//       var x = 0;
//       var startX = 0;
//       var lastX;
//       var friction = 0.9;
//       var vx;
//       var frameRate = 1000 / 20;
//       var tx;
//       var minLeft;
//       var onMouseUp = function(){
//         bool = false;
//         $document.unbind('mousemove', onMouseMove);
//         $document.unbind('mouseup', onMouseUp);
//         //clearInterval(interval);
//       }

//       var onMouseMove = function(e){
//           x = mouseX - startX;
//           vx = (lastX - x) * 10;

//           x = x > 0 ? 0 : x;
//           x = x < minLeft ? minLeft : x;
//           lastX = x;
//           ele.css({
//             left:  x + 'px'
//           });
//       }

//       var onInterval = function(){

//           if(bool){
//             //console.log(vx);
//           }else{

//             //console.log(vx, x);
//             if(Math.abs(vx) > 1){
//                 console.log(vx);
//                 vx *= friction;
//                 tx = x + vx;
//                 if(tx > 10){
//                   //v = -v;
//                   // x = 0;
//                   // v = -v;
//                 }else if(tx < minLeft){
//                   //console.log(2, tx);
//                   // x = -$(ele).width();
//                   // v = -v;
//                 }
//                 ele.css({
//                   left: tx + 'px'
//                 });
//             }else{
//               vx = 0;
//               clearInterval(interval);
//             }
//           }
//       }

//       var initMouseDetect = function(){
//         $(document).mousemove(function(e){
//             mouseX = e.pageX;
//          }); 
//       }

//       initMouseDetect();

//       var interval;

//       ele.on('mousedown', function(e) {
//         // Prevent default dragging of selected content
//         minLeft = -$(ele).width() + $(".episode-list-wrap").width()
//         bool = true;
//         e.preventDefault();
//         startX = e.pageX - x;
//         interval = setInterval(onInterval, frameRate);
//         // console.log(e.pageX);
//         // console.log(x);
//         // console.log(startX);

//         $document.on('mousemove', onMouseMove);
//         $document.on('mouseup', onMouseUp);
//       });
//   }
// });
