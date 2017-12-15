import express from "express";
import City from "../models/city";

const router = express.Router();

router.get("/", function(request,response){
    response.send(JSON.stringify(City.get()));
});

router.post("/", function(request,response){
    response.send(City.save(request.body));
});

router.put("/:id", function(request,response){
    response.send(City.save(request.body, request.params.id));
});

router.delete("/:id", function(request,response){
    response.send(City.delete(request.params.id));
});

export default router;