import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    password:{
        type:String,
        validate: {
            validator: function(v) {
            return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
            },
            message: 'your password should contain not less than 8 characters with at least 1 letter and 1 number!'
        },
    },
    lastModifiedDate:{type:Date, default:Date.now}
});

let User = mongoose.model("user", UserSchema);

export default User;