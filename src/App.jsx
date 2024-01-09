import React, { useEffect } from 'react';
import './App.css';
import useFetchData from './hoocks/useFetchData';
import AnimeList from './components/AnimeList';
import Nav from './components/Nav';

function App() {
  const { data, loading, error } = useFetchData();

  const nav = [
    'Home',
    'Favorite'
  ]

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Nav nav={nav} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <AnimeList data={data} />
      )}
    </div>
  );
}

export default App;