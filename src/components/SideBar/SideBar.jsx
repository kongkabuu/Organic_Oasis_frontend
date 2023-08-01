import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Grocery Categories</div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/meat">Meat</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/beverages">Beverages</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/bakery">Bakery</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/fruits">Fruits</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/vegetables">Vegetables</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/spice">Spice</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
