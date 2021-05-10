import { Component } from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponents extends Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0,
            };
        }

        handler = () => {
            this.setState((previousCounter) => ({ counter: previousCounter.counter + 1 }));
        };

        render() {
            const { counter } = this.state;
            return <OriginalComponent counter={counter} handler={this.handler} />;
        }
    }
    return NewComponents;
};

export default withCounter;
