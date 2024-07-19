import express from "express"
import { Bookappointment,Cancelappointment, getAppointment } from "../Controllers/Appointmentcontroller.js"
import {authmiddleware} from "../Middleware/Auth.js"
import { authuserid } from "../Middleware/Auth.js"

const Appointmentroute= express.Router()

Appointmentroute.post("/book/:doctorid",authuserid,Bookappointment)
Appointmentroute.post("/cancel",Cancelappointment)
Appointmentroute.get("/list",authmiddleware,getAppointment)

export default Appointmentroute