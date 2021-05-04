import { Component } from 'react';

class Emoji extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    addEmoji = (para, emoji) => `${emoji} ${para} ${emoji}`;

    render() {
        console.log(this.props);
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addEmoji: this.addEmoji });
    }
}

export default Emoji;
