import React from "react";

export default class Btn extends React.Component {
    render() {
        return <button type={this.props.type}>{this.props.text}</button>
    }
}