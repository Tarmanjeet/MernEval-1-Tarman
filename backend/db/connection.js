const mongoose=require('mongoose');

let mongoUrl="mongodb://localhost:27017/";
mongoose.connect(mongoUrl).then(()=>console.log("Connected"));
