import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
//import BusRoutesServices from "../../services/BusRoutesServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../constants/CommonConstants";
import { Footer } from "../FooterComponent";
import NavBar from "../NavBar";

const AddPayment = ({ type }) => {
  const [route, setRoute] = useState({
    name: "",
    ticketPrice: 0.0,
    stopList: "",
  });

  const [userDetails, setUserDetails] = useState({
    name: "",
    balance: "",
    _id: "",
  });

  const handleOnChange = (e) => {
    setRoute({ ...route, [e.target.name]: e.target.value });
  };

 

  const userId = localStorage.getItem("user");



  const getUserDetails = async () => {
    const userRf = await axios.get(API_URL + "user/payment/" + userId);
    console.log("====================================");
    console.log(userRf);
    console.log("====================================");
    setUserDetails(userRf.data.user);
  };

  useEffect(() => {
    getUserDetails();
  }, []);


  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="card m-4 p-5 shadow bg-body rounded border-0">
          <div class="card-header mb-4">
            <h6 class="card-title">{userDetails.name}</h6>
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="name" className="form-label">
                      Card Balance
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="name"
                      name="name"
                      value={userDetails.balance}
                      onChange={handleOnChange}
                      disabled
                    />
                  </div>
                  <div className="col-12">
                    <Link to="/payment/rechargeAcc" type="submit" className="btn btn-danger me-3">
                      Recharge Account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
};

export default AddPayment;
