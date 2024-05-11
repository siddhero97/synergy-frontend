import React, { useState } from "react";
// import { module as Apiservice } from "../apiservice";
import "./Home.scss"
import { useNavigate } from "react-router-dom";
import {postUser, fetchUser } from  "../../services/services"

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    designation: "",
    company: "",
    linkedinurl: "",
  });
  const [action, setAction] = useState("Sign-up");
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    postUser(formData);
    navigate("/login"); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="home">
      <h1 className="home-heading">Sign-Up</h1>

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
            <h2>Password :</h2>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              value={formData.password}
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
            <h2>Linkedin-URL :</h2>

            <input
              type="text"
              name="linkedinurl"
              placeholder="Enter LinkedIn"
              value={formData.linkedinurl}
              required
              onChange={handleChange}
            />
          </div>

          <div className="home-fields-button">
            <button
              className={action === "Sign-up" ? "" : "greyout"}
              onClick={() => setAction("Sign-up")}
            >
              Sign up
            </button>
            <button
              className="greyout"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </button>{" "}
          </div>
        </section>
      </form>
    </div>
  );
};

export default Home;
