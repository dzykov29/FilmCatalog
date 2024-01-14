import React from 'react';
import '../styles/TableHead.css'

const TableHead = ({ sortingData }) => {
    return (
        <thead>
            <tr className='row-head'>
                <th className='cell-head'>image</th>
                <th onClick={() => { sortingData('russian')}} className='cell-head'>name</th>
                <th className='cell-head'>realise date</th>
                <th className='cell-head'>score</th>
                <th className='cell-head'>details</th>
            </tr>
        </thead>
    );
};

export default TableHead;