require("dotenv").config();
const mongoose=require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const userLib= require("./backend/libs/userLib");
mongoose.set('strictQuery', true);
app.get("/", function(req, res){
	res.sendFile(__dirname+"/Resume.html");
});
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err)
	{
		console.error(err);
	}
	else
	{
		console.log("DB Connected");
		//todo: donot create a user if atleast
		userLib.createFirstUser(function(err,re){
			if(err)
			{
				console.error(err);
			}
			else
			{
				console.log(res);
			}
		});
		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});


