import React, { FC, useEffect, useState } from 'react';
import './SelectColumns.scss';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { OptionsType, options } from '../../../utils/SelectOptions';

type SelectColumnsProps = {
    handleCheckedColumns: (columns: string[]) => void
}

const SelectColumns: FC<SelectColumnsProps> = ({ handleCheckedColumns }) => {
    const [selectedOptions, setSelectedOptions] = useState([
        'name', 'image', 'releaseDate', 'score', 'details',
    ]);

    const handleSelect = (event: any, newValue: OptionsType[]) => {
        setSelectedOptions(newValue.map(option => option.value)); // Обновляем selectedOptions с массивом значений
    };

    useEffect(() => {
        handleCheckedColumns(selectedOptions)
    }, [selectedOptions])

    return (
        <div className='select__wrapper'>
            <Autocomplete
                multiple // Делаем Autocomplete множественным
                id="combo-box"
                limitTags={2}
                options={options}
                value={options.filter(option => selectedOptions.includes(option.value))} // Устанавливаем значение для множественного выбора
                onChange={handleSelect} // Используем новый обработчик
                getOptionLabel={(option) => option.label}
                style={{ width: 500, height: 70, marginBottom: 10}}
                renderInput={(params) => <TextField {...params} style={{backgroundColor: '#fff'}} label="Select Columns:" variant="outlined" />}
            />
        </div>
    );
};

export default SelectColumns;