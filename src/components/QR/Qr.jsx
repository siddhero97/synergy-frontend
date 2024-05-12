import React from "react";
import Logo from "../../assets/Logo.png";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import "./Qr.scss"
import QR from"../../assets/QR.png";
const Qr = () => {
  return (
    <div className="qr">
      <div className="qr-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="qr-middle">
        <div className="qr-middle-heading">
          <p>Place the QR Code within this box to scan </p>
        </div>
        <div className="qr-middle-card">
      <img src={QR} alt="" />
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

export default Qr;
