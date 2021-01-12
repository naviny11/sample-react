import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

// const User = ({match}) => {

//     return <h1>Hello User {match.params.name}!!</h1>;
// }

const User = () => {

    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    //console.log(history);
    return (
        <>
            <h1>Hello User {fname} {lname}!!</h1>
            <p>My current location is {location.pathname}</p>
        {location.pathname === '/user/navin/yadav' ? <><button onClick={() => history.goBack()}>Click Me</button><button onClick={() => history.push('/')}>Home</button></>:''}
        </>
    );
    
}

export default User;