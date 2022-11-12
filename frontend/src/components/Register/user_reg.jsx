import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import axios from "axios";
import Swal from "sweetalert2";
import { Navbar } from "react-bootstrap";
import UserServices from "../../services/UserServices";
import LoginNavbar from "../LoginNavbar";



function RegDashboard() {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [tel, setTel] = useState("");
  const [password, setRegpassword] = useState("");

  const [emailStatus, setEmailStatus] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [Messagematchpassword, setMessagematchpassword] = useState("");
  const [MessagematchpasswordColor, setMessagematchpasswordColor] =
    useState("");
  const [Messagepassword, setMessagepassword] = useState("");
  const [MessagepasswordColor, setMessagepasswordColor] = useState("");

  function setRegcpasswordFun(e) {
    const c_pass = e;
    if (c_pass == password) {
      setMessagematchpassword("Passwords are matching");
      setMessagematchpasswordColor("green");
    } else {
      setMessagematchpassword("Passwords are not matching");
      setMessagematchpasswordColor("red");
    }
    setCPassword(c_pass);
  }

  function setRegpasswordFun(e) {
    const password = e;
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
      setMessagepassword("Password is strong");
      setMessagepasswordColor("#0A734E");
    } else {
      setMessagepassword("Password is not strong");
      setMessagepasswordColor("#E10B0B");
    }
    setRegpassword(password);
  }

  function setFunEmail(e) {
    const email_Add = e;
    if (validateEmail(email_Add)) {
      setEmailStatus("Email is valid");
      setEmailColor("green");
    } else {
      setEmailStatus("Email is invalid");
      setEmailColor("red");
    }
    setEmail(email_Add);
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function submit(e) {
    e.preventDefault();
    const userReg = { password, name, email, contactNo: tel };

    UserServices.userRegistration(userReg)
      .then((refUser) => {
        localStorage.setItem("user", refUser.data.data.id);
        Swal.fire({
          title: "Success!",
          text: "user Registration Success!",
          icon: "success",
          confirmButtonText: "OK",
          type: "success",
        }).then((okay) => {
          if (okay) {
            window.location.href = "/userDash";
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "user Registration Not Success",
          icon: "error",
          confirmButtonText: "OK",
          type: "success",
        });
      });
  }
  return (
    <div>
<LoginNavbar />
<br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div
        class="global-container3" style={{ paddingTop: "5%", paddingBottom: "5%" }}
      >
        <center>
          <div class="container">
            <div class="row bg-dark rounded p-4">
              <center>
                <h4 class="card-title text-center pt-5 pb-2  text-uppercase text-light">
                  User Registration
                </h4>
              </center>
              <div class="col-sm-12 mb-4">
                <div class="row">
                  <div class="col-sm">
                    <div class="mb-3 text-start mt-4">
                      <label class="form-label text-light " style={{ lineHeight: 0 }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="mb-3 text-start mt-4">
                      <label class="form-label text-light" style={{ lineHeight: 0 }}>
                        Email
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                          setFunEmail(e.target.value);
                        }}
                      />
                      <span style={{ fontSize: "14px", color: emailColor }}>
                        {emailStatus}
                      </span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="mb-3 text-start mt-4">
                      <label class="form-label text-light" style={{ lineHeight: 0 }}>
                        Telephone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={10}
                        onChange={(e) => {
                          setTel(e.target.value);
                        }}
                        value={tel}
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3 text-start mt-4">
                      <label class="form-label text-light" style={{ lineHeight: 0 }}>
                        {" "}
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        onChange={(e) => {
                          setRegpasswordFun(e.target.value);
                        }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          color: MessagepasswordColor,
                        }}
                      >
                        {Messagepassword}
                      </span>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3 text-start mt-4">
                      <label class="form-label text-light" style={{ lineHeight: 0 }}>
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        onChange={(e) => {
                          setRegcpasswordFun(e.target.value);
                        }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          color: MessagematchpasswordColor,
                        }}
                      >
                        {Messagematchpassword}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 mb-4">
                <div class="mb-3 text-end ">
                  <button
                    type="button"
                    class="btn btn-outline-light"
                    onClick={() => (window.location.href = "/index")}
                  >
                    Back
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" class="btn btn-info" onClick={submit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default RegDashboard;
