import React, { useState } from 'react';
import VideoGrid from '../components/VideoGrid';
import './PageContent.css';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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
    <div className="wrap">
      <Header /> 
      <div className="page-content">
        <Sidebar /> 
        <h2 className="page-main-title">체중증가 관련 동영상</h2>
        <VideoGrid videos={bulkVideos} onVideoSelect={handleVideoSelect} />
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