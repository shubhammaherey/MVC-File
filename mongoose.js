const express=require("express");
const mongoose=require("mongoose");
var session = require('express-session');
const bodyParser = require('body-parser');
const UserController = require('./controller/user');
const TaskController = require('./controller/task');

const port=7000;
const app=express();




app.use(bodyParser.json());

app.set('trust proxy', 1); // trust first proxy

app.use(session({
  secret: 'user',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
/*
Session contains

Key-pair values

Session Storage --> database
*/
// Aircraft

hehe();

async function hehe(){
    await mongoose.connect("mongodb+srv://shubham:hellobc@cluster0.ktyug3k.mongodb.net/?retryWrites=true&w=majority");
}

app.use((req, res, next) => {
    if(req.path.startsWith("/task")){
        if(! req.session.loggedIn) {
            return res.send("Login first");
        }
    }
    next();
})

app.use("/user", UserController);
app.use("/task", TaskController);

app.listen(port,()=>{
    console.log(`hup`);
})