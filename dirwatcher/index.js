import * as fs from "fs";
import * as EventEmitter from "events";


export class DirWatcher extends EventEmitter.EventEmitter{
    filesCount;
    filesList;
    constructor(){
        super();
        this.filesCount=0;
        this.filesList=[];
    }
    
    watch(path, delay){
        var that = this;
        setInterval(this.readDirectory, 1000, path, function(err, data){
            if (err) {
                throw err;
            }
            if(data.length>that.filesCount){
                console.log("Output:");
                data.forEach(function(item,i,arr){
                    if(that.filesList.indexOf(item)==-1)
                        that.emit("dirwatcher:changed", path+"/"+item);
                });
            }
            else{
                console.log("No changes");
            }
            that.filesCount=data.length;
            that.filesList=data;
        });
    }
    readDirectory(path, callback){
        fs.readdir(path, callback);
    }
    subscribe(event, listener){
        
        this.addListener("dirwatcher:changed",listener)
    }
}