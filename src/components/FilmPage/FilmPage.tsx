import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchFilmData } from '../../hooks/useFetchFilmData';
import './FilmPage.scss'
import { formatDate } from '../../utils/formatDate';
import { Anime } from '../../utils/Types';

const FilmPage = () => {

    const {filmId} = useParams();
    const url = 'https://shikimori.one/'
    const {data, isLoading } = useFetchFilmData(Number(filmId));
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const favoriteFilms: Anime = JSON.parse(String(localStorage.getItem('favoriteFilms')));
        const isFilmFavorite = favoriteFilms.some((film: Anime) => film.id === Number(filmId));
        setIsFavorite(isFilmFavorite);
    }, [filmId, data]);

    const handleFavorite = () => {
        // Добавляем фильм в избранное
        const favoriteFilms: Anime = JSON.parse(String(localStorage.getItem('favoriteFilms')));
        favoriteFilms.push(data);
        localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));
        // Обновляем состояние, чтобы скрыть кнопку
        setIsFavorite(true);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        
        <div className='film__wrapper'>
            <div className='film__image-block'>
                <img className='film__image' src={url + data?.image.original} alt={data?.name} />
            </div>
            <div className='film__descr-wrapper'>
                <h2 className='film__title'>{data?.russian}</h2>
                <p><span className='film__text'>Релиз: </span>{data?.status}</p>
                <p><span className='film__text'>Эпизодов: </span>{data?.episodes}</p>
                <p className='film__descr'><span className='film__text'>Дата выхода:</span> {formatDate(data!.released_on)}</p>
                {data!.score > 0 && <p><span className='film__text'>Рейтинг:</span><strong>{data?.score}</strong></p>}
                {data?.descriptions && 
                    <div>
                        <h3>Описание</h3>
                        <p>{data?.description}</p>
                    </div>
                }
                <p className='genre__list'><span className='film__text'>Жанр:</span>
                    {data?.genres.map((genre) =>
                        <span key={genre.russian} className='genre__item'>{genre.russian}</span>
                    )}
                </p>
                <p className='film__link'><span className='film__text'>Домашняя страница: </span> <a href={`${url + data?.url}`} target='_blank'rel='noreferrer' >{url + data?.url}</a></p>
                <p><span className='film__text'>Запланировано к просмотрю: </span>{data?.rates_statuses_stats[0].value}</p>
                <p><span className='film__text'>Просмотрено: </span>{data?.rates_statuses_stats[1].value}</p>
                <div className='film__under'>
                    <Link className='link__back' to={'/'}>На главную</Link>
                {!isFavorite && <button className='film__btn' onClick={handleFavorite}>В избранное</button>}
                </div>
            </div>
            
        </div >
    );
};

export default FilmPage;