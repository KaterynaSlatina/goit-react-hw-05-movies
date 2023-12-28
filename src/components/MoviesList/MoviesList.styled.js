import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  text-decoration-style: none;
  color: black;

  &:hover {
    color: darkblue;
    font-size: 20px;
    transition: 0.3sec;
  }
`;
