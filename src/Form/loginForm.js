import React from 'react';
import Btn from './button';
import InputField from './input';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: null,
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
        let token = this.encode(`${this.state.login}:${this.state.password}`);
        // calling redux action
        this.props.doLogin(token);
    }

    encode(token) {
        return btoa(token);
    }

    render() {
        console.log('rendered')
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