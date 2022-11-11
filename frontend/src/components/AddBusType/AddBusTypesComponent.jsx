import axios from "axios";
import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import BusTypesService from "../../services/BusTypesService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBusType = ({ type }) => {
  console.log("Hello");
  const [BusType, setBusType] = useState({
    name: "",
    numberPlate: "",
    day: "",
    capacity: "",
    route: "",
  });

  const handleOnChange = (e) => {
    setBusType({ ...BusType, [e.target.name]: e.target.value });
  };

  const resetValue = (e) => {
    setBusType({
      name: "",
      numberPlate: "",
      day: "",
      capacity: "",
      route: 0,
    });
  };

  const notify = () => {
    toast.success("Bus type added successfully", {
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
    console.log("Hello");
    console.log(BusType);
    try {
      const reply = await BusTypesService.addBusType(BusType);
      console.log(reply);
      notify();
    } catch (error) {
      console.log(error);
    }
  };

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
            {type ? "Update Bus Type" : "Add Bus Type"}
          </h6>
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label for="name" className="form-label">
                    Bus Name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="name"
                    name="name"
                    value={BusType.name}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-md-6">
                  <label for="numberPlate" className="form-label">
                    Number Plate
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="numberPlate"
                    name="numberPlate"
                    value={BusType.numberPlate}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-md-6">
                  <label for="day" className="form-label">
                    Day
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="day"
                    name="day"
                    value={BusType.day}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-md-6">
                  <label for="capacity" className="form-label">
                    Capacity
                  </label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    id="capacity"
                    name="capacity"
                    value={BusType.capacity}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-md-6">
                  <label for="route" className="form-label">
                    Route
                  </label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    id="route"
                    name="route"
                    value={BusType.route}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success me-3">
                    Add Bus Type
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
  );
};

export default AddBusType;
