'use strict';
ld.controller('PlayerCtrl', function ($scope, $stateParams, sharedObjects, $location, $rootScope){

    // var un = $rootScope.$on('$stateChangeStart', function (event) {
    //     event.preventDefault();
    //     un();
    // });
    // $scope.$on('$viewContentLoaded', function() {

    // });

    var channelId = $stateParams.channelId;
    var episodeId = $stateParams.episodeId;
    var channel = sharedObjects.get("channel") || new nn.model.Channel(channelId);
    var episodes = sharedObjects.get("episodes");
    var episode;
    var programs;
    var episodeIndex = 0;

    sharedObjects.set('channel', channel);

    var init = function(){
          
          loadApi();
          player  = new nn.Player("ytplayer-1", true);

          if(episodes){

              episode = episodes.findByAttr("id", episodeId);
              episodeIndex = episodes.index;
              programs = new nn.utils.NnArray(episode.programs, false);

              $scope.safeApply(update);
              startPlay();
          }else{
              channel.get().then(function(){
                channel.loadEpisodes().then(function(){

                      episodes = channel.episodes;
                      sharedObjects.set('episodes', episodes);
                      episode = episodes.first();
                      episodeIndex = 0;
                      programs = new nn.utils.NnArray(episode.programs, false);

                      $scope.safeApply(update);
                      startPlay();
                });
              });
          }
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
    }

    var onVideoEnd = function(){

        var rs = programs.next();
        if(rs !== false){
            startPlay();
        }
    }

    var startPlay = function(){

       player.ready().then(function(){
          console.log("ready");
          player.cueVideoById(programs.current().videoId);
       });

       $(player).on("ended", onVideoEnd);
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
        var path = base + '/' + channelId + '/' + eid;
        $location.path(path);
    }

    init();

  });
