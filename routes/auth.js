import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
router.post("/auth", function(request, response){
    let user = {
        id: 1,
        name: "admin",
        password: "admin",
        fullName: "Admin Adminov"
    };
    if(request.body.username===undefined||user.password!==request.body.password){
        response.status(403).send({
            success: false,
            message:"So difficult to write admin/admin? Bad username/password"
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
export default router;