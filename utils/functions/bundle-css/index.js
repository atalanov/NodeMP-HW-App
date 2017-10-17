import fs from "fs";
import through from "through2";
import request from "request";

export default function bundle(path){
    if(path[path.length-1]!="/")
        path+="/";
    fs.truncate(path+"bundle.css", 0, function(){
        fs.readdir(path, function(err, items) {
            items.forEach(function(item,i,arr){
                addFileContents(item,path,true);
            });
            addFileContents("https://www.epam.com/etc/clientlibs/foundation/main.min.fc69c13add6eae57cd247a91c7e26a15.css",path,false);
        });
    });
}

function addFileContents(fileName,path,localMode){
    if(localMode){
        fs.createReadStream(path+fileName).pipe(through({ 
            objectMode: true, 
            allowHalfOpen: false 
        },
        function (chunk, _, next) {
            this.push(chunk.toString());
            return next();
        },
        function(done){
            done();
        })).pipe(fs.createWriteStream(path+"/bundle.css",{flags:"a"}));
    }
    else{
        request(fileName).pipe(fs.createWriteStream(path+"/bundle.css",{flags:"a"}));
        
    }
}