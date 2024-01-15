import React from 'react';
import Search from './Search/Search';
import SelectColumns from './SelectColumns/SelectColumns';
import './Options.css'

const Options = ({ handleSearch, handleCheckedColumns }) => {
    return (
        <div className='options__wrapper'>
            <Search handleSearch={handleSearch} />
            <SelectColumns handleCheckedColumns={handleCheckedColumns}>Columns</SelectColumns>
        </div>
    );
};

export default Options;