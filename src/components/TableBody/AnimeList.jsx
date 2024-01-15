import React from 'react';
import AnimeItem from './AnimeItem';
import './AnimeList.css'
import TableHead from '../TableHead/TableHead';

const AnimeList = ({ data, sortingData, columns }) => {

    return (
        <table className='table'>
            <TableHead columns={columns} sortingData={sortingData} />
            <tbody>
            {data.map(item => (
                <AnimeItem columns={columns} key={item.id} data={item}></AnimeItem>
            ))}
            </tbody>
        </table>
    );
};

export default AnimeList;