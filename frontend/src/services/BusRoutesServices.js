import axios from "axios";
import { API_URL } from "../constants/CommonConstants";

class BusRoutesService {

    getBusRoutes() {
        return axios.get(API_URL+'busRoutes');
    }
}

export default new BusRoutesService;