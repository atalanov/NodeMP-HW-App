import dbProduct from "../../database/product";
import {Importer} from "../../importer";

export default class Product{
    constructor(){
        console.log("Product module");
    }
    static get(callback,id){
        if(id){
            return dbProduct.findById(id).then((data)=>{
                  callback(JSON.stringify(data));
                });
        }
        return dbProduct.findAll().then(function(data){
            callback(JSON.stringify(data));
        });
    }
    static add(product){
        dbProduct.create({
            name: product.name,
            brand:product.brand,
            company:product.company,
            price:product.price,
            isbn:product.isbn
        });
        return product;
    }
    static getReviews(){
        return "Many-many reviews";
    }
    static sync(){
        const importer = new Importer();
        console.log("insertion started");
        importer.import("data/1.csv").then(function(data){
            return dbProduct.bulkCreate(JSON.parse(data));
        });
        return true;
    }
}

