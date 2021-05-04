import Emoji from './Emoji';

class ComText extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decoratorText = this.addEmoji('my country is bangladesh', '♥️');
        return super.render(decoratorText);
    }
}

export default ComText;
