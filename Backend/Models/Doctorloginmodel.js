import mongoose from "mongoose";

const DocloginSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    clinicName:{
        type:String,
        required:true
    }


})
const Docloginmodel= mongoose.model("doctorlogin",DocloginSchema)
export default Docloginmodel