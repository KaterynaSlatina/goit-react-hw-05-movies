import axios from 'axios';

const API_KEY = '4a774717439e170e5cef6e4dd20f22c7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const getMovieId = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const fetchSearchMovies = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};
