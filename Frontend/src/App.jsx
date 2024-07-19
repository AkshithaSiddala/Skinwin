import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup/Signup.jsx'
import Doctorlogin from './Components/Doctorlogin/Doctorlogin.jsx'
import Clientlogin from './Components/Clientlogin/Clientlogin.jsx'
import Home from './Pages/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
import CandT from './Pages/Concerns & Treatment/CandT.jsx'
import Doctorslist from './Components/Doctorslist/Doctorslist.jsx'
import Appointment from './Components/Appointment/Appointment.jsx'
import Listofappointments from './Components/Listofappointmnets/Listofappointments.jsx'
import Addpatient from './Components/Addpatient/Addpatient.jsx'
import Listpatient from './Components/Listpatient/Listpatient.jsx'
import PatientHistory from './Components/Patient History/PatientHistory.jsx'
import Appointmentstatus from './Components/AppointmentStatus/Appointmentstatus.jsx'


const App = () => {

  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/Doctorlogin" element={<Doctorlogin/>}/>
        <Route path="/Clientlogin" element={<Clientlogin/>}/>
        <Route path='/Concern&Treatment' element={<CandT/>}/>
        <Route path='/Listofdoctors' element={<Doctorslist/>}/>
        <Route path='/BookAppointment/:doctorid' element={<Appointment/>}/>
        <Route path='/Listofappointments' element={<Listofappointments/>}/>
        <Route path='/addpatients' element={<Addpatient/>}/>
        <Route path='/listpatients' element={<Listpatient/>}/>
        <Route path='/patienthistory' element={<PatientHistory/>}/>
        <Route path='/Appointmentstatus' element={<Appointmentstatus/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
