let products=require("../db/models/product");
let mongoose=require("mongoose");

let getAllProducts=async(req,res)=>{
    let query={};
    let category=req.query.category;
    let minPrice=req.query.minPrice;
    let maxPrice=req.query.maxPrice;

    if(category && category!=""){
        query.category=category;
    }

    if((minPrice && minPrice>0) || (maxPrice && maxPrice>0)){
        if(minPrice && maxPrice && minPrice>maxPrice){
            return res.status(400).json({success:false,message:"minPrice can't get greater than maxPrice"});
        }
        if(minPrice && maxPrice){
            query.price={$gte:minPrice,$lte:maxPrice};
        }
        else if(minPrice && !maxPrice){
            query.price={$gte:minPrice};
        }
        else if(maxPrice && !minPrice){
            query.price={$lte:maxPrice};
        }
    }
    let allProducts=await products.find(query);
    return res.status(200).json({success:true,message:"Products fetched successfully",data:allProducts});
}

let createProduct=async(req,res)=>{
    let body=req.body;
    let newProduct={
        name:body.name,
        price:body.price,
        category:body.category,
        quantity:body.quantity
    }
    await products.insertOne(newProduct);
    if(!newProduct.name || !newProduct.desc || !newProduct.price || !newProduct.category){
        return res.status(400).json({success:false,message:"Please provide all the required fields"});
    }
    return res.status(200).json({success:true,message:"Product created successfully",data:newProduct});
}

let updateProduct=async(req,res)=>{
    let productId = req.params.id;
    let newPrice = req.body.price;
    let product = await products.findById(productId)
    if(newPrice && newPrice > 0)
    {
        product.price = newPrice
    }
    await product.save()
    res.status(200).json({success:true,message:"Product Updated successfully"})
}

let deleteProduct=async(req,res)=>{
    let productId = req.params.id;
    await products.deleteOne({productId});
    res.status(200).json({success:true,message:"Product Deletd successfully"});
}

module.exports={
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}