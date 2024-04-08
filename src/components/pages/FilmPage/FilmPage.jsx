import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchFilmData } from '../../../hooks/useFetchFilmData';
import './FilmPage.css'
import { formatDate } from '../../../utils/formatDate';

const FilmPage = ({ urlBackground }) => {

    const {filmId} = useParams();
    const url = 'https://shikimori.one/'
    const {data, isLoading} = useFetchFilmData(filmId);
    const [isFavorite, setIsFavorite] = useState(false);


    
    useEffect(() => {
        if (data && data.image && data.image.original) {
            urlBackground(url + data.image.original);
        }
    }, [data, urlBackground]);

    useEffect(() => {
        const favoriteFilms = JSON.parse(localStorage.getItem('favoriteFilms'));
        const isFilmFavorite = favoriteFilms.some(film => film.id === Number(filmId));
        setIsFavorite(isFilmFavorite);
    }, [filmId]);


    const handleFavorite = () => {
        // Добавляем фильм в избранное
        const favoriteFilms = JSON.parse(localStorage.getItem('favoriteFilms'));
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
                <img className='film__image' src={url + data.image.original} alt={data.name} />
            </div>
            <div className='film__descr-wrapper'>
                <h2 className='film__title'>{data.russian}</h2>
                <p>{data.status}</p>
                <p className='film__descr'>Дата выхода: {formatDate(data.released_on)}</p>
                {data.score > 0 && <p>Рейтинг:<strong>{data.score}</strong></p>}
                {data.descriptions && 
                    <div>
                        <h3>Описание</h3>
                        <p>{data.description}</p>
                    </div>
                }

                <p className='genre__list'><strong>Жанр:</strong>
                    {data.genres.map((genre) =>
                        <span key={genre.russian} className='genre__item'>{genre.russian}</span>
                    )}
                </p>
                <Link to={'/'}>На главную</Link>
                {!isFavorite && <button onClick={handleFavorite}>В избранное</button>}
            </div>
            
        </div >
    );
};

export default FilmPage;