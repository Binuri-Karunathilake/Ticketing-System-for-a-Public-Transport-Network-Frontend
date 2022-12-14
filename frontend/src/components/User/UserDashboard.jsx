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
                
                <MDBIcon fas icon="fa-duotone fa-bus fa-lg text-black" />
                &nbsp;
                <MDBIcon fas icon="fa-solid fa-clock fa-lg text-black" />
                <br /> <span></span>
              </MDBCardHeader>
              <Link to="/BusTypeView" class="btn btn-info">
                Bus TimeTable
              </Link>
            </MDBCard>
          </MDBCol>
          <br></br>
          <br></br>



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
                <MDBIcon fas icon="fa-solid fa-envelope fa-lg text-black" />
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

                <MDBIcon fas icon="fa-solid fa-clipboard fa-lg text-black" />
                <br />
                <span></span>
              </MDBCardHeader>
              <Link to="/payment/add" class="btn btn-info">
                Payment
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
                <MDBIcon fas icon="fa-solid fa-envelope fa-lg text-black" />
                <br />
                <span></span>
              </MDBCardHeader>
              <Link to="/UserTicketTable" class="btn btn-info">
                Tickets History
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
                <MDBIcon fas icon="fa-solid fa-check fa-lg text-black" />
                <br /> <span></span>
              </MDBCardHeader>
              <Link to="/Safety" class="btn btn-info">
                Safety
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
                <MDBIcon fas icon="fa-solid fa-phone fa-lg text-black" />
                <br />
                <span></span>
              </MDBCardHeader>
              <Link to="/contactUs" class="btn btn-info">
                Contact US
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
                
                <MDBIcon fas icon="fa-solid fa-address-card fa-lg text-black" />
                <br />
                
                <span></span>
              </MDBCardHeader>
              <Link to="/aboutUs" class="btn btn-info">
                About Us
              </Link>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <br />
      <div className="mt-5">

      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>    
  );


};

export default UserDashborad;
