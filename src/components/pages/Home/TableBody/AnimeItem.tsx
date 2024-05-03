import React, { useState, useEffect, FC } from 'react';
import './AnimeItem.scss'
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../utils/formatDate';
import { Anime } from '../../../../utils/Types';

type AnimeItemProps = {
    data: Anime,
    columns: string[],
    updateFavoriteList?: () => void,
}

const AnimeItem:FC<AnimeItemProps> = ({ data, columns, updateFavoriteList }) => {
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
        const favoriteFilms = JSON.parse(String(localStorage.getItem('favoriteFilms')));
        const isFilmFavorite = favoriteFilms.some((film: Anime) => film.id === Number(data.id));
        setIsFavorite(isFilmFavorite);
    }, [data]);

    const handleAddFavorite = () => {
        // Добавляем фильм в избранное
        const favoriteFilms = JSON.parse(String(localStorage.getItem('favoriteFilms')));
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
        let favoriteFilms = JSON.parse(String(localStorage.getItem('favoriteFilms'))) || [];

        // Фильтруем массив, оставляя только фильмы, которые не соответствуют удаляемому фильму
        favoriteFilms = favoriteFilms.filter((film: Anime) => film.id !== data.id);

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
                        {Number(data.score) > 0 ? data.score : 'рейтинга нет'}
                    </p>
                </td>
            }
            {columns.includes('details') &&
                <td className='tbody__cell tbody__details'>
                    <Link className='details__link' to={`/film/${data.id}`}>Подробнее</Link>
                </td>
            }
             {columns.includes('details') && 
                <td className='tbody__cell tbody__details'>
                    {isFavorite ? 
                        <button className='btn' onClick={handleRemoveFavorite}>
                            <img className='btn__stars' src='./favorite.png' alt='Удалить из избранного' />
                        </button>
                    :
                        <button className='btn' onClick={handleAddFavorite}>
                            <img className='btn__stars' src='./unfavorite.png' alt='Добавить в избранное' />
                        </button>
                    }
                </td>
             }
            </tr>
    );
};

export default AnimeItem;