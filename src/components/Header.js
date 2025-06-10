import React from 'react';
import './Header.css';
import logoImage from '../images/logo.png'; // 로고 이미지 경로
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="app-header">

      {/* <div className="header-left">
        <NavLink to='/'><img src={logoImage} alt="사이트 로고" className="logo-img" />
        </NavLink>
      </div>

      <div className="header-right">
        <i className="fas fa-shopping-cart icon-fa"></i>{/* 쇼핑 카트 아이콘 
        
        <NavLink to='/Login'>
        <i className="fas fa-user icon-fa"></i>{/* 사용자 아이콘 
        </NavLink>
      </div> */}

      <div className='shopping-header'>
                <img src='/BalancEat_logo.png' className='logo-image' alt='로고 이미지' onClick={()=>{navigate('/')}}></img>
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