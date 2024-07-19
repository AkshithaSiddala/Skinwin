import axios from 'axios'
import React, { useState,useEffect } from 'react'
import "./Listpatient.css"

const Listpatient = () => {
    const [list,setlist]=useState([])
    const fetchlist= async()=>{    
    const response= await axios.get("http://localhost:3000/api/doctor/list",{
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
    if(response.data.success){
        setlist(response.data.data)
    }else{
       console.log("error")
    }
} 

const removeitem=async(id)=>{
    const response= await axios.post("http://localhost:3000/api/doctor/remove",{id})
    if(response.data.success){
        fetchlist()
        alert("Patient removed from the list")
    }else{
        alert("Unable to remove Patient from the list")
    }
} 


useEffect(()=>{
    fetchlist()
},[])

  return (
    <div className='list-add-flex-col'>
    <h2>Patient List</h2>
    <div className="list-table">
        <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b> 
            <b>Age</b>
            <b>Description</b>
            <b>Medication</b>
        </div>
        {list.map((item)=>{
            return(
                <div key={item._id} className='list-table-format'>
                    <img src={'http://localhost:3000/images/'+item.image} alt="" />
                    <p>{item.patientname}</p>    
                    <p>{item.Age}</p>
                    <p>{item.description}</p>
                    <p>{item.Medication}</p>
                    <p onClick={()=>removeitem(item._id)} className='cursor'>x</p>
                </div>
            )
        })}
    </div>

</div>
)
}

export default Listpatient
