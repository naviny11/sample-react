import React from 'react';
import add from './Add';
import sub from './Sub';
import mult from './Mult';
import div from './Div';

const Calc = () => {
    return (
    <ul>
        <li>Addition of two numbers is {add(199, 345)}</li>
        <li>Subtraction of two numbers is {sub(799, 345)}</li>
        <li>Multiplication of two numbers is {mult(199, 345)}</li>
        <li>Division of two numbers is {div(235, 12).toFixed(2)}</li>
    </ul>
    );
}

export default Calc;