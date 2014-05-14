'use strict';
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

    



  });
