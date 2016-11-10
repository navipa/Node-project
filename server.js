var express = require('express');
var app = express();
var PORT = 8080;
var fs = require('fs');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(reg, res) {
	res.send('Hello Word');
})
app.get('/files',function(reg,res){
	fs.readdir('../', function(err, files){
		console.log(files);
		res.json(files);
	})
})
app.get('/SystemInfo', function(reg,res){
	var myInfo;
	fs.readFile('/proc/cpuinfo','utf8', function(err, info){
	if (err) throw err;
	console.log(info);
        myInfo= info.split("\n");
	res.render('index', {title: 'System Information', message: myInfo})
	
	})
})

app.listen(PORT, function() {
	console.log('server is running on port', PORT);
})

