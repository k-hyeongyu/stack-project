import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 전역 CSS나 폰트 임포트가 필요하면 여기에 추가
// 예: import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);