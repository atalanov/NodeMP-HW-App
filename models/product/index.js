import {Product as dbProduct} from "../../mongo-models/product";
import {Importer} from "../../importer";

export default class Product{
    constructor(){
        console.log("Product module");
    }
    static async get(id){
        if(id){
            return await dbProduct.findById(id).exec();
        }
        return await dbProduct.find().exec();
    }
    static async add(product){
        return await dbProduct.create({
            name: product.name,
            brand:product.brand,
            company:product.company,
            price:product.price,
            isbn:product.isbn
        });
    }
    static getReviews(){
        return "Many-many reviews";
    }
    static async sync(){
        const importer = new Importer();
        console.log("insertion started");
        return await importer.import("data/1.csv").then(function(data){
            return dbProduct.create(JSON.parse(data));
        });
    }
    static async delete(id){
        return await dbProduct.remove({
            _id:id
        }).exec();
    }
}

