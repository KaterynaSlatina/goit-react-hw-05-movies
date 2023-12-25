import { fetchCast } from 'components/fetchApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchCast(movieId);
        setCasts(data);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && getCast();
  }, [movieId]);

  return (
    <div>
      {casts.map(cast => (
        <li key={cast.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
            alt=""
          />
          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </div>
  );
};

export default Cast;
