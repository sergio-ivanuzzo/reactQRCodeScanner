import React from 'react';
import Btn from '../Form/button';
import {withRouter} from 'react-router-dom';

class ParsedQRCode extends React.Component {
    scanAnotherQRCode() {
        this.props.scanQRCode();
        this.props.history.push('/scan');
    }
    render() {
        return (
            <div className="parsed-qr-code">
                <div className="result">{this.props.result}</div>
                <Btn type="button" text="Scan another QR code" onClick={this.scanAnotherQRCode.bind(this)} />
            </div>
        );
    }
}

const ParsedQRCodeWithRouter = withRouter(ParsedQRCode);
export default ParsedQRCodeWithRouter;
