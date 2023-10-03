const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const taskSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true
    },
    name: {
        type: String,
        maxLength: 100,
        required : true
    },
    timestamp: {
        type: Date
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    completed: {
        type: Boolean
    }
});

const Task = new mongoose.model("Task", taskSchema);

router.get("/", async(req, res) => {
    console.log(req.session.userId);
    const match = await Task.find({user: req.session.userId}).populate("user");
    if(match){
        return res.json(match)
    }
    else{
        return res.send("Failed");
    }
})

router.post("/create", async (req, res) => {
    let body = {...req.body};
    
    body.user = req.session.userId;

    let task = new Task(body);
    try {
        await task.save();
        return res.send("Task added successfully");
    }
    catch(e) {
        console.error(e);
        return res.send("Error");
    }
});

router.post("/read/:id", async (req, res) => {
    const match = await Task.find({ id: req.params.id, user: req.session.userId }).populate("user");
    if(match){
        return res.json(match);
    }
    else{
        return res.send("No such task exists.");
    }
});
router.get("/update/:id", async(req, res) => {
    const match = await Task.findOneAndUpdate({ id: req.params.id, user: req.session.userId }, req.body, { 
        new: true
    }).populate("user");
    if(match){
        return res.json(match);
    }
    else{
        return res.send("No such task exists.");
    }
})

module.exports = router;