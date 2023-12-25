import { useState } from 'react';
import css from './Search.module.css';

const Search = ({ submit }) => {
  const [inputData, setInputData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    submit(inputData);
  };

  const handleChangeInput = ({ target: { value } }) => {
    setInputData(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
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
  );
};
export default Search;
