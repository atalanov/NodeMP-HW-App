import http from "http";
import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/nodejs-edu';
mongoose.connect(url);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
let CitySchema =  new mongoose.Schema({
    name : String,
    country : String,
    capital : Boolean,
    location : {
        lat : Number,
        long : Number
    }
});
let City = mongoose.model("cities",CitySchema);
http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/json'});
    let query = City.find();
    query.exec(function(err,items){
        let city = items[Math.round(Math.random()*(items.length-1))];
        response.end(JSON.stringify(city));
    });
}).listen(8080);

