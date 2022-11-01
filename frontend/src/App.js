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
import AddBusType from './components/AddBusType/AddBusTypesComponent';
import BusTypesTable from './components/BusTypesTable/BusTypesTable';

function App() {
  return (
    <div className="container">
      <Routes>
        {/*Bus Routes*/}
        <Route path='/busRoutes' element={<BusRooutesTable/>} />
        <Route path='/busRoutes/add' element={<AddBusRoute/>} />
        <Route path='/busRoutes/details' element={<RouteDetails/>} />
        {/*Bus Types*/}        
        <Route path='/BusTypes' element={<BusTypesTable/>} />
        <Route path='/BusTypes/add' element={<AddBusType/>} />        
      </Routes>
    </div>
  );
}

export default App;
