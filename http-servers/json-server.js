import http from "http";
http.createServer(function(request,response){

    let content = getContent();
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.end(content);
    
}).listen(8080);

function getContent(){
    const product = {id: 1,name: 'Supreme T-Shirt',brand: 'Supreme',price: 99.99,options: [{ color: 'blue'},{ size: 'XL'}]}
    return JSON.stringify(product);
}

