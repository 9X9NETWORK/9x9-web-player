'use strict';
angular.module('app.controllers').
 controller('MainCtrl', function (
	  	$scope,
	  	youtubePlayer,
      videoData
  ){

    //for remember last Select
    var lastSelected=0;

    videoData.async().then(function(data){
      console.log('episodes=',data);
      $scope.episodes=data;
      $scope.episodes[lastSelected].isSelected=true;
      youtubePlayer.playById($scope.episodes[0].videoId);
    });


    

    $scope.videoPlay=function(episode,index){

      youtubePlayer.cueById(episode.videoId);

      if (lastSelected!==index){
        $scope.episodes[lastSelected].isSelected=false;
        $scope.episodes[index].isSelected=true;
        lastSelected=index;

      };      

    };

    



  });
