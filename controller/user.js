const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        maxLength: 100,
        required : true
    },
    password: {
        type: String,
        minLength: 8,
        required : true
    }
});

const User = new mongoose.model("User", userSchema);

router.post("/register", async (req, res) => {
    let user = new User(req.body);
    try {
        let x = await user.save();
        req.session.loggedIn = true;
        req.session.userId = x._id;
        return res.send("Register successfully");
    }
    catch(e) {
        console.error(e);
        return res.send("Error");
    }
});
router.post("/login", async(req, res) => {
    
    const match = await User.findOne({
        email:req.body.email,
        password:req.body.password
    });
    if(match){
        req.session.userId = match._id;
        req.session.loggedIn = true;
        return res.send("Got it");
    }
    else{
        return res.send("Failed");
    }
})

router.get("/logout", async(req, res) => {
    req.session.loggedIn = false;
    return res.send("Logged out successfully.");
})

module.exports = router;