import React from 'react';
import ComButton from './ComButton';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            local: 'bn-BD',
        };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    changeLanguage = (local) => {
        this.setState({
            local,
        });
    };

    render() {
        const { date, local } = this.state;

        return (
            <div>
                <h1>hello Bangladesh {date.toLocaleTimeString(local)}</h1>
                {local === 'en-US' ? (
                    <ComButton change={this.changeLanguage} local="bn-BD" show />
                ) : (
                    <ComButton change={this.changeLanguage} local="en-US" />
                )}
            </div>
        );
    }
}

export default Clock;
