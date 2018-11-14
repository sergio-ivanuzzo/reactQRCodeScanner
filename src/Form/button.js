import React from 'react';

export default class Btn extends React.Component {
    render() {
        return (
            <div>
                <button type={this.props.type} onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        );
    }
}