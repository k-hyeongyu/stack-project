import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-content-wrapper">
        <nav className="sidebar-main-nav">
          <NavLink to="/diet" className="sidebar-item">다이어트</NavLink>
          <NavLink to="/keep" className="sidebar-item">체형 유지</NavLink>
          <NavLink to="/bulk" className="sidebar-item">벌크업</NavLink>
        </nav>
      </div>

    </aside>
  );
};

export default Sidebar;