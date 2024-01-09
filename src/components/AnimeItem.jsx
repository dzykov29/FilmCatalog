import React, { useState, useEffect } from 'react';
import '../styles/AnimeItem.css'
import MyBtn from './UI/MyBtn';

const AnimeItem = ({data}) => {
    const [released, setReleased] = useState(false)

    useEffect(() => {
        if (data.released_on !== null) {
            setReleased(true);
        }
    }, [data.released_on]);

    return (
        <li className='list__item item'> 
            <img src={data.image.preview} alt={data.russian} />
            <h5 className='item__title'>{data.russian}</h5>
            <h5 className='item__title'>{data.name}</h5>
            {released ?
                <p className='item__release'>{data.released_on}</p>
                :
                <p className='item__release'>Дата релиза не указана</p>
            }
            <MyBtn />
        </li>
    );
};

export default AnimeItem;