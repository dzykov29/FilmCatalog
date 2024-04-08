import React, { useEffect, useState } from 'react';
import './App.css';
import useFetchData from './hooks/useFetchData';
import AnimeList from './components/pages/Home/TableBody/AnimeList';
import Nav from './components/Nav/Nav';
import Options from './components/Options/Options';
import { Routes, Route, useLocation} from 'react-router-dom';
import Favorite from './components/pages/Favorite/Favorite';
import FilmPage from './components/pages/FilmPage/FilmPage';

function App() {
  const { data, loading, error } = useFetchData();
  const [searchData, setSearchData] = useState([]);
  const [sortStream, setSortStream] = useState(true);
  const [columns, setColumns] = useState([]);
  const [urlBackground, setUrlBackground] = useState('')

  const location = useLocation();
  const filmId = location.pathname.split('/')[2];

  useEffect(() => {
    setSearchData(data && [...data]);
  }, [data]);

  const handleSearch = (searchValue) => {
    const filteredData = data.filter((item) =>
      item.russian.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchData(filteredData); // Устанавливаем пустой массив при отсутствии совпадений
  };

  const sortingData = (value) => {
    const sortedData = [...searchData];

    sortStream
      ? setSearchData(sortedData.sort((a, b) => a[value] > b[value] ? 1 : -1))
      : setSearchData(sortedData.sort((a, b) => a[value] < b[value] ? 1 : -1));

    setSortStream(!sortStream);
  }

  const handleCheckedColumns = (columns) => {
    setColumns(columns)
  }

  return (
    
      <div 
        className="App"
        // style={filmId ? { backgroundImage: `url(${urlBackground})`} : {backgroundImage: 'none'}}
      >
        <Nav />
       
        
      {location.pathname !== `/film/${filmId}` && <Options handleCheckedColumns={handleCheckedColumns} handleSearch={handleSearch} />}
        {error && <p>Error: {error.messages}</p>}
        <Routes>
          <Route path='/' element={<AnimeList columns={columns} sortingData={sortingData} data={searchData} isLoading={loading} />} />
        <Route path='/favorite' element={<Favorite columns={columns} sortingData={sortingData} />} />
          <Route path='/film/:filmId' element={<FilmPage urlBackground={setUrlBackground} />} />
          <Route path='*' element={<AnimeList />} />
        </Routes>

        <div className='background'
          style={filmId ? { backgroundImage: `url(${urlBackground})` } : { backgroundImage: 'none' }}
        ></div>
      </div>

  );
}

export default App;
