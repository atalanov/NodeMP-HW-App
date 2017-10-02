import * as EventEmitter from "events";
import * as chokidar from "chokidar";

export class DirWatcher extends EventEmitter.EventEmitter{
    constructor(){
        super();
    }
    
    watch(path, delay){
        var watcher = chokidar.watch(path, {
            ignored: /(^|[\/\\])\../,
            persistent: true,
            interval: delay
        });
        watcher.on("add", function(){
            this.emit("dirwatcher:changed");
        });
        watcher.on("change", function(){
            this.emit("dirwatcher:changed");
        });
    }
    subscribe(listener){
        this.addListener("dirwatcher:changed",listener)
    }
}