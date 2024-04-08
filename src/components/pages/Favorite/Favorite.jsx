import React, {useState} from 'react';
import AnimeItem from '../Home/TableBody/AnimeItem';
import TableHead from '../Home/TableHead/TableHead';

const Favorite = ({ columns, sortingData}) => {
    const [favoriteFilms, setFavoriteFilms] = useState(JSON.parse(localStorage.getItem('favoriteFilms')));
    

    const updateFavoriteList = () => {
        // Обновляем состояние компонента, содержащего список фильмов, используя этот новый список избранных фильмов
        setFavoriteFilms(JSON.parse(localStorage.getItem('favoriteFilms')));
    };


    return (
        <table className='table'>
            <TableHead columns={columns} sortingData={sortingData} />
            <tbody>
                {favoriteFilms.map(item => (
                    <AnimeItem columns={columns} key={item.id} data={item} updateFavoriteList={updateFavoriteList}></AnimeItem>
                ))}
            </tbody>
        </table>
    );
};

export default Favorite;