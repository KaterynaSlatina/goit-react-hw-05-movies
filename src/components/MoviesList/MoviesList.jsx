import { MovieList } from 'components/pages/Home/Home.styled';
import { MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(movie => (
        <MovieLink to={`movies/${movie.id}`} key={movie.id}>
          {movie.title}
        </MovieLink>
      ))}
    </MovieList>
  );
};

export default MoviesList;
