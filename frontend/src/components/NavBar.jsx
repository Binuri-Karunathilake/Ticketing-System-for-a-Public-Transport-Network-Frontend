import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

const handleLogout = () => {
  localStorage.clear();
};

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <div className="fixed-top">
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#0DCAF0" }}>
        <MDBContainer>
          <MDBNavbarBrand className="text-dark" href="/UserDash">
            <MDBIcon size="2x" fas icon="bus" />
            &nbsp;
            <b>
              Journy<i>.lk</i>
            </b>
          </MDBNavbarBrand>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                className="text-dark"
                active
                aria-current="page"
                href="/UserDash"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                className="text-muted"
                active
                aria-current="page"
                href="/aboutUs"
              >
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          
            <MDBNavbarItem>
              <MDBNavbarLink
                className="text-muted"
                active
                aria-current="page"
                href="contactUs"
              >
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
  
          </MDBNavbarNav>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem className="pt-1">
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="http://localhost:3000/"
                >
                  <MDBIcon size="1x" fas icon="user-alt" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="http://localhost:3000/"
                >
                  <MDBBtn
                    color="dark"
                    outline
                    onClick={handleLogout}
                    className="shadow-0 btn-sm"
                  >
                    LogOut
                  </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      
    </div>
  );
}
