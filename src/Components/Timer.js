import React, { useState } from 'react';

const Timer = () => {

    let time = new Date().toLocaleTimeString();

    const [currentTime, updatedTime] = useState(time);

    const updateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        updatedTime(newTime);
    }

    return (
        <>
        <h1>Current time: {currentTime}</h1>
        <button onClick={updateTime}>Get Time</button>
        </>
    );
}


export default Timer;