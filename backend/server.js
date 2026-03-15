import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import Work from "./works.js";
import Account from "./account.js";
import Setting from "./settings.js";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();
app.use(cors());
app.use(express.json());
app.get("/shifa",(req,res)=>{
    res.send("shifa is always")
})
app.put("/settings/:userId",async (req,res)=>{
    try{
        console.log("dove")
       const {theme,font}=req.body;   
       const modifySettings=await Setting.updateMany({userId:req.params.userId},{$set:{theme:theme,font:font}},{upsert:true});
        console.log(modifySettings);
        const settingData=await Setting.find({userId:req.params.userId});
        console.log(`machan :${settingData}`)
        res.json(settingData[0]);
    }
    catch(err){
        console.log(`Machan Error : ${err}`)
    }
})
app.post("/create",async (req,res)=>{
    try{
   const {work,userId}=req.body;
   const createUser=await Work.create({work,userId});
   res.send(createUser);
    }
    catch(err){
        console.log(`Error : ${err}`)
    }
})
app.get("/read/:userId",async (req,res)=>{
    try{
        const readUser=await Work.find({userId:req.params.userId});
        console.log(readUser)
        res.json(readUser)
    }
    catch(err){
        console.log(`Error : ${err}`)
    }
})
app.delete("/remove/:id",async (req,res)=>{
    try{
        const {id}=req.params;
        if(id==="undifined"||id.length !==24){
            return res.status(400).json({message:"Invalid ID recieved"});
        }
        const deleteUser=await Work.findByIdAndDelete(id);
        res.json({message:"Deleted successfully"});
    }
    catch(err){{
        console.log(`Error : ${err}`);
        res.status(500).send(err)
    }
    }
})
app.post("/createAccount",async (req,res)=>{
    try{    
        const {name,password}=await Account.create(req.body);
        res.json({name,password});
        console.log("Account created successfully");
    }
    catch(err){
        console.log(`Error : ${err}`);
        res.status(500).send(err)
    }
})

app.post('/loginAccount',async(req,res)=>{
    try{      
        const {name,password,userId}=req.body;
        const user=await Account.findOne({name:name,password:password});
        console.log(user._id)
        res.json({user:user});    
    }   
    catch(err){
        console.log(`Error : ${err}`);
        res.status(500).send(err)
    }
})

app.use(express.static(path.resolve(__dirname,"../dist")));
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"../dist","index.html"));
})
mongoose.connect("mongodb://localhost:27017/project_data")
.then(()=>console.log("Mongo DB connected successfully"))
.catch((err)=>console.error(`Error : ${err}`))
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})