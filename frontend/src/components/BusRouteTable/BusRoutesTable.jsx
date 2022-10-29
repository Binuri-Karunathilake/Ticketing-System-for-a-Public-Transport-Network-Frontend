import React from "react";
import BusRoute from "./BusRoute";

const BusRoutesTable = () => {
  var route = { name: "", price: 0, stopList: "" };

  return (
    <div>
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
                  <BusRoute route={route} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRoutesTable;
