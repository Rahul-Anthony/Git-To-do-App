import mongoose from "mongoose";
import Account from "./account.js";
const userSchema=mongoose.Schema({theme:{type:String,default:"/src/assets/default.png"},font:{type:String,default:"serif"},userId:{type:mongoose.Schema.Types.ObjectId,ref:Account}});
const Setting=mongoose.model("Setting",userSchema);
export default Setting;