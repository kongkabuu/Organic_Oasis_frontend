import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <Link to="/meat">Meat</Link>
      <Link to="/beverages">Beverages</Link>
      <Link to="/bakery">Bakery</Link>
      <Link to="/fruits">Fruits</Link>
      <Link to="/vegetables">Vegetables</Link>
      <Link to="/spice">Spice</Link>
    </div>
  );
};

export default DropdownMenu;
