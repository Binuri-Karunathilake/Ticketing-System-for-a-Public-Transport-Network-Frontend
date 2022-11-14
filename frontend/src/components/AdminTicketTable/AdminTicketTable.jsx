import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TicketServices from "../../services/TicketServices";
import AdminNavbar from "../AdminNavbar";
import { AdminFooter } from "../AdminFooter";
import { useReactToPrint } from "react-to-print";

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

  const [search, setSearch] = useState("");

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>
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

        <div className="card m-4 p-5 shadow bg-body rounded border-0">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              style={{ width: 300, margin: 5, marginBottom: 20 }}
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </div>
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
                      <th scope="col">Start</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Ticket Price</th>
                      <th scope="col">User-Id</th>
                      <th scope="col">Start Date and Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets
                      .filter((val) => {
                        if (
                          val.startStop
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((ticket, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
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

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminTicketTable;
