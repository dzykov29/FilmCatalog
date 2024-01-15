import React, { useEffect, useState } from 'react';
import './SelectColumns.css';

const SelectColumns = ({ handleCheckedColumns }) => {
    const [selectedOptions, setSelectedOptions] = useState([
        'name', 'image', 'releaseDate', 'score', 'details',
    ]);

    const handleSelect = (event) => {
        const { value } = event.target;

        // Проверка, был ли элемент уже выбран
        if (selectedOptions.includes(value)) {
            // Если был выбран, убираем из списка
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
            // Если не был выбран, добавляем в список
            setSelectedOptions([...selectedOptions, value]);
        }
    }

    useEffect(() => {
        handleCheckedColumns(selectedOptions)
    }, [selectedOptions])

    return (
        <div className='select__wrapper'>
            <label htmlFor="selectColumns">Select Columns:</label>
            <select
                id="selectColumns"
                value={selectedOptions}
                onChange={handleSelect}
                multiple
            >
                <option value="image">Image</option>
                <option value="name">Name</option>
                <option value="releaseDate">Release_Date</option>
                <option value="score">Score</option>
                <option value="details">Details</option>
            </select>
        </div>
    );
};

export default SelectColumns;
