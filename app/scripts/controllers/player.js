'use strict';
ld.controller('PlayerCtrl', function ($scope, $stateParams, sharedObjects, $location, $rootScope){

    // var un = $rootScope.$on('$stateChangeStart', function (event) {
    //     event.preventDefault();
    //     un();
    // });
    // $scope.$on('$viewContentLoaded', function() {

    // });

    var channelId = $stateParams.channelId;
    var channel = sharedObjects.get("channel") || new nn.model.Channel(channelId);
    var episodes = sharedObjects.get("episodes");
    var episode;
    var player;
   

     player  = new nn.Player("ytplayer-1", true);
     player.ready().then(function(){
        console.log(player);
     });

    sharedObjects.set('channel', channel);

    var init = function(){

          if(episodes){
              $scope.safeApply(update);
          }else{
              channel.get().then(function(){
                channel.loadEpisodes().then(function(){
                      episodes = channel.episodes;
                      sharedObjects.set('episodes', episodes);
                      episode = episodes.first();
                      $scope.safeApply(update);
                });
              });
          }
    }

    var update = function(){
        $scope.channel = channel;
        $scope.episodes = channel.episodes;
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
