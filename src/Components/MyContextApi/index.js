import React, { useState } from 'react';
import FirstComponent from './FirstComponent';
import store from './Store';

function MyContextApi() {
    const [name, setValue] = useState('moin');
    const handler = () => {
        setValue('suvo');
    };
    return (
        <>
            <store.Provider value={{ name, handler }}>
                <FirstComponent />
            </store.Provider>
        </>
    );
}

export default MyContextApi;
