import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import '@fortawesome/fontawesome-free/css/all.min.css';


// Chart.js 관련 필수 임포트 및 등록
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // 막대 그래프를 사용할 것이므로 BarElement 추가
  Title,
  Tooltip,
  Legend,
  ArcElement, // 필요하다면 추가 (예: 파이 차트)
} from 'chart.js';
import { BrowserRouter } from 'react-router';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // 막대 그래프를 위해 등록
  Title,
  Tooltip,
  Legend,
  ArcElement // 필요하다면 등록
);
// 전역 CSS나 폰트 임포트가 필요하면 여기에 추가
// 예: import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);