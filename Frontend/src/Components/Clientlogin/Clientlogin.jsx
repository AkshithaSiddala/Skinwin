import React from 'react'
import "./Clientlogin.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Clientlogin = () => {
    const [clientcurrstate, setclientcurrstate] = useState("login");
    const [token,settoken]=useState("")
    const url= "http://localhost:3000"
    const navigate= useNavigate()

   

    const [userdata,setuserdata]=useState({
      name:"",
      email:"",
      password:""
    })
    const onchangehandler=(e)=>{
      const name= e.target.name
      const value=e.target.value
      setuserdata((userdata)=>({...userdata,[name]:value}))
    }

    const onsubmithandler=async(e)=>{
      e.preventDefault()
      let newUrl=url
      if(clientcurrstate==="login"){
        newUrl+="/api/user/userlogin"
      }else{
        newUrl+="/api/user/userregister"
      }
      const response= await axios.post(newUrl,userdata)
      if(response.data.success){
        settoken(response.data.token)
        localStorage.setItem("token",response.data.token)
        alert("Login successful")
        navigate("/Listofdoctors")
     
      
      }else{
        alert(response.data.message)
       
      }

    }




  return (

    
    <div>
     <div className='clientlogin'>
      <form className='clientlogin-container' onSubmit={onsubmithandler} >
        <div className="client-title">
          <h2>{clientcurrstate}</h2>
        </div>
        <div className="login-inputs">
          {clientcurrstate === "login" ? <></> : <input type="text" placeholder='name'value={userdata.name} onChange={onchangehandler} name='name' required />}
          <input type="email" placeholder='email' value={userdata.email}  onChange={onchangehandler} name='email' required />
          <input type="password" placeholder='password' value={userdata.password} onChange={onchangehandler}name='password' required />
        </div>
        <button type='submit'>{clientcurrstate === "Sign up" ? "create account" : "login"}</button>
        <div className="login-condition">
          <input type='checkbox' required />
          <p>By checking the above box I agree to the terms and conditions</p>
        </div>
        {clientcurrstate === "login" ?
          <p>Create a new account? <span onClick={() => setclientcurrstate("Sign up")}> click here</span></p> :
          <p>Already have an account? <span onClick={() => setclientcurrstate("login")}>Login</span></p>}
      </form>
    </div>
    
    </div>
  )
}

export default Clientlogin
