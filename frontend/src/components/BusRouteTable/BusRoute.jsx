import React from "react";
import { Link } from "react-router-dom";
import BusRoutesServices from "../../services/BusRoutesServices";
import Swal from "sweetalert2";
import NavBar from "../NavBar";
import { Footer } from "../FooterComponent";

const BusRoute = ({ route, index }) => {
  const deleteRoute = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const reply = await BusRoutesServices.deleteBusRoute(route._id);
          console.log(reply);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          window.location.reload(false);
        }
      });
    } catch (error) {}
  };

  return (



    
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{route.name}</td>
      <td>Rs.{route.ticketPrice}</td>
      <td>
        <Link
          className="btn btn-warning me-3"
          to="/busRoutes/details"
          state={{ route: route }}
        >
          More Info
        </Link>
        <button className="btn btn-danger" onClick={deleteRoute}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BusRoute;
