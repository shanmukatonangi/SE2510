const express= require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const User=require("./models/User")

app.use(express.json())
app.use(cors())



async function connectDB(){
    await mongoose.connect("mongodb://127.0.0.1:27017/redbusclone")

}
connectDB().then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("error connecting to database",err)
})


//localhost:8888/register  -> post
app.post("/register",async(req,res)=>{

    try{
        const {email,username,password}=req.body
        const user=await new User({
            email:email,
            username:username,
            password:password
        }).save()
        res.status(201).json({message:"user registered successfully",user})




    }catch(err){
        console.log("error in registering user",err)
        res.status(500).json({message:"error in registering user"})
    }


})

//localhost:8888 -> search -> get
app.get("/",(req,res)=>{
    res.send("hello world")

})

//backend name= loclahost:8888
app.listen(8888,()=>{
    console.log("server is running")
})