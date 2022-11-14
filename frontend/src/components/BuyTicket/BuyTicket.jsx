import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BusRoutesServices from "../../services/BusRoutesServices";
import BusTypesService from "../../services/BusTypesService";
import QrReader from "react-qr-scanner";
import { toast, ToastContainer } from "react-toastify";
import TicketServices from "../../services/TicketServices";
import { AdminFooter } from "../AdminFooter";
import AdminNavbar from "../AdminNavbar";
const BuyTicket = () => {
  const { tripDetails, busTypes } = JSON.parse(
    localStorage.getItem("tripDetails")
  );

  const userID = localStorage.getItem("user");

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
    userId: "",
  });

  const [route, setRoute] = useState({
    stopList: [],
    name: "",
    _id: "",
    ticketPrice: 0,
  });

  const [reader, setReader] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [userId, setUserId] = useState("");

  const getIndex = (stop) => {
    for (let key in route.stopList) {
      if (route.stopList[key] === stop) {
        return key;
      }
    }
  };

  const handleSubmit = async (e) => {
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

      const price = unitPrice * stopLen;
      setTicket({ ...ticket, ticketPrice: price });
      setTicket({ ...ticket, routeName: route.name });
      console.log(
        price + " == " + unitPrice + " == " + stopLen + " == " + route.name
      );
      toast.success("Ticket bought successfully", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log({ ticket, price, route, userId });
      try {
        const newTicket = await TicketServices.addTicket({
          ticket,
          price,
          route,
          userId,
        });
        console.log("====================================");
        console.log(newTicket);
        console.log("====================================");
      } catch (error) {
        console.log(error);
      }
      setScanned(false);
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
      setScanned(true);
      setUserId(result.text);
      setReader(false);
    }
  };

  const endJourney = () => {
    localStorage.removeItem("tripDetails");
    window.location = "/Dashboard";
  };

  useEffect(() => {
    getRouteDetails();
  }, [ticket]);

  return (
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
    <div className="card p-3 mt-5">
      <div className="card-header mb-3">
        <h4>Buy Ticket</h4>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
          {scanned ? (
            <button type="submit" className="btn btn-primary mx-3 mt-3">
              Buy Ticket
            </button>
          ) : (
            <button
              type="submit"
              disabled
              className="btn btn-primary mx-3 mt-3"
            >
              Buy Ticket
            </button>
          )}
          <button
            onClick={hanldeOnClick}
            type="button"
            className="btn btn-primary ml-3 mt-3"
          >
            Scan QR Code
          </button>
        </form>
        <div className="mt-5">
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
      </div>
      <div className="row d-flex justify-content-center">
        <button
          onClick={endJourney}
          type="button"
          className="btn btn-success ml-3 mt-3 col-2"
        >
          End Journey {">>"}
        </button>
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

export default BuyTicket;
