import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Error  = () => {
    const history = useHistory();
    return (
        <>
            <h1>404!! Page not found</h1>
            <NavLink to="/">Go back</NavLink>
        </>
    )
}

export default Error;