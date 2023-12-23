import { fetchTrendingMovies } from 'components/fetchApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <h1>Trending today</h1>

      <ul>
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
