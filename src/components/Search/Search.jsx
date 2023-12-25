import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { fetchSearchMovies } from 'components/fetchApi';
import css from './Search.module.css';

const Search = ({ submit }) => {
  const [inputData, setInputData] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchSearchMovies(query).then(setFiles);
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputData.trim() !== '') {
      setSearchParams({ query: inputData });
    }
    // submit(inputData);
  };

  const handleChangeInput = ({ target: { value } }) => {
    setInputData(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button className={css.btnSearch} type="submit">
          <span>Search</span>
        </button>

        <input
          name="inputData"
          value={inputData}
          onChange={handleChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
      {files.length > 0 && (
        <ul>
          {files.map(({ title, id }) => (
            <li className={css.searchMoviesList} key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Search;
