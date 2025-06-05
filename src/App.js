import React from 'react';
import { BrowserRouter, Routes, Route, Navigate }
from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import DietPage from './pages/DietPage';
import BulkPage from './pages/BulkPage';
import KeepPage from './pages/KeepPage';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <main className="app-main-content-area">
            <Routes>
              <Route path="/" element={<Navigate replace to="/diet" />} />
              <Route path="/diet" element={<DietPage />} />
              <Route path="/keep" element={<KeepPage />} />
              <Route path="/bulk" element={<BulkPage />} />
              <Route path="*" element={<div style={{ padding: '40px', textAlign: 'center', fontSize: '1.2em' }}>404 - 페이지를 찾을 수 없습니다.</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;