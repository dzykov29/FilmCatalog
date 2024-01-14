import React, { useEffect, useState } from 'react';
import '../../styles/Search.css'

const Search = ({ onChange }) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        onChange(value)
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