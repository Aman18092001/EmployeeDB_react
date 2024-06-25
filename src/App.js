import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");
  const [formData, setFormData] = useState([]);
  const [index, setIndex] = useState(null);
  const [show,setShow]=useState(false);

  const handleData = (e) => {
    e.preventDefault();
    const inputdata = {
      Name: name,
      Image: image,
      Email: email,
      Contact: contact,
      DOB: dob,
    };
    setFormData([inputdata, ...formData]);
    setName("");
    setEmail("");
    setContact("");
    setDob("");
    setImage("");
    setIndex(0);
    setShow(false);
  };

  const handleName = (id) => {
    setIndex(id);
  };

  const handleDelete = (id) => {
    const newArr = formData.filter((el, index) => index !== id);
    setFormData(newArr);
    setIndex(null);
  };

  const handleAdd=()=>{
    setShow(!show);
  }
  return (
    <>
      <button onClick={handleAdd} id="addButton">Add Employee</button>
      {show &&
          <form onSubmit={handleData} id="form">
          <input
            type="text"
            placeholder="your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your setEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="your Phone"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="date"
            placeholder="your DoB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            type="text"
            placeholder="your imageUrl"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>      
      }

      <h1 id="data">Employee Data</h1>
      <div id="Employee_data">
        <span id="employee_list">
          <h3>Employee List</h3>
          {formData.map((el, id) => (
            <aside key={id}>
              <button className="emp_name" onClick={() => handleName(id)}>
                {el.Name}
              </button>
              <button className="cross" onClick={() => handleDelete(id)}>
                X
              </button>
            </aside>
          ))}
        </span>
        <span id="employee_info">
          <h3>Personal Info</h3>
          <ul>
            {index !== null && (
              <div id="single_info">
                <img
                  src={formData[index].Image}
                  height="60px"
                  width="80px"
                  style={{ borderRadius: "80px" }}
                />
                <li>Name: {formData[index].Name}</li>
                <li>Email: {formData[index].Email}</li>
                <li>Contact: {formData[index].Contact}</li>
                <li>DOB: {formData[index].DOB}</li>
                <hr />
              </div>
            )}
          </ul>
        </span>
      </div>
    </>
  );
}

