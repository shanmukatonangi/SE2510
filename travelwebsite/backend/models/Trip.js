const mongoose = require('mongoose');

const tripSchema= new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    seats:{
        type:Number,
        required:true
    },
    passengers:[
        {
            name:{
                type:String,
                required:true},
                seats:{
                    type:Number,
                    required:true}
        }
    ]

})

module.exports=mongoose.model("Trip",tripSchema)