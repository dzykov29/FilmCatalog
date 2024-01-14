import React, { useState, useEffect } from 'react';
import '../styles/AnimeItem.css'
import { format } from 'date-fns';

const AnimeItem = ({data}) => {
    const [released, setReleased] = useState(false)
    const url = 'https://shikimori.one/'
    const [transformedDateString, setTransformedDateString] = useState('');

    useEffect(() => {
        if (data.released_on !== null) {
            setReleased(true);
            const transformedDate = format(new Date(data.released_on), 'dd.MM.yyyy');
            setTransformedDateString(transformedDate);
        }
    }, [data.released_on]);

    return (
            <tr className='tbody__row'>
                <td className='tbody__cell tbody__image'>
                    <img className='image' src={url + data.image.preview} alt={data.russian} />
                </td>
                <td className='tbody__cell tbody__name'>
                    <h5 className=''>{data.russian}</h5>
                </td>

                <td className='tbody__cell tbody__released'>
                    {released ?
                        <p className=''>{transformedDateString}</p>
                        :
                        <p className=''>Дата релиза не указана</p>
                    }
                </td>
                <td className='tbody__cell tbody__score'>
                    <p className=''>{data.score}</p>
                </td>
                <td className='tbody__cell tbody__details'>
                    <a href={url + data.url}>Подробнее</a>
                </td>
            </tr>
    );
};

export default AnimeItem;