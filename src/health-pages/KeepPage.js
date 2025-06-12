import { useState } from 'react';
import './PageContent.css';
import VideoGrid from '../health-pages/VideoGrid';
import Modal from '../health-pages/Modal';
import Header from '../health-pages/Header';
import Sidebar from '../health-pages/Sidebar';
import Theme from '../health-pages/Theme';
import AddView from '../health-pages/AddView'; 
import Footer from '../health-pages/Footer';

const KeepPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);//처음 보여줄 비디오 개수
  
  const keepVideos = [
    { id: 'XKzs-yRPJfA', title: '다이소 다이어트 밀프랩' },
    { id: 'rYaySqdbch8', title: '다이어트 포케' },
    { id: 'OA7awLb2hjk', title: '요요없는 유지' },
    { id: 'khiCIQBxbkQ', title: '포케 실전레시피' },
    { id: 'bdLJOQfD8UE', title: '불없는 식단' },
    { id: 'vK_HVnW-fHc', title: '현실적인 일반식' },
    { id: 'Jpo4qDGpwVU', title: '유지어터 Q&A ' },
    { id: '4kMvAgHbZ-8', title: '일상생활유지' },
    { id: 'E_WBjEFXzKU', title: '홈트 간단하게 2km' },
    { id: 's9lg8Y4wMSU', title: '장기간 몸무게 유지 식습관'},
    { id: 'yEQDR_QAZWw', title: '유지어터의 정석' },
    { id: 'CYcLODSeC-c', title: '층간소음없는 홈트' },
    { id: 'Kz0igobFLOM', title: '몸무게 유지하는 방법' },
    { id: 'DQrsQiqphkg', title: '체중별 다이어트 방법' },
    { id: 'bdLJOQfD8UE', title: '먹어도 되는 일반식' },
    { id: 'ETG3XfDNz9M', title: '일반식으로 몸무게 유지하는 방법' },
    { id: 'XKzs-yRPJfA', title: '다이소 밀프랩루틴' },
    { id: 'ub6cRhp2jnM', title: '먹어도 되는 일반식' },

  ];
  //DIt14OO0QgY 운동 - wXekeS7yoOw 식단영상

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

    const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);//-- +n 더보기 누르시 영상추가개수
  };
  
    const videosToShow = keepVideos.slice(0, visibleCount);

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
          <VideoGrid videos={videosToShow} onVideoSelect={handleVideoSelect} />
          {visibleCount < keepVideos.length && (
            <div className="load-more-container">
                <AddView onClick={handleLoadMore} className="add-view" />
                    
                
            </div>
            )}
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