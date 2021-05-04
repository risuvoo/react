import React, { Component } from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/convert';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        };
    }

    setTemperature = (event, scale) => {
        this.setState({
            temperature: event.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    setTemperature={this.setTemperature}
                />
                <TemperatureInput
                    temperature={fahrenheit}
                    scale="f"
                    setTemperature={this.setTemperature}
                />
                <BoilingVerdict celsius={temperature} />
            </div>
        );
    }
}

export default Calculator;
