import { fetchTrendingMovies } from 'components/fetchApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

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

      <ul className={css.homeMovies}>
        {movies.map(movie => (
          <Link to={`movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
