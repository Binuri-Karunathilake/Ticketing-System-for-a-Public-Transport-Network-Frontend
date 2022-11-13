import React ,{useState , useEffect} from "react";
import LoginNavbar from "../LoginNavbar";
// import '../src/style.css';

function Index() {
  return (
    <div>
       <LoginNavbar/>
       <img src="https://images.pexels.com/photos/1426516/pexels-photo-1426516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" width="100%" alt="..."></img>
       <div className="bg-black  pt-3 pb-3 ps-5 pe-5">
           <br/>
       </div>
    </div>
  );
}

export default Index;
