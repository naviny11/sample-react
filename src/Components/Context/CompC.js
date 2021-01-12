import React from 'react';
import {Firstname, Lastname} from './CompA';

const CompC  = () => {
    return (
    <>
        <Firstname.Consumer> 
            {(fname) => {
                return (
                        <Lastname.Consumer>
                            {(lname) => {
                                return (<h1>My name is Component C and this is {fname} {lname}</h1>);
                            }}
                        </Lastname.Consumer>
                    )
                }}
        </Firstname.Consumer>
    </>
    );
};

export default CompC;