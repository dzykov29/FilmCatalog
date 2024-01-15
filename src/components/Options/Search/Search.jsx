import React, { useEffect, useState } from 'react';
import './Search.css'

const Search = ({ handleSearch }) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        handleSearch(value)
    }, [value])

    return (
        <>
            <input 
                className='search-input' 
                type='text'
                placeholder='Search' 
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </>
    );
};

export default Search;