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

export default function AdminNavbar() {
  const [showBasic, setShowBasic] = useState(false);
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <div className="fixed-top">
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#000000" }}>
        <MDBContainer>
          <MDBNavbarBrand className="text-light" href="/Dashboard">
            <MDBIcon size="2x" fas icon="bus" />
            &nbsp;
            <b>
              Journy<i>.lk</i>
            </b>
          </MDBNavbarBrand>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                className="text-light"
                active
                aria-current="page"
                href="/Dashboard"
              >
                Home
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
                    color="light"
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
      {/* <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer > */}
      {/* <MDBNavbarBrand className='text-dark' href='/AdminDashboard'><MDBIcon size='2x' fas icon="bus" />&nbsp;Journy <i>.lk</i></MDBNavbarBrand> */}

      {/* <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler> */}

      {/* <MDBCollapse navbar show={showBasic}> */}
      {/* <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'> */}
      {/* <MDBNavbarItem>
              <MDBNavbarLink className='text-muted' active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-muted' active aria-current='page' href='#'>
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-muted' active aria-current='page' href='#'>
                Services
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-muted' active aria-current='page' href='#'>
                Careers
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-muted' active aria-current='page' href='#'>
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem> */}
      {/* </MDBNavbarNav> */}

      {/* </MDBCollapse> */}
      {/* </MDBContainer>
    </MDBNavbar> */}
    </div>
  );
}