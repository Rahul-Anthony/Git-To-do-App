import mongoose from "mongoose";
const userSchema=mongoose.Schema({name:{min:1,max:20,type:String},password:{min:1,max:20,type:String}});
const Account=mongoose.model("Account",userSchema);
export default Account;
