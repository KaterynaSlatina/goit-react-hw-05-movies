import { getMovieId } from 'components/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    </div>
  );
};

export default MovieDetails;
