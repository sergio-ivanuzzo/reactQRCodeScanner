import React from "react";
import Btn from "../Form/button";

export default class ParsedQRCode extends React.Component {
    render() {
        return (
            <div className="parsed-qr-code">
                <div className="result">{this.props.result}</div>
                <Btn type="button" text="Scan another QR code" />
            </div>
        );
    }
}
