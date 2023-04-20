import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import FooterComponent from './FooterComponent';
import TodoComponent from './TodoComponent';


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todo/:id" component={TodoComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todo" component={ListTodosComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>Page not found</div>
}

export default TodoApp;