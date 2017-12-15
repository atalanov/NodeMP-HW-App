import http from "http";
import {MongoClient} from 'mongodb';
const url = 'mongodb://localhost:27017/nodejs-edu';

http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/json'});
    let content = getContent().then(
        data=>response.end(data)
    );
}).listen(8080);

function getContent(callback){
    return new Promise(function(resolve,reject){
        MongoClient.connect(url, function(err, db) {
            db.collection('cities').find().toArray(function(err, items) {
                let city = items[Math.round(Math.random()*(items.length-1))];
                db.close();
                resolve(JSON.stringify(city));
                
            });
        });
    });    
}

