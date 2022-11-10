import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BusRoutesServices from "../../services/BusRoutesServices";
import BusTypesService from "../../services/BusTypesService";
import QrReader from "react-qr-scanner";

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
  const [reader, setReader] = useState(false);

  const getBusType = async () => {
    const refBusType = await BusTypesService.getBusType(trip.busType);
    console.log(refBusType);
    setBusTypes(refBusType.data);
  };

  const getRoute = async () => {
    const refRoute = await BusRoutesServices.getBusRoute(busType.route);
    console.log(refRoute.data);
    setRoute(refRoute.data);
  };

  function executeAsynchronously(functions, timeout) {
    for (var i = 0; i < functions.length; i++) {
      setTimeout(functions[i], timeout);
    }
  }

  const handleSubmit = () => {};

  const onChange = () => {};

  const hanldeOnClick = () => {
    setReader(!reader);
  };

  const handleErrorFile = (error) => {};

  const handleScanFile = async (result) => {
    if (result) {
    }
  };

  useEffect(() => {
    // executeAsynchronously(
    //   [
    //     getBusType,
    //     () => {
    //       console.log(busType);
    //       console.log("Hello World");
    //     },
    //     getRoute,
    //   ],
    //   10
    // );
    getBusType();
    getRoute();
  }, []);

  // const getBusDetails = async () => {
  //   const bId = trip.busType;
  //   const busT = await BusTypesService.getBusType(bId);
  //   setBusTypes(busT.data);
  //   const routes = await getRouteAndType();
  //   console.log(busT.data);
  //   console.log(routes);
  // };

  // const getRouteAndType = async () => {
  //   const id = busType.id;
  //   console.log(id);
  //   const route = await BusRoutesServices.getBusRoute(id);
  //   console.log(route.data);
  // };

  // const getRouteStopList = () => {
  //   console.log(route);
  //   const stopList = route.stopList.split(",");
  //   console.log(stopList);
  // };

  // useEffect(() => {
  //   getBusDetails();
  //   console.log(busType);
  //   console.log(trip);
  // }, []);

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
        <div className="">
          {reader ? (
            <QrReader
              delay={300}
              onError={handleErrorFile}
              onScan={handleScanFile}
              style={{
                height: 240,
                width: 320,
              }}
              className="qrReader"
            />
          ) : null}
        </div>
        <button onClick={hanldeOnClick} className="btn btn-primary">
          Scan QR Code
        </button>
      </div>
    </div>
  );
};

export default BuyTicket;
