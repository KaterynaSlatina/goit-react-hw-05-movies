import css from 'components/pages/MoviesDetails/MovieDetails.module.css';
import { useNavigate, useLocation, NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MovieMarkup = ({ movieDetail }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(location.state?.from ?? '/');
  };

  const { title, release_date, vote_average, overview, poster_path, genres } =
    movieDetail;
  return (
    <div>
      <button className={css.btnGoBack} onClick={handleClick}>
        Go back
      </button>
      <div className={css.movieInfo}>
        <h2>
          {title}({release_date})
        </h2>
        <p>
          User Score:
          {vote_average && Math.floor(vote_average) * 10}%
        </p>

        <p> {overview}</p>
        {movieDetail && poster_path && (
          <img
            className={css.posterImg}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        )}

        <h3>Genres:</h3>
        <p>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </p>
      </div>
      <NavLink to="cast">Cast...</NavLink>
      <NavLink to="reviews">Reviews...</NavLink>
      <Suspense fallback={<div>Loading subpage....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieMarkup;
