import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./qrScanner.scss";
import { Link, useNavigate } from "react-router-dom";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";


const QRScanner = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qrscanner">
      {/* style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}> */}
      <div className="qrscanner__camera">
        {/* style={{ width: '50%', maxWidth: '500px', position: 'relative' }}> */}
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        <div className="qrscanner__camera--border"></div>
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
        <buttton
          className="listcontact-below-qr"
          onClick={() => {
            navigate("/qr");
          }}
        >
          <DocumentScannerOutlinedIcon className="icon" />
          <h4>Scan </h4>
        </buttton>
      </div>
    </div>
  );
};

export default QRScanner;
