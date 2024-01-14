import React, { useEffect, useState } from 'react';
import './App.css';
import useFetchData from './hooks/useFetchData';
import AnimeList from './components/AnimeList';
import Nav from './components/Nav';
import Search from './components/UI/Search';

function App() {
  const { data, loading, error } = useFetchData();
  const [searchData, setSearchData] = useState([]);
  const [sortStream, setSortStream] = useState(true);

  const nav = ['Home', 'Favorite', 'Popular', 'Other'];

  useEffect(() => {
    setSearchData(data ? [...data] : []);
  }, [data]);

  const handleSearch = (searchValue) => {
    const filteredData = searchData.filter((item) =>
      item.russian.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchData(filteredData.length > 0 ? filteredData : []); // Устанавливаем пустой массив при отсутствии совпадений
  };

  const sortingData = (value) => {
    const sortedData = [...searchData];

    sortStream
      ? setSearchData(sortedData.sort((a, b) => a[value] > b[value] ? 1 : -1))
      : setSearchData(sortedData.sort((a, b) => a[value] < b[value] ? 1 : -1));

    setSortStream(!sortStream);
  }

  return (
    <div className="App">
      <Nav nav={nav} />
      <Search onChange={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <AnimeList sortingData={sortingData} data={searchData} />}
    </div>
  );
}

export default App;
