import React from "react";

const StopDetails = ({ details, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{details}</td>
      <td>
        <a
          href={"https://www.google.lk/maps/search/" + details + "+ Bus+Stop"}
          target="_blank"
        >
          View location
        </a>
      </td>
    </tr>
  );
};

export default StopDetails;
