const { mongo } = require("mongoose");
const mongoose=require("mongosoe");
const userSchema=new mongoose.Schema({
    userName: { type:String,required:true,unique:true},
    yearOfGraduation: {type:Number,min:2000,max:9000},
    createdAt:{type:Date,default: Date.now},
    isDeleted:{type:Boolean}
});
module.exports=mongoose.model("user",userSchema);