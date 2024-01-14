import React from 'react';
import AnimeItem from './AnimeItem';
import '../styles/AnimeList.css'
import TableHead from './TableHead';

const AnimeList = ({ data, sortingData }) => {

    return (
        <table className='table'>
            <TableHead sortingData={sortingData} />
            <tbody>
            {data.map(item => (
                <AnimeItem key={item.id} data={item}></AnimeItem>
            ))}
            </tbody>
        </table>
    );
};

export default AnimeList;