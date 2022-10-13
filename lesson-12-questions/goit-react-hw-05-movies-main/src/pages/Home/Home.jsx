import React, { useMemo } from 'react';
import { useState, useEffect, useContext } from 'react';
import css from './home.module.css';
import { QueryContext } from '../../App';
import RenderTrendingMovies from '../../components/renderTrendingMovies';
import {
  useLocation,
  useParams,
  useHistory,
  redirect,
  useNavigate,
} from 'react-router-dom';

export const apiKey = 'b088248518155186f32d85fc88822f96';
export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, setState } = useContext(QueryContext);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setState(data.results);
      });
  }, []);

  return (
    <>
      <div>
        <h2 className={css.trendingHeader}> Tranding today</h2>
        {state.length > 0 && (
          <RenderTrendingMovies location={{ from: location }} data={state} />
        )}
      </div>
    </>
  );
}
