const express=require("express");
const {getAllProducts,createProduct,updateProduct,deleteProduct}=require("../controllers/product.controller");
let productRouter=express.Router();

productRouter.get("/",getAllProducts);

productRouter.post("/create",createProduct);

productRouter.patch("/update/:id",updateProduct);

productRouter.delete("/delete/:id",deleteProduct);

module.exports=productRouter;