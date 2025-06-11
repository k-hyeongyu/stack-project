import React, { useState } from 'react';
import './PageContent.css';
import VideoGrid from '../health-pages/VideoGrid';
import Modal from '../health-pages/Modal';
import Header from '../health-pages/Header';
import Sidebar from '../health-pages/Sidebar';
import Theme from '../health-pages/Theme';
import Footer from '../health-pages/Footer';

const BulkPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const bulkVideos = [
    { id: '7KexdWwHIig', title: '벌크업 운동순서' },
    { id: 'p4LVfPHTVNo', title: '프로가 알려주는 벌크업' },
    { id: 'DK-l1TYirbs', title: '초보자 벌크업' },
    { id: 'MJsb2rQLeTg', title: '마싸딕의 벌크업 루틴' },
    { id: '3DWIYbtV2wE', title: '벌크업 근육량의 중요성' },
    { id: 'RMBAhdGs6Vk', title: '프레임 확장 운동 티어리스트' },
    { id: 't6DzxVLQUPw', title: '벌크업 전용루틴' },
    { id: 'gWQ0UmxnxRE', title: '프로선수의 벌크업 꿀팁' },
    { id: 'NRkroeUrpaQ', title: '클린 벌크업의 조건' },
    
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
        <div className='bulk-content'>
          <Theme
            title="벌크업"
            description={<>근육을 키우고 싶은가요?<br />
              벌크업은 식단과 운동을 병행해 체격을 키우는 핵심 전략입니다.<br />
              이곳에서 당신의 벌크업 여정을 시작해보세요!
            </>}
          />
          <VideoGrid videos={bulkVideos} onVideoSelect={handleVideoSelect} />
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

export default BulkPage;