import validator from "validator";
import Docloginmodel from "../Models/Doctorloginmodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const createtoken=(id)=>{
    const expiresIn = "1h";
    return jwt.sign({id},process.env.JWT_SECRET,{  expiresIn })
}


const Doctorlogin=async(req,res)=>{
    const{email,password}=req.body
    try {
        const DoctorUser= await Docloginmodel.findOne({email})
        if(!DoctorUser){
            return res.json({success:false,message:"Doctor does not exist"})
        }
        const isMatch=await bcrypt.compare(password,DoctorUser.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token=createtoken(DoctorUser._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}


const Doctorregister=async(req,res)=>{
    const {name,email,password,clinicName}=req.body
    try {
        const exists= await Docloginmodel.findOne({email})
        if(exists){
            return res.json({success:false,message:"Doctor already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Enter a strong password"})
        }
        //hashing
        const salt= await bcrypt.genSalt(10)
        const hashpassword= await bcrypt.hash(password,salt)

        const neWDoctor= new Docloginmodel({
            name:name,
            email:email,
            clinicName:clinicName,
            password:hashpassword
        })

        const DoctorUser= await neWDoctor.save()
        const token=createtoken(DoctorUser._id)
        res.json({success:true,token})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}
//list all doctors
const getAllDoctors=async(req,res)=>{
    try {
        const list=await Docloginmodel.find({})
        res.json({success:true,data:list})
        
    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)
    }
}




export {Doctorlogin,Doctorregister, getAllDoctors}

