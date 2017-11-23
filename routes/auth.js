import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

const router = express.Router();
router.post("/auth", function(request, response){
    let user = User.get(request.body.username).then(function(user){
        console.log(user);
        if(request.body.username===undefined||user.password!==request.body.password){
            response.status(403).send({
                success: false,
                message:"Error username/password is incorrect"
            });
        } else{
            let token = jwt.sign({
                id: user.id,
            }, 'secret', {
                expiresIn: 120
            });
            response.json(token);
        }
    });
});
export default router;