import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BusRoutesServices from "../../services/BusRoutesServices";
import BusRoute from "./BusRoute";
import AdminNavbar from "../AdminNavbar";
import { AdminFooter } from "../AdminFooter";


const BusRoutesTable = () => {
  const [routes, setRoutes] = useState([
    {
      name: "",
      ticketPrice: 0,
      stopList: [],
      id: 0,
    },
  ]);

  const getBusRoutes = async () => {
    try {
      const busRoutes = await BusRoutesServices.getBusRoutes();
      setRoutes(busRoutes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBusRoutes();
  }, []);

  return (
    <div> <div>
    <AdminNavbar />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      
      <div className="card m-4 p-5 shadow bg-body rounded border-0">
        <div class="card-header mb-4">
          <h6 class="card-title">Bus Routes</h6>
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Route Name</th>
                    <th scope="col">Ticket Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route, index) => {
                    return (
                      <BusRoute route={route} key={route.id} index={index} />
                    );
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <AdminFooter />

    </div>
  );
};

export default BusRoutesTable;
