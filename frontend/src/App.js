import './App.css';
import ListBustTypesComponent from './components/ListBustTypesComponent';
import BusRooutesTable from './components/BusRouteTable/BusRoutesTable';
import { Route, Routes } from 'react-router-dom';
import BusTypesService from './services/BusTypesService';
import AddBusRoute from './components/AddBussRoute/AddBusRoute';
import RouteDetails from './components/RouteDetails/RouteDetails';
import AddPayment from './components/payment/AddPayment';
import RechargeAcc from './components/payment/RechargeAcc';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/busRoutes' element={<BusRooutesTable/>} />
        <Route path='/busTypes' element={<BusTypesService/>} />
        <Route path='/busRoutes/add' element={<AddBusRoute/>} />
        <Route path='/busRoutes/details' element={<RouteDetails/>} />
        <Route path='/payment/add' element={<AddPayment/>} />
        <Route path='/payment/rechargeAcc' element={<RechargeAcc/>} />
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
