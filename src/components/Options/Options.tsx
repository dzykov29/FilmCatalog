import React, { FC } from 'react';
import Search from './Search/Search';
import SelectColumns from './SelectColumns/SelectColumns';
import './Options.scss'

type OptionsProps = {
    handleSearch: (value: string) => void
    handleCheckedColumns: (columns: string[]) => void
}

const Options: FC<OptionsProps> = ({ handleSearch, handleCheckedColumns }) => {
    return (
        <div className='options__wrapper'>
            <Search handleSearch={handleSearch} />
            <SelectColumns handleCheckedColumns={handleCheckedColumns}>Columns</SelectColumns>
        </div>
    );
};

export default Options;