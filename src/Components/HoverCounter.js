import React from 'react';

function HoverCounter({ counter, handler }) {
    return (
        <div>
            <span onMouseOver={handler}>hover counter {counter}</span>
        </div>
    );
}
export default HoverCounter;
