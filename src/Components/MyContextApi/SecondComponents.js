// import React, { useContext } from 'react'; when use useContext
import React from 'react';
import store from './Store';

function SecondComponents() {
    // const context = useContext(store);
    // const { name } = context;
    // console.log(name);
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
            {/*  when use useContext
                {({ name, handler }) => (
                    <>
                        <div>{name}</div>
                        <button type="button" onClick={handler}>
                            click
                        </button>
                    </>
                )}
            */}
        </>
    );
}

export default SecondComponents;
