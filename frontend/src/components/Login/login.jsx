import React, { useState, useEffect } from "react";
//import HomePageNav from '../navbars/homePageNav';
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function register() {
    window.location.href = "/student/Reg";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "Admin") {
      window.location = "/Dashboard";
    } else if (username === "User" && password === "User") {
      Swal.fire({
        title: "Success!",
        text: "Login Success",
        icon: "success",
        confirmButtonText: "OK",
        type: "success",
      }).then(()=>{
        window.location="/UserDash"}
        );
    } else {
      Swal.fire({
        title: "Error!",
        text: "Login Not Success",
        icon: "error",
        confirmButtonText: "OK",
        type: "success",
      });
    }
  };

  return (
    <div>
      <div
        class="global-container"
        style={{ paddingTop: "9%", paddingBottom: "1%" }}
      >
        <center>
          <div class="card login-form shadow border-0 ">
            <div class="card-head bg-header rounded-top">
              <h4 class="card-title text-center pt-5 pb-2  text-uppercase text-dark">
                Login Page
              </h4>
            </div>
            <div class="card-body">
              <div class="card-text">
                <form action="#" method="post" onSubmit={handleSubmit}>
                  <div class="mb-3 ">
                    <h6 className="fw-normal text-black-50 text-start">
                      User Name :
                    </h6>
                    <input
                      class="form-control"
                      type="text"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3 ">
                    <h6 className="fw-normal text-black-50 text-start">
                      Password :
                    </h6>
                    <input
                      class="form-control"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div class="mt-3 mb-2">
                    <div class="d-grid gap-2">
                      <button
                        type="submit"
                        class="btn text-white  d-letter-spacing shadow-0 fw-light"
                        style={{ backgroundColor: "#1E1E1E" }}
                      >
                        <span className="h6">Login</span>
                      </button>
                      <p style={{ cursor: "pointer" }} onClick={register}>
                        Do you want to register?
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Login;
