import axios from'axios';
import { API_URL } from "../constants/CommonConstants";


// const API_URL = 'http://localhost:8090/api/v1/BusTypes';

class TicketServices{

    addTicket(ticket){
        return axios.post(API_URL+'ticket', ticket);
    }

    getAllTickets(user) {
        return axios.get(API_URL+'ticket');
    }
}

export default new TicketServices()