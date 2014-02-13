ld.service("msoService", function($http){

	var loaded = false;
	this.get = function(){

		var _d = $.Deferred();
		var parseBrandInfo = function(csv){
			var blocks = csv.split("--\n");
			if(blocks[0].split("\t")[0] === "0"){
				var data = blocks[1];
				var arr = data.split("\n");
				var obj = {}, tmp;
				for(var i = 0; i<arr.length; i++){
					tmp = arr[i].split("\t");
					if(tmp.length === 2){
						obj[tmp[0]] = tmp[1];
					}
				}
				return obj;
			}
			console.error(csv);
			return false;
		}
		if(loaded){
			_d.resolve(data);
		}else{
			$http({
			  	"method" : "get",
			  	"url" : "scripts/data/cts.json"
			})
			.success(function(data){
				//var brandInfo = parseBrandInfo(data);
				self.data = data;
				_d.resolve(data);
				loaded = true;
			})
			.error();
		}

		return _d.promise();
	}
	
});