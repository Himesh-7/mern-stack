
const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    userName: { type:String,required:true,unique:true},
    yearOfGraduation: {type:Number,min:2000,max:9000},
    createdAt:{type:Date,default: Date.now},
    isDeleted:{type:Boolean,default:false}
});
module.exports=mongoose.model("user",userSchema);
const userSchema1=new mongoose.Schema({
    titel:{type:String},
    isCompleted:{type:Boolean},
    isDeleted:{type:Boolean},
    createdAt:{type:Date}
});