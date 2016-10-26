module.exports = function(){
	if(arguments.length < 2){
		console.log("Minimum 2 arguments required in runAllSync"); return;
	}
	var works = [];
	var cb = arguments[arguments.length-1];

	function tryCb(err){
		if(err){
			cb(err);
			return;
		}
		if(works.length){
			works.shift()(tryCb);
		}else{
			cb();
		}
	}

	if(typeof arguments[0] == 'object'){
		for(var i in arguments[0]){
			if(typeof arguments[0][i] == 'function'){
				works.push(arguments[0][i]);
			}
		}
	}else{
		for(var i in arguments){
			if(arguments.length-1 == i) break;
			if(typeof arguments[i] == 'function'){
				works.push(arguments[i]);
			}
		}
	}

	works.shift()(tryCb);
}