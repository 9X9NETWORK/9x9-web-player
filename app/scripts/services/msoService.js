ld.service("msoService", function($http){

	var loaded = false;
    var _d = null;
	this.get = function(){

        if (_d)
            return _d;

		_d = $.Deferred();
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
			return false;
		}
		if(loaded){
			_d.resolve(data);
		}else{
			var jsonName = mso;
			if(mso === "9x9"){
				if(navigator.language === "zh-TW" || navigator.language === "zh-CN"){
					jsonName = mso + ".zh";
				}
			}
			$http({
			  	"method" : "get",
			  	"url" : "/api/mso/" + jsonName + ".json"
			})
			.success(function(data){
				$http({
					"method" : "get",
					"url" : "scripts/data/links.json"
				}).success(function(linksData){
					self.data = data;
					self.data.link = linksData.zh;
					_d.resolve(self.data);
					loaded = true;
				}).error();
			})
			.error();
		}

		return _d.promise();
	}
	
});
