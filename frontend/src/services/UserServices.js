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

    getUserById(id) {
        return axios.get(API_URL + 'user/payment/'+ id);
    }
}

const singletonInstance = new BusTypesService();

Object.freeze(singletonInstance);

export default singletonInstance;

//https://ticketing-system-backend-hexcl.herokuapp.com