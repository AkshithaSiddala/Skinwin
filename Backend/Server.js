import express from "express"
import { connectDB } from "./Config/db.js"
import cors from "cors"
import Userroute from "./Routes/Userroute.js"
import "dotenv/config"
import DoctorRoute from "./Routes/Doctorroute.js"
import Appointmentroute from "./Routes/Appointmentroute.js"
import DoctorloginRoute from "./Routes/Doctorloginroute.js"
import AcceptandRejectroute from "./Routes/AcceptRejcroute.js"

//app config
const app=express()
const port=3000

 //middleware
 app.use(express.json())
 app.use(cors())

//db connection
connectDB(); 

//api endpoints
app.use("/api/user",Userroute)
app.use("/api/doclogin",DoctorloginRoute)
app.use("/api/doctor",DoctorRoute)
app.use("/images",express.static("Uploads"))
app.use("/api/appointment",Appointmentroute)
app.use("/api/AcceptandReject",AcceptandRejectroute)



app.get("/",(req,res)=>{
   res.send("API Working")
})

app.listen(port,()=>{
   console.log(`Server running at port ${port} `)
})