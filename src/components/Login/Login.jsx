import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="home">
      <h1 className="home-heading">Login</h1>

      <form onSubmit={handlesubmit}>
        <section className="home-fields">
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

          <div className="home-fields-button">
            <button
              className="greyout"
              onClick={() => navigate("/")}
            >
              Sign up
            </button>
            <button
              className={action === "Login" ? "" : "greyout"}
              onClick={() => {
                setAction("Login");
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

export default Login;
