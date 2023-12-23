import { useState } from 'react';

const Search = () => {
  const [inputData, setInputData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChangeInput = ({ target: { value } }) => {
    setInputData(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button c type="submit">
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
