import React, { useContext, useEffect, useState } from 'react';
import { QueryContext } from '../../App';
import Searchbar from '../../components/Searchbar/Searchbar';
import MoviesThumbs from '../../pages/MovieThumbs';
import { apiKey } from '../Home/Home';
export default function Movies() {
  const { state, setState } = useContext(QueryContext);
  console.log('Movies', state);
  const [moviesSearch, setMoviesSearch] = useState([]);

  const handleFetch = value => {
    if (value.trim(' ').length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=1&include_adult=false`
      )
        .then(response => response.json())
        .then(data => {
          setMoviesSearch(data.results || []);
        });
    }
  };
  return (
    <div>
      <Searchbar submitHandler={handleFetch} />
      <MoviesThumbs moviesSearch={moviesSearch} />
    </div>
  );
}
