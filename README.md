# Execute functions one by one

runAllSync accepts n number of functions. The last function is the callback. All the functions before the last one will execute one by one. On call of cb which is passed as a argument to every function the next function will execute. If there is an error call the cb with an argument otherwise without argument. The last callback function will be executed when all the functions before it gets executed or some functions calls cb with an argument. Check the callback if there is an error

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
		return console.log(err);
	}
	console.log("Success");
});
```

output: 
1
2
some error
