import React from 'react';
import{BrowserRouter as Router}from 'react-router-dom';
import { Routes,Route } from 'react-router';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBustTypesComponent from './components/ListBustTypesComponent';
import AddBusTypesComponent from './components/AddBusTypesComponent';
import BusRooutesTable from './components/BusRouteTable/BusRoutesTable';
import { Route, Routes } from 'react-router-dom';
import BusTypesService from './services/BusTypesService';
import AddBusRoute from './components/AddBussRoute/AddBusRoute';
import RouteDetails from './components/RouteDetails/RouteDetails';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/busRoutes' element={<BusRooutesTable/>} />
        <Route path='/busTypes' element={<BusTypesService/>} />
        <Route path='/busRoutes/add' element={<AddBusRoute/>} />
        <Route path='/busRoutes/details' element={<RouteDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
