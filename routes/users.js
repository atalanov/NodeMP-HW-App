import express from "express";
import {User as user} from "../models";
const router = express.Router();

router.get("/", function(request,response){
    response.send(JSON.stringify(user.get()));
});

router.post("/register",function(request,response){
    response.send(user.register(request.body));
});
router.delete("/:name",function(request,response){
    response.send(user.delete(request.params.name));
});
export default router;