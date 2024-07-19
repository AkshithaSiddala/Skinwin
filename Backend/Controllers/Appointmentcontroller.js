import Appointmentmodel from "../Models/Appointmentmodel.js";

//book appointment
const Bookappointment=async(req,res)=>{
    const{name,phone,date,description}=req.body
    const {doctorid}=req.params
    const userid=req.userid
    const Book= new Appointmentmodel({
        name,
        phone,
        date,
        description,
        doctorid,
        userid
    })
    try {
        await Book.save()
        return res.json({success:true,message:"Appointment booked"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }
}
//cancel appointment
const Cancelappointment= async(req,res)=>{
    try {
        const Cancel= await Appointmentmodel.findByIdAndDelete(req.body.id)
        return res.json({success:true,message:"Appointment cancelled"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

// const getAppointment=async(req,res)=>{
    
//     try {
//         let doctorid=req.params.doctorid
//         const list=await Appointmentmodel.findById(doctorid)
//         res.json({success:true,data:list})
        
//     } catch (error) {
//         res.json({ success: false, message: "error" })
//         console.log(error)
//     }
// }
const getAppointment = async (req, res) => {
  

    try {
        let doctorid = req.doctorid;
         console.log(doctorid)
        const appointment = await Appointmentmodel.find({doctorid:doctorid});
        console.log(appointment)
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }
        
        res.json({ success: true, data: appointment });
    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)


    }
}
export {Bookappointment,Cancelappointment,getAppointment}