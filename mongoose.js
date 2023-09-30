const express=require("express")
const mongoose=require("mongoose")
const port=7000
const app=express()
hehe()

async function hehe(){
    await mongoose.connect("mongodb+srv://shubham:hellobc@cluster0.ktyug3k.mongodb.net/?retryWrites=true&w=majority");
    const aircraftschema = new mongoose.Schema({
        name: {
            type:String,
            required : true
        },
        type: {
            type: String,
            required : true
        }
    });
    const aircraft = new mongoose.model("aircraft", aircraftschema);

    const aircraft1 = new aircraft({
        name : "Dornier",
        type : "Transport"
    })  
    const aircraft2 = new aircraft({
        name : "Rafael",
        type : "Fighter"
    })  
    const aircraft3 = new aircraft({
        name : "Sukhoi_30",
        type : "Fighter"
    }) 
    const aircraft4 = new aircraft({
        name : "IL_78",
        type : "Transport"
    })  
await aircraft1.save()
await  aircraft2.save()
await  aircraft3.save()
await  aircraft4.save()
console.log("Successfully saved")
}

app.listen(port,()=>{
    console.log("Hurrayyyyy");
})