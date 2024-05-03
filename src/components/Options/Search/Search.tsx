import React, { FC, useCallback, useEffect, useState } from 'react';
import './Search.scss'

type SearchProps = {
    handleSearch: (value: string) => void
}

const Search: FC<SearchProps> = ({ handleSearch }) => {

    const [value, setValue] = useState('')

    const memoizedHandleSearch = useCallback(handleSearch, []); // Мемоизация handleSearch

    useEffect(() => {
        memoizedHandleSearch(value);
    }, [memoizedHandleSearch, value]); 

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