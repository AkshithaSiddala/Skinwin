import mongoose from "mongoose";
export const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://akshithasiddala022:Akshitha@cluster0.h10emwj.mongodb.net/SkinWinn").then(()=>console.log("DB connected"))
}



