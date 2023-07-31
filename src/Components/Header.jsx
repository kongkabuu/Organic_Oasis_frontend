import React, { useState } from 'react';
import logo from './Assets/logo.webp';
import styled from 'styled-components';
import { IoSearch, IoClose } from 'react-icons/io5'; // Import the icons from react-icons

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

const SearchBar = styled.div`
  position: relative;
  width: ${props => (props.showSearch ? '300px' : '76px')};
  height: 40px;
  background-color: var(--white-color);
  border: 1px solid var(--text-color-light);
  border-radius: 2rem;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  transition: width 0.5s cubic-bezier(0.9, 0, 0.3, 0.9);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%; /* Expand the input horizontally */
  font-family: var(--body-font);
  font-size: 1.3rem; /* Adjust the font size to make it smaller */
  padding: 0.3rem 0.5rem; /* Adjust the padding to make it smaller */
  border-radius: 5px; /* Adjust the border radius to make it smaller */
  opacity: ${props => (props.showSearch ? '1' : '0')};
  pointer-events: ${props => (props.showSearch ? 'initial' : 'none')};
  transition: opacity 1s;
  background-color: #ffffff;
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
  border-radius:50%;
  width:0.7cm;
  height:0.7cm
`;

const CloseIcon = styled(IoClose)`
  cursor: pointer;
  font-size: 1.2rem;
  background-color: green;
  border-radius:50%;
  width:0.7cm;
  height:0.7cm
`;

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setShowSearch(prev => !prev);
    setSearchQuery(''); // Reset the search query on close
  };

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
      <SearchBar showSearch={showSearch}>
        <form onSubmit={handleSearchSubmit}>
          <SearchIcon onClick={handleSearchClick} />
          <SearchInput
            className="search__input"
            type="text"
            placeholder="Search..."
            showSearch={showSearch}
            value={searchQuery}
            onChange={handleInputChange}
          />
          {showSearch && <CloseIcon onClick={handleSearchClick} />}
        </form>
      </SearchBar>
      <SearchButton onClick={handleSearchClick}>
        {showSearch ? 'Close' : 'Search'}
      </SearchButton>
    </HeaderContainer>
  );
}

export default Header;

