import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-list">
        <li className="sidebar-item" onClick={handleToggleDropdown}>
          Categories {isDropdownOpen ? '▲' : '▼'}
        </li>
        {isDropdownOpen && (
          <>
            <li className="sidebar-item">
              <Link to="/meat">Meat</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/beverage">Beverages</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/bakery">Bakery</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/vegetables">Vegetables</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/cereals">Cereals</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/species">Species</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/dairy">Dairy</Link>
            </li>
          </>
        )}
        <li className="sidebar-item" onClick={() => setDropdownOpen(false)}>
          <Link to="/">Go Back</Link>
        </li>
      </div>
    </div>
  );
};


export default Sidebar;
