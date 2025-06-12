import React, { useState } from 'react';
import './PageContent.css';
import VideoGrid from '../health-pages/VideoGrid';
import Modal from '../health-pages/Modal';
import Header from '../health-pages/Header';
import Sidebar from '../health-pages/Sidebar';
import Theme from '../health-pages/Theme';
import AddView from '../health-pages/AddView'; 
import Footer from '../health-pages/Footer';

const BulkPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);//처음 보여줄 비디오 개수

  const bulkVideos = [
    { id: 'iFLEWn7l-BE', title: '남자 벌크업 식단' },
    { id: 'SgSog6JDSfc', title: '헬스업계 신성 샘술렉 식단'},
    { id: 'QCrsY_Hd_sQ', title: '남궁민의 벌크업 식단' },
    { id: '7KexdWwHIig', title: '벌크업 운동순서' },
    { id: 'DK-l1TYirbs', title: '초보자 벌크업' },
    { id: 'MJsb2rQLeTg', title: '마싸딕의 벌크업 루틴' },
    { id: 'ZjXp9b1ZbqA', title: '샤레레 자세를 잡아보자' },
    { id: '8Yjc7gmbagE', title: '전문 프로바디빌더 닉워커 식단' },
    { id: 'NRkroeUrpaQ', title: '클린 벌크업의 조건' },//
    { id: '3DWIYbtV2wE', title: '벌크업 근육량의 중요성' },
    { id: 'uH_fri6WC5I', title: '펌핑이 안되는 사람이 봐야하는 식단' },
    { id: 't6DzxVLQUPw', title: '벌크업 전용루틴' },
    { id: '-J0kepS7cGo', title: '란매스업 식단' },
    { id: 'c9V2hRjzIuA', title: '등근육 자세바로잡기 상급' },
    { id: 'gWQ0UmxnxRE', title: '효율적인 벌크업 꿀팁' },
    { id: 'p4LVfPHTVNo', title: '프로가 알려주는 벌크업' },
    { id: 'FyrKs6NjxKw', title: '팔사이즈 펌핑방법' },
    { id: 'RMBAhdGs6Vk', title: '프레임 확장 운동 티어리스트' },
    { id: 'gWQ0UmxnxRE', title: '프로선수의 벌크업 꿀팁' },
    { id: 'at6dXmJtYfY', title: '먹어도 되는 일반식' },
    { id: 'gWQ0UmxnxRE', title: '벌크업 하드루틴' },
    

  ];
//iFLEWn7l-BE
//QCrsY_Hd_sQ
// uH_fri6WC5I
// -J0kepS7cGo
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

    const videosToShow = bulkVideos.slice(0, visibleCount);

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
          <VideoGrid videos={videosToShow} onVideoSelect={handleVideoSelect} />
          {visibleCount < bulkVideos.length && (
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

export default BulkPage;