import React from 'react';
import './Header.css';
import logoImage from '../images/logo.png'; // 로고 이미지 경로
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <NavLink to='/main'><img src={logoImage} alt="사이트 로고" className="logo-img" />
        </NavLink>
        {/* <h1 className="header-title"></h1> 변경 가능 */}
      </div>
        <div className="header-right">
        <i className="fas fa-shopping-cart icon-fa"></i> {/* 쇼핑 카트 아이콘 */}
        <i className="fas fa-user icon-fa"></i>         {/* 사용자 아이콘 */}
        </div>
        
    </header>
  );
};

export default Header;



































/* <Link to="/"> { 로고 클릭 시 이동할 경로를 to 속성에 지정합니다. }
          <img src={logoImage} alt="사이트 로고" className="logo-img" />
        </Link> left*/

//    <Link to="/shopping" className="icon-link" aria-label="장바구니 페이지로 이동">
//           <i className="fas fa-shopping-cart icon-fa"></i>
//         </Link>