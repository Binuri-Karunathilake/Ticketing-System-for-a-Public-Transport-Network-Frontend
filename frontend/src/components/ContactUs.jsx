import React from 'react'

const ContactUs = () => {
  return (
    <div>

    <h1>Contact Us !</h1>
    <h2 style={{textAalign : "center"}}>Welcome to <span id="W_Name"> journy.lk</span>!</h2>

    <p style={{fontSize: 17}}>Please email us if you have any queries about the site, advertising, or anything else.</p>

    <div style={{textAlign: "center"}}>

      {/* <img alt="contact-us" height="87" src="https://lh3.googleusercontent.com/-BA7qy8h_v1g/YLVCWDNZdCI/AAAAAAAAALw/rsHNJWX0BK4P5CuB0ymG8QkJ9A9E8KchgCLcBGAsYHQ/w320-h87/email-us-1805514__480.webp" width="320"></img> */}

      <p style={{marginLeft: "25%" }}><i class="fas fa-envelope-open-text" style={{color: "#2c3e50",fontSize: 20}}></i> <b><i> <span id="W_Email"><a href="mailto:journylk@gamil.com">journylk@gamil.com</a></span></i></b><br></br>

        <i class="fab fa-whatsapp-square" style={{color: "#3edc81", fontSize: 20}}></i> <b><span id="W_whatsapp"><a href="tel:076234567">076234567</a></span></b><br></br></p>    

      <h3 style={{color: "#3e005d"}}>We will revert you as soon as possible...!</h3>
      <p style={{color: "#3e005d", textAalign: "center"}}>Thank you for contacting us! <br></br><b>Have a great day</b></p>
      <span style={{fontSize: 1, opacity: 0}}>This page is generated with the help of <a href="https://www.blogearns.com/2021/06/free-contact-us-page-generator.html" style={{color: "inherit"}}>Contact Us Page Generator</a></span>
    </div>
  
    </div>
  )
}

export default ContactUs