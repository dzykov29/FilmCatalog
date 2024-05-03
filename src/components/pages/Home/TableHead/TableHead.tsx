import React, { FC } from 'react';
import './TableHead.scss'

type TableHeadProps = {
    sortingData: (value: string) => void,
    columns: string[]
}

const TableHead: FC<TableHeadProps> = ({ sortingData, columns }) => {
    return (
        <thead>
            <tr className='row-head'>
                {columns.includes('image') &&
                    <th className='cell-head'>Изображение</th>
                }
                {columns.includes('name') &&
                    <th onClick={() => { sortingData('russian') }} className='cell-head'>Название</th>
                }
                {columns.includes('releaseDate') &&
                    <th onClick={() => { sortingData('released_on') }} className='cell-head'>Дата релиза</th>
                }
                {columns.includes('score') &&
                    <th onClick={() => { sortingData('score') }} className='cell-head'>Оценка</th>
                }
                {columns.includes('details') &&
                    <th className='cell-head' colSpan={2}>Детали</th>
                }
            </tr>
        </thead>
    );
};

export default TableHead;