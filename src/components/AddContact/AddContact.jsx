import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import { postUser, fetchUser, postContact } from "../../services/services";
import "./AddContact.scss";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";

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
    postContact(sessionStorage.currentUserId,formData);
    console.log(sessionStorage.userId)
    navigate("/listcontact");
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
              value={formData.firstName}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              className="addContact__form--fields"
              name="lastName"
              placeholder="Last Name :"
              required
              value={formData.lastName}
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
        </div>
        <div className="listcontact-below">
        <button className="listcontact-below-contact" onClick={() => {
                navigate("/listcontact");
              }}>
          <PermContactCalendarOutlinedIcon className="icon" />
          <h4>Contact</h4>
        </button>
        <buttton className="listcontact-below-qr" onClick={() => {
                navigate("/qr");
              }}>
          <DocumentScannerOutlinedIcon className="icon" />
          <h4>Scan </h4>
        </buttton>
      
      </div>
    </div>
  );
};

export default AddContact;
