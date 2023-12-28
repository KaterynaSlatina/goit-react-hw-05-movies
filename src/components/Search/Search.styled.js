/* form { 
  text-align: center;
}

input {
  width: 300px;
  height: 30px;
}

.btnSearch {
  height: 35px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
}

.searchMoviesList { li
  display: flex;
  flex-direction: column;
  padding-bottom: 7px;
  padding-top: 7px;
} */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FormStyled = styled.form`
  text-align: center;
`;

export const InputStyled = styled.input`
  width: 300px;
  height: 30px;
`;

export const ButtonSearch = styled.button`
  height: 35px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  &:hover {
    background-color: blue;
    color: aliceblue;
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const SearchedMovies = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 7px;
  padding-top: 7px;
`;

export const SearchedLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    font-size: 20px;
    color: darkblue;
    transition: 0.3s;
  }
`;
