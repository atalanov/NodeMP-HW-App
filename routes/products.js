import express from "express";
import {Product as product} from "../models";
const router = express.Router();

router.get("/", function(request,response){
    response.send(product.get());
});
router.get("/:id",function(request,response){
    response.send(product.get(request.params.id));
});
router.get("/:id/reviews",function(request,response){
    response.send(product.getReviews(request.params.id));
});
router.post("/",function(request,response){
    response.send(product.add(request.body));
});

export default router;