import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TicketServices from "../../services/TicketServices";
import NavBar from "../NavBar";
import { Footer } from "../FooterComponent";

const AdminTicketTable = () => {
  const [tickets, setTickets] = useState([
    {
      route: "",
      startStop: "",
      endStop: "",
      userId: "",
      ticketPrice: 0,
    },
  ]);

  const getTickets = async () => {
    const refTicket = await TicketServices.getAllTickets();
    console.log(refTicket);
    setTickets(refTicket.data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>


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


      <div className="card m-4 p-5 shadow bg-body rounded border-0">
        <div class="card-header mb-4">
          <h6 class="card-title">Bus Types</h6>
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Route Name</th>
                    <th scope="col">Start</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Ticket Price</th>
                    <th scope="col">User-Id</th>
                    <th scope="col">Start Date and Time</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{ticket.route}</td>
                        <td>{ticket.startStop}</td>
                        <td>{ticket.endStop}</td>
                        <td>Rs. {Math.round(ticket.ticketPrice)}</td>
                        <td>{ticket.userId}</td>
                        <td>{ticket.ticketDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>
    </div>
  );
};

export default AdminTicketTable;
