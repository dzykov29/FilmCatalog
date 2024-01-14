import React, { useState, useEffect } from 'react';
import '../styles/AnimeItem.css'
import { format } from 'date-fns';
import MyBtn from './UI/MyBtn';

const AnimeItem = ({data}) => {
    const [released, setReleased] = useState(false)
    const url = 'https://shikimori.one/'
    const [transformedDateString, setTransformedDateString] = useState('');

    console.log(data);

    useEffect(() => {
        if (data.released_on !== null) {
            setReleased(true);
            const transformedDate = format(new Date(data.released_on), 'dd.MM.yyyy');
            setTransformedDateString(transformedDate);
        }
    }, [data.released_on]);

    return (
        <li className='list__item item'> 
            <img className='item__image' src={url + data.image.preview} alt={data.russian} />
            <h5 className='item__title'>{data.russian}</h5>
            {released ?
                <p className='item__release'>{transformedDateString}</p>
                :
                <p className='item__release'>Дата релиза не указана</p>
            }
            <p className='item__descr'>{data.score}</p>
            <MyBtn url={url + data.url}>Подробнее</MyBtn>
        </li>
    );
};

export default AnimeItem;