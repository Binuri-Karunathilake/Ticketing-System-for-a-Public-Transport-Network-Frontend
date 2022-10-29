import './App.css';
import ListBustTypesComponent from './components/ListBustTypesComponent';
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
