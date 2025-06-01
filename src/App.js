
import './App.css';
import Introduce from './introduce/Introduce';
import MainPage from './Start/main/MainPage'; // MainPage 컴포넌트 import
import MyPage from './mypage/MyPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  // return <MainPage />
  return (
    <Routes>
      <Route path='/' element={<Introduce />}></Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  )

}

export default App;