import React, {Component} from 'react';

import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({[event.target.name]: event.target.value})

    }

    loginClicked() {
        /*AuthenticationService
        .executeBasicAuthenticationService(this.state.username, this.state.username.password)
        .then(
            () => {
                AuthenticationService.registerSuccessLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`);
            }
        )
        .catch(() => {
            this.setState({hasLoginFailed: true});
            this.setState({showSuccessMsg: false});
        })*/
        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.username.password)
        .then(
            (response) => {
                AuthenticationService.registerSuccessLoginForJwt(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`);
            }
        )
        .catch(() => {
            this.setState({hasLoginFailed: true});
            this.setState({showSuccessMsg: false});
        })

    }

    render() {
        return (
            <div>

                <h1>Authentification</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                {this.state.showSuccessMsg && <div>Login Successfull</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
                </div>
                
            </div>
        )
    }
}

export default LoginComponent;