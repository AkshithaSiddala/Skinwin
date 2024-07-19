import React from 'react'
import { useEffect,useState } from 'react';

const Appointmentstatus = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "http://localhost:3000/api/AcceptandReject/viewstatus",
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
    <h2>Appointment Status</h2>
    <div className="list-table">
        <div className="list-table-format title">
            <b>Message</b>
        </div>
        {list.map((item)=>{
            return(
                <div key={item._id} className='list-table-format'>
                    <p>{item.Message}</p>
                </div>
            )
        })}
    </div>

</div>
)
}

export default Appointmentstatus
