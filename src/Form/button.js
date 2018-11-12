import React from "react";

export default class Btn extends React.Component {
    render() {
        return <button type={this.props.type} disabled={this.props.disabled}>{this.props.text}</button>
    }
}