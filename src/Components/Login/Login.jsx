import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "Login WebApp",
            email: "",
            password: ""
        };
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    renderForm = () => {
        return (
            <Form onSubmit={this.handleSubmit}>
                
                <Form.Group controlId="email formBasicEmail">
                    <Form.Label htmlFor="Email address">Email address</Form.Label>
                    <Form.Control 
                        autoFocus 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} placeholder="Enter email" />

                    <Form.Text className="text-muted"> We'll never share your email with anyone else.
                    </Form.Text>

                </Form.Group>

                <Form.Group controlId="password formBasicPassword">
                    <Form.Label>Password</Form.Label>

                    <Form.Control value={this.state.password} type="password" placeholder="Password" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" block disabled={!this.validateForm()} >Login</Button>
            </Form>
        );
    }

    render() {
        return (
            <div className="container Login">
                <h2 className="login-title">{this.state.title}</h2>
                {this.renderForm()}
            </div>
        );
    };
};
