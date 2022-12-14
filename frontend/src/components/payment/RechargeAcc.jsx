import axios from "axios";
import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../NavBar";
import { Footer } from "../FooterComponent";
import { API_URL } from "../../constants/CommonConstants";

const RechargeAcc = ({ type }) => {
    const [route, setRoute] = useState({
      name: "",
      ticketPrice: 0.0,
      stopList: "",
    });
  
    const handleOnChange = (e) => {
      setRoute({ ...route, [e.target.name]: e.target.value });
    };

    const user = localStorage.getItem('user');
    console.log(user);

  
    const notify = () => {
      toast.success("Route added successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(route);
      try {
        console.log(API_URL+'user/payment/'+user);
        const reply = await axios.post (API_URL+'user/payment/'+user,{amt: route.ticketPrice});
        console.log(reply);
        notify();
      } catch (error) {
        console.log(error);
      }
    };
  
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
            <h4 class="card-title">
                Recharge Your Account
            </h4>
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col">
                <div class="container">
  <div class="row">
    <div class="col-sm-8">                
    <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                  <label for="ticketPrice" className="form-label">
                    Select card type
                  </label>
                  <select class="form-select" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">Credit Card</option>
                      <option value="2">Debit Card</option>
                  </select>
                <br></br>
                <div className="col-md-6">
                  <label for="ticketPrice" className="form-label">
                    Recharge Amount
                  </label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    id="ticketPrice"
                    name="ticketPrice"
                    step=".01"
                    value={route.ticketPrice}
                    onChange={handleOnChange}
                  />
                </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-success me-3">
                      Recharge 
                    </button>
                    <br></br><br></br>
            
                    
                    
                    <p> Note : Minimum amount to recharge is Rs.500. <br></br>Transaction fee of 2% will be collected towards payment gateway charges.</p>

                  </div>
                </form></div>

  </div>
</div>
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
  
  export default RechargeAcc;
  