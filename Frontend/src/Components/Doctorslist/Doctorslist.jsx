import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import "./Doctorslist.css"
import { NavLink, useNavigate } from 'react-router-dom'


const Doctorslist = () => {
  const navigate=useNavigate()
  const[list,setlist]= useState([])
  const fetchlist= async()=>{
      const response= await axios.get(`http://localhost:3000/api/doclogin/doctordetails`)
      console.log(response)
      if(response.data.success){
          setlist(response.data.data)
      }else{
          response.json("error")
      }
  } 

  useEffect(()=>{
    fetchlist()
},[])
const submitAppointment=async(doctorid)=>{
  console.log(doctorid)
  
  try {
    const response=await axios.post(`http://localhost:3000/api/appointment/book/${doctorid}`)
    if(response.data.success)
      console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
   

  return (
    <div className='doctors-list'>
        <h3>List of Doctors</h3>
        <div className="list-of-doctors">
          <p>Doctor Name</p>
          <p>Clinic Name</p>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-doctors-format'>
              <p>{item.name}</p>
              <p>{item.clinicName}</p>
           <NavLink to= {`/BookAppointment/${item._id}`}><button onClick={()=>submitAppointment(item._id)}>Book Appointment</button></NavLink>
           <button onClick={() => navigate(`/Appointmentstatus`)}>View Appointment Status</button>
            </div>
          )
        })}
        <div className='navigate-patienthistory'><NavLink to= {'/patienthistory'}><button>My History</button></NavLink></div>
      
    </div>

  )
}

export default Doctorslist
