import express from "express";
import {User as user} from "../models";
const router = express.Router();

router.get("/", function(request,response){
    response.send(user.get());
});

export default router;