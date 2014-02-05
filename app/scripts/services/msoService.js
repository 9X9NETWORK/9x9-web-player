ld.service("msoService", function($http){

	var _d = $.Deferred();
	var loaded = false;
	this.get = function(){

		if(loaded){
			return self.data;
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