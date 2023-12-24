import { getMovieId } from 'components/fetchApi';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

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

  return (
    <div>
      {movieDetails && movieDetails.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      )}
      <h2>
        {movieDetails.title} && ({movieDetails.title}(
        {movieDetails.release_date}
        ))
      </h2>
      <p>
        User Score:{' '}
        {movieDetails.vote_average &&
          Math.floor(movieDetails.vote_average) * 10}
        %
      </p>
      <h3>Overview</h3>
      <p> {movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>
        {movieDetails.genres &&
          movieDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </p>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
