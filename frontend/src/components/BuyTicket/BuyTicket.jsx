import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BusRoutesServices from "../../services/BusRoutesServices";
import BusTypesService from "../../services/BusTypesService";

const BuyTicket = () => {
  const trip = JSON.parse(localStorage.getItem("tripDetails"));

  const [busType, setBusTypes] = useState({
    id: "",
    name: "",
    numberPlate: "",
    day: "",
    capacity: "",
    route: "",
  });

  const [ticket, setTicket] = useState({
    startStop: "",
    endStop: "",
    ticketPrice: "",
    routeName: "",
    userId: "",
  });

  const [route, setRoute] = useState({});

  const handleSubmit = () => {};

  const onChange = () => {};

  const getBusDetails = async () => {
    const bId = trip.busType;
    const busT = await BusTypesService.getBusType(bId);
    setBusTypes(busT.data);
    await getRouteAndType();
  };

  const getRouteAndType = async () => {
    const id = busType.id;
    console.log(id);
    const route = await BusRoutesServices.getBusRoute(id);
    console.log(route.data);
  };

  const getRouteStopList = () => {
    console.log(route);
    const stopList = route.stopList.split(",");
    console.log(stopList);
  };

  useEffect(() => {
    getBusDetails();
    console.log(busType);
    console.log(trip);
  }, []);

  return (
    <div>
      <div className="row">
        <form action="">
          <div className="col-6">
            <label for="busType1" className="form-label">
              Starting Bus Stop
            </label>
            <select
              type="text"
              required
              className="form-control"
              id="busType1"
              name="busType"
            >
              <option>---</option>
            </select>
          </div>
          <div className="col-6">
            <label for="busType" className="form-label">
              Stop Bus Stop
            </label>
            <select
              type="text"
              required
              className="form-control"
              id="busType"
              name="busType"
            ></select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyTicket;
