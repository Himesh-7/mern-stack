require("dotenv").config();
const mongoose=require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const options = {
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],  
}
app.use(express.static("public", options));
const userLib= require("./backend/libs/userlib");


mongoose.set('strictQuery', true);

app.get("/card", function(req, res){
	res.sendFile(__dirname+"/card .html");
});
app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err)
	{
		console.error(err);
	}
	else
	{
		console.log("DB Connected");
		
		//userLib.createFirstUser(function(err,res){
		//	if(err)
		//	{
		//		//console.error(err);
		//	}
		//	else
		//	{
		//		console.log(res);
		//	}
		//});
		userLib.updateUser(function(err,result){
			if(err)
			{
				console.log(err);
			}
			else
			{
				console.log(result);
			}
		});
		app.listen(port, function(){
			console.log('Server started on port '+port);
		});
	}
});


