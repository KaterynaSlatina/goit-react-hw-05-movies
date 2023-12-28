import { fetchCast } from 'components/fetchApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList } from './Cast.styled';

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
    <CastList>
      {casts.map(cast => (
        <CastItem key={cast.cast_id}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
              alt=""
              width={200}
              height={300}
            />
          ) : (
            <div>No image</div>
          )}
          <p>Actor:{cast.name}</p>
          <p>Character: {cast.character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
