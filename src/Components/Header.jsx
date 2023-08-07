import React, { useState } from 'react';
import logo from '../Assets/logo.webp';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Profile from './Profile'; // Import the Profile component
// import LoginForm from './LoginForm';

const LogoImage = styled.img`
  width: 5rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.01rem;
  background-color: #ffffff; /* Set the background color to green */
`;

const CartIconWrapper = styled.div`
  margin-left: 3cm; /* Set the margin-left to 3cm to move the cart icon to the left */
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2rem;
  background-color: var(--white-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Add styles to center the elements */
  ${SearchBarContainer} {
    margin-right: 1.5rem; /* Space between SearchBar and Profile */
  }

  ${CartIconWrapper} {
    margin-left: 1.5rem; /* Space between Profile and ShoppingCartIcon */
  }
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
  margin-left: 3cm; /* Set the margin-left to 3cm to move the cart icon to the left */
  cursor: pointer;
`;

const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  /* Add 'flex: 1' to the form to make the input expand to fill the remaining space */
  flex: 1;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  /* Remove width property to allow the input to fill the remaining space */
  font-family: var(--body-font);
  font-size: 1.3rem;
  padding: 0.3rem 0.5rem;
  background-color: transparent;
  color: black;
  flex: 3; /* Set the flex value to 3 to take 3/4 of the available space */
  ::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;

const SearchIcon = styled(IoSearch)`
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #19C048; /* Set the background color to white */
  height: 100%;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function SearchBar({ onSubmit, value, onChange }) {
  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={onSubmit}>
        <SearchInput
          className="search__input"
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
        <SearchIcon type="submit"></SearchIcon>
      </SearchBarForm>
    </SearchBarContainer>
  );
}

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchSubmit = (event) => {
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
      <CartIconWrapper>
      <Link to="/cart">
        <CartIcon />
        <span>Cart</span>
        </Link>
      </CartIconWrapper>
      <Profile /> {/* Render the Profile component */}
      {/* <LoginButton onClick={handleLoginButtonClick}>Log In</LoginButton>
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />} */}
    </HeaderContainer>
  );
}

export default Header;
