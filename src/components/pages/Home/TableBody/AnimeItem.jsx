import React, { useState, useEffect } from 'react';
import './AnimeItem.css'
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../utils/formatDate';

const AnimeItem = ({ data, columns, updateFavoriteList }) => {
    const [released, setReleased] = useState(false)
    const url = 'https://shikimori.one/';
    const [transformedDateString, setTransformedDateString] = useState('');
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (data.released_on !== null) {
            setReleased(true);
            setTransformedDateString(formatDate(data.released_on));
        }
    }, [data.released_on]);

    useEffect(() => {
        const favoriteFilms = JSON.parse(localStorage.getItem('favoriteFilms'));
        const isFilmFavorite = favoriteFilms.some(film => film.id === Number(data.id));
        setIsFavorite(isFilmFavorite);
    }, [data]);

    const handleAddFavorite = () => {
        // Добавляем фильм в избранное
        const favoriteFilms = JSON.parse(localStorage.getItem('favoriteFilms'));
        favoriteFilms.push(data);
        localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));

        // Обновляем состояние, чтобы скрыть кнопку
        setIsFavorite(true);
        if (updateFavoriteList) {
            updateFavoriteList();
        }
    }

    const handleRemoveFavorite = () => {
        // Получаем массив избранных фильмов из localStorage
        let favoriteFilms = JSON.parse(localStorage.getItem('favoriteFilms')) || [];

        // Фильтруем массив, оставляя только фильмы, которые не соответствуют удаляемому фильму
        favoriteFilms = favoriteFilms.filter(film => film.id !== data.id);

        // Обновляем localStorage с новым массивом избранных фильмов без удаленного фильма
        localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));

        // Обновляем состояние, чтобы показать кнопку "В избранное"
        setIsFavorite(false);
        if (updateFavoriteList) {
            updateFavoriteList();
        }
    }


    return (
            <tr className='tbody__row'>
            {columns.includes('image') &&
                <td className='tbody__cell tbody__image'>
                    <img className='image' src={url + data.image.preview} alt={data.russian} />
                </td>
            }
            {columns.includes('name') &&
                <td className='tbody__cell tbody__name'>
                    <h5 className=''>{data.russian}</h5>
                </td>
            }
            {columns.includes('releaseDate') &&
                <td className='tbody__cell tbody__released'>
                    {released ?
                        <p className=''>{transformedDateString}</p>
                        :
                        <p className=''>Дата релиза не указана</p>
                    }
                </td>
            }
            {columns.includes('score') &&
                <td className='tbody__cell tbody__score'>
                    <p className=''>
                        {data.score > 0 ? data.score : 'рейтинга нет'}
                    </p>
                </td>
            }
            {columns.includes('details') &&
                <td className='tbody__cell tbody__details'>
                    <Link to={`/film/${data.id}`}>Подробнее</Link>
                </td>
            }
            <td className='tbody__cell tbody__details'>
                {isFavorite ? 
                    <button onClick={handleRemoveFavorite}>Удалить из избранного</button>
                :
                    <button onClick={handleAddFavorite}>Добавить в избранное</button>
                }
            </td>
            </tr>
    );
};

export default AnimeItem;