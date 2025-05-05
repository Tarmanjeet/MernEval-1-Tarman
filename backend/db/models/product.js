const mongoose=require("mongoose");

let productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["Electronics","Computers","MobilePhones","Clothes"],
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("Product",productSchema);