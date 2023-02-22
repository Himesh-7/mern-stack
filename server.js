require('dotenv').config();
const userLib = require("./backend/libs/userlib");
const todoLib = require("./backend/libs/todolib");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5010;
const options = {
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],  
}
app.use(express.static("public", options));
app.use(express.static("frontend1"));
app.use(express.json());
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/frontend/html/index.html');
// });
app.get("/api/todos",function(req,res){
	todoLib.getAllTodos(function(err,todos){
		if(err){
			res.json({status: "error",message:"err",data : null});
		}
		else{
			res.json({status:"success",data:todos});
		}
	});
});
app.post("/api/todos",function(req,res){
	const todo=req.body;
	todoLib.createTodo(todo,function(err,dbtodo){
		if(err)
		{
			res.json({status:"error",data:null});
		}
		else{
			res.json({status:"success",data:dbtodo});
		}
	});
});
// app.use(express.static(__dirname + '/public'));
app.get('/todo',function(req,res){
	res.sendFile(__dirname+'/frontend1/html/todo.html');
});
app.get('/weather', function(req, res) {
    res.sendFile(__dirname + '/weather.html');
});
app.get('/card', function(req, res) {
    res.sendFile(__dirname + '/card.html');
});
app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/Resume', function(req, res) {
    res.sendFile(__dirname + '/Resume.html');
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to database');
        // TODO : donot create a user if atleast 1 user exist in the table
        //    userLib.createFirstUser(function(err,result){
		//  	if(err){
		//  		// console.error(err);
		//  	}
		//  	else{
		//  		console.log(result);
		//  	}
		//  });
		// userLib.createUser({userName: "beingzero", yearOfGraduation: 2025},function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.updateUser(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		/*userLib.deleteUser("Himesh",function(err,result){
			if(err){
				console.error(err);
			}
			else{
				console.log(result);
			}
		});*/
		//   userLib.getUserByFilter({userName: "himesh_7"}, function(err,result){
		// 	if(err){
		//  		console.error(err);
		// 	}
		//  	else{
		// 		console.log(result);
		// 	}
		//  });
		//  userLib.getAllUsers(function(err,result){
		//  	if(err){
		//  		console.error(err);
		//  	}
		//  	else{
		//  		console.log(result);
		//  	}
		//  });

		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
		
	}
});