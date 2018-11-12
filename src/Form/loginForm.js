import React from 'react';
import Btn from './button';
import InputField from './input';
import {connect} from 'react-redux';
import {doLogin} from '../Redux/actions/index';

class ConnectedLoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true,
            login: null,
            password: null
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            disabled: !this.state.login || !this.state.password
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let token = this.encode(`${this.state.login}:${this.state.password}`);
        this.props.doLogin(token);
    }

    encode(token) {
        return btoa(token);
    }

    render() {
        return (
            <form id="login-form" onSubmit={this.onSubmit}>
                <InputField type="text"
                            name="login"
                            onChange={this.onChange}
                            placeholder="Login"/>

                <InputField type="password"
                            name="password"
                            onChange={this.onChange}
                            placeholder="Password" />

                <Btn type="submit"
                     text="Sign Up"
                     disabled={this.state.disabled}/>

            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doLogin: token => dispatch(doLogin(token))
    }
}

const LoginForm = connect(null, mapDispatchToProps)(LoginForm);

export default LoginForm;