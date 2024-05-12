import React from "react";
import { Link } from "react-router-dom";
import "./ListContact.scss";
import SearchIcon from "@mui/icons-material/Search";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
const ListContact = () => {
  const contacts = [
    "ABC",
    "Jane",
    "Jacob",
    "Jasmin",
    "Piter",
    "Lamno",
    "Bob",
  ];
  return (
    <div className="listcontact">
      <div className="listcontact-heading">
        <h2>Contact Info</h2>
      </div>
      <div className="listcontact-search">
        <div className="listcontact-search-searchbox">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="listcontact-contactdetails">
        <h2>Contact Details</h2>

        <ul className="listcontact-contactdetails-lists">
          {contacts.sort().map((user, id) => (
            <li key={id}>
              <Link className="linktype">
                <p className="name"> {user}</p>
                <p className="readmore">read more</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="listcontact-contactdetails-button">
          <button>Create Contact</button>
        </div>
      </div>
      <div className="listcontact-below">
        <button className="listcontact-below-contact">
          <PermContactCalendarOutlinedIcon className="icon" />
          <h4>Contact</h4>
        </button>
        <buttton className="listcontact-below-qr">
          <DocumentScannerOutlinedIcon className="icon" />
          <h4>Scan Now</h4>
        </buttton>
      </div>
    </div>
  );
};

export default ListContact;
