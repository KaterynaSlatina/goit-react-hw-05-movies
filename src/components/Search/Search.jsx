import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'components/fetchApi';
import {
  ButtonSearch,
  FormStyled,
  InputStyled,
  SearchedLink,
  SearchedMovies,
} from './Search.styled';

const Search = ({ submit }) => {
  const [inputData, setInputData] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchSearchMovies(query).then(setFiles);
      setInputData(localStorage.getItem('searchInputData'));
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    submit(inputData);
    if (inputData.trim() !== '') {
      setSearchParams({ query: inputData });
      localStorage.setItem('searchQuery', inputData);
      localStorage.setItem('searchInputData', inputData);
    }
  };

  const handleChangeInput = ({ target: { value } }) => {
    setInputData(value);
    localStorage.setItem('searchInputData', value);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <ButtonSearch type="submit">
          <span>Search</span>
        </ButtonSearch>

        <InputStyled
          name="inputData"
          value={inputData}
          onChange={handleChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </FormStyled>
      {files.length > 0 && (
        <ul>
          {files.map(({ title, id }) => (
            <SearchedMovies key={id}>
              <SearchedLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </SearchedLink>
            </SearchedMovies>
          ))}
        </ul>
      )}
    </>
  );
};
export default Search;
