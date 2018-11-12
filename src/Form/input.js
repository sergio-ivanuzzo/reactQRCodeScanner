import React from "react";

export default class InputField extends React.Component {
    render() {
        return <input type={this.props.type}
                      name={this.props.name}
                      onChange={this.props.onChange}
                      placeholder={this.props.placeholder} />
    }
}