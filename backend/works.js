import mongoose from "mongoose";
import Account from "./account.js";
const userSchema=mongoose.Schema({work:{min:3,max:20,type:String},userId:{type:mongoose.Schema.Types.ObjectId,ref:Account}});
const Work=mongoose.model("Work",userSchema);
export default Work;
