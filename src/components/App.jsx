import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Header from './Header/Header';
import MovieDetails from './pages/MoviesDetails/MovieDetails';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};