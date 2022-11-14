import axios from "axios";
import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import BusRoutesServices from "../../services/BusRoutesServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "../AdminNavbar";
import { AdminFooter } from "../AdminFooter";

const AddBusRoute = ({ type }) => {
  const [route, setRoute] = useState({
    name: "",
    ticketPrice: 0.0,
    stopList: "",
  });

  const handleOnChange = (e) => {
    setRoute({ ...route, [e.target.name]: e.target.value });
  };

  const resetValue = (e) => {
    setRoute({ name: "", ticketPrice: 0, stopList: "" });
  };

  const notify = () => {
    toast.success("Bus Type added successfully", {
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
      const reply = await BusRoutesServices.addBusRoute(route);
      console.log(reply);
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div>
        <AdminNavbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

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
              {type ? "Update Bus Route" : "Add Bus Route"}
            </h6>
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col">
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <label for="name" className="form-label">
                      Route Name
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
                  <div className="col-md-6">
                    <label for="ticketPrice" className="form-label">
                      Ticket Price
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
                  <div className="col-12">
                    <label for="stopList" className="form-label">
                      Stop List ( Seperate by ',' )
                    </label>
                    <textarea
                      type="text"
                      required
                      className="form-control"
                      id="stopList"
                      placeholder="1234 Main St"
                      name="stopList"
                      value={route.stopList}
                      onChange={(e) => {
                        setRoute({
                          ...route,
                          stopList: e.target.value.split(","),
                        });
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-success me-3">
                      Create New Route
                    </button>
                    <button
                      type="reset"
                      className="btn btn-warning"
                      onClick={resetValue}
                    >
                      Clear
                    </button>
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

      <AdminFooter />
    </div>
  );
};

export default AddBusRoute;
