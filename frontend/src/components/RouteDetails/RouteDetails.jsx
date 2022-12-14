import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import StopDetails from "./StopDetails";
import { AdminFooter } from "../AdminFooter";
import AdminNavbar from "../AdminNavbar";

const RouteDetails = () => {
  const [stopList, setStopList] = useState([]);

  const location = useLocation();

  const { route } = location.state;

  const [routeDetails, setRouteDetails] = useState({
    name: "",
    ticketPrice: 0,
    stopList: "",
  });

  console.log(route);

  return (
    <div>
      <div>
        <AdminNavbar />
        <br></br>
        <br></br>
        <br></br>

        <div className="row bg-grey h-100" style={{ height: "100%" }}>
          <div className="col m-5">
            <div className="row d-flex justify-content-center">
              <div class="card" style={{ width: "100%" }}>
                <div className="card-header">Bus Route Details</div>
                <img
                  style={{ width: "100%", height: 500, objectFit: "cover" }}
                  src="https://images.pexels.com/photos/5259420/pexels-photo-5259420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="busStop"
                />
                <div class="card-body">
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 p-3">
                <div className="col-12 p-3">
                  <div className="card rounded-0 shadow">
                    <div className="card-body">
                      <table className="table ">
                        <tr>
                          <td>Route name : </td>
                          <td>{route.name}</td>
                        </tr>
                        <tr>
                          <td>Ticket Price :</td>
                          <td>Rs.{route.ticketPrice}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-8 col-sm-6 p-3 my-auto"
                style={{ height: "100%" }}
              >
                <div className="card rounded-0 shadow align-middle">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Bus Stop Name</th>
                        <th scope="col">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {route.stopList.map((details, index) => {
                        return <StopDetails details={details} index={index} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <AdminFooter />
      </div>
    </div>
  );
};

export default RouteDetails;
