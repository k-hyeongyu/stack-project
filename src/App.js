import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navigate from'react-router-dom';
import MainPage from './Start/main/MainPage'; // MainPage 컴포넌트 import
import MyPage from './mypage/MyPage';
import Health from './health/Health';
import Introduce from './introduce/Introduce';
import MyPage from './mypage/MyPage';
import Login from './login/Login';
import SignUp from './login/SignUp';
import FindId from './login/FindId';
import FindPw from './login/FindPw';
// import Shopping from './shopping/Shopping';
import React from 'react';


import DietPage from './pages/DietPage';
import BulkPage from './pages/BulkPage';
import KeepPage from './pages/KeepPage';


function App() {

  // const bulkUpData = {
  //   title: '벌크업',
  //   sidebarItems: ['다이어트', '체형유지'], // 사이드바에 다른 카테고리도 표시할 수 있습니다.
  //   gridItems: [
  //     { text: '벌크업 음식 1', image: 'path/to/bulkupl_food1.jpg' },
  //     { text: '벌크업 음식 2', image: 'path/to/bulkupl_food2.jpg' },
  //     // ... 더 많은 아이템
  //   ]
  // };

  // const dietData = {
  //   title: '다이어트',
  //   sidebarItems: ['벌크업', '체형유지'],
  //   gridItems: [
  //     { text: '다이어트 음식 1', image: 'path/to/diet_food1.jpg' },
  //     { text: '다이어트 음식 2', image: 'path/to/diet_food2.jpg' },
  //     // ... 더 많은 아이템
  //   ]
  // };

  // const maintainData = {
  //   title: '체형유지',
  //   sidebarItems: ['벌크업', '다이어트'],
  //   gridItems: [
  //     { text: '체형유지 음식 1', image: 'path/to/maintain_food1.jpg' },
  //     { text: '체형유지 음식 2', image: 'path/to/maintain_food2.jpg' },
  //     // ... 더 많은 아이템
  //   ]
  // };

  return (

    <div className='page-font'>
      <Routes>
        <Route path='/' element={<Introduce />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        {/* <Route path="/shopping" element={<Shopping />} /> */}
        <Route path="/bulkup" element={<BulkPage/>}/>
        <Route path="/diet" element={<DietPage/>}/>
        <Route path="/maintain" element={<KeepPage/>}/>
      </Routes>
    </div>

  );

}

export default App;