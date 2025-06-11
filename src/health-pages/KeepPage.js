import { useState } from 'react';
import './PageContent.css';
import VideoGrid from '../health-pages/VideoGrid';
import Modal from '../health-pages/Modal';
import Header from '../health-pages/Header';
import Sidebar from '../health-pages/Sidebar';
import Theme from '../health-pages/Theme';
import Footer from '../health-pages/Footer';

const KeepPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const keepVideos = [ // 실제 비디오 ID로 채워주세요
    { id: 'yEQDR_QAZWw', title: '유지어터의 정석' },
    { id: 'OA7awLb2hjk', title: '요요없는 유지' },
    { id: '4kMvAgHbZ-8', title: '일상생활유지' },
    { id: 'Kz0igobFLOM', title: '몸무게 유지하는 방법' },
    { id: 'DQrsQiqphkg', title: '체중별 다이어트 방법' },
    {
      id: 's9lg8Y4wMSU', title: '장기간 몸무게 유지 식습관', viewCount: '조회수 20만회',
      uploadDate: '1년 전'
    },
    { id: 'Jpo4qDGpwVU', title: '유지어터 Q&A ' },
    { id: 'ETG3XfDNz9M', title: '일반식으로 몸무게 유지하는 방법' },
    { id: 'ub6cRhp2jnM', title: '먹어도 되는 일반식' },
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
      <Header />
      <div className="page-content">
        <Sidebar />
        <div className='keep-content'>
          <Theme
            title="체형 유지"
            description={<>누구나 지칠 때가 있지만 멈추지 않는 사람이 결국 건강을 지킵니다.<br />
              쉬운 실천과 꾸준한 루틴으로 당신의 건강한 삶을 응원합니다.</>}
          />
          <VideoGrid videos={keepVideos} onVideoSelect={handleVideoSelect} />
          <Footer />
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


export default KeepPage;