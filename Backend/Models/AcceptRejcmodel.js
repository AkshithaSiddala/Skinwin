import mongoose from "mongoose";

const AcceptandRejectSchema = new mongoose.Schema({

    Message:{
        type:String,
        required:true
    },
    Appointmentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointmentmodel"
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usermodel"
    }


})
const AcceptRejectmodel= mongoose.model("AcceptandReject", AcceptandRejectSchema)
export default AcceptRejectmodel

