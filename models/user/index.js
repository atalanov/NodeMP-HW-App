import dbUser from "../../mongo-models/user";

export default class User{
    constructor(){
        console.log("User module");
    }
    static async get(name){
        return dbUser.findOne({name:name}).exec();
    }
    static async register(data){
        console.log(data);
        return await dbUser.create({
            name: data.name,
            password: data.password
        },function(err,data){
            if(err){
                console.log(err.message);
            }
        });
    }
    static async delete(name){
        return await dbUser.remove({name:name});
    }
}