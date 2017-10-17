import fs from "fs";
import through from "through2";

export default function printHelpMessage() {
    fs.createReadStream("./utils/help.txt").pipe(through({ 
        objectMode: true, 
        allowHalfOpen: false 
    },
    function (chunk, _, next) {
        this.push(chunk.toString());
        return next();
    },
    function(done){
        done();
    })).pipe(process.stdout);    
}
