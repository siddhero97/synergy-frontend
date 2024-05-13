import React, { useState } from "react";

import "./Home.scss"
import { useNavigate } from "react-router-dom";
import {postUser,fetchUser} from "../../services/services"
import Logo from "../../assets/Logo.png";

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

    try {
      const response = await postUser(formData)
      console.log(response);
      if (response == 200) {
        console.log("You are signed in")
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    navigate("/login")
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="home">
     
        <img className= "home-image" src={Logo} alt="Logo" />
    
      <h1 className="home-heading">Sign Up</h1>

      <form onSubmit={handlesubmit}>
        <section className="home-fields">
          <div className="home-fields-inputs">
           
            <input
              type="text"
              name="name"
              placeholder="Name:"
              required
              value={formData.name}
              onChange={handleChange}
            ></input>
          </div>

          <div className="home-fields-inputs">
            
            <input
              type="email"
              name="email"
              placeholder="Email:"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="home-fields-inputs">
            
            <input
              type="password"
              name="password"
              placeholder="Password:"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="home-fields-inputs">
            
            <input
              type="number"
              name="phone"
              placeholder="Phone Number:"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="home-fields-inputs">
           
            <input
              type="text"
              name="company"
              placeholder="Company:"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="home-fields-inputs">
            
            <input
              type="text"
              name="designation"
              placeholder="Position:"
              required
              value={formData.designation}
              onChange={handleChange}
            />
          </div>

          

          <div className="home-fields-inputs">
            

            <input
              type="text"
              name="linkedinurl"
              placeholder="Linkedin Id:"
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
            <p
              className="greyout"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account?  Login
            </p>{" "}
          </div>
        </section>
      </form>
    </div>
  );
};

export default Home;
