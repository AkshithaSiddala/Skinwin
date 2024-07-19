import validator from "validator";
import Usermodel from "../Models/Usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const createtoken=(id,email)=>{
    return jwt.sign({id,email},process.env.JWT_SECRET,{ expiresIn: '1h' })
}

const Userlogin=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user= await Usermodel.findOne({email})
        if(!user){
            return res.json({success:false,message:"user does not exist"})
        }
        const isMatch= await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"invalid credentials"})
        }
        const token=createtoken(user._id,user.email)
        res.json({success:true,token})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }

}


const Userregister=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const exists= await Usermodel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User already exists"})
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

        const newUser= new Usermodel({
            name:name,
            email:email,
            password:hashpassword
        })

        const user= await newUser.save()
        const token=createtoken(user._id,user.email)
        res.json({success:true,token})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}
 
export {Userlogin, Userregister}

