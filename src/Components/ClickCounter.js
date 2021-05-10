import React, { Component } from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    incrementCount = () => {
        this.setState((previousCounter) => ({ counter: previousCounter.counter + 1 }));
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                <button type="submit" onClick={this.incrementCount}>
                    click {counter}
                </button>
            </div>
        );
    }
}

export default ClickCounter;
