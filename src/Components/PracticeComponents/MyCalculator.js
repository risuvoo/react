import React from 'react';
import { myconvertto, mytoCelsius, mytoFahrenheit } from '../../lib/myconvert';
import MyBoillingVerdict from './MyBoillingVerdict';
import MyTemperatureInput from './MyTemperatureInput';

// eslint-disable-next-line react/prefer-stateless-function
export default class MyCalculator extends React.Component {
    state = {
        temperature: '',
        scale: 'f',
    };

    handlechange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const fahrenheit = scale === 'c' ? myconvertto(temperature, mytoFahrenheit) : temperature;
        const celsius = scale === 'f' ? myconvertto(temperature, mytoCelsius) : temperature;
        return (
            <div>
                <MyTemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    handlechange={this.handlechange}
                />
                <MyTemperatureInput
                    scale="c"
                    temperature={celsius}
                    handlechange={this.handlechange}
                />
                <MyBoillingVerdict temperature={temperature} />
            </div>
        );
    }
}
