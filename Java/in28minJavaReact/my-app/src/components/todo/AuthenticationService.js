import axios from 'axios';
import API_URL from '../Constants.js';
import JPA_API_URL from '../Constants.js';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class AuthenticationService {


    createBasicAuthToken(username, password) {
        return basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
    }

    createJwtToken(token) {
        return "Bearer " + token;
    }

    executeBasicAuthenticationService(username, password) {
        
        return axios.get(`${API_URL}/basicauth`,
        {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        }
        );
    }

    executeJwtAuthenticationService(username, password) {
        
        return axios.post(`${API_URL}/authenticate`,
            {
                username,
                password
            }
        );
    }

    registerSuccessLogin(username, password) {
        let basicAuthHeader = this.createBasicAuthToken(username, password)
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptor(basicAuthHeader)
        console.log("Register successfully logged");
    }

    registerSuccessLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptor(this.createJwtToken(token))
        console.log("Register successfully logged");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user === null) {
            return false
        } else { 
            return true 
        }
    }

    getUsernameLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user === null) {
            return ""
        } else { 
            return user
        }
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log("Logout successfull");
    }

    setupAxiosInterceptor(token) {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn) {
                    config.headers.authorization = token;
                }
            }
        )
    }

}

export default new AuthenticationService();