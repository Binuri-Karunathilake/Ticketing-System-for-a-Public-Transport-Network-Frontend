import React, { useEffect } from "react";
import { useState } from "react";
import BusTypesService from "../../services/BusTypesService";

const BeginBusJourney = () => {
  const [tripDetails, setTripDetails] = useState({
    busType: "",
    date: new Date(),
    time: "",
  });

  const [busTypes, setBusTypes] = useState([
    {
      id: "",
      name: "",
      numberPlate: "",
      day: "",
      capacity: "",
      route: "",
    },
  ]);

  function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id === nameKey) {
        console.log(myArray[i].name);
        return myArray[i];
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tripDetails);
    localStorage.setItem(
      "tripDetails",
      JSON.stringify({ tripDetails, busTypes })
    );
    window.location = "/BusJourney/ticket";
  };

  const getBusTypes = async () => {
    try {
      const types = await BusTypesService.getBusTypes();
      setBusTypes(types.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setTripDetails({ ...tripDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getBusTypes();
  }, []);

  console.log(busTypes);

  return (
    <div>
      <div className="row">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="busType" className="form-label">
              Bus Type
            </label>
            <select
              type="text"
              required
              className="form-control"
              id="busType"
              name="busType"
              value={tripDetails.busType}
              onChange={handleOnChange}
            >
              {busTypes.map((type, index) => {
                return <option value={type._id}>{type.name}</option>;
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label for="time" className="form-label">
              Time
            </label>
            <input
              type="time"
              required
              className="form-control"
              id="time"
              name="time"
              value={tripDetails.ticketPrice}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success me-3">
              Start Journey
            </button>
            <button type="reset" className="btn btn-warning">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeginBusJourney;
