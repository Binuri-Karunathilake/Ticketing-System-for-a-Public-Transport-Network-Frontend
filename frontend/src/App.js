import React from 'react';
import{BrowserRouter as Router}from 'react-router-dom';
// import { Routes,Route } from 'react-router';
import './App.css';
import FooterComponent from './components/FooterComponent';
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

function App() {
  return (
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
        {/*Bus Types*/}        
        <Route path='/BusTypes' element={<BusTypesTable/>} />
        <Route path='/BusTypes/add' element={<AddBusType/>} />
        {/* Ticketing System         */}
        <Route path='/BusJourney' element={<BeginBusJourney />} />
        <Route path='/BusJourney/ticket' element={<BuyTicket />} />
        {/* Ticketing System         */}
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
