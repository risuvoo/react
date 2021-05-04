import React, { useState } from 'react';

export default function Demo() {
    const [value, setValue] = useState('hello');
    console.log(value, setValue);
    return (
        <div>
            <p>{value}</p>
            <button type="submit" onClick={() => setValue('suvo')}>
                click
            </button>
        </div>
    );
}
