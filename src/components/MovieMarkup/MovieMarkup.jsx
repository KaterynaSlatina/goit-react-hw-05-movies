import { useLocation, Outlet } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import {
  GenresList,
  GoBackLink,
  LinkList,
  LinkStyled,
  MovieImg,
  MovieTitle,
} from './MovieMarkup.styled';

const MovieMarkup = ({ propMovieDetail }) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const { title, release_date, vote_average, overview, poster_path, genres } =
    propMovieDetail;
  return (
    <div>
      <GoBackLink to={backLink.current}>Go back</GoBackLink>

      <div>
        <MovieTitle>
          {title}({release_date})
        </MovieTitle>
        <p>
          <b>User Score:</b>
          {vote_average && Math.floor(vote_average) * 10}%
        </p>

        <GenresList>
          <b>Genres:</b>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </GenresList>
        <p> {overview}</p>
      </div>

      <MovieImg>
        {propMovieDetail && poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={300}
            height={400}
          />
        )}
      </MovieImg>

      <h3>Additional information:</h3>
      <LinkList>
        <LinkStyled to="cast">Cast</LinkStyled>
        <LinkStyled to="reviews">Reviews</LinkStyled>
      </LinkList>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieMarkup;
