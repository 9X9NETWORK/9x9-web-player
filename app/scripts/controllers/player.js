'use strict';
ld.controller('PlayerCtrl', function ($scope, $stateParams){

    console.log($stateParams);
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

    $scope.videoPlay=function(videoId){
    };

  });
