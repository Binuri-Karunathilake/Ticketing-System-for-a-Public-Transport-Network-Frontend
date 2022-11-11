import React from "react";
import { Link } from "react-router-dom";
import qrcode from "qrcode";
import { useState } from "react";
import { useEffect } from "react";

const UserGetQR = () => {
  const [qr, setQr] = useState("");
  const id = localStorage.getItem("user");

  const generateQRCode = async () => {
    const ticketQRCode = await qrcode.toDataURL(id);
    setQr(ticketQRCode);
  };

  useEffect(() => {
    generateQRCode();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center container mt-5">
        <div className="card">
          <div className="card-header">User QR</div>
          <div className="card-body">
            <h5 className="card-title">This is your QR code</h5>
            <p className="card-text">
              Please save and show the below QR code at the entrance.
              <br />
              (Click the Image)
            </p>
            <div className="qrImage">
              <a href={qr} download>
                <img src={qr} alt="Ticket QR Code" height={150} />
              </a>
              <a href={qr} download className="btn btn-outline-primary saveBtn">
                Save
              </a>
            </div>
            <Link to="/" className="btn btn-outline-secondary">
              <u>Go to Home Page</u>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGetQR;
