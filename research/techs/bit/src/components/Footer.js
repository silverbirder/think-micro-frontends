import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                Footer: {this.props.title}
            </div>
        );
    }
}
