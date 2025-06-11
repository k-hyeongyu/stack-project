import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Start/main/MainPage'; // MainPage 컴포넌트 import
import MyPage from './mypage/MyPage';
import Introduce from './introduce/Introduce';
import Login from './login/Login';
import SignUp from './login/SignUp';
import FindId from './login/FindId';
import FindPw from './login/FindPw';
import Shopping from './shopping/Shopping';
import React from 'react';
import DietPage from './pages/DietPage';
import BulkPage from './pages/BulkPage';
import KeepPage from './pages/KeepPage';


function App() {

  return (

    <div>
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