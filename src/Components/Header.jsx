import React, { useState } from 'react';
import logo from './Assets/Fresh.jpg';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import Profile from './Profile'; // Import the Profile component
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const LogoImage = styled.img`
  width: 10rem;
  height:5rem;
  margin-right: 5cm;
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
  padding: 0 9rem;
  background-color: var(--white-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0.1cm;

  /* Add styles to center the elements */
  ${SearchBarContainer} {
    margin-left: 15rem; /* Space between SearchBar and Profile */
  }

  ${CartIconWrapper} {
    margin-left: 20rem; /* Space between Profile and ShoppingCartIcon */
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
  color:#19c048 ;
  margin-top: 0.01cm;
  transform: scale(1.1); 
  margin-left: 2cm; /* Set the margin-left to 3cm to move the cart icon to the left */
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
  background-color: #19c048; /* Set the background color to white */
  height: 100%;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GreenProfileIcon = styled(AccountCircleIcon)`
  color: #19c048; /* Set the color to the specified green */
  width: 9.4rem; /* Increase the width to make the diameter 1cm bigger */
  margin-left: 1cm; 
  height: 9.4rem; /* Increase the height to make the diameter 1cm bigger */
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
  //const navigate=useNavigate()
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery); 
    // Perform the search action here with the 'searchQuery' value
    console.log('Searching for:', searchQuery);
  };
  // const handleClick=() =>{
  //   navigate('/profile')
  // }
  return (
    <HeaderContainer>
      <LogoImage src={logo} alt="Fresh" />
      <SearchBar
        onSubmit={handleSearchSubmit}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <CartIconWrapper>
        <CartIcon />
      </CartIconWrapper>
      <Link to="/profile">
      <GreenProfileIcon />

</Link>
    </HeaderContainer>
  );
}

export default Header;
