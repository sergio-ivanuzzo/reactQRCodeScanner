import React from 'react';
import WebcamStream from '../Webcam/webcamStream';
import CaptureArea from '../QRCode/captureArea';

export class Scanner extends React.Component {
    constructor(props) {
        super(props);
        this.videoTag = React.createRef();
    }

    render() {
        return(
            <div>
                <WebcamStream innerRef={this.videoTag}
                              width="300" height="300" title="Real-time video stream from webcam" id="video" />
                <CaptureArea width="120"
                             height="120"
                             videoTag={this.videoTag} title="Place the QR code to the center of capture area"/>
            </div>
        );
    }
}