import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Start/main/MainPage'; // MainPage 컴포넌트 import
import MyPage from './mypage/MyPage';
import Introduce from './introduce/Introduce';
import Login from './login/Login';
import SignUp from './login/SignUp';
import FindId from './login/FindId';
import FindPw from './login/FindPw';
// import Shopping from './shopping/Shopping';

function App() {

  return (

    <div>

      <Routes>

        <Route path='/' element={<Introduce />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage/*" element={<div className='appDiv'><MyPage /></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        {/* <Route path="/shopping" element={<Shopping />} /> */}

      </Routes>
    </div>


  );

}

export default App;