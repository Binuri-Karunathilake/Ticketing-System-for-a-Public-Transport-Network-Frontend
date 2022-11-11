import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BusRoutesServices from "../../services/BusRoutesServices";
import BusTypesService from "../../services/BusTypesService";
import QrReader from "react-qr-scanner";

const BuyTicket = () => {
  const { tripDetails, busTypes } = JSON.parse(
    localStorage.getItem("tripDetails")
  );

  console.log(busTypes);
  console.log(tripDetails);

  const getBusType = () => {
    for (let key in busTypes) {
      if (busTypes[key]._id === tripDetails.busType) {
        return busTypes[key];
      }
    }
  };

  console.log(getBusType());

  const getRouteDetails = async () => {
    const refRoute = await BusRoutesServices.getBusRoute(getBusType().route);
    setRoute(refRoute.data);
    console.log(refRoute.data);
  };

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
    ticketPrice: 0,
    routeName: "",
    userId: "",
  });

  const [route, setRoute] = useState({
    stopList: [],
    name: "",
    _id: "",
    ticketPrice: 0,
  });

  const [reader, setReader] = useState(false);

  const getIndex = (stop) => {
    for (let key in route.stopList) {
      if (route.stopList[key] === stop) {
        return key;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ticket);
    const stop1 = getIndex(ticket.startStop);
    const stop2 = getIndex(ticket.endStop);
    const length = route.stopList.length;
    if (ticket.endStop === ticket.startStop) {
      console.log("Error");
    } else {
      const unitPrice = route.ticketPrice / route.stopList.length;
      const stopLen = Math.abs(stop1 - stop2);

      const price = (unitPrice*stopLen);
      setTicket({ ...ticket, ticketPrice:price });
      setTicket({ ...ticket, routeName: route.name });
      console.log(price + " == " + unitPrice + " == " + stopLen + " == " +  route.name);
      console.log(route);
      console.log(ticket);
    }
  };

  const handleOnChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const hanldeOnClick = () => {
    setReader(!reader);
  };

  const handleErrorFile = (error) => {};

  const handleScanFile = async (result) => {
    if (result) {
    }
  };

  useEffect(() => {
    getRouteDetails();
  }, []);

  return (
    <div>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="col-6">
            <label for="busType1" className="form-label">
              Starting Bus Stop
            </label>
            <select
              type="text"
              required
              className="form-control"
              id="startStop"
              name="startStop"
              value={ticket.startStop}
              onChange={handleOnChange}
            >
              <option>---</option>
              {route.stopList.map((stop) => {
                return <option value={stop}>{stop}</option>;
              })}
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
              id="endStop"
              name="endStop"
              value={ticket.endStop}
              onChange={handleOnChange}
            >
              <option>---</option>
              {route.stopList.map((stop) => {
                return <option value={stop}>{stop}</option>;
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Buy Ticket
          </button>
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
