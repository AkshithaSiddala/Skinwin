import React, { useState, useEffect } from "react";
import "./Listofappointments.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listofappointments = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/appointment/list",
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
  const removeitem = async (removeid) => {
    const response = await axios.post(
      `http://localhost:3000/api/appointment/cancel`,
      { id: removeid }
    );

    if (response.data.success) {
      alert("Appointment cancelled");
      fetchData();
    } else {
      alert("unable to cancel appointment");
    }
  };
  const Accept = async (Appointmentid, userid) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/AcceptandReject/accept/${Appointmentid}/${userid}`
      );
      if (response.data.success)
        // fetchData()
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Reject = async (Appointmentid, userid) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/AcceptandReject/cancel/${Appointmentid}/${userid}`
      );
      if (response.data.success)
        // fetchData()
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="appointment-list">
      <h2>Appointment List</h2>
      <div className="Appointment-details">
        <div className="appointment-format-title">
          <p>Name</p>
          <p>Phone Number</p>
          <p>Date</p>
          <p>Description</p>
          <p>Remove</p>
        </div>
        {list.map((item) => {
          return (
            <div key={item._id} className="individual-appointmentlist">
              <p>{item.name}</p>
              <p>{item.phone}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
              <p onClick={() => removeitem(item._id)} className="cursor">
                x
              </p>
              <button onClick={() => Accept(item._id, item.userid)}>
                Accept
              </button>
              <button onClick={() => Reject(item._id, item.userid)}>
                Reject
              </button>
            </div>
          );
        })}
      </div>
      <div className="Add-button">
        <button onClick={() => navigate("/addpatients")}>Add Patients</button>
        <button onClick={() => navigate("/listpatients")}>View Patients list</button>
      </div>
    </div>
  );
};

export default Listofappointments;
