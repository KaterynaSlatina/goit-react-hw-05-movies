import Search from 'components/Search/Search';
import { fetchSearchMovies } from 'components/fetchApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const getSearchMovies = async searchQuery => {
    try {
      const resp = await fetchSearchMovies(searchQuery);
      setMovies(resp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query) {
      getSearchMovies(query);
    }
  }, [query]);

  const submit = query => {
    setQuery(query);
  };

  return (
    <>
      <Search submit={submit} />

      {movies.map(movie => (
        <Link to={`movies/${movie.id}`} key={movie.id}>
          {movie.title}
        </Link>
      ))}
    </>
  );
};

export default Movies;
