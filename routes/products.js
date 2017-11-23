import express from "express";
import {Product as product} from "../models";
const router = express.Router();

router.get("/", function(request,response){
    product.get(function(data){response.send(data)});
});
router.get("/:id",function(request,response){
    product.get(function(data){response.send(data)},request.params.id);
});
router.get("/:id/reviews",function(request,response){
    response.send(product.getReviews(request.params.id));
});
router.post("/",function(request,response){
    response.send(product.add(request.body));
});
router.post("/sync",function(request,response){
    response.send(product.sync());
});

export default router;