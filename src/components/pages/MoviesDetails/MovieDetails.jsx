import { getMovieId } from 'components/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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

  return <div>{movieDetails.title}</div>;
};

export default MovieDetails;
