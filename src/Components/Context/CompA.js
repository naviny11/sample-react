import React, { createContext } from 'react';
import CompB from './CompB';

const Firstname = createContext();
const Lastname = createContext();

const CompA  = () => {
    return (
        <>
            <Firstname.Provider value={"Navin"}>
                <Lastname.Provider value={"Yadav"}>
                    <CompB />
                </Lastname.Provider>                
            </Firstname.Provider>
        </>
    );
};

export default CompA;
export {Firstname, Lastname};