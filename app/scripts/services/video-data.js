'use strict';

angular.module('app.services')
.factory('videoData',function(
	$http
){
	var videoData={
		async: function(){
			var data=$http.get('/scripts/data/video_data.json').then(
				function(response){
					return response.data;
			});

			return data;
		}
		
	};
 return videoData;

});