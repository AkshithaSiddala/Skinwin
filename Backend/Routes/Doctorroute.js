import express from "express"
import { addpatient,listpatient,removepatient,listpatienthistory} from "../Controllers/Doctorcontroller.js"
import { authenticate,authmiddleware } from "../Middleware/Auth.js";
import multer from "multer"

const DoctorRoute= express.Router()

const storage= multer.diskStorage({
    destination:"Uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})

DoctorRoute.post("/add",upload.single("image"),authmiddleware,addpatient)
DoctorRoute.get("/list",authmiddleware,listpatient)
DoctorRoute.post("/remove",removepatient)
DoctorRoute.get("/patienthistory",authenticate,listpatienthistory)

export default DoctorRoute
