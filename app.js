// Load HTTP module
const mongoose=require("mongoose")
const express=require("express")
const port = 8000;
// const wiki = require("./wiki.js");
const app = express();

// app.use("/wiki", wiki);

app.get("/", function(req, res) {
    res.send("Hello");
})
app.get(/.*fish$/, function (req, res) {
    res.send("JYADA MAT SEARCH KR BSDK");
});

mongoose.connect("mongodb+srv://shubhammaherey:hellobc@cluster0.vymkgxk.mongodb.net/?retryWrites=true&w=majority");

app.listen(port, function () {
  console.log(`Server running at http://${port}/`);
});
