import React, { useEffect, useState } from 'react';

const UseEffect  = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert("I am clicked!!");
    },[nums]);

    return (
        <>
            <h1>Use Effect</h1>
            <button onClick={() => {setNum(num+1)}}>Click Me {num}</button>
            <br></br>
            <button onClick={() => {setNums(nums+1)}}>Click Me {nums}</button>
        </>
    )
}

export default UseEffect;