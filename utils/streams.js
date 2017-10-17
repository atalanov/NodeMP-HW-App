//npm run babel-node -- ./utils/streams.js --help

import parseArgs from "minimist";
import {help,inputoutput,transform,transformFile,bundle} from "./functions";

if(process.argv.length>2){
    var args = parseArgs(process.argv.slice(2),{
        alias: {
            "help":"h",
            "action":"a"
        },
        default: {

        },
        unknown: (arg)=>{
            if(["help","h","action","a"].indexOf(arg)==-1){
                console.error("Unknown command "+arg);
                return false;
            }
        }
    });
    if(args["help"]){
        help();
    }
    else if(args["action"]){
        switch(args["action"]){
            case "io":
                inputoutput(args["file"]);
                break;
            case "transform":
                transform();
                break;
            case "transform-file":
                transformFile(args["file"]);
                break;
            case "bundle-css":
                bundle(args["path"]);
        }
    }
}
else{
    console.error("u can't start util without arguments! :( Use --help");
}