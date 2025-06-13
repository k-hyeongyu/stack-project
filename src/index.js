import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);