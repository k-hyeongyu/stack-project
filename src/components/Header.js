import React from 'react';
import './Header.css';
import logoImage from '../images/logo.png'; // 로고 이미지 경로
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">

      <div className="header-left">
        <NavLink to='/'><img src={logoImage} alt="사이트 로고" className="logo-img" />
        </NavLink>
      </div>

      <div className="header-right">
        <i className="fas fa-shopping-cart icon-fa"></i>{/* 쇼핑 카트 아이콘 */}
        
        <NavLink to='/Login'>
        <i className="fas fa-user icon-fa"></i>{/* 사용자 아이콘 */}
        </NavLink>
      </div>

    </header>
  );
};

export default Header;