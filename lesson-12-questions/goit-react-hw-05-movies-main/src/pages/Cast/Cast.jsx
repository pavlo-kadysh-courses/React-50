import React, { useEffect, useState } from 'react';
import css from './cast.module.css';
import { useParams } from 'react-router-dom';
import { apiKey } from '../Home/Home';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const handleFetch = async () => {
    if (movieId) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
      ).then(res => res.json());
      setCast(res.cast);
      console.log(cast);
    }
  };
  useEffect(() => {
    handleFetch(movieId);
  }, []);

  return (
    <div className={css.castContainer}>
      <h3 className={css.title}>Cast</h3>
      {cast.length > 0 && (
        <ul className={css.classList}>
          {cast.map(actor => {
            return (
              <li className={css.castListItem} key={actor.id}>
                {actor.profile_path ? (
                  <img
                    className={css.profilePic}
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <img
                    className={css.profilePic}
                    src="https://via.placeholder.com/250x380?text=No+Photo"
                    alt={actor.name}
                  />
                )}
                <p className={css.actorName}>{actor.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
