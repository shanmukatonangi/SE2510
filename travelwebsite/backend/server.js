const express= require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const User=require("./models/User")
const Trip=require("./models/Trip")
const Booking=require("./models/Booking")

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


// const tripSchema= new mongoose.Schema({
//     from:{
//         type:String,
//         required:true
//     },
//     to:{
//         type:String,
//         required:true
//     },
//     date:{
//         type:Date,
//         required:true
//     },
//     time:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:true
//     },
//     seats:{
//         type:Number,
//         required:true
//     },
//     passengers:[
//         {
//             name:{
//                 type:String,
//                 required:true},
//                 seats:{
//                     type:Number,
//                     required:true}
//         }
//     ]

// })

// {
//     "from":"delhi",
//     "to":"mumbai",
//     "date":"2024-06-30",
//     "time":"10:00",
//     "price":500,
//     "seats":5,
//     "passengers":[
//         {
//             "name":"shanmukh",
//             "seats":2
//         },{
//             "name":"sai",
//             "seats":3
//         }
//     ]
// }

// let Trip=mongoose.model("trip",tripSchema)

//localhost:8888/addtrip -> post
app.post("/addtrip",async(req,res)=>{
    try{
        const {from,to,date,time,price,seats}=req.body
        const newtrip=await new Trip({
            from:from,
            to:to,
            date:date,
            time:time,
            price:price,
            seats:seats

        }).save()
        res.status(201).json({message:"trip added successfully",trip:newtrip})
        


    }catch(err){
        console.log("error in adding trip",err)
        res.status(500).json({message:"error in adding trip"})
    }


})

//hyderabad to bangalore on 2024-06-30 -> get

//localhost:8888/search?from=hyderabad&to=bangalore&date=2024-06-30

//localhost:8888/search -> get
app.get("/search",async(req,res)=>{
   try{
    const {from,to,date}=req.query
    const specifictrips=await Trip.find({from:from,to:to,date:date})
    res.status(200).json({message:"trips found successfully",trips:specifictrips})


   } catch(err){
    console.log("error in searching trips",err)
    res.status(500).json({message:"error in searching trips"})
   }
})


app.get("/alltrips",async(req,res)=>{
    try{
        const alltrips=await Trip.find()
        res.status(200).json({message:"all trips found successfully",trips:alltrips})


    }catch(err){
        console.log("error in fetching all trips",err)
        res.status(500).json({message:"error in fetching all trips"})
    }
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

//localhost:8888/book -> post

app.post("/book",async(req,res)=>{
    try{
        const {userId,tripId,seatsBooked,price}=req.body

        const trip=await Trip.findById(tripId)

        if(trip.seats<seatsBooked){
            return res.status(400).json({message:"not enough seats available"})
        }else{
            trip.seats=trip.seats-seatsBooked;
            trip.passengers.push({name:userId,seats:seatsBooked})
            await trip.save()

            const booking=await new Booking({
                userId:userId,
                tripId:tripId,
                seatsBooked:seatsBooked,
                price:price
            }).save()

            const user=await User.findById(userId)
            user.trips.push({
                from:trip.from,
                to:trip.to,
                date:trip.date,
                time:trip.time,
                price:trip.price,
                seats:seatsBooked
            })
            await user.save()   

            res.status(201).json({message:"trip booked successfully",booking})

        }








    }catch(err){
        console.log("error in booking trip",err)
        res.status(500).json({message:"error in booking trip"})
    }
})

//backend name= loclahost:8888
app.listen(8888,()=>{
    console.log("server is running")
})