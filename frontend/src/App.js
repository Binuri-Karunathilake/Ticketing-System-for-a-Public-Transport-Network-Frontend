import React from 'react';
import{BrowserRouter as Router}from 'react-router-dom';
// import { Routes,Route } from 'react-router';
import './App.css';
import FooterComponent, { Footer } from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import BusRooutesTable from './components/BusRouteTable/BusRoutesTable';
import { Route, Routes } from 'react-router-dom';
import AddBusRoute from './components/AddBussRoute/AddBusRoute';
import RouteDetails from './components/RouteDetails/RouteDetails';
import AddPayment from './components/payment/AddPayment';
import RechargeAcc from './components/payment/RechargeAcc';
import AboutUs from './components/AboutUs';
import AdminDashborad from './components/AdminDashboard/AdminDashborad';
import AddBusType from './components/AddBusType/AddBusTypesComponent';
import BusTypesTable from './components/BusTypesTable/BusTypesTable';
import BeginBusJourney from './components/BeginBusJourney/BeginBusJourney';
import BuyTicket from './components/BuyTicket/BuyTicket';
import Login from './components/Login/login';
import UserDashborad from './components/User/UserDashboard';
import ContactUs from './components/ContactUs';
import UserGetQR from './components/UserGetQR/UserGetQR';

function App() {
  return (
    <>
    <div className="container">
      <Routes>
        <Route path='/Dashboard' element={<AdminDashborad/>} />
        {/*Bus Routes*/}
        <Route path='/busRoutes' element={<BusRooutesTable/>} />
        <Route path='/busRoutes/add' element={<AddBusRoute/>} />
        <Route path='/busRoutes/details' element={<RouteDetails/>} />
        <Route path='/payment/add' element={<AddPayment/>} />
        <Route path='/payment/rechargeAcc' element={<RechargeAcc/>} />
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        


        {/*Bus Types*/}        
        <Route path='/BusTypes' element={<BusTypesTable/>} />
        <Route path='/BusTypes/add' element={<AddBusType/>} />
        {/* Ticketing System*/}
        <Route path='/BusJourney' element={<BeginBusJourney />} />
        <Route path='/BusJourney/ticket' element={<BuyTicket />} />
        {/* Login */}
        <Route path='/' element={<Login />} />
        {/* user */}
        <Route path='/UserDash' element={<UserDashborad/>} />
        <Route path='/UserReadQR' element={<UserGetQR/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
