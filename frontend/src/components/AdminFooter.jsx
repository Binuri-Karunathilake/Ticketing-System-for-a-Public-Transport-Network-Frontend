import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export const AdminFooter = () => {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 text-white d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start text-white mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Journy.lk
              </h6>
              <p>
                No:111, Name Street, Colombo2, Sri Lanka
              </p>
              <p>
                +94 11 2345678              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-white'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Contact Us
                </a>
              </p>

            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Customer Service</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Contact Us
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
About Us              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-white p-4'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright :  
        <a className='text-white fw-bold' href='#'>  Hexclan
        </a>
      </div>
    </MDBFooter>
  );
};