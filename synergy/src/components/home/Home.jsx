import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    company: "",
    location: "",
  });
  const handlesubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="home">
      <form onSubmit={handlesubmit}>
        <section className="home-fields">
          <div className="home-fields-inputs">
            <h2> Name :</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              required
              value={formData.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="home-fields-inputs">
            <h2>Email :</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter email id"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="home-fields-inputs">
            <h2>Phone Number :</h2>
            <input
              type="number"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="home-fields-inputs">
            <h2>Designation :</h2>
            <input
              type="text"
              name="designation"
              placeholder="Enter designation"
              required
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
          <div className="home-fields-inputs">
            <h2> Company :</h2>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="home-fields-inputs">
            <h2>Location :</h2>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="home-fields-button">
            <button className="">Sign up</button>
            <button>Log in</button>{" "}
          </div>
        </section>
      </form>
    </div>
  );
};

export default Home;
