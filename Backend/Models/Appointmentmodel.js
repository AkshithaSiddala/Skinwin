import mongoose from "mongoose";

const AppointSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true
    },
    doctorid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docloginmodel"
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usermodel"
    }

})
const Appointmentmodel = mongoose.model("appointment", AppointSchema)
export default Appointmentmodel

