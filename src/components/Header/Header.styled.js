import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuList = styled.ul`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  justify-content: space-evenly;
  background-color: skyblue;
  padding: 20px 20px;
  font-size: 30px;
`;

export const MenuListItem = styled(NavLink)`
  text-decoration: none;
  &.active {
    background-color: blue;
    color: aliceblue;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
  }
  &:hover {
    background-color: blue;
    color: aliceblue;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
    transition: 0.4 sec;
  }
`;
