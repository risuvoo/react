import { Component } from 'react';

class ComBrackets extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    addBrackets = (text) => `[${text}]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addBrackets: this.addBrackets });
    }
}

export default ComBrackets;
