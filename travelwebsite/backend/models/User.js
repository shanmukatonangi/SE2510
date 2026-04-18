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
}


})

// {
//     "email":"shan@gmail.com",
//     "username":"shanmukh",
//     "password":"123456"
// }

module.exports=mongoose.model("User",userSchema)

//we are exporting collection name as User and schema as userSchema