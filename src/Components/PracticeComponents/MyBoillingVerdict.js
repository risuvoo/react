import React from 'react';

export default function MyBoillingVerdict({ temperature }) {
    if (temperature >= 100) {
        return <p>water would boild</p>;
    }
    return <p>water not boild</p>;
}
