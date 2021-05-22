import React from 'react';

function ClickCounter({ counter, handler }) {
    return (
        <div>
            <button type="submit" onClick={handler}>
                click {counter}
            </button>
        </div>
    );
}
export default ClickCounter;
