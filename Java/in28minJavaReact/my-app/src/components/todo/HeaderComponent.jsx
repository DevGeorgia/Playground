import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService.js';


class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">
                        AppName
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/todo">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><Link className="nav-link" to="/login">Login</Link></li>
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);