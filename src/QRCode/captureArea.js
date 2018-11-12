import React from 'react';
import jsQR from 'jsqr';
import {connect} from 'react-redux';


let QR_CODE_FOUND     = "white";
let QR_CODE_NOT_FOUND = "red";

class ConnectedCaptureArea extends React.Component {
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
        setInterval(() => {
            let result = this.scanQrCode();
            if (result) {
                this.setState({
                    color: QR_CODE_FOUND
                })
            } else {
                this.setState({
                    color: QR_CODE_NOT_FOUND
                })
            }
        }, 100);

        // sets capture area to the center of video tag
        this.center()
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

const mapStateToProps = state => {
    return {parsedQRCode: state.parsedQRCode}
}

const CaptureArea = connect(mapStateToProps)(ConnectedCaptureArea);

export default CaptureArea;