import { useState } from 'react';
import './PageContent.css';
import VideoGrid from '../health-pages/VideoGrid';
import Modal from '../health-pages/Modal';
import Header from '../health-pages/Header';
import Sidebar from '../health-pages/Sidebar';
import Theme from '../health-pages/Theme';
import Footer from '../health-pages/Footer';
import AddView from '../health-pages/AddView'; 

const DietPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);//처음 보여줄 비디오 개수
  

  const dietVideos = [
    { id: 'v-1YO1RgDwM', title: '탄단지 식단 밸런스의 중요성' },
    { id: 'gMaB-fG4u4g', title: '초급자를 위한 20분 유산소' },
    { id: '34vahXaXSIM', title: '저탄고지' },
    { id: 'ub6cRhp2jnM', title: '초급용 식단짜기' },
    { id: 'bdLJOQfD8UE', title: '초간단 다이어트 식단' },
    { id: 'vK_HVnW-fHc', title: '현실적인 밀프랩' },
    { id: 'm3QLOhJG5YM', title: '일상속 식단' },
    { id: 'iNVzJ1NhyDo', title: '다이어트 식단 추천' },
    { id: '5jcFYMO_aiY', title: '간혈적 식단' },
    { id: 'eCpzOOhvY2k', title: '단백질 티어리스트' },
    { id: 'DQrsQiqphkg', title: '체중별 다이어트 방법' },
    { id: 'XRCibP2AlPM', title: '쿠팡 내돈내산 식단' },
    { id: 'RwCO4MvV-EM', title: '현실적인 다이어트 식단' },
    { id: '5jcFYMO_aiY', title: '먹어도 되는 일반식' },
    { id: 'yEQDR_QAZWw', title: '유지어터의 정석' },
    { id: 'OA7awLb2hjk', title: '요요없는 유지' },
    { id: 'rYaySqdbch8', title: '먹어도 되는 일반식' },
    { id: 'iNVzJ1NhyDo', title: '먹어도 되는 일반식' },
    { id: 'bdLJOQfD8UE', title: '먹어도 되는 일반식' },
    { id: 'XKzs-yRPJfA', title: '먹어도 되는 일반식' },
    { id: 'DQrsQiqphkg', title: '체중별 다이어트 방법' },
    { id: 'DK-l1TYirbs', title: '초보자루틴' },
    { id: 'at6dXmJtYfY', title: '하와이안포케 식단' },
    { id: 'khiCIQBxbkQ', title: '포케 실전레시피' },



    // { id: 'vK_HVnW-fHc', title: '먹어도 되는 일반식' },
    // { id: 'rYaySqdbch8', title: '먹어도 되는 일반식' },
    // { id: 'iNVzJ1NhyDo', title: '먹어도 되는 일반식' },
    // { id: '5jcFYMO_aiY', title: '먹어도 되는 일반식' },
    // { id: 'XKzs-yRPJfA', title: '먹어도 되는 일반식' },
    // { id: 'at6dXmJtYfY', title: '먹어도 되는 일반식' },



  ];
  ///DIt14OO0QgY 운동 - wXekeS7yoOw 식단영상
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

    const videosToShow = dietVideos.slice(0, visibleCount);


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
          <VideoGrid videos={videosToShow} onVideoSelect={handleVideoSelect} />
            {visibleCount < dietVideos.length && (
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

export default DietPage;