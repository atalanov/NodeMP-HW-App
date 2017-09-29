import * as config from "./config";
import {User, Product} from "./models";
import * as DirWatcher from "./dirwatcher";
import {Importer} from "./importer";

console.log(config.name);
var user = new User();
var product = new Product();
var dirWatcher = new DirWatcher.DirWatcher();
var importer = new Importer();

/*1. dirwatcher */
/*dirWatcher.watch("data");
dirWatcher.subscribe("dirwatcher:changed",importer.import);*/

/*2. Import
/*importer.import("data/1.csv").then(function(data){
    console.log(data);
});*/

/*3. ImportSync*/
/*console.log(importer.importSync("data/1.csv"));*/