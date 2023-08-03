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
          Categories
          {isDropdownOpen}
        </li>
        {categoriesData.map((category) => (
          <li className="sidebar-item" key={category.name}>
            <Link to={`/${category.name.toLowerCase()}`}>{category.name}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
