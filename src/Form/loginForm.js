import React from 'react';
import Btn from './button';
import InputField from './input';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginReducer: null,
            password: null
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let token = this.encode(`${this.state.loginReducer}:${this.state.password}`);
        console.log(this.props)
        // calling redux action
        this.props.doLogin(token);
        this.props.history.push('/scan');
    }

    encode(token) {
        return btoa(token);
    }

    render() {
        return (
            <form id="login-form" onSubmit={this.onSubmit.bind(this)}>
                <InputField type="text"
                            name="login"
                            onChange={this.onChange.bind(this)}
                            placeholder="Login"/>

                <InputField type="password"
                            name="password"
                            onChange={this.onChange.bind(this)}
                            placeholder="Password" />

                <Btn type="submit" text="Sign Up" />

            </form>
        );
    }
}

const LoginFormWithRouter = withRouter(LoginForm);
export default LoginFormWithRouter;