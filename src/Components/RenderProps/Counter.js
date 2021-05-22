import { Component } from 'react';

class Counter extends Component {
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
        const { render } = this.props;

        return render(counter, this.handler);
    }
}

export default Counter;
