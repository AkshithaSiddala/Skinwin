import React, { useState } from "react";
import axios from "axios";
import "./Addpatient.css";

const Addpatient = () => {
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    patientname: "",
    Age: "",
    description: "",
    Medication: "",
    email: "",
  });

  const Changehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

  const onSubmithandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("patientname", data.patientname);
    formData.append("Age", Number(data.Age));
    formData.append("description", data.description);
    formData.append("Medication", data.Medication);
    formData.append("email", data.email);
    formData.append("image", image);
    const response = await axios.post(
      `http://localhost:3000/api/doctor/add`,
      formData,
      {
        method: "POST",
        headers: {
          token: localStorage.getItem("token"),
        }
      }
    );
    if (response.data.success) {
      alert("Patient added successfully");
      setdata({
        patientname: "",
        Age: "",
        description: "",
        Medication: "",
        email: "",
      });
      setimage(false);
      console.log(response.data.message);
    } else {
      console.log(response.data.message);
    }
  };
  return (
    <div className="add-patient">
      <form className="flex-col" onSubmit={onSubmithandler}>
        <div className="upload-img">
          <p>Upload Patient Image</p>
          <label htmlFor="image">
            <img src={image} alt="" />
          </label>
          <input
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            id="image"
            required
          />
        </div>
        <div className="patient-name">
          <p>Patient name</p>
          <input
            onChange={Changehandler}
            value={data.patientname}
            type="text"
            name="patientname"
            placeholder="Type here"
          />
        </div>
        <div className="patient-email">
          <p>Patient email</p>
          <input
            onChange={Changehandler}
            value={data.email}
            type="text"
            name="email"
            placeholder="Type here"
          />
        </div>
        <div className="patient-age">
          <p>Patient Age</p>
          <input
            type="Number"
            onChange={Changehandler}
            value={data.Age}
            name="Age"
            placeholder="20"
          />
        </div>
        <div className="patient-description-medication">
          <div className="patient-description">
            <p>Patient Description</p>
            <textarea
              name="description"
              onChange={Changehandler}
              value={data.description}
              rows="7"
              placeholder="description"
            />
          </div>
          <div className="patient-medication">
            <p>Medication</p>
            <textarea
              name="Medication"
              onChange={Changehandler}
              value={data.Medication}
              rows="10"
              placeholder="Medication"
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default Addpatient;
