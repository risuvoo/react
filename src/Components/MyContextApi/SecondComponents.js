import React from 'react';
import store from './Store';

function SecondComponents() {
    return (
        <>
            <h1>second component</h1>
            <store.Consumer>
                {({ name, handler }) => (
                    <>
                        <div>{name}</div>
                        <button type="button" onClick={handler}>
                            click
                        </button>
                    </>
                )}
            </store.Consumer>
        </>
    );
}

export default SecondComponents;
