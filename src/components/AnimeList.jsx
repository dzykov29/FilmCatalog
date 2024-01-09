import React from 'react';
import AnimeItem from './AnimeItem';
import '../styles/AnimeList.css'

const AnimeList = ({data}) => {

    return (
        <ul className='list-reset list'>
            {data.map(item => (
                <AnimeItem key={item.id} data={item}></AnimeItem>
            ))}
        </ul>
    );
};

export default AnimeList;