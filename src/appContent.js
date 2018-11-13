import React from 'react';
import LoginFormWithRouter from './Form/loginForm';
import ParsedQRCodeWithRouter from './QRCode/parsedQrCode';
import {doLogin, scanQRCode, parseQRCode} from './Redux/actions/index';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {PropsRoute} from './Router/propsRoute';
import {PrivateRoute} from './Router/privateRoute';
import {ScannerWithRouter} from './QRCode/scanner';

class ConnectedAppContent extends React.Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>

                        <PropsRoute path="/login"
                                  component={LoginFormWithRouter}
                                  doLogin={this.props.doLogin} />

                        <PrivateRoute path="/scan"
                                  redirectTo="/login"
                                  component={ScannerWithRouter}
                                  parseQRCode={this.props.parseQRCode}
                                  token={this.props.token} />

                        <PrivateRoute path="/result"
                                  redirectTo="/login"
                                  component={ParsedQRCodeWithRouter}
                                  scanQRCode={this.props.scanQRCode}
                                  token={this.props.token}
                                  scanQRCode={this.props.scanQRCode}
                                  result={this.props.parsedQRCode} />

                        <Redirect from="/" to="/login" />

                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.loginReducer.token,
        parsedQRCode: state.parsedQRCodeReducer.parsedQRCode
    }
}

const mapDispatchToProps = dispatch => ({
    doLogin: token => dispatch(doLogin(token)),
    scanQRCode: () => dispatch(scanQRCode()),
    parseQRCode: (result) => dispatch(parseQRCode(result))
});

export const AppContent = connect(mapStateToProps, mapDispatchToProps)(ConnectedAppContent);