import React from "react";
import { Link } from "react-router-dom";

const AdminDashborad = () => {
  return (
    <div>
      <div className="row">
        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/BusRoutes" class="btn btn-primary">
              View Route
            </Link>
            <Link to="/BusJourney" class="btn btn-primary">
              Start Journey
            </Link>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/BusRoutes/add" class="btn btn-primary">
              Add Route
            </Link>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/BusTypes" class="btn btn-primary">
              View Bus Types
            </Link>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/BusTypes/add" class="btn btn-primary">
              Add Bus Types
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashborad;
