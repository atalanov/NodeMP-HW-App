import jwt from "jsonwebtoken";
import express from "express";
const router = express.Router();
function checkToken(request,response,next){
    let token = request.headers["x-access-token"];
    console.log(token);
    if(token){
        jwt.verify(token, "secret", function(err,decoded){
            if(err){
                response.json({
                    success:false, 
                    message:"Achtung! Token authentication fault! Intergalaxy police is on the way.",
                    error:err
                });
            } else {
                next();
            }
        });
    } else{
        response.status(403).send({
            success:false,
            message: "No token. atata"
        });
    }
}

router.all("*", checkToken);
export default router;