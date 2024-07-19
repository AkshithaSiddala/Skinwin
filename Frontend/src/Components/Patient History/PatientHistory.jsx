import React from 'react'
import { useEffect,useState } from 'react';
import "./PatientHistory.css"

const PatientHistory = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "http://localhost:3000/api/doctor/patienthistory",
              {
                method: "GET",
                headers: {
                  token: localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
              }
            );
            const jsonResponse = await response.json();
    
            console.log(jsonResponse.data);
            setList(jsonResponse.data);
          } catch (error) {
            console.log(error.message);
          }
        };
    
        fetchData();
      }, []);



  return (
    <div className='list-add-flex-col'>
    <h2>History</h2>
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
                </div>
            )
        })}
    </div>

</div>
)
}

export default PatientHistory
