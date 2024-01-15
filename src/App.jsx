import React, { useEffect, useState } from 'react';
import './App.css';
import useFetchData from './hooks/useFetchData';
import AnimeList from './components/TableBody/AnimeList';
import Nav from './components/Nav/Nav';
import Options from './components/Options/Options';

function App() {
  const { data, loading, error } = useFetchData();
  const [searchData, setSearchData] = useState([]);
  const [sortStream, setSortStream] = useState(true);
  const [columns, setColumns] = useState([])

  const nav = ['Home', 'Favorite', 'Popular', 'Other'];

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

  console.log(columns);

  return (
    <div className="App">
      <Nav nav={nav} />
      <Options handleCheckedColumns={handleCheckedColumns} handleSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <AnimeList columns={columns} sortingData={sortingData} data={searchData} />}
    </div>
  );
}

export default App;
