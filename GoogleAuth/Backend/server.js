const express= require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const {OAuth2Client} = require("google-auth-library")

app.use(cors())
app.use(express.json())


async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/googleApp")
        console.log("Connected to MongoDB")

    }catch(err){
        console.log(err)
    }
}

connectDB()

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    picture: String
})

const User = mongoose.model("User", userSchema)

const googleClient=new OAuth2Client("666483799718-dqjlm9endasrjfl9i1u9j4ptomicdmb7.apps.googleusercontent.com")


app.post("/auth/google",async(req,res)=>{

try {

    const {tokenId} = req.body
    //ksagfiuwgfiugwiur3487y4gtuy
   const ticket= await googleClient.verifyIdToken({
        idToken:tokenId ,
        audience:"666483799718-dqjlm9endasrjfl9i1u9j4ptomicdmb7.apps.googleusercontent.com"

    })

    // ticket={
    //     getPayload: function(){
    //         return {
    //             name:"John Doe",
    //             email:"johndoe@gmail.com",
    //             sub:"1234567890",
    //             picture:"https://example.com/johndoe.jpg"
    //         }
    //     }
    // }

    const {name,email,sub,picture} = ticket.getPayload()

    let user=await User.findOne({email})
    // user={
    //     name:"shan"
    // }
    // user={}

    if(user){
        res.json("User already exists and authenticated successfully")
    }else{
        user=new User({
            name,
            email,
            googleId:sub,
            picture
        })
        await user.save()
        res.json({message:"User authenticated successfully",user})
    }


//     let user = await User.findOne({email})

//     if(!user){
//         user = new User({
//             name,
//             email,
//             googleId:sub,
//             picture
//         })
//         await user.save()
//     }
//    res.json({message:"User authenticated successfully",user})

    
} catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal Server Error"})
    
}




})


       

app.get("/",(req,res)=>{
    res.send("Hello World")
}
)


app.listen(8888,()=>{
    console.log("Server is running on port 8888")
}
)