import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { AdminFooter } from "../AdminFooter";

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
      <AdminNavbar />
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
          style={{ paddingTop: "4%", paddingLeft: "4%", paddingRight: "4%" }}
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
              <Link to="/BusRoutes" class="btn btn-dark text-white">
                View Route
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
                <MDBIcon fas icon="plus-circle text-black" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-route fa-lg text-black" />
                <br />
              </MDBCardHeader>
              <Link to="/busRoutes/add" class="btn btn-dark text-white">
                Add Route
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
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-black" />
                <br /> <span></span>
              </MDBCardHeader>
              <Link to="/BusTypes" class="btn btn-dark text-white">
                View Bus Types
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
              <Link to="/BusTypes/add" class="btn btn-dark text-white">
                Add Bus Types
              </Link>
            </MDBCard>
          </MDBCol>
        </MDBRow>



        <MDBRow
          style={{ paddingTop: "4%", paddingLeft: "4%", paddingRight: "4%" }}
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
                <MDBIcon fas icon="plus-circle  text-black" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-bus fa-lg text-black" />
                <br />
                <span></span>
              </MDBCardHeader>
              <Link to="/BusJourney" class="btn btn-dark text-white">
                Start New Journey
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
              <Link to="/tickets" class="btn btn-dark text-white">
                Purchased Tickets
              </Link>
            </MDBCard>
          </MDBCol>
        </MDBRow>
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

export default AdminDashborad;
