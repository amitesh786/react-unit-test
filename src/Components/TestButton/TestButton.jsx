import React, { Component } from 'react';
import { string } from 'prop-types';

export default class TestButton extends Component {

    static propTypes = {
        title: string
    };

    static defaultProps = {
        title: 'Hello World'
    };

    constructor(props) {
        super(props);
        this.state = { buttonEnable: true }
    };

    renderButton = () => {
        const { buttonEnable } = this.state;
        return (buttonEnable ?
            <button onClick={() => this.setState({ buttonEnable: false })}>click me</button> :
            <button disabled>click me</button>);
    }

    render() {
        const { title } = this.props;
        return (
            <div className="container">
                <h2>{title}</h2>
                {this.renderButton()}
            </div>
        );
    };
};
