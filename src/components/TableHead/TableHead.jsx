import React from 'react';
import './TableHead.css'

const TableHead = ({ sortingData, columns }) => {
    return (
        <thead>
            <tr className='row-head'>
                {columns.includes('image') &&
                    <th className='cell-head'>image</th>
                }
                {columns.includes('name') &&
                    <th onClick={() => { sortingData('russian') }} className='cell-head'>name</th>
                }
                {columns.includes('releaseDate') &&
                    <th onClick={() => { sortingData('released_on') }} className='cell-head'>release date</th>
                }
                {columns.includes('score') &&
                    <th onClick={() => { sortingData('score') }} className='cell-head'>score</th>
                }
                {columns.includes('details') &&
                    <th className='cell-head'>details</th>
                }
            </tr>
        </thead>
    );
};

export default TableHead;