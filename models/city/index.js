import {City as dbCity} from "../../mongo-models/city";

export default class City{
    constructor(){
        console.log("City class");
    }
    static async get(){
        return await dbCity.find().exec();
    }
    static async save(city,id){
        if(id){
            return await dbCity.update({_id: id}, city, {upsert: true, setDefaultsOnInsert: true});
        }
        return await dbCity.create(city);
    }
    static async delete(id){
        return await dbCity.remove({
            _id:id
        });
    }
}