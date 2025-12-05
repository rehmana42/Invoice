import mongoose from "mongoose";

const userSchema=mongoose.Schema({
   name:{
    type:String
   },
   email:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:String
   },

   invoice:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'invoice'
   },
  

})

export const userModel=mongoose.model("user",userSchema)