import React, { useEffect, useState } from 'react';

const ChallengeUseEffect = () => {
    const [count, newCount] = useState(0);
    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    },[count]);
    return (
        <>
        <button onClick={() => { newCount(count +1)}}>Click Me -- {count}</button>
        </>
    );
};

export default ChallengeUseEffect;