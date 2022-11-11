import axios from'axios';
import { API_URL } from "../constants/CommonConstants";


// const API_URL = 'http://localhost:8090/api/v1/BusTypes';

class BusTypesService{

    getBusTypes(){
        return axios.get(API_URL+'busTypes');

    }

    addBusType(BusType) {
        return axios.post(API_URL+'busTypes', BusType);
    }
    deleteBusType(BusTypeId) {
        return axios.delete(API_URL+'busTypes/'+BusTypeId);
    }
    getBusType(id) {
        return axios.get(API_URL+'busTypes/'+id);
    }
}

export default new BusTypesService()