import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";

const AddBusRoute = ({ type }) => {
  const [route, setRoute] = useState({
    name: "",
    ticketPrice: 0.0,
    stopList: "",
  });

  const handleOnChange = (e) => {
    setRoute({ ...Route, [e.target.name]: e.target.value });
  };

  const resetValue = (e) => {
    setRoute({ name: "", ticketPrice: 0, stopList: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(route);
  };

  return (
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
                  className="form-control"
                  id="stopList"
                  placeholder="1234 Main St"
                  name="stopList"
                  value={route.stopList}
                  onChange={handleOnChange}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success me-3">
                  Sign in
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
  );
};

export default AddBusRoute;
