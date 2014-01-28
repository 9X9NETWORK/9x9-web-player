'use strict';
ld.controller('MainCtrl', function ($scope, $stateParams, sharedObjects, $location){

  console.log($stateParams.channelId);
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
            });
        });
	}else{
		var mso = nn.global.mso;
        var portal = new nn.model.Portal();
        var set, setInfo;
        portal.get().then(function(){
            set = portal.first();
            setInfo = new nn.model.Set(set.id);
            setInfo.get().then(function(){
                sharedObjects.set('currentSet', setInfo);
                $location.path(base + '/p' + setInfo.channels.first().id);
            });
        });
	}
});
