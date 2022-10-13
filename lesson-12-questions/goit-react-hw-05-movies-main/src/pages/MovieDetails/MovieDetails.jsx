import React, { useContext, useEffect, useState } from 'react';
import {
  Outlet,
  NavLink,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { QueryContext } from '../../App';
import { FiChevronLeft } from 'react-icons/fi';
import css from './movieDetails.module.css';
import { apiKey } from '../Home/Home';
import { nanoid } from 'nanoid';

export default function MovieDetails() {
  const [movieState, setMovieState] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/';
  const goBack = () => {
    if (location.state?.from) {
      navigate(backLinkHref);
    } else {
      navigate('/');
    }
  };
  const handleFetch = async () => {
    if (movieId) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      ).then(res => res.json());
      console.log(res);
      setMovieState(res);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const {
    poster_path = null,
    title,
    popularity,
    overview,
    genres = null,
  } = movieState;

  return (
    <div>
      <div className={css.buttonContainer}>
        <button onClick={goBack}>
          <FiChevronLeft /> Go Back
        </button>
      </div>
      <div className={css.movieContainer}>
        <div>
          {poster_path && (
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
            />
          )}
        </div>

        <div className={css.movieInfoContainer}>
          <h2>{title}</h2>
          <p>Popularity: {popularity}</p>
          <h3>Overview</h3>
          <p className={css.overview}>{overview}</p>
          <h3>Genres: </h3>
          {genres && (
            <ul className={css.genresList}>
              {genres.map(g => (
                <li className={css.genresItem} key={g.id}>
                  {g.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <span className={css.breaker}></span>
      <div className={css.additionalInfoCOntainer}>
        <h3>Additional info</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <span className={css.breaker}></span>
      <Outlet />
    </div>
  );
}
