import axios from'axios';
import { API_URL } from "../constants/CommonConstants";


// const API_URL = 'http://localhost:8090/api/v1/BusTypes';

class BusTypesService{

    userLogin(user){
        return axios.post(API_URL+'user', user);
    }

    userRegistration(user) {
        return axios.post(API_URL+'user/register', user);
    }
}

export default new BusTypesService()