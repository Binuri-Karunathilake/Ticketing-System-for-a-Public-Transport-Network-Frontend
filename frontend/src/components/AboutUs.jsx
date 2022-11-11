import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText
} from "mdb-react-ui-kit";
const aboutUs = () => {
  return (
    <div>    
    <h1>About Us!</h1>
    <h2 style={{textAlign: "center"}}>Welcome To <span id="W_Name1">Journy.lk</span></h2>
    <p style={{textAlign: "center"}}><span id="W_Name2">Journy.lk</span> is a online <span id="W_Type1">ticketing</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">ticketing</span>, with a focus on dependability and <span id="W_Spec">ticketing
    </span>
    . We're working to turn our passion for <span id="W_Type3">ticketing</span> into a booming <a href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow" style={{ color: "inherit", textDecoration: "none"}}>online website</a>. We hope you enjoy our <span id="W_Type4">ticketing</span> as much as we enjoy offering them to you.</p>
    <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
    <p style={{fontWeight: "bold", textAlign: "center"}}> Thanks For Visiting Our Site<br></br><br></br>
    <span style={{color: "blue", fontSize: 16, fontWeight: "bold", textAlign: "center"}}>Have a nice day!</span></p>

<MDBCard background='dark' className='text-white'>
        <MDBCardHeader>About Us!</MDBCardHeader>
        
        <MDBCardBody>

          <p className="fs-1">Welcome To Journy.lk</p>
          <MDBCardText>

Journy.lk is a online ticketing Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of ticketing, with a focus on dependability and ticketing
    
    . We're working to turn our passion for ticketing into a booming <a href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" >online website</a>. We hope you enjoy our ticketing as much as we enjoy offering them to you.
    </MDBCardText>
<MDBCardText>
 I will keep posting more important posts on my Website for all of you. Please give your support and love.
    Thanks For Visiting Our Site

              </MDBCardText>

              <MDBCardText textAlign='center'>
              Thanks For Visiting Our Site              
              </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    
      </div>


  )
}
export default aboutUs;