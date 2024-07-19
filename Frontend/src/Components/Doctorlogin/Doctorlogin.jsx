import React, { useState } from 'react';
import "./Doctorlogin.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Doctorlogin = () => {
  const navigate= useNavigate()
  const [doccurrstate, setdoccurrstate] = useState("login");
  const[token,settoken]=useState("")
  let url="http://localhost:3000"
  const [data,setdata]=useState({
    name:"",
    email:"",
    clinicName:"",
    password:""
  })
  const onChangehandler=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setdata(data=>({...data,[name]:value}))
  }
  const onsubmithandler=async(e)=>{
    e.preventDefault()
    let newUrl=url
    if(doccurrstate==="login"){
        newUrl+= "/api/doclogin/doctorlogin"
    }else{
        newUrl+="/api/doclogin/doctorregister"
    }
    const response= await axios.post(newUrl,data)
    console.log(response.data)
    if(response.data.success){
        settoken(response.data.token)
        localStorage.setItem("token",response.data.token)
        alert("Added")
        navigate("/Listofappointments")
    }else{
        alert(response.data.message)
    }
  }



  return (

    <div>
    <div className='doctorlogin'>
      <form className='Doctorlogin-container' onSubmit={onsubmithandler} >
        <div className="Doctor-title">
          <h2>{doccurrstate}</h2>
        </div>
        <div className="login-inputs">
          {doccurrstate === "login" ? <></> : <><input type="text" placeholder='Dr name'onChange={onChangehandler} name='name'value={data.name} required /> <input type="text" placeholder='Clinic Name'onChange={onChangehandler} name='clinicName'value={data.clinicName} required /></> }
          <input type="email" placeholder='email' name='email'onChange={onChangehandler} value={data.email}required />
          <input type="password" placeholder='password'value={data.password} onChange={onChangehandler} name='password' required />
        </div>
        <button type='submit'>{doccurrstate === "Sign up" ? "create account" : "login"}</button>
        <div className="login-condition">
          <input type='checkbox' required />
          <p>By checking the above box I agree to the terms and conditions</p>
        </div>
        {doccurrstate === "login" ?
          <p>Create a new account? <span onClick={() => setdoccurrstate("Sign up")}> click here</span></p> :
          <p>Already have an account? <span onClick={() => setdoccurrstate("login")}>Login</span></p>}
      </form>
    </div>
    {/* {token? <button onClick={() => navigate(`/Listofappointments/doctorid`)}>Appointment requests</button> :<></>} */}
    </div>
  );
}

export default Doctorlogin;
