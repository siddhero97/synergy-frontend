import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUser, fetchUser } from "../../services/services";
import "./AddContact.scss";
import ContactIcon from "../../assets/ContactIcon.png";
import ScanNow from "../../assets/ScanNow.png";

const AddContact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    linkedinurl: "",
    notes: "",
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
    <div className="page">
      <h1 className="heading">Contact Detail</h1>
      <div className="addContact">
        <form onSubmit={handlesubmit}>
          <section className="addContact__form">
            <input
              type="text"
              className="addContact__form--fields"
              name="firstName"
              placeholder="First Name :"
              required
              value={formData.firstname}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              className="addContact__form--fields"
              name="lastName"
              placeholder="Last Name :"
              required
              value={formData.lastname}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              className="addContact__form--fields"
              name="linkedinurl"
              placeholder="Linkedin URL :"
              required
              value={formData.linkedinurl}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              className="addContact__form--fields-feedback"
              name="notes"
              placeholder="Suggest anything we can improve.."
              value={formData.notes}
              onChange={handleChange}
            ></input>
            <button className="button" type="submit">
              Submit
            </button>
          </section>
        </form>
        {/* <footer className="nav">
          <button className="nav__button">
            <img className="icon" src={ContactIcon} alt="ContactIcon" />
         Contact </button>
         <button className="nav__button">
            <img className="icon" src={ScanNow} alt="ScanNow" />
         Scan Now </button>
        </footer> */}
      </div>
    </div>
  );
};

export default AddContact;
