import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';
import TodoDataService from '../../api/todo/TodoDataService.js';

import moment from 'moment';

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: 
            [
                // Implement in componentDidMount
            ],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
    }

    componentDidMount() {
        this.refreshTodos();
    }

    render() {
        return (
            <div>
               <h1>Liste</h1>
               <div className="container">
               <table className="table">
                   <thead>
                       <tr>
                           <th>description</th>
                           <th>Done</th>
                           <th>Target Date</th>
                           <th>update</th>
                           <th>delete</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                        this.state.todos.map(
                            todo => <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate.format("YYY-MM-DD"))}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.updateTodoClicked(todo.id)}>update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.deleteTodoClicked(todo.id)}>delete</button></td>
                                    </tr>)
                        }
                   </tbody>
               </table>
               <div className="row">
                <button className="btn btn-success" onClick={() => this.addTodoClicked()}>add</button>
               </div>
               </div>
               {this.state.message && <p class="alert alert-success">{this.state.message}</p>}
            </div>
        )
    }

    
    deleteTodoClicked(id) {
        let user = AuthenticationService.getUsernameLoggedIn;
        TodoDataService.deleteTodo(user, id)
        .then(response => {
            this.setState({message: "Delete of todo " + id});
            this.refreshTodos();
        })
        .catch(error => console.log(error))
    }

    updateTodoClicked(id) {
        console.log("update " + id);
        let user = AuthenticationService.getUsernameLoggedIn;
        this.props.history.push(`/todo/${id}`);
        /*TodoDataService.updateTodo(user, id)
        .then(response => {
            this.setState({message: "Update of todo " + id});
            this.refreshTodos();
        })
        .catch(error => console.log(error))*/
    }

    refreshTodos() {
        let user = AuthenticationService.getUsernameLoggedIn;
        TodoDataService.retrieveAllTodos(user)
        .then(response => this.setState({todos: response.data}))
        .catch(error => console.log(error))
    }

    addTodoClicked() {
        this.props.history.push(`/todo/-1`);
    }


}

export default ListTodosComponent;