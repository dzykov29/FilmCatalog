import React from 'react';
import AnimeItem from './TableBody/AnimeItem';
import './HomePage.css'
import TableHead from './TableHead/TableHead';

const HomePage = ({ data, sortingData, columns, isLoading }) => {

    if (isLoading) {
        <p>Loading...</p>
    }

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

export default HomePage;