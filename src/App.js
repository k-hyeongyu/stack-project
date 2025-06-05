
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Introduce from './introduce/Introduce';
import MainPage from './Start/main/MainPage'; // MainPage 컴포넌트 import
import MyPage from './mypage/MyPage';
import Login from './login/Login';
import SignUp from './login/SignUp';
import FindId from './login/FindId';
import FindPw from './login/FindPw';
import Shopping from './shopping/Shopping';

function App() {
  // return <MainPage />
  return (
    <div className='page-font'>
      <Routes>
        <Route path='/' element={<Introduce />}></Route>
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/shopping" element={<Shopping />} />

      </Routes>
    </div>
  )

}

export default App;