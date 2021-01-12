import React, { useState } from 'react';

const Form = () => {

    let displayText = '';
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState();


    const onSubmit = () => {
        setFullName(name);
    }

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    return (
    <>
    <div>
        <h1>Hello {fullName}</h1>
        <input 
            type="text" 
            placeholder="Enter your Name"
            onChange={inputEvent}
            value={name}/>
        <button onClick={onSubmit}>Click Me</button>
    </div>
    </>);
}

export default Form;