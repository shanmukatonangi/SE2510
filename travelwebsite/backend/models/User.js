const mongoose= require("mongoose")

const userSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
trips:{
  type:[{
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
    }
  }]
}


})

// {
//     "email":"shan@gmail.com",
//     "username":"shanmukh",
//     "password":"123456",
//     "trips":[
//         {
//             "from":"delhi",
//             "to":"mumbai",
//             "date":"2024-06-30",
//             "time":"10:00",
//             "price":500,
//             "seats":5
//         },{
//             "from":"delhi",
//             "to":"hyderabad",
//             "date":"2024-06-30", 
//             "time":"10:00",
//             "price":500,
//             "seats":5
//         }
//     ]
// }

module.exports=mongoose.model("User",userSchema)

//we are exporting collection name as User and schema as userSchema