import axios from "axios";
import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../NavBar";
import { Footer } from "../FooterComponent";
import { API_URL } from "../../constants/CommonConstants";
import Swal from "sweetalert2";



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

  
    // const notify = () => {
    //   toast.success("Route added successfully", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    // };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(route);
      try {
        if(route.ticketPrice >= 500){
          console.log(API_URL+'user/payment/'+user);
          const reply = await axios.post (API_URL+'user/payment/'+user,{amt: route.ticketPrice});
          console.log(reply);
          Swal.fire({
            title: "Success!",
            text: "Payment Recharge Success!",
            icon: "success",
            confirmButtonText: "OK",
            type: "success",
          }).then((okay) => {
            if (okay) {
              window.location.href = "/payment/rechargeAcc";
            }
          });
        }else {
          Swal.fire({
            title: "Error!",
            text: "Payment Recharge Not Success",
            icon: "error",
            confirmButtonText: "OK",
            type: "success",
          });
        }
        // notify();
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
                <br></br>
                <div class="row gy-3">
                
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required/>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="number" class="form-control" id="cc-number" maxLength={16} placeholder="" required/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="date" class="form-control" id="cc-expiration" placeholder="" required/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="number" class="form-control" id="cc-cvv" maxLength={3} placeholder="" required/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          

                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-success me-3">
                      Recharge 
                    </button>
                    <br></br><br></br>
            
                    
                    
                    <p> <b>Note</b> : Minimum amount to recharge is Rs.500. <br></br>Transaction fee of 2% will be collected towards payment gateway charges.</p>

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
  