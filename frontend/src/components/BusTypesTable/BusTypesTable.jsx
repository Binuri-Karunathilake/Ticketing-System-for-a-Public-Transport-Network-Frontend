import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BusTypesService from "../../services/BusTypesService"
import BusType from "./BusTypes";
import AdminNavbar from "../AdminNavbar";
import { AdminFooter } from "../AdminFooter";

const BusTypesTable = () => {
    const [BusTypes, setBusTypes] = useState([{
        name: "",
        numberPlate: "",
        day: "",
        capacity: "",
        route:"",
      }]);

  const getBusTypes = async () => {
    try {
      const Type = await BusTypesService.getBusTypes();
      console.log(Type);
      setBusTypes(Type.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBusTypes();
  }, []);

  console.log(BusTypes);

  return (
    <div>    <div>
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
          <h6 class="card-title">Bus Types</h6>
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Bus Name</th>
                    <th scope="col">Number Plate</th>
                    <th scope="col">Day</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">Route</th>
                  </tr>
                </thead>
                <tbody>
                 {BusTypes.map((type, index) => {
                    console.log(
                      type
                    );
                    return (
                      <BusType BusType={type} key={type.id} index={index} />
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

export default BusTypesTable;
