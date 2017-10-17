import fs from "fs";
import through from "through2";
export default function inputOutput(filePath) {
    process.stdin.pipe(through({ 
        objectMode: true, 
        allowHalfOpen: false 
    },
    function (chunk, _, next) {
        this.push(chunk.toString().toUpperCase());
        return next();
    })).pipe(process.stdout);
} 
