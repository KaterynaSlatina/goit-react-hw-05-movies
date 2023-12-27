import css from '../pages/Home/Home.module.css';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.homeMovies}>
      {movies.map(movie => (
        <Link to={`movies/${movie.id}`} key={movie.id}>
          {movie.title}
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
