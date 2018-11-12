import React from 'react';

export class Route extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: false
        }
    }
    componentDidMount() {
        document.addEventListener('popstate', this.tryRender)
    }

    componentDidUnmount() {
        document.removeEventListener('popstate', this.tryRender)
    }

    tryRender() {
        console.log('test')
        history.pushState({page: this.props.path}, this.props.path, this.props.path);
        if (location.pathname == this.props.path) {
            this.setState({
                current: True
            })
        } else {
            this.setState({
                current: False
            })
        }
    }

    render() {
        if (this.state.current) {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}