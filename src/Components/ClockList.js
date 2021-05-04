import React from 'react';
import Clock from './Clock';

export default function ClockList({ clockItem = [] }) {
    return (
        <>
            {clockItem.map(() => (
                <Clock key={Math.random()} />
            ))}
        </>
    );
}
