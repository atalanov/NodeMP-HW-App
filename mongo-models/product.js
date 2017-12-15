import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
    name:{type:String},
    brand:{type:String},
    company:{type:String},
    price:{type:String},
    isbn:{type:String},
    lastModifiedDate:{type:Date, default:Date.now}
});

export let Product = mongoose.model("Product", ProductSchema);