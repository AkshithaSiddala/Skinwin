import express from "express"
import { Userlogin,Userregister } from "../Controllers/Usercontroller.js"

const Userroute= express.Router()
Userroute.post("/Userregister",Userregister)
Userroute.post("/Userlogin",Userlogin)



export default Userroute