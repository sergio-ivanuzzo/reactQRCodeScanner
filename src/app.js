import React from 'react';
import WebcamStream from "./Webcam/webcam";
import LoginForm from './Form/loginForm';
import ParsedQRCode from './QRCode/parsedQrCode';
import ReactDOM from "react-dom";
import CaptureArea from './QRCode/captureArea';
import {Provider} from 'react-redux';
import store from './Redux/store/index';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <AppHeader />
                <AppContent />
                <AppFooter />
            </div>
        );
    }
}

class AppHeader extends React.Component {
    render() {
        return (
            <header>
                <div>QR Code Scanner</div>
            </header>
        );
    }
}

class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.videoTag = React.createRef();
    }

    render() {
        return (
            <div id="content">
                <WebcamStream innerRef={this.videoTag}
                              width="300" height="300" title="Real-time video stream from webcam" id="video" />
                <CaptureArea width="120"
                             height="120"
                             videoTag={this.videoTag} title="Place the QR code to the center of capture area"/>
                <ParsedQRCode result="test" />
            </div>
        );
    }
}

class AppFooter extends React.Component {
    render() {
        return (
            <footer>
                <div>Footer</div>
            </footer>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('.wrapper')
)