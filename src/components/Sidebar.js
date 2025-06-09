import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <NavLink
        to="/diet"
        className={({ isActive }) => "sidebar-item" + (isActive ? " active" : "")}
      >
        다이어트
      </NavLink>
      <NavLink
        to="/keep"
        className={({ isActive }) => "sidebar-item" + (isActive ? " active" : "")}
      >
        체형유지
      </NavLink>
      <NavLink
        to="/bulk"
        className={({ isActive }) => "sidebar-item" + (isActive ? " active" : "")}
      >
        체중증가
      </NavLink>
      <div className="sidebar-logout-section">

      </div>
    </aside>
  );
};

export default Sidebar;