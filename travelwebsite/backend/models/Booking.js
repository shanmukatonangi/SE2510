const mongoose= require("mongoose");


const bookingSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    tripId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trip",
        required:true
    },
    seatsBooked:{
        type:Number,
        required:true
    },
    bookingDate:{
        type:Date,
        default:Date.now
    },
    price:{
        type:Number,
        required:true
    }
})

// {
//     userid:"shanmukh123",
//     tripid:"trip123",
//     seatsBooked:2,
//     price:1000,
//     date:28th apr
// }

module.exports=mongoose.model("Booking",bookingSchema)