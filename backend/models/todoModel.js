const mongoose=require("mongoose");
const userSchema1=new mongoose.Schema({
    titel:{type:String},
    isCompleted:{type:Boolean},
    isDeleted:{type:Boolean},
    createdAt:{type:Date}
});
module.exports=mongoose.model("user",userSchema1); 