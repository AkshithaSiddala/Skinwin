import express from "express"
import { Accept,Reject,AppointmentStatus } from "../Controllers/AcceptRejccontroller.js"
import { authuserid } from "../Middleware/Auth.js"



const AcceptandRejectroute= express.Router()

AcceptandRejectroute.post("/accept/:Appointmentid/:userid",Accept)
AcceptandRejectroute.post("/cancel/:Appointmentid/:userid",Reject)
AcceptandRejectroute.get("/viewstatus",authuserid,AppointmentStatus)




export default AcceptandRejectroute