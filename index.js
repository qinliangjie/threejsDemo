const http = require('http'),
      fs = require('fs'),
      path = require('path'),
      url = require('url');
const three = require('three');
var root = path.resolve();
var sever = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    // 获取文件状态
    fs.stat(filepath,function(err,stats){
        if(err){
            // 发送404响应
            response.writeHead(404);
            response.end("404 Not Found.");
        }else{
            // 发送200响应
            response.writeHead(200);
            // response是一个writeStream对象，fs读取html后，可以用pipe方法直接写入
            fs.createReadStream(filepath).pipe(response);
        }
    });
});
sever.listen(8080);

console.log('Sever is running 8080');