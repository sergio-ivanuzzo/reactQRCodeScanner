import React from 'react';

export default class InputField extends React.Component {
    render() {
        return (
            <div>
                <input type={this.props.type}
                       name={this.props.name}
                       onChange={this.props.onChange}
                       placeholder={this.props.placeholder} />
            </div>
        );
    }
}