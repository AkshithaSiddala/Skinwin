import React, { useState } from "react";
import "./Appointment.css"
import axios from "axios";
import {  useParams } from 'react-router-dom';


const Appointment = () => {

    const { doctorid } = useParams();
  


    const [data,setdata]=useState({
        name:"",
        phone:"",
        date:"",
        description:""
    })
   
    const OnChangehandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setdata((data)=>({...data, [name]:value}))
    }

    const OnsubmitHandler=async(event)=>{
        event.preventDefault()
        const response= await axios.post(`http://localhost:3000/api/appointment/book/${doctorid}`,data,{
          method: "POST",
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
        if(response.data.success){
            alert("Appointment booked successfully")
            setdata({
                name:"",
                phone:"",
                date:"",
                description:"",
            })
            
        }else{
            alert("error, unable to book appointment")
        }

    }


  return (
    <div className="appointment">
      <form className="form"  onSubmit={OnsubmitHandler}>
      <input type="text" name="name" value={data.name} onChange={OnChangehandler} placeholder="Name" required />
        <input type="text" name="phone" value={data.phone} onChange={OnChangehandler} placeholder="Phone-number" required />
        <label>Select Appointment date </label>
        <input type="datetime-local" name="date" placeholder="date" onChange={OnChangehandler} value={data.date} required />
        <textarea name="description" rows="6" placeholder="describe the concern" onChange={OnChangehandler} value={data.description} required></textarea>
        <button  type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default Appointment;
