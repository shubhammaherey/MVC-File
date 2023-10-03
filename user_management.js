const mongoose=require("mongoose")
const express=require("express")
const port = 8000;
const app = express();

User()

async function User(){
    await mongoose.connect("mongodb+srv://shubham:hellobc@cluster0.ktyug3k.mongodb.net/?retryWrites=true&w=majority");

}