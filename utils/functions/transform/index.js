import through from "through2";
export default function transform() { 
    var csv="";
    fs.createReadStream(filePath).pipe(through({ 
        objectMode: true, 
        allowHalfOpen: false 
    },
    function (chunk, _, next) {
        csv+=chunk.toString();
        return next();
    },
    function(done){
        this.push(parseToJSON(csv));
        done();
    })).pipe(process.stdout);
} 

function parseToJSON(data){
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

    