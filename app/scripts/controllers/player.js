'use strict';
ld.controller('PlayerCtrl', function ($scope, $stateParams, sharedObjects, $location, $rootScope, msoService){

    var un = $rootScope.$on('$stateChangeStart', function (event) {
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
        channel.get()
        .then(function(){
            if(episodeId){
              channel.loadEpisodes(episodeId).then(onChannelLoaded)
              .fail(function(){
                 $("body").addClass("episode-error");
                 channel.loadEpisodes().then(onChannelLoaded);
              });
              //channel.loadEpisodes().then(onChannelLoaded);
            }else{
              channel.loadEpisodes().then(onChannelLoaded);
            }
            $("body").show();
        })
        .fail(function(){
          $("body").addClass("program-error");
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
      $rootScope.$apply(function() {
        $location.path(path);
      });

      var ep1 = episodes.first();
      var url1;
      if(ep1.url1){
        url1 = $.type(ep1.url1) === "array" ? ep1.url1 : [ep1.url1];
        url1 = url1[0].split(";")[0];
      }

      if(url1 && url1.indexOf("m3u8") !== -1){
        //live streaming channel

              $("#ytplayer-1").hide();
              $("#hls-video").show();


              programs = new nn.utils.NnArray(episode.programs, false);

              $scope.channel = channel;
              $scope.episodes = episodes;
              $scope.episodeIndex = episodeIndex;
              $scope.episode = episode;
              $scope.$apply();
              
              $(".is-ios, .is-android").find(".open-in-app").show();

              var openInAppLink;
              if(mso === "9x9"){
                  openInAppLink = "flipr://9x9.tv?mso=" + mso + "&ch=" + channel.id + "&ep=" + episode.id;
              }else{
                  openInAppLink = "flipr-" + mso + "://9x9.tv?mso=" + mso + "&ch=" + channel.id + "&ep=" + episode.id;
              }
              $(".is-ios, .is-android").find(".app-download-wrap > a").click(function(){
                location.href = openInAppLink;
              });


              var player;
              /**
               * jQuery.browser.mobile (http://detectmobilebrowser.com/)
               * jQuery.browser.mobile will be true if the browser is a mobile device
               **/
              //(function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
              if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                //use html5 player
                  player = document.getElementById("hls-video");
                  $("#hls-video source").attr("src", url1);
                  player.src = url1;
                  player.play();

              }else{
                  videojs.options.flash.swf = 'videojs/video-js.swf';
                  // initialize the player
                  player = videojs('hls-video');
                  // initialize the plugin
                  player.hls(url1);
                  player.play();
              }
      }else{
          programs = new nn.utils.NnArray(episode.programs, false);

          $scope.channel = channel;
          $scope.episodes = episodes;
          $scope.episodeIndex = episodeIndex;
          $scope.episode = episode;

          $scope.$apply();

          startPlay();
          initListPosition();
      }
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
          var onresize = function(e){
              if($(window).width() < $(window).height()){
                $(".episode-list-wrap").width($(window).width());
              }else{
                $(".episode-list-wrap").width($("#ytplayer-1").width());
                /*
                if($(".app-item-descript")){
                  $(".episode-list-wrap").width(517);
                }else{

                }*/
              }
          }
          $(window).resize(onresize);
          onresize();
          if(os === "android"){

            $(".episode-list-wrap").width($(window).width());
            $(".episode-list").width(125 * episodes.length);

            wrap.scrollLeft(left);

          }else if(os === "ios"){

            $(".episode-list").width(125 * episodes.length);

            //** dirty fix the ios rendering problem
            wrap.animate({scrollLeft : left}, 10);
            $("body").animate({scrollTop:10}, 10);

            setTimeout(function(){
              wrap.animate({scrollLeft : left}, 10);
            }, 500);

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
          console.log(programs.current().videoId);
       });

       var openInAppLink;
       $(".is-ios, .is-android").find(".open-in-app").show();
       if(mso === "9x9"){
            openInAppLink = "flipr://flipr.tv?mso=" + mso + "&ch=" + channel.id + "&ep=" + episode.id;
        }else{
            openInAppLink = "flipr-" + mso + "://flipr.tv?mso=" + mso + "&ch=" + channel.id + "&ep=" + episode.id;
        }

        $(".is-ios, .is-android").find(".app-download-wrap > a").click(function(){
          location.href = openInAppLink;
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

       //update copy to clipboard data
       //$("#btn-clipboard").attr("data-clipboard-text", location.href);
    }

    var initClipboard = function(){
        return;
        var client = new ZeroClipboard(document.getElementById("btn-clipboard"));
        $("#btn-clipboard").attr("data-clipboard-text", location.href);
        // console.log(client);
        client.on( "ready", function( readyEvent ) {
          client.on( "aftercopy", function( event ) {
              alert( "Link Copied!" );
              $scope.$apply(function(){
                $scope.shareOpen = false;
              });
             //alert("Copied text to clipboard: " + event.data["text/plain"] );
          });
        });
    }
    var init = function(){

        var nua = navigator.userAgent;
        var is_android = ((nua.indexOf('Mozilla') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
        //is_android = true;
        if(is_android){
          $("body").addClass("is-old-android");
        }

        var href = location.href.replace("http://", "").replace("https://", "");

        channelId = href.match(/.*\/p([0-9a-zA-Z]+)(\/|$)/);
        episodeId = href.match(/.*\/e([0-9a-zA-Z]+)/);

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

        if($scope.app.playerControl !== undefined){
          if($scope.app.playerControl === false){
            player  = new nn.Player("ytplayer-1", true, false);
            $("body").addClass("no-player-control");
          }else{
            player  = new nn.Player("ytplayer-1", true);
          }
        }else{
          player  = new nn.Player("ytplayer-1", true);
        }
        
        loadApi();
        initClipboard();
        initTwitter();
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

        $("body").on("click", ".social-media-list li a", function(){
          // var i = $(".social-media-list li a").index($(this));
          // console.info("toLink" + (i+1));
          //GaReportEvent("promotion", "toLink" + (i+1), "toLink" + (i+1));
          GaReportEvent("promotion", $(this).attr("href"), "");
        });

        $(".share-icon-fb").click(function(){
            GaReportEvent("share", "shareFB", "");
        });

        $("#btn-twitter").click(function(){
            GaReportEvent("share", "shareTwitter", "");
        });

        $("body").on("click", ".promote-programe-item", function(){
              var label = $(this).attr("data-name");
              GaReportEvent("promotion", $(this).find("a").attr("href"), label);
              // console.log($(this).find("a").attr("href"));
              // return false;
        });

        $("body").on("click", ".app-group-item", function(){
            GaReportEvent("install", "toDownloadOthers", $(this).attr("data-name"));
            // return false;
        });

        window.onbeforeunload = function() {
            _d.resolve();
            _d1.resolve();
            //return "Are you sure you want to leave this page?";
        };
    }

    var facebook_clientid;
    $.get("/playerAPI/brandInfo?mso=" + mso + "&os=web", function(res){
        var rs = res.match(/supported-region\s([a-zA-z]*)/);
        if(rs !== null){
            lang = rs[1]; 
        }
        
        facebook_clientid = res.split("facebook-clientid\t")[1].split("\n")[0];
        initFB();

        rs = res.match(/ga\s([a-zA-z\-0-9]*)/);
        if(rs !== null){
            gaid = rs[1]; 
            acct = gaid;
        }
        if(mso === "9x9"){
          if(navigator.language === "zh-TW" || navigator.language === "zh-CN"){
            lang = "zh";
          }else{
            lang = "en";
          }
        }
        $("body").addClass("is-" +lang);
        msoService.get().then(function(data){

            $scope.app = data.app[0];
            $scope.social = data.social;

            init();
            initGA();
            
            setTimeout(function(){
              var src;
              if((!$scope.app.ios.landing) || $scope.app.ios.landing === ""){
                src = $(".app-download-appstore img").eq(0).attr("src");
                src = src.split(".")[0] + "_comingsoon.png";

                $(".app-download-appstore img").attr("src", src);

                $(".app-download-appstore>a").click(function(){
                  return false;
                }).removeAttr("href");
                
                // $(".app-item-link-group").addClass("lack-ios");
                /*
                $(".app-item-link-group.lack-ios a.app-item-ios").click(function(){
                  return false;
                }).removeAttr("href");
                */
              }


              if((!$scope.app.android.landing) || $scope.app.android.landing === ""){
                src = $(".app-download-googleplay img").eq(0).attr("src");
                src = src.split(".")[0] + "_comingsoon.png";

                $(".app-download-googleplay img").attr("src", src);
                $(".app-download-googleplay a").click(function(){
                  return false;
                }).removeAttr("href");
                /*

                // $(".app-item-link-group").addClass("lack-android");
                $(".app-item-link-group.lack-android a").click(function(){
                  return false;
                }).removeAttr("href");
                */
              }

              if($scope.social && $scope.social.length > 0){
                $(".playeronly .social-media-wrap").css("display", "block");
              }

            }, 1000);

            if(data.app[0].playeronly === true){
              $("body").addClass("playeronly")
            }
        });
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

    var initFB = function(){
      window.fbAsyncInit = function() {
        FB.init({
          appId      : facebook_clientid,
          xfbml      : true,
          version    : 'v2.0'
        });
      };

      (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }

    var initTwitter = function(){
      $('#btn-twitter').click(function(event) {
        var width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;
        
        window.open(url, 'twitter', opts);
        $scope.$apply(function(){
          $scope.shareOpen = false;
        });
        return false;
      });
    }

    $scope.shareToFb = function(){
      var url = location.href;
      // console.log(url);
      FB.ui({
        method: 'share',
        href: url,
      }, function(response){
        $scope.$apply(function(){
          $scope.shareOpen = false;
        });
        console.log(response);
      });
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

    $(".open-in-app").hide();
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
