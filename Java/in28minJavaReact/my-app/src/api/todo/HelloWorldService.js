import axios from 'axios';

import API_URL from '../Constants.js';
import JPA_API_URL from '../Constants.js';

class HelloWorldService {

    executeHelloWorldService() {
        return axios.get(`${API_URL}/hello-world`);
    }

    executeHelloWorldBeanService() {
        return axios.get(`${API_URL}/hello-world-bean`);
    }

    executeHelloWorldPathVarService(name) {
        
        return axios.get(`${API_URL}/hello-world-bean/path-variable/${name}`);
    }

    

}

export default new HelloWorldService();