'use strict';
ld.controller('PlayerCtrl', function ($scope, $stateParams, sharedObjects, $location, $rootScope, msoService){

    // var un = $rootScope.$on('$stateChangeStart', function (event) {
    //     event.preventDefault();
    //     un();
    // });
    // $scope.$on('$viewContentLoaded', function() {

    // });

    msoService.get().then(function(data){
        $scope.app = data.app[0];
        $scope.social = data.social;
        //console.log($scope.social);
        //$scope.$apply();
        //console.log($scope.promotionItems);
        // console.log($scope.items);
    });

    var channelId = $stateParams.channelId;
    var episodeId = $stateParams.episodeId;
    var channel, episodes, episode, programs, episodeIndex;
    var acct = document.location.host.match (/(dev|stage|alpha)/) ? 'UA-31930874-1' : 'UA-21595932-1';

    var loadChannel = function(cid){
        cid = "8846";
        channelId = cid;
        channel = new nn.model.Channel(cid);
        channel.get().then(function(){
            channel.loadEpisodes().then(onChannelLoaded);
        });
    }

    var onChannelLoaded = function(){

      episodes = channel.episodes;

      if($stateParams.episodeId){
          episode = episodes.findByAttr("id", $stateParams.episodeId);
          episodeIndex = episodes.index;
      }else{
          episode = episodes.first();
          episodeIndex = 0;
      }

      var path = '/p' + channel.id + '/' + episode.id;
      $location.path(path);

      programs = new nn.utils.NnArray(episode.programs, false);
      $scope.$apply(update);

      startPlay();
      initListPosition();
    }

    var initListPosition = function(){
      setTimeout(function(){
        var list = $(".episode-list");
        var item = list.find("li.is-playing");
        if(item.length === 1){
          var left = -item.position().left;
          list.css("left", left);
        }
      }, 10);
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

        var rs = programs.next();
        if(rs !== false){
            startPlay();
        }
    }

    var startPlay = function(){
       player.ready().then(function(){
          player.cueVideoById(programs.current().videoId);
       });

       $(player).on("ended", onVideoEnd);
    }

    var init = function(){
        if(!$stateParams.channelId){
            var portal = new nn.model.Portal();
            var set, setInfo, cid, channel;
            portal.get().then(function(){
                set = portal.first();
                setInfo = new nn.model.Set(set.id);
                setInfo.get().then(function(){
                    cid = setInfo.channels.first().id;
                    loadChannel(cid);
                });
            });        
        }else{
            loadChannel(cid);
        }

        loadApi();
        player  = new nn.Player("ytplayer-1", true);
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
        GaReportView("webplayer");

        $(".app-download-appstore a").click(function(){
          GaReportEvent("install", "toDownload-android", mso);
        });

        $(".app-download-googleplay a").click(function(){
          GaReportEvent("install", "toDownload-iOS", mso);
        });

        $(".social-media-list li a").click(function(){
          var i = $(".social-media-list li a").index($(this));
          GaReportEvent("promotion", "toLink" + (i+1), "toLink" + (i+1));
        });

        $(player).bind("stateChange", function(){
            console.log(player.state);
        })
    }

    init();
    initGA();

    $scope.getListStyle = function(){
      //60 rem
      return {
        left : 0
      }
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

        episode = episodes.findByAttr("id", eid);
        episodeIndex = episodes.findIndex(episode);
        programs = new nn.utils.NnArray(episode.programs, false);

        var path = '/p' + channelId + '/' + eid;
        $location.path(path);

        $scope.safeApply(update);

        startPlay();
        initListPosition();
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
        if(left < -list.width()) left = -list.width();
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
