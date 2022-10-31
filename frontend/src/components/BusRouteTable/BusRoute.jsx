import React from "react";

const BusRoute = ({ route, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{route.name}</td>
      <td>Rs.{route.ticketPrice}</td>
      <td>
        <button className="btn btn-warning me-3">More Info</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default BusRoute;
