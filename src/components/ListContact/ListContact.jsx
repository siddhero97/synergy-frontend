import React from "react";
import { Link } from "react-router-dom";
import "./ListContact.scss";
const ListContact = () => {
  return (
    <div className="listcontact">
      <div className="listcontact-heading">
        <h2>Contact Info</h2>
      </div>
      <div className="listcontact-search">
        <div>
          {" "}
          <img src="" />
          <input type="text" />
        </div>
      </div>
      <div className="listcontact-contactdetails">
        <h2>Contact Details</h2>

        <ul>
          <li>
            <Link>
              <p> Addian Mahajan</p>
              <p>read more</p>
            </Link>
          </li>
          <li>
            <Link>
              <p> Addian Mahajan</p>
              <p>read more</p>
            </Link>
          </li>
          <li>
            <Link>
              <p> Addian Mahajan</p>
              <p>read more</p>
            </Link>
          </li>
          <li>
            <Link>
              <p> Addian Mahajan</p>
              <p>read more</p>
            </Link>
          </li>
        </ul>
        <div>
          <button>Create Contact</button>
        </div>
      </div>
      <div className="listcontact-below">
        <div classname="listcontact-below-contact">
          <img src="" />
          <h4>Contact</h4>
        </div>
        <div className="listcontact-below-qr">
          <img src="" alt="" />
          <h4>Scan Now</h4>
        </div>
      </div>
    </div>
  );
};

export default ListContact;
