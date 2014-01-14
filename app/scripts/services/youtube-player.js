'use strict';

angular.module('app.services')

.constant('youtubeDataApi', 'http://gdata.youtube.com')

.factory('youtubePlayer',
    function($q, $window, $http, youtubeDataApi, $rootScope) {

        var player = {};
        var ytPlayer;
        // enum
        var status = {
            buffering: 'buffering',
            playing: 'playing',
            paused: 'paused',
            stopped: 'stopped'
        };

        function init(id) {
            var deferred = $q.defer();

            function initPlayer(id, elementId) {
                elementId = elementId || 'ytplayer';

                if (typeof id === 'string') {
                    new YT.Player(elementId, {
                        height: '100%',
                        width: '100%',
                        videoId: id,
                        playerVars: {
                            autoplay: 1,
                            controls: 1,
                            showinfo: 0,
                            wmode: 'transparent'
                        },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                } else if (angular.isArray(id)) {
                    new YT.Player(elementId, {
                        height: '100%',
                        width: '100%',
                        playerVars: {
                            playlist: id,
                            autoplay: 1,
                            controls: 0,
                            showinfo: 0,
                            wmode: 'transparent'
                        },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            }

            function onPlayerReady(event) {
                var player = event.target;
                deferred.resolve(player);
            }

            function onPlayerStateChange(event) {
                switch (event.data) {
                    case YT.PlayerState.ENDED:
                        console.log('video ends.');
                        $rootScope.$broadcast('videoEnded');
                        break;
                    case YT.PlayerState.PLAYING:
                        console.log('video playing.');
                        $rootScope.$broadcast('videoPlaying');
                        break;
                    case YT.PlayerState.PAUSED:
                        console.log('video paused.');
                        $rootScope.$broadcast('videoPaused');
                        break;
                    case YT.PlayerState.BUFFERING:
                        console.log('video buffering.');
                        $rootScope.$broadcast('videoBuffering');
                        break;
                    case YT.PlayerState.CUED:
                        console.log('video cued.');
                        $rootScope.$broadcast('videoCued');
                        break;
                }
            }

            if (typeof(YT) !== 'undefined' && typeof(YT.Player) !== 'undefined') {
                initPlayer(id);
            } else {
                $window.onYouTubeIframeAPIReady = function() {
                    initPlayer(id);
                };
            }

            return deferred.promise;
        }

        function playVideo(id) {
            if (typeof id === 'string') {
                ytPlayer.loadVideoById({videoId: id});
            } else if (angular.isArray(id)) {
                ytPlayer.loadPlaylist(id);
            }
        }

        function getChannel(id) {
            var url = youtubeDataApi + '/feeds/api/users/' + id + '/uploads';

            return $http({
                method: 'GET',
                url: url,
                // cache: false,
                params: {
                    v: 2,
                    alt: 'json'
                }
            })
            .then(function(res) {
                console.debug('youtube user uploads feed:');
                console.debug(res);
                return res.data;
            });
        }

        function getPlaylist(id) {
            var url = youtubeDataApi + '/feeds/api/playlists/' + id;

            return $http({
                method: 'GET',
                url: url,
                // cache: false,
                params: {
                    v: 2,
                    alt: 'json'
                }
            })
            .then(function(res) {
                console.debug('youtube playlists feed:');
                console.debug(res);
                return res.data;
            });
        }

        function convertToEpisodes(data) {
            var episodes = [];
            var entries = data.feed.entry;

            entries.forEach(function(entry) {
                var mediaGroup = entry.media$group;
                episodes.push({
                    // id: entry.id.$t,
                    id: mediaGroup.yt$videoid.$t,
                    name: entry.title.$t,
                    description: mediaGroup.media$description.$t,
                    thumb: mediaGroup.media$thumbnail[0].url,
                    published: entry.published.$t,
                    // published: mediaGroup.yt$uploaded.$t,
                    // names: episode.names,
                    // descriptions: episode.descriptions,
                    // thumbs: episode.thumbs,
                    videoId: mediaGroup.yt$videoid.$t
                });
            });

            return episodes;
        }

        player.playById = function(id) {
            if (!ytPlayer) {
                ytPlayer = init(id).then(function(player) {
                    ytPlayer = player;
                });
            } else if (!ytPlayer.loadVideoById) {
                ytPlayer.then(function(player) {
                    ytPlayer = player;
                    playVideo(id);
                });
            } else {
                playVideo(id);
            }
        };

        player.playByChannelId = function(id) {
            return getChannel(id).then(function(data) {
                var entries = data.feed.entry;
                var videoList = [];

                entries.forEach(function(entry) {
                    videoList.push(entry.media$group.yt$videoid.$t);
                });
                // Better refactor this.
                player.playById(videoList);
            });
        };

        player.getEpisodes = function(id, type) {
            type = type || '3';
            if (type === '3') {
                return getChannel(id).then(convertToEpisodes);
            } else if (type === '4') {
                return getPlaylist(id).then(convertToEpisodes);
            }
        };

        player.playVideo = function() {
            if (ytPlayer) {
                ytPlayer.playVideo();
                player.playVideo = ytPlayer.playVideo.bind(ytPlayer);
            }
        };

        player.pauseVideo = function() {
            if (ytPlayer) {
                ytPlayer.pauseVideo();
                player.pauseVideo = ytPlayer.pauseVideo.bind(ytPlayer);
            }
        };

        player.stopVideo = function() {
            if (ytPlayer) {
                ytPlayer.stopVideo();
                player.stopVideo = ytPlayer.stopVideo.bind(ytPlayer);
            }
        };

        player.seekTo = function(seconds) {
            if (ytPlayer) {
                ytPlayer.seekTo(seconds);
                player.seekTo = ytPlayer.seekTo.bind(ytPlayer);
            }
        };

        player.getPlayerState = function() {
            var state;

            if (ytPlayer) {
                state = ytPlayer.getPlayerState();
                switch (state) {
                    case -1:
                        return 'unstarted';
                    case 0:
                        return 'ended';
                    case 1:
                        return 'playing';
                    case 2:
                        return 'paused';
                    case 3:
                        return 'buffering';
                    case 5:
                        return 'video cued';
                    default:
                        return 'error';
                }
            }

            console.log('youtube player not found.');
        };

        player.getCurrentTime = function() {
            if (ytPlayer) {
                return ytPlayer.getCurrentTime() * 1000;
            }

            console.log('youtube player not found.');
        }; 
        player.cueById = function(id) {
            if (ytPlayer) {

                ytPlayer.cueVideoById(id);
            }



            // if (ytPlayer) {                
            //     ytPlayer.cueVideoById(id);
            // }
            //console.log('youtube player videoid');
        };

        player.getDuration = function() {
            if (ytPlayer) {
                return ytPlayer.getDuration() * 1000;
            }

            console.log('youtube player not found.');
        };

        // player.preloadTest = function(idArray) {
        //     var elementId = 'yt-test';

        //     for (var i = 0; i < 1; i++) {
        //         new YT.Player(elementId + i, {
        //             height: '100%',
        //             width: '100%',
        //             // height: '200',
        //             // width: '300',
        //             videoId: idArray[i],
        //             playerVars: {
        //                 autoplay: 1,
        //                 controls: 1,
        //                 showinfo: 0,
        //                 wmode: 'transparent'
        //             },
        //             events: {
        //                 'onStateChange': onPlayerStateChange
        //             }
        //         });
        //     }

        //     function onPlayerStateChange(event) {
        //         switch (event.data) {
        //             case YT.PlayerState.ENDED:
        //                 console.log('video ends.');
        //                 break;
        //             case YT.PlayerState.PLAYING:
        //                 console.log('video playing.');
        //                 break;
        //             case YT.PlayerState.PAUSED:
        //                 console.log('video paused.');
        //                 break;
        //             case YT.PlayerState.BUFFERING:
        //                 console.log('video buffering.');
        //                 break;
        //             case YT.PlayerState.CUED:
        //                 console.log('video cued.');
        //                 break;
        //         }
        //     }
        // };

        return player;
    }
);