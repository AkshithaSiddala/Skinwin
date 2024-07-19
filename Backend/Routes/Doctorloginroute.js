import express from "express"
import { Doctorlogin,Doctorregister,getAllDoctors } from "../Controllers/Doctorlogincontroller.js"

const DoctorloginRoute= express.Router()

DoctorloginRoute.post("/doctorregister",Doctorregister)
DoctorloginRoute.post("/doctorlogin",Doctorlogin)
DoctorloginRoute.get("/doctordetails",getAllDoctors)

export default DoctorloginRoute