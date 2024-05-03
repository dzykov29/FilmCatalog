import React, { FC } from 'react';
import AnimeItem from './TableBody/AnimeItem';
import './HomePage.scss'
import TableHead from './TableHead/TableHead';
import { Anime } from '../../../utils/Types';


type HomePageProps = {
    data: Anime[],
    sortingData: (value: string) => void,
    columns: string[],
    isLoading: boolean,
}

const HomePage:FC<HomePageProps> = ({ data, sortingData, columns, isLoading }) => {

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