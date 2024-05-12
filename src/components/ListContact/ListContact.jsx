import React, { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ListContact.scss";
import SearchIcon from "@mui/icons-material/Search";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import { useState, useEffect } from "react";
import { fetchUserById } from "../../services/services";

const ListContact = () => {
  //const contacts = ["ABC", "Jane", "Jacob", "Jasmin", "Piter", "Lamno", "Bob", "Jasmin", "Piter", "Lamno", "Bob"];

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    // Fetch user data here (replace with your actual data fetching logic)
    const fetchUserData = async () => {
      try {
        const currentUserId = sessionStorage.currentUserId;
        const response = await fetchUserById(currentUserId); // Assuming your API endpoint
        const data = response;
        setContacts(data.contacts);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error gracefully (e.g., display error message)
      }
    };

    fetchUserData(); // Call the data fetching function
    return;
  }, []);

  return (
    <div>
      {contacts ? (
        <div className="listcontact">
          <div className="listcontact-heading">
            <h2>Contact Info</h2>
          </div>
          <div className="listcontact-search">
            <div className="listcontact-search-searchbox">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="listcontact-contactdetails">
            <h2>Contact Details</h2>

            <ul className="listcontact-contactdetails-lists">
              {/* {contacts
            .sort()
            .filter((item) => {
              if (searchQuery == "") {
                return item;
              } else
                return item.toLowerCase().includes(searchQuery.toLowerCase());
            })
            .map((user, id) => (
              <li key={id}>
                <Link className="linktype">
                  <p className="name"> {user}</p>
                  <p className="readmore">read more</p>
                </Link>
              </li>
            ))} */}
              {contacts
                .sort((a, b) => a.firstName.localeCompare(b.firstName))
                .filter((item) => {
                  if (searchQuery === "") {
                    return item;
                  } else {
                    return item.firstName
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase());
                  }
                })
                .map((contact) => (
                  <li key={contact.id}>
                    <Link className="linktype">
                      <p className="name">
                        {" "}
                        {`${contact.firstName} ${contact.lastName}`}
                      </p>
                      <p className="readmore">read more</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="listcontact-below">
            <button
              className="listcontact-below-contact"
              onClick={() => {
                navigate("/listcontact");
              }}
            >
              <PermContactCalendarOutlinedIcon className="icon" />
              <h4>Contact</h4>
            </button>
            <buttton className="listcontact-below-qr">
              <DocumentScannerOutlinedIcon className="icon" />
              <h4>Scan Now</h4>
            </buttton>
          </div>
        </div>
      ) : (
        <p>Loading your contacts...</p>
      )}
    </div>
  );
};

export default ListContact;
