ld.service("msoService", function($http){

	var loaded = false;
	this.get = function(){

		var _d = $.Deferred();

		if(loaded){
			_d.resolve(data);
		}else{
			$http({
			  	"method" : "get",
			  	"url" : "scripts/data/cts.json"
			})
			.success(function(data){
				self.data = data;
				_d.resolve(data);
				loaded = true;
			})
			.error();
		}

		return _d.promise();
	}
	
});