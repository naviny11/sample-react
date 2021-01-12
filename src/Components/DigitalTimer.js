import React, { useState } from 'react';

const DigitalTimer = () => {

    let Time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(Time);
    
    const updateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }

    setInterval(updateTime,1000);

    return(
        <>
        <h1>Time: {ctime}</h1>
        </>
    );

};

export default DigitalTimer;