import axios from 'axios';

import API_URL from '../Constants.js';
import JPA_API_URL from '../Constants.js';


class TodoDataService {

    retrieveAllTodos(name) {
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/todo/${id}`);
    }

    deleteTodo(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/todo/${id}`)
    }

    updateTodo(name, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${name}/todo/${id}`, todo)
    }
    
    createTodo(name, todo) {
        return axios.post(`${JPA_API_URL}/users/${name}/todo/${id}`, todo)
    }

}

export default new TodoDataService();