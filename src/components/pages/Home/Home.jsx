import { fetchTrendingMovies } from 'components/fetchApi';
import { useEffect, useState } from 'react';

import css from './Home.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const resp = await fetchTrendingMovies();
        setMovies(resp);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={css.textTrending}>Trending today</h1>

      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
