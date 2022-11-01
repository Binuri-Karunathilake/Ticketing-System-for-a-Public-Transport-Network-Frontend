import axios from'axios';
import { API_URL } from "../constants/CommonConstants";


// const API_URL = 'http://localhost:8090/api/v1/BusTypes';

class BusTypesService{

    getBusTypes(){
        return axios.get(API_URL+'BusTypes');

    }

    addBusType(BusType) {
        return axios.post(API_URL+'BusTypes/AddType', BusType);
    }
    deleteBusType(BusTypeId) {
        return axios.delete(API_URL+'BusTypes/'+BusTypeId);
    }
}

export default new BusTypesService()