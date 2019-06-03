var http = require('http');
var url = require('url');
var fs= require('fs');

http.createServer(function(req,res){
    var path = url.parse(req.url,true).pathname;
    var time = new Date().toString();
    var str = "\nRequest received for "+path+" at "+time;
    
    if(path != '/favicon.ico')
    {
	    fs.appendFile('log.txt',str, function(err){
		if(!err)
		{
		   console.log("request is logged");
		   res.write("request is logged");
		   res.end();
		}
	    });
    }
    
}).listen(9000);

console.log("server started at 9000");
