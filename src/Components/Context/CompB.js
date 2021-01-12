import React, { useContext } from 'react';
import {Firstname, Lastname} from './CompA';

const CompB  = () => {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
    return (
        <h1>My name is {fname} {lname} from component B</h1>
    );
};

export default CompB;