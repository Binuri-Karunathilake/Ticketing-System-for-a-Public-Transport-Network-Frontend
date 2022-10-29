import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";
import { MAP_API_KEY } from "../../constants/CommonConstants";

const GoogleMaps = ({ google }) => {
  return (
    <div>
      <Map
        google={google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        initialCenter={{
          lat: 7.291418,
          lng: 80.636696,
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyApcbfv-mup1EIuC0Ur2G5DiR626lbJzUI",
})(GoogleMaps);
