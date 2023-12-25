import { getMovieId } from 'components/fetchApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  // const backLink = location.state?.from ?? '/';

  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await getMovieId(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && getMovieDetails();
  }, [movieId]);

  const handleClick = () => {
    navigate(location.state?.from ?? '/');
  };
  return (
    <div>
      <button className={css.btnGoBack} onClick={handleClick}>
        Go back
      </button>
      <div className={css.movieInfo}>
        <h2>
          {movieDetails.title}({movieDetails.release_date})
        </h2>
        <p>
          User Score:{' '}
          {movieDetails.vote_average &&
            Math.floor(movieDetails.vote_average) * 10}
          %
        </p>
        {/* <h3>Overview</h3> */}
        <p> {movieDetails.overview}</p>
        {movieDetails && movieDetails.poster_path && (
          <img
            className={css.posterImg}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        )}

        <h3>Genres:</h3>
        <p>
          {movieDetails.genres &&
            movieDetails.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
        </p>
      </div>
      <div>
        <p>Additional information:</p>
        <ul className={css.addInfo}>
          <li className={css.addInfoItems}>
            <Link className={css.color} to="cast">
              Cast
            </Link>
          </li>
          <li className={css.addInfoItems}>
            <Link className={css.color} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
