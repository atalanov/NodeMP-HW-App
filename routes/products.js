import express from "express";
import {Product as product} from "../models";
const router = express.Router();

router.get("/", async function(request,response){
    response.send(JSON.stringify(await product.get()));
});
router.get("/:id", async function(request,response){
    response.send(JSON.stringify(await product.get(request.params.id)));
});
router.get("/:id/reviews",async function(request,response){
    response.send(await product.getReviews(request.params.id));
});
router.post("/",async function(request,response){
    response.send(await product.add(request.body));
});
router.post("/sync",async function(request,response){
    response.send(await product.sync());
});
router.delete("/:id",async function(request,response){
    response.send(await product.delete(request.params.id));
})

export default router;