import React, { useEffect, useState } from 'react';
import css from './reviews.module.css';
import { Link, useParams } from 'react-router-dom';
import { apiKey } from '../Home/Home';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const handleFetch = async () => {
    if (movieId) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
      ).then(res => res.json());
      setReviews(res.results);
    }
  };
  useEffect(() => {
    handleFetch(movieId);
  }, []);

  return (
    <div className={css.reviews}>
      <h3 className={css.reviewsTitle}>Reviews</h3>
      <div>
        {reviews.length > 0 ? (
          <ul className={css.reviewsList}>
            {reviews.map(rev => (
              <li className={css.reviewsListItem} key={rev.id}>
                <p className={css.authorName}>{rev.author}</p>
                <p className={css.revContent}>{rev.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews for this movie</p>
        )}
      </div>
    </div>
  );
}
