import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiKey } from '../../pages/Home/Home';
import css from './searchbar.module.css';

export default function Searchbar({ submitHandler }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState('');

  const onSearch = e => {
    const { value } = e.target;

    e.preventDefault();
    setState(value);
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setState(query);
      submitHandler(query);
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(state !== '' ? { query: state } : {});
    submitHandler(state);
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={state}
          onChange={onSearch}
          id="search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
