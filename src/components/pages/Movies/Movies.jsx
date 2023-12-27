import Search from 'components/Search/Search';
import { fetchSearchMovies } from 'components/fetchApi';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();

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

      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
