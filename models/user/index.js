import dbUser from "../../database/user";
export default class User{
    constructor(){
        console.log("User module");
    }
    static get(name){
        return dbUser.findOne({
            where: {name: name}});
    }
    static async register(data){
        console.log(data);
        return await dbUser.create({
            name: data.name,
            password: data.password
        });

    }
}