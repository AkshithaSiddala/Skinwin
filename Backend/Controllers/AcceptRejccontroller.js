import AcceptRejectmodel from "../Models/AcceptRejcmodel.js";

const Accept = async (req, res) => {
    const Message="Appointment Accepted"
    const {Appointmentid,userid}=req.params
    
    const Acceptapp = new AcceptRejectmodel({
        Message:Message,
        Appointmentid,
        userid
    })
    try { 
        await Acceptapp.save()
        res.json({ success: true, message: "Appointment Accepted" })

    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)

    }
}

const Reject = async (req, res) => {
    const Message="Appointment Rejected"
    const {Appointmentid,userid}=req.params
    const Rejectapp = new AcceptRejectmodel({
        Message:Message,
        Appointmentid,
        userid
    })
    try { 
        await Rejectapp.save()
        res.json({ success: true, message: "Appointment Rejected" })

    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)

    }
}
const AppointmentStatus = async (req, res) => {
  

    try {
        let userid = req.userid;
         console.log(userid)
        const appointmentstatus = await AcceptRejectmodel.find({userid:userid});
        console.log(appointmentstatus)
        if (!appointmentstatus) {
            return res.status(404).json({ success: false, message: "Unable to get the Status" });
        }
        
        res.json({ success: true, data: appointmentstatus });
    } catch (error) {
        res.json({ success: false, message: "error" })
        console.log(error)


    }
}

export {Accept,Reject,AppointmentStatus}
