const userModel = require("../models/userModel");
module.exports.getAllUsers=async function(callback){
    try{
        var users= await userModel.find({});
        callback(null,users);
    }
    catch(err){
        callback(err,null);
    }
}
module.exports.createFirstUser= async function(callback){
    try{
        var user={
            userName:"himesh_7",
            yearOfGraduation:2024,
        };
        var newUser=new userModel(user);
        var result=await newUser.save();
        callback(null,result);
    }
    catch(err)
    {
        callback(err,null);
    }
}
module.exports.updateUser= async function(callback){
    try{
        var query={
            userName:"himesh_7"
        };
        var data ={
            yearOfGraduation: 2030
        };
        var result= await userModel.updateOne(query,data);
        callback(null,result);
    }
    catch(err)
    {
        callback(err,null);
    }
}
module.exports.updateUser= async function(callback){
    try{
        var query={
            userName:"himesh_7"
        };
        var data ={
            yearOfGraduation: 2030
        };
        var result= await userModel.updateOne(query,data);
        callback(null,result);
    }
    catch(err)
    {
        callback(err,null);
    }
}
module.exports.deleteUser= async function(name,callback){
    try{
        
        var result=await userModel.findOne(nam)
    }
    catch(err)
    {
        callback(err,null);
    }
}
module.exports.getUserByFilter= async function(filter,callback){
    try{
var result = await userModel.findOne(filter);
    }
    catch(err){
        callback(err,null);
    }
}
module.exports.createUser= async function(user,callback){
    try{
        var newUser= new userModel(user);
        var create
    }
    catch(err)
    {
        callback(err,null);
    }
}