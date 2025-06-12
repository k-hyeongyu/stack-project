import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './introduce/MainPage';
import MyPage from './mypage/MyPage';
import Introduce from './introduce/Introduce';
import Login from './login/Login';
import SignUp from './login/SignUp';
import FindId from './login/FindId';
import FindPw from './login/FindPw';
import Shopping from './shopping/Shopping';
import DietPage from './health-pages/DietPage';
import BulkPage from './health-pages/BulkPage';
import KeepPage from './health-pages/KeepPage';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (

    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Introduce />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/shopping/*" element={<Shopping />} />
        <Route path="/bulk" element={<BulkPage />} />
        <Route path="/diet" element={<DietPage />} />
        <Route path="/keep" element={<KeepPage />} />
      </Routes>
    </div>

  );

}

export default App;