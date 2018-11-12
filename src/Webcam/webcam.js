import React from 'react';
import ReactDOM from 'react-dom';

export default class WebcamStream extends React.Component {
    componentDidMount() {
        // getting access to webcam
        navigator.mediaDevices
            .getUserMedia({video: true})
            .then(stream => this.props.innerRef.current.srcObject = stream)
            .catch(console.log);
    }

    render() {
        return <video id={this.props.id}
                      ref={this.props.innerRef}
                      width={this.props.width}
                      height={this.props.height}
                      autoPlay
                      title={this.props.title}></video>
    }
}