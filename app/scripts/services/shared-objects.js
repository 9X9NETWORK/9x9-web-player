ld.service("sharedObjects", function(){

	var obj = [];
	this.add = function(key, val){
		if(obj.hasOwnProperty(key)){
			throw "key already exists. 'use set()' to change value";
		}
		obj[key] = val;
	}
	this.set = function(key, val){
		obj[key] = val;
	}
	this.get = function(key){
		if(obj[key]){
			return obj[key];
		}
		return undefined;
	}
});