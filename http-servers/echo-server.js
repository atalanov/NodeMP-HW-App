import http from "http";
http.createServer(function(request,response){    
    response.writeHead(200);
    request.pipe(response);     
}).listen(8080);