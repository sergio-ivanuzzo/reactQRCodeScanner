import React from 'react';
import LoginForm from './Form/loginForm';
import ParsedQRCode from './QRCode/parsedQrCode';
import {doLogin} from './Redux/actions/index';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {PropsRoute} from './Router/propsRoute';
import {PrivateRoute} from './Router/privateRoute';
import {Scanner} from './QRCode/scanner';

class ConnectedAppContent extends React.Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>
                        <PropsRoute path="/login" component={LoginForm} doLogin={this.props.doLogin} />
                        <PropsRoute path="/scan" redirectTo="/login" component={Scanner} />
                        <PropsRoute path="/result" redirectTo="/login" component={ParsedQRCode} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        parsedQRCode: state.parsedQRCode
    }
}

const mapDispatchToProps = dispatch => ({
    doLogin: token => dispatch(doLogin(token))
});

export const AppContent = connect(mapStateToProps, mapDispatchToProps)(ConnectedAppContent);