import React, { useState } from 'react';
import './router.css';
import SearchResult from './SearchResult';

const Search = () => {

    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    
    return (
        <>
            <div className="searchbar">
                <input 
                type="text" 
                placeholder="Search"
                value={img} 
                onChange={inputEvent}/>
            </div>
            <SearchResult value={img}/>
        </>
    )
}

export default Search;