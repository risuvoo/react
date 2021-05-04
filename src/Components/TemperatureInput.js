import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemperatureInput({ temperature, scale, setTemperature }) {
    return (
        <div>
            <fieldset>
                <legend>enter temperature in {scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    type="text"
                    onChange={(event) => setTemperature(event, scale)}
                />
            </fieldset>
        </div>
    );
}
