import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                Header: {this.props.title}
            </div>
        );
    }
}
