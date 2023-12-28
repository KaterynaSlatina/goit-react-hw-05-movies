import { getMovieId } from 'components/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieMarkup from 'components/MovieMarkup/MovieMarkup';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await getMovieId(movieId);
        console.log('Response data-details', data);
        setMovieDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && getMovieDetails();
  }, [movieId]);

  return <MovieMarkup propMovieDetail={movieDetail} />;
};

export default MovieDetails;
