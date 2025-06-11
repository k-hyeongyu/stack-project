import { useState } from 'react';
import './PageContent.css';
import VideoGrid from '../health-pages/VideoGrid';
import Modal from '../health-pages/Modal';
import Header from '../health-pages/Header';
import Sidebar from '../health-pages/Sidebar';
import Theme from '../health-pages/Theme';


const DietPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const dietVideos = [
    { id: 'v-1YO1RgDwM', title: '탄단지 식단 밸런스의 중요성' },
    { id: 'gMaB-fG4u4g', title: '초급자를 위한 20분 유산소' },
    { id: '34vahXaXSIM', title: '저탄고지' },
    { id: 'eCpzOOhvY2k', title: '단백질 티어리스트' },
    { id: 'DQrsQiqphkg', title: '체중별 다이어트 방법' },
    { id: 'XRCibP2AlPM', title: '쿠팡 내돈내산 식단' },
    { id: 'RwCO4MvV-EM', title: '현실적인 다이어트 식단' },
    { id: 'lFknqR3vOtI', title: '30kg 다이어트 비법' },
    { id: 'ub6cRhp2jnM', title: '초급용 식단짜기' },
  ];
  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  return (
    <div className="wrap page-font">
      <Header /> {/* 사이드바 렌더링 */}
      <div className="page-content">
        <Sidebar /> {/* 사이드바 렌더링 */}
        <div className='diet-content'>
          <Theme
            title="다이어트"
            description={<>다이어트는 몸을 억지로 바꾸는 일이 아니라 나를 아끼는 과정입니다.<br />
              꾸준히 당신의 건강한 선택을 응원합니다.</>}
          />
          <VideoGrid videos={dietVideos} onVideoSelect={handleVideoSelect} />
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoId={selectedVideoId}
        />
      </div>
    </div>
  );
};

export default DietPage;