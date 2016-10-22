var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

app.use(express.static('public')); //always where the index.html is usually includes dirname

app.use(bodyParser.json());


app.use(session({secret: 'keyboard cat'}))

app.post("/api/screenname", function(req, res){
  session.screenname = req.body.screenname;
  res.status(200).send('screenname saved');
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", addScreenname, chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listening on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});


function addScreenname(req, res, next) {
	console.log(8888888888, session);
	req.body.screenname = session.screenname;
	next();
}