import * as fs from "fs";
import parse from "csv-parse";
export class Importer{
    constructor(){
    }
    import(path,callback) {
        let p = new Promise((resolve, reject)=>{
            try{
                var arr=[];
                var output=[];
                var parser = parse();
                fs.createReadStream(path).pipe(parser).on("readable", function(){
                    var record;
                    while (record = parser.read()) {
                        arr.push(record);
                    }
                }).on("finish",function(){
                    for(let i=1;i<arr.length;i++){
                        let obj = {};
                        for(let j=0;j<arr[0].length;j++){
                            obj[arr[0][j]]=arr[i][j];
                        }
                        output.push(obj);
                    }
                    resolve(JSON.stringify(output));
                });
                
                
            }
            catch(err){
                reject(console.error(err));
            }
        });
        return p;
    }
    importSync(path){
        var data = fs.readFileSync(path,'utf8')
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
}
