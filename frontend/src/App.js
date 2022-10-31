import React from 'react';
import{BrowserRouter as Router}from 'react-router-dom';
import { Routes,Route } from 'react-router';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBustTypesComponent from './components/ListBustTypesComponent';
import AddBusTypesComponent from './components/AddBusTypesComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route path = "/" element ={<ListBustTypesComponent/>}></Route>
                <Route path = "/BusTypes" element ={<ListBustTypesComponent/>}></Route>
                <Route path = "/AddBusType" element = {<AddBusTypesComponent/>}></Route>
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
