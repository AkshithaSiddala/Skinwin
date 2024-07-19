import jwt from "jsonwebtoken"

export const authmiddleware= async(req,res,next)=>{
    const {token}=req.headers
    console.log(token)
    if(!token){
        return res.json({success:false,message:"not authorized login again"})
    }
    try {
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        req.doctorid =token_decode.id
        next()
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}
export const authenticate= async(req,res,next)=>{
    const {token}=req.headers
    console.log(token)
    if(!token){
        return res.json({success:false,message:"not authorized login again"})
    }
    try {
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        req.useremail =token_decode.email
        next()
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}

export const authuserid = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "not authorized, login again" });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userid = token_decode.id; 
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
}



