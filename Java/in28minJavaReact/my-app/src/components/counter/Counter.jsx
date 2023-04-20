import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Counter.css';



class CounterComponent extends Component {

    // Define initial state in constructor
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counterComponent">
                
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>

              <p>{this.state.counter}</p>

              <button onClick={this.reset}>Reset</button>
            </div>
          );  
    }
    
    // update state
    increment(by) {
        this.setState(
            (prevState) => {
               return {counter: prevState.counter + by}
            }
        );
    }

    // update state
    decrement(by) {
        this.setState(
            (prevState) => {
               return {counter: prevState.counter - by}
            }
        );
    }

    // reset state
    reset() {
        this.setState({counter: 0});
    }

}

class CounterButton extends Component {

    // Define initial state in constructor
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    render() {
        return (
            <div className="counterButton">
              <button onClick={this.increment}>+{this.props.by}</button>
              <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
          );  

          
    }

    
    // update state
    increment() {
        console.log("increment");
        this.setState({
                counter: this.state.counter + this.props.by
            }
        );

        this.props.incrementMethod(this.props.by);
    }

    // update state
    decrement() {
        console.log("decrement");
        this.setState({
                counter: this.state.counter + this.props.by
            }
        );

        this.props.decrementMethod(this.props.by);
    }

  }

// Props
CounterButton.defaultProps = {
      by : 1
  }
 
  // Constrains
  CounterButton.propTypes = {
    by : PropTypes.number
}



  export default CounterComponent;