import axios from "axios";
import { API_URL } from "../constants/CommonConstants";

class BusRoutesService {

    getBusRoutes() {
        return axios.get(API_URL+'busRoutes');
    }
    addBusRoute(route) {
        return axios.post(API_URL+'busRoutes/addRoute', route);
    }
    deleteBusRoute(routeId) {
        return axios.delete(API_URL+'busRoutes/'+routeId);
    }
}

export default new BusRoutesService;