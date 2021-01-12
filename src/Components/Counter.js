import React, { useState } from 'react';

const Counter = () => {

    const state = useState();

    const [count, setCount] = useState(0);

    const IncrementNum = () => {
        setCount(count+1);
    };

    return (
        <>
        <h1>{count}</h1>
        <button onClick={IncrementNum}>Click Me</button>
        </>
    );
};

export default Counter;