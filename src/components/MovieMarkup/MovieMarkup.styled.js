import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
  margin-left: -40px;
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  margin-bottom: 10px;
  background-color: skyblue;
  color: blue;
  border-radius: 5px;
  padding: 10px 18px;
  width: 55px;
  padding: 5px 15px;
  text-align: center;

  &:hover {
    background-color: blue;
    color: aliceblue;
    transition: 0.3s;
  }
`;

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  background-color: skyblue;
  color: blue;
  border-radius: 5px;
  padding: 5px 10px;
  &:hover {
    background-color: blue;
    color: aliceblue;
    transition: 0.3s;
  }
`;
