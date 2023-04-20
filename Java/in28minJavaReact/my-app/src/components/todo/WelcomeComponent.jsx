import React, {Component} from 'react';
import HelloWorldService from '../../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomeMessage: ""
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfullResponse = this.handleSuccessfullResponse.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
    }

    render() {
        return (
            <>
            <div>
                <h1>Welcome {this.props.match.params.name}<br/></h1>
                Go to your list
            </div>
            <div className="container">
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        /*HelloWorldService.executeHelloWorldService()
        .then(response => this.handleSuccessfullResponse(response));
        //.catch();

        HelloWorldService.executeHelloWorldBeanService()
        .then(response => this.handleSuccessfullResponse(response));
        //.catch();*/

        HelloWorldService.executeHelloWorldPathVarService(this.props.match.params.name)
        .then(response => this.handleSuccessfullResponse(response))
        .catch(error => this.handleErrorResponse(error));
    }

    handleSuccessfullResponse(response) {
        this.setState({
            welcomeMessage: response.data.message
        }) 
    }

    handleErrorResponse(error) {

        let errorMsg = "";
        if(error.message) {
            errorMsg += error.message
        }

        if(error.message && error.response.data) {
            errorMsg += error.response.data.message
        }

        this.setState({
            welcomeMessage: errorMsg
        }) 
    }
}



export default WelcomeComponent;