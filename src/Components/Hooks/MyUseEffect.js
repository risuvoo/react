import React, { useEffect, useRef } from 'react';

const MyUseEffect = () => {
    const myInput = useRef(null);
    useEffect(() => {
        myInput.current.focus();
    }, []);
    return (
        <>
            <div>
                <input ref={myInput} type="text" placeholder="enter your password" />
            </div>
        </>
    );
};

export default MyUseEffect;
