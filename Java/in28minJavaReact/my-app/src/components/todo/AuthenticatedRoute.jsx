import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class AuthenticatedRoute extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        
            if(AuthenticationService.isUserLoggedIn()) {
                return <Route {...this.props}></Route>
            } else {
                return <Redirect to="/Login"></Redirect>
            }
        
    }
}

export default AuthenticatedRoute;
