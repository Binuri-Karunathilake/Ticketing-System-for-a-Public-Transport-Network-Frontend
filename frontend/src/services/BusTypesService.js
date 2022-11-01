import axios from'axios';

const BUSTYPES_API_BASE_URL = 'http://localhost:8090/api/v1/BusTypes';

class BusTypesService{

    getBusTypes(){
        
        return axios.get(BUSTYPES_API_BASE_URL);

    }
}

export default new BusTypesService()