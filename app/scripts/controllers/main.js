'use strict';
<<<<<<< HEAD
ld.controller('MainCtrl', function ($scope, $stateParams, sharedObjects, $location){
=======
angular.module('app.controllers').
 controller('MainCtrl', function (
	  $scope,
      youtubePlayer,
      videoData,
      $stateParams,
      $location, 
      $rootScope
	  	
  ){

    //for remember last Select
    var lastSelected=0;
    var episodeId = $stateParams.episodeId;
    console.log('episodeId=',episodeId);
    //$scope.shareOpen= false;


    videoData.async().then(function(data){
      //console.log('episodes=',data);
      $scope.episodes=data;
      $scope.episodes[lastSelected].isSelected=true;
      if(episodeId){
         youtubePlayer.playById(episodeId);
      }else{
         youtubePlayer.playById($scope.episodes[0].videoId);
      };

    


    });


    

    $scope.videoPlay=function(episode,index){

      

      if (lastSelected!==index){
        $scope.episodes[lastSelected].isSelected=false;
        $scope.episodes[index].isSelected=true;
        lastSelected=index;

      };    
      youtubePlayer.cueById(episode.videoId); 
      //notice youtube not ready issues
      //$location.path(episode.videoId); 


    };
>>>>>>> feature/ui-rwd

  search = $location.search();
  if(search.mso){
    mso = search.mso;
  }
    

	if($stateParams.channelId){
		var cid = $stateParams.channelId;
		var channel = new nn.model.Channel(cid);
        sharedObjects.set('channel', channel);
        channel.get().then(function(){
            channel.loadEpisodes().then(function(){
                var ep = channel.episodes.first();
                var path = base + '/p' + cid + '/' + ep.id;
                sharedObjects.set('episodes', channel.episodes);
                $location.path(path);
                $scope.$apply();
            });
        });
	}else{
        var portal = new nn.model.Portal();
        var set, setInfo, cid, channel;
        portal.get().then(function(){
            set = portal.first();
            setInfo = new nn.model.Set(set.id);
            setInfo.get().then(function(){
                sharedObjects.set('set', setInfo);
                cid = setInfo.channels.first().id;
                var channel = new nn.model.Channel(cid);
                channel.get().then(function(){

                    channel.loadEpisodes().then(function(){
                        var ep = channel.episodes.first();
                        var path = '/p' + cid + '/' + ep.id;

                        sharedObjects.set('channel', channel);
                        sharedObjects.set('episodes', channel.episodes);
                        $location.path(path);
                        $scope.$apply();
                    });
                });
            });
        });
	}
});
