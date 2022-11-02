import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardHeader,
} from "mdb-react-ui-kit";

const AdminDashborad = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div
        className="MDBROW"
        style={{ paddingTop: "1%", paddingLeft: "4%", paddingRight: "4%" }}
      >
        <MDBRow
          style={{ paddingTop: "1%", paddingLeft: "4%", paddingRight: "4%" }}
        >
          <MDBCol sm="3">
            <MDBCard
              className=" square border-bottom border-5 border-dark"
              style={{
                backgroundColor: "#2E8B57",
                boxShadow: "2px 3px 5px #BBBBBB",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="fa-solid fa-route fa-lg text-white" />
                <br /> <span></span>
              </MDBCardHeader>
              <Link to="/BusRoutes" class="btn btn-primary">
                View Route
              </Link>
            </MDBCard>
          </MDBCol>

          {/* <div class="card-header">Routes</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
           
          </div> */}

          <MDBCol sm="3">
            <MDBCard
              className=" square border-bottom border-5 border-dark "
              style={{
                backgroundColor: "#2E8B57",
                boxShadow: "2px 3px 5px #BBBBBB",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="plus-circle text-white" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-route fa-lg text-white" />
                <br />
              </MDBCardHeader>
              <Link to="/BusRoutes/add" class="btn btn-primary">
                Add Route
              </Link>
            </MDBCard>
          </MDBCol>

          {/* <div class="card">
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
        </div> */}
          <MDBCol sm="3">
            <MDBCard
              className=" square border-bottom border-5 border-dark "
              style={{
                backgroundColor: "#2E8B57",
                boxShadow: "2px 3px 5px #BBBBBB",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-white" />
                <br /> <span></span>
              </MDBCardHeader>
              <Link to="/BusTypes" class="btn btn-primary">
                View Bus Types
              </Link>
            </MDBCard>
          </MDBCol>
          {/* <div class="card">
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
        </div> */}
          <MDBCol sm="3">
            <MDBCard
              className=" square border-bottom border-5 border-dark "
              style={{
                backgroundColor: "#2E8B57",
                boxShadow: "2px 3px 5px #BBBBBB",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="plus-circle  text-white" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-white" />
                <br />
                <span></span>
              </MDBCardHeader>
              <Link to="/BusTypes/add" class="btn btn-primary">
                Add Bus Types
              </Link>
            </MDBCard>
          </MDBCol>

          {/* <div class="card">
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
          </div> */}
        </MDBRow>
      </div>
    </div>
  );
};

export default AdminDashborad;
