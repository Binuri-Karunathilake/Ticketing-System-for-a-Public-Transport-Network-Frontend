import React from "react";

const BusRoute = ({ route }) => {
  route.name = "A to B";
  route.ticketPrice = 250;
  route.id = 1;
  route.stopList = "Kandy,Peradeniya,Kadugannawa,Mawanella";

  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Rs.250</td>
      <td>
        <button className="btn btn-warning me-3">More Info</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default BusRoute;
