import express from "express";
import {User as user} from "../models";
const router = express.Router();

router.get("/",async function(request,response){
    response.send(JSON.stringify(await user.get()));
});

router.post("/register",async function(request,response){
    response.send(await user.register(request.body));
});
router.delete("/:name", async function(request,response){
    response.send(await user.delete(request.params.name));
});
export default router;