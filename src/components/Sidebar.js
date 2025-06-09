import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar=() => {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-content-wrapper">
        <nav className="sidebar-main-nav">

          <NavLink to="/diet" className="sidebar-item"><i class="fa-solid fa-person-running"></i></NavLink> 
          <NavLink to="/keep" className="sidebar-item"><i class="fa-solid fa-person"></i></NavLink>
          <NavLink to="/bulk" className="sidebar-item"><i class="fa-solid fa-dumbbell"></i></NavLink>
        
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;