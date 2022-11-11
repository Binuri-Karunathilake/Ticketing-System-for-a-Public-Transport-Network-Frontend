import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { Footer } from "../FooterComponent";
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardHeader,
} from "mdb-react-ui-kit";

const UserDashborad = () => {
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
        style={{ paddingTop: "3%", paddingLeft: "4%", paddingRight: "4%" }}
      >
        <MDBRow
          style={{ paddingTop: "4%", paddingLeft: "6%", paddingRight: "4%" }}
        >
          <MDBCol sm="3">
            <MDBCard
              className=" "
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center"
                style={{ color: "white" }}
              >
                
                <MDBIcon fas icon="fa-solid fa-route fa-lg text-black" />
                <br /> <span></span>
              </MDBCardHeader>
              <Link to="/" class="btn btn-info">
                Bus Types
              </Link>
            </MDBCard>
          </MDBCol>
          <br></br>
          <br></br>

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
              className=" "
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="plus-circle text-black" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-route fa-lg text-black" />
                <br />
              </MDBCardHeader>
              <Link to="/UserReadQR" class="btn btn-info">
                Online Ticket
              </Link>
            </MDBCard>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

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
              className=" "
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-black" />
                <br /> <span></span>
              </MDBCardHeader>
              <Link to="/" class="btn btn-info">
                Safety
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
              className=" "
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="plus-circle  text-black" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-black" />
                <br />
                <span></span>
              </MDBCardHeader>
              <Link to="/BusTypes/add" class="btn btn-info">
                Time Table
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
          <MDBCol sm="3">
            <MDBCard
              className=" "
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="plus-circle  text-black" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-black" />
                <br />
                
                <span></span>
              </MDBCardHeader>
              <Link to="/" class="btn btn-info">
                About Us
              </Link>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="3">
            <MDBCard
              className=" "
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <MDBCardHeader
                className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center"
                style={{ color: "white" }}
              >
                <MDBIcon fas icon="plus-circle  text-black" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-black" />
                <br />
                <span></span>
              </MDBCardHeader>
              <Link to="/BusTypes/add" class="btn btn-info">
                How to Pay
              </Link>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <br />
      <div className="mt-5">

      </div>
      <Footer />

    </div>

    

    
  );


};

export default UserDashborad;
