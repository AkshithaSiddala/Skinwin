import Doctormodel from "../Models/Doctormodel.js";

//add patient
const addpatient = async (req, res) => {
    let image= `${req.file.filename}`
    const { patientname, Age, description, Medication,email } = req.body
    const doctorid=req.doctorid
    const details = new Doctormodel({
        patientname,
        Age,
        description,
        Medication,
        email,
        image,
        doctorid

    })
    try { 
        await details.save()
        res.json({ success: true, message: "Patient details Added" })

    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)

    }
}


//list Patient
const listpatient=async(req,res)=>{
    let doctorid=req.doctorid

    try {
        const list=await Doctormodel.find({doctorid:doctorid})
        res.json({success:true,data:list})
        
    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)
    }
}

//remove Patient
const removepatient=async(req,res)=>{
    try {
        const remove=await Doctormodel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Patient removed"})
        
    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)
        
    }
}

const listpatienthistory=async(req,res)=>{
    let userId = req.useremail
    try {
        const patients = await Doctormodel.find({ email:userId});
        res.json({ success: true, data: patients });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Error fetching patient history', error });
    }
};



export {addpatient,listpatient,removepatient,listpatienthistory}






