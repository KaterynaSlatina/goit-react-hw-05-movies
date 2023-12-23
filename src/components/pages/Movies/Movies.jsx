import Search from 'components/Search/Search';
import { fetchSearchMovies } from 'components/fetchApi';
import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movie, setMovie] = useState([]);

  const getSearchMovies = async () => {
    try {
      const resp = await fetchSearchMovies();
      setMovie(resp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearchMovies();
  }, [movie]);

  const submit = query => {
    getSearchMovies(query);
  };

  return <Search submit={submit} />;
};

export default Movies;
