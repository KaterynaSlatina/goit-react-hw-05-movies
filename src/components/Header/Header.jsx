import { MenuList, MenuListItem } from './Header.styled';

const Header = () => {
  return (
    <header>
      <nav>
        <MenuList>
          <li>
            <MenuListItem to="/">Home</MenuListItem>
          </li>
          <li>
            <MenuListItem to="/movies">Movies</MenuListItem>
          </li>
        </MenuList>
      </nav>
    </header>
  );
};

export default Header;
