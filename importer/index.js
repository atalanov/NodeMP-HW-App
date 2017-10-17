import * as fs from "fs";
import {promisify} from "util";
import parse from "csv-parse";
export class Importer{
    constructor(){
    }
    import(path) {
        var readFileAsync = promisify(fs.readFile);
        return readFileAsync(path,'utf8').then(ParseToJSON);
    }
    importSync(path){
        var data = fs.readFileSync(path,'utf8');
        return ParseToJSON(data);
    }
}

function ParseToJSON(data){
    var arr = [];
    var output=[];
    var parser = new parse.Parser();
    parser.push = function(record) {
        return arr.push(record);
      };
    parser.__write(data, false);
    for(let i=1;i<arr.length;i++){
        let obj = {};
        for(let j=0;j<arr[0].length;j++){
            obj[arr[0][j]]=arr[i][j];
        }
        output.push(obj);
    }
    return JSON.stringify(output);
}
