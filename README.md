#execute functions one by one

```js
var runAllSync = require('run-all-sync');

runAllSync(function(cb){
	setTimeout(function(){
		console.log(1);
		cb();
	}, 200);
}, function(cb){
	console.log(2);
	cb("some error");
}, function(cb){
	setTimeout(function(){
		console.log(3);
		cb();
	}, 200);
}, function(err){
	if(err){
		console.log(err); return;
	}
	console.log("Success");
});
```

output: 
1
2
some error
