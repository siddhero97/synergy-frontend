import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
import Logo from "../../assets/Logo.png";

=======
import { loginData } from "../../services/services";
>>>>>>> Stashed changes
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [action, setAction] = useState("Login");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Coming from fields", formData);
    try {
      const response = await loginData(formData);
      console.log("response", response);
      sessionStorage.setItem("jwtToken", response.data.token);
    } catch (error) 
    {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="home">
        <img className= "home-image" src={Logo} alt="Logo" />
      <h1 className="home-heading">Login</h1>

      <form onSubmit={handlesubmit}>
        <section className="home-fields">
          <div className="home-fields-inputs">
            
            <input
              type="email"
              name="email"
              placeholder="Email/Username:"
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

          <div className="home-fields-button">
<<<<<<< Updated upstream
            
=======
            <button className="greyout" onClick={() => navigate("/")}>
              Sign up
            </button>
>>>>>>> Stashed changes
            <button
              className={action === "Login" ? "" : "greyout"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Log in
            </button>{" "}
            <p
              className="greyout"
              onClick={() => navigate("/")}
            >
              New User? Register Here
            </p>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
