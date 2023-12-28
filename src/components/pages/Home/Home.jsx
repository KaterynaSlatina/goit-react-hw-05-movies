import { fetchTrendingMovies } from 'components/fetchApi';
import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';
import { TitleTrending } from './Home.styled';

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
      <TitleTrending>Trending movies today</TitleTrending>

      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
