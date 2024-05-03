import React, { useEffect, useState, useMemo } from 'react';
import './App.scss';
import useFetchData from './hooks/useFetchData';
import HomePage from './components/pages/Home/HomePage';
import Nav from './components/Nav/Nav';
import Options from './components/Options/Options';
import { Routes, Route, useLocation} from 'react-router-dom';
import Favorite from './components/pages/Favorite/Favorite';
import FilmPage from './components/FilmPage/FilmPage'
import { Anime } from './utils/Types';



function App() {
  const { data, loading, error } = useFetchData();
  const [searchData, setSearchData] = useState<Anime[]>([]);
  const [sortStream, setSortStream] = useState<boolean>(true);
  const [columns, setColumns] = useState<string[]>([]);

  const location = useLocation();
  const filmId = location.pathname.split('/')[2];

  useEffect(() => {
    setSearchData(data && [...data]);
  }, [data]);

  const handleSearch = (searchValue: string) => {
    const filteredData = data.filter((item: Anime) =>
      item.russian.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchData(filteredData); // Устанавливаем пустой массив при отсутствии совпадений
  };
  const sortingData = useMemo(() => (value: string) => {
    const sortedData = [...searchData];

    const sorted = sortedData.sort((a: Anime, b: Anime): number =>
      sortStream ? (a[value] > b[value] ? 1 : -1) : a[value] < b[value] ? 1 : -1
    );

    setSearchData([...sorted]);
    setSortStream(!sortStream);
  }, [sortStream, searchData]);

  const handleCheckedColumns = (columns: string[]) => {
    setColumns(columns)
  }

  return (
    
      <div 
        className="App"
      >
        <Nav />
      {location.pathname !== `/film/${filmId}` && <Options handleCheckedColumns={handleCheckedColumns} handleSearch={handleSearch} />}
        {error && <p>Error: {error.messages}</p>}
        <Routes>
          <Route path='/' element={<HomePage columns={columns} sortingData={sortingData} data={searchData} isLoading={loading} />} />
          <Route path='/favorite' element={<Favorite columns={columns} sortingData={sortingData} />} />
          <Route path='/film/:filmId' element={<FilmPage />} />
          <Route path='*' element={<HomePage columns={columns} sortingData={sortingData} data={searchData} isLoading={loading} />} />
        </Routes>
      </div>

  );
}

export default App;
