import express from "express";
import City from "../models/city";

const router = express.Router();

router.get("/", async function(request,response){
    response.send(JSON.stringify(await City.get()));
});

router.post("/", async function(request,response){
    response.send(await City.save(request.body));
});

router.put("/:id", async function(request,response){
    response.send(await City.save(request.body, request.params.id));
});

router.delete("/:id", async function(request,response){
    response.send(await City.delete(request.params.id));
});

export default router;