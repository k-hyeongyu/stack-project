import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="app-header">

      <div className='health-header'>

        <img src={process.env.PUBLIC_URL+"/images/BalancEat_logo.png"} className='logo-image' alt='로고 이미지' onClick={() => { navigate('/main') }}></img>
        <div className='health-header-right'>
          <span class="material-symbols-outlined" onClick={() => { navigate("/shopping") }}>
            storefront
          </span>
          <span class="material-symbols-outlined" onClick={() => { navigate("/cart") }}>
            local_mall
          </span>

          <span class="material-symbols-outlined" onClick={() => { navigate("/login") }}>
            person
          </span>
        </div>

      </div>
      <div className='shopping-seperator-line'></div>
    </header>
  );
}
export default Header;