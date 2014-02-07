'use strict';
ld.controller('MainCtrl', function ($scope, $stateParams, sharedObjects, $location){

  search = $location.search();
  if(search.mso){
    mso = search.mso;
  }

  var getOs = function(){
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      return "is-ios";
    }else if(navigator.userAgent.match(/mobile|android/)){
      return "is-android";
    }
  }
  $scope.osType =  getOs();

	if($stateParams.channelId){
		var cid = $stateParams.channelId;
		var channel = new nn.model.Channel(cid);
    sharedObjects.set('currentChannel', channel);
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
