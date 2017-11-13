import http from "http";
import fs from "fs";

http.createServer(function(request,response){

    let content = getContent("Hello world!");
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(content);
    
}).listen(8080);

function getContent(text){
    let content = fs.readFileSync("./index.html").toString("utf-8");
    return content.replace("{message}",text);
}