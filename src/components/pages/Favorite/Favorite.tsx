import React, {FC, useState} from 'react';
import AnimeItem from '../Home/TableBody/AnimeItem';
import TableHead from '../Home/TableHead/TableHead';
import { Anime } from '../../../utils/Types';

type FavoriteProps = {
    columns: string[],
    sortingData: (value: string) => void

}

const Favorite: FC<FavoriteProps> = ({ columns, sortingData}) => {
    const [favoriteFilms, setFavoriteFilms] = useState(JSON.parse(String(localStorage.getItem('favoriteFilms'))));
    

    const updateFavoriteList = () => {
        // Обновляем состояние компонента, содержащего список фильмов, используя этот новый список избранных фильмов
        setFavoriteFilms(JSON.parse(String(localStorage.getItem('favoriteFilms'))));
    };


    return (
        <table className='table'>
            <TableHead columns={columns} sortingData={sortingData} />
            <tbody>
                {favoriteFilms.map((item: Anime) => (
                    <AnimeItem columns={columns} key={item.id} data={item} updateFavoriteList={updateFavoriteList}></AnimeItem>
                ))}
            </tbody>
        </table>
    );
};

export default Favorite;