import mongoose from "mongoose";

const DoctorSchema= new mongoose.Schema({
    patientname:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true, 
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    Medication:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usermodel"
    },
    doctorid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docloginmodel"
    }




})
const Doctormodel= mongoose.model("doctor",DoctorSchema)
export default Doctormodel