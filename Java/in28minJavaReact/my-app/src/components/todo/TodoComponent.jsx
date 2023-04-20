import React, {Component} from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import TodoDataService from '../../api/todo/TodoDataService.js';

class TodoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            description: "Learn forms",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }

    componentDidMount() {
        let user = AuthenticationService.getUsernameLoggedIn;
        TodoDataService.retrieveTodo(user, this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    onSubmit(values) {
        let user = AuthenticationService.getUsernameLoggedIn;

        let todo = {id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if(this.state.id === -1) {
            TodoDataService.createTodo(user, todo).then(this.props.history.push("/todos"))

        } else {
            TodoDataService.updateTodo(user, this.state.id, todo).then(this.props.history.push("/todos"))
            console.log(values);
        }

    }

    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = "Enter a description"
        } else if(values.description.length<5) {
            errors.description = "Enter at least 5 characters"
        }

        if(!moment(values.targetDate).isValid) {
            errors.targetDate = "Enter a valid date"
        }

        return errors;
    }

    render() {

        let {description, targetDate}  = this.state

         return (
         
         <div>
            <h1>TodoComponent for todo {this.props.match.params.id}</h1>
            <div className="container">
                <Formik 
                    initialValues={{description, targetDate}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                <button type="submit" className="btn btn-success">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        )
    }
}

export default TodoComponent;