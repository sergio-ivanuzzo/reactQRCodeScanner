import React from 'react';
import jsQR from 'jsqr';

let QR_CODE_FOUND     = "white";
let QR_CODE_NOT_FOUND = "red";

export default class CaptureArea extends React.Component {
    constructor(props) {
        super(props)
        // coordinates are dynamically calculates depends on videoTag size
        this.state = {
            style: {
                top: 0,
                left: 0
            },
            color: QR_CODE_NOT_FOUND
        }
    }

    scanQrCode() {
        let videoTag = this.props.videoTag.current;

        // temporary container for video frame
        let canvas = document.createElement('canvas');
        canvas.width = videoTag.width;
        canvas.height = videoTag.height;

        let context = canvas.getContext('2d');
        context.drawImage(videoTag, 0, 0, videoTag.width, videoTag.height);

        let x = this.state.style.left;
        let y = this.state.style.top;
        let imageData = context.getImageData(x, y, this.props.width, this.props.height).data;

        return jsQR(imageData, this.props.width, this.props.height);
    }

    center() {
        let videoTag = this.props.videoTag.current;
        this.setState({
            style: {
                top: (videoTag.width - this.props.width) / 2,
                left: (videoTag.height - this.props.height) / 2
            }
        })
    }

    componentDidMount() {
        let timer = setInterval(() => {
            let result = this.scanQrCode();
            if (result) {
                // change capture area color to show that QR code captured successfully
                this.setState({
                    color: QR_CODE_FOUND
                });

                // change application state (redux)
                this.props.parseQRCode(result.data);

                // delay on redirect for show capture area color changing
                setTimeout(() => {
                    // stop timer
                    clearInterval(timer);
                    this.props.history.push('/result');
                }, 1000);

            } else {
                this.setState({
                    color: QR_CODE_NOT_FOUND
                })
            }
        }, 100);

        // sets capture area to the center of video tag
        this.center()
    }

    shouldComponentUpdate(nextProps, nextState) {
        // prevent extra render
        return this.state.color != nextState.color ||
            JSON.stringify(this.state.style) != JSON.stringify(nextState.style);
    }

    render() {
        return (
            <div className="qr-capture-area" style={this.state.style} title={this.props.title}>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <rect width={this.props.width}
                          height={this.props.height}
                          stroke={this.state.color || this.props.color}
                          fillOpacity="0"
                          strokeOpacity="1" />
                </svg>
            </div>
        );
    }
}
