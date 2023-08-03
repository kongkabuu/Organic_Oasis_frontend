import { useState } from 'react';
import logo from '../Assets/logo.webp';
import styled from 'styled-components';
//import Profile from './Components/Profile';
import { IoSearch } from 'react-icons/io5'; // Import the icons from react-icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const LogoImage = styled.img`
  width: 5rem;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2rem;
  background-color: var(--white-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--first-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--dark-color);
  }
`;
const CartIcon = styled(ShoppingCartIcon)`
  color: #19C048;
`;
const SearchBarContainer = styled.div`
  position: relative;
`;
const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 200px;
  font-family: var(--body-font);
  font-size: 1.3rem;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  background-color: #FFFFFF;
  color: black;
  ::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;
const SearchIcon = styled(IoSearch)`
  margin-right: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: green;
  border-radius: 50%;
  width: 0.7cm;
  height: 0.7cm;
`;
function SearchBar({ onSubmit, value, onChange }) {
  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={onSubmit}>
        <SearchIcon />
        <SearchInput
          className="search__input"
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchBarForm>
    </SearchBarContainer>
  );
}
function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };
  const handleSearchSubmit = event => {
    event.preventDefault();
    // Perform the search action here with the 'searchQuery' value
    console.log('Searching for:', searchQuery);
  };
  return (
    <HeaderContainer>
      <LogoImage src={logo} alt="Logo" />
      <SearchBar
        onSubmit={handleSearchSubmit}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <CartIcon />
      {/* <Profile/> */}
    </HeaderContainer>
  );
}
export default Header;
