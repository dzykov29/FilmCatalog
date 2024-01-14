import React, { useEffect, useState } from 'react';
import './App.css';
import useFetchData from './hooks/useFetchData';
import AnimeList from './components/AnimeList';
import Nav from './components/Nav';
import Search from './components/UI/Search';

function App() {
  const { data, loading, error } = useFetchData();
  const [searchData, setSearchData] = useState([]);

  const nav = ['Home', 'Favorite', 'Popular', 'Other'];

  const handleSearch = (searchValue) => {
    const filteredData = data.filter((item) =>
      item.russian.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchData(filteredData);
  };

  useEffect(() => {
    // You can perform additional actions here when data changes
  }, [data]);

  return (
    <div className="App">
      <Nav nav={nav} />
      <Search onChange={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <AnimeList data={searchData.length > 0 ? searchData : data} />}
    </div>
  );
}

export default App;
