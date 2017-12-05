import mongoose from "mongoose";

let CitySchema = new mongoose.Schema({
    name:{type:String},
    country:{type:String},
    capital:{type:Boolean},
    location:{
        lat:{type:Number},
        lon:{type:Number}
    },
    lastModifiedDate:{type:Date, default:Date.now}
});

export let City = mongoose.model("City", CitySchema);