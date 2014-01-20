'use strict';
angular.module('app.controllers').
 controller('MainCtrl', function (
	  	$scope,
	  	youtubePlayer
  ){
    
    $scope.episodes = [
      {
        videoId: 'dm_A_1xp_Vo',
        title: 'A First Look at VICE News with Shane Smith'

      },
      {
        videoId: 'lLMSRUNF7ec',
        title: 'A First Look at VICE News with Shane Smith'
      },
      {
        videoId: '-Ntzy0EPhF8',
        title: 'A First Look at VICE News with Shane Smith'
      },
      {
        videoId: 'KhTdK7y7n3A',
        title: 'A First Look at VICE News with Shane Smith'
      },
      {
        videoId: 'gMxhIfG0MpY',
        title: 'A First Look at VICE News with Shane Smith'
      },
      {
        videoId: 'dOYXaoJZjYc',
        title: 'A First Look at VICE News with Shane Smith'
      },
      {
        videoId: 'v_rVSqBiyXc',
        title: 'A First Look at VICE News with Shane Smith'
      },
      {
        videoId: 'qXQk5oNVU3s',
        title: 'A First Look at VICE News with Shane Smith'
      },
      {
        videoId: 'tzkABXZs-nc',
        title: 'A First Look at VICE News with Shane Smith'
      }      

    ];

    //for remember last Select
    var lastSelected=0;

    $scope.videoPlay=function(episode,index){

      youtubePlayer.cueById(episode.videoId);

      if (lastSelected!==index){
        $scope.episodes[lastSelected].isSelected=false;
        $scope.episodes[index].isSelected=true;
        lastSelected=index;

      };      

    };

    $scope.episodes[lastSelected].isSelected=true;
    youtubePlayer.playById($scope.episodes[0].videoId);



  });
