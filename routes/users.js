import express from "express";
import {User as user} from "../models";
const router = express.Router();

router.get("/", function(request,response){
    response.send(user.get());
});

router.post("/register",function(request,response){
    response.send(user.register(request.body));
})

export default router;