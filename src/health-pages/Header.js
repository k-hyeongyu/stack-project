import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="app-header">

      <div className='shopping-header'>
        <img src='/images/BalancEat_logo.png' className='logo-image' alt='로고 이미지' onClick={() => { navigate('/') }}></img>
        <div className='shopping-header-right'>
          <i className="fa-solid fa-cart-shopping" onClick={() => { navigate("/shopping") }}></i>
          <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>
        </div>
        <div className='shopping-seperator-line'></div>
      </div>

    </header>
  );
}
export default Header;