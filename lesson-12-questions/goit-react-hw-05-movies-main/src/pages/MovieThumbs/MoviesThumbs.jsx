import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './MoviesThumbs.module.css';
import { useLocation } from 'react-router-dom';
export default function MovieThumbs({ moviesSearch }) {
  const location = useLocation();
  useEffect(() => {
    console.log('thumbs', moviesSearch);
  });
  return (
    <div className={css.thumbsContainer}>
      {moviesSearch.length > 0 && (
        <ul className={css.thumbsList}>
          {moviesSearch.map(({ poster_path, title, id }) => (
            <li className={css.thumbListItem} key={id}>
              <Link state={{ from: location }} to={`${id}`}>
                {console.log(title, location)}
                <img
                  className={css.posterImage}
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
                <h2>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
