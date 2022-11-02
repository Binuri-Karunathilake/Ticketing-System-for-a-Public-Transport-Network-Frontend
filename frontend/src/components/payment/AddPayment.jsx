import axios from "axios";
import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
//import BusRoutesServices from "../../services/BusRoutesServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPayment = ({ type }) => {
    const [route, setRoute] = useState({
      name: "",
      ticketPrice: 0.0,
      stopList: "",
    });
  
    const handleOnChange = (e) => {
      setRoute({ ...route, [e.target.name]: e.target.value });
    };
  
    // const resetValue = (e) => {
    //   setRoute({ name: "", ticketPrice: 0, stopList: "" });
    // };
  
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
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   console.log(route);
    //   try {
    //     const reply = await BusRoutesServices.addBusRoute(route);
    //     console.log(reply);
    //     notify();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  
    return (
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
            <h6 class="card-title">
                Name
            </h6>
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col">
                <form className="row g-3" >
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
                      value={route.name}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-danger me-3">
                      Recharge Account
                    </button>
                    
                    <button type="submit" className="btn btn-success me-3">
                      Check your Travel
                    </button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddPayment;
  