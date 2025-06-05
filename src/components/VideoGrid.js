import React from 'react';
import './VideoGrid.css';

const VideoGrid = ({ videos, onVideoSelect }) => {
  if (!videos || videos.length === 0) {
    return <p className="no-videos-message">표시할 동영상이 없습니다.</p>;
  }

  const displayVideos = videos.slice(0, 9);
  const placeholderCount = Math.max(0, 9 - displayVideos.length);

  return (
    <div className="video-grid-container">
      {displayVideos.map((video, index) => (
        <div
          key={video.id || index}
          className="video-item-wrapper clickable"
          onClick={() => {
            if (typeof onVideoSelect === 'function') {
              onVideoSelect(video.id);
            } else {
              console.error('[VideoGrid] onClick 에러: onVideoSelect가 함수가 아닙니다!');
            }
          }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && typeof onVideoSelect === 'function') {
              onVideoSelect(video.id);
            }
          }}
        >
          <div className="video-thumbnail-container">
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title || `Video ${index + 1}`}
              className="video-thumbnail-image"
              onError={(e) => {
                // 썸네일 로드 실패 시 다른 해상도로 시도
                if (e.target.src.includes('hqdefault')) {
                  e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                } else if (e.target.src.includes('mqdefault')) {
                  e.target.src = `https://img.youtube.com/vi/${video.id}/default.jpg`;
                } else {
                  // 모든 썸네일 로드 실패 시 기본 이미지 표시
                  e.target.style.display = 'none';
                  e.target.parentElement.style.backgroundColor = '#f0f0f0';
                  e.target.parentElement.innerHTML = `
                    <div style="
                      display: flex; 
                      align-items: center; 
                      justify-content: center; 
                      height: 100%; 
                      color: #666; 
                      font-size: 14px;
                      flex-direction: column;
                    ">
                      <div style="font-size: 24px; margin-bottom: 8px;">🎥</div>
                      <div>썸네일을 불러올 수 없습니다</div>
                    </div>
                  `;
                }
              }}
              onLoad={() => {
                console.log(`썸네일 로드 성공: ${video.id}`);
              }}
            />
            <div className="play-icon-overlay">
              <div className="play-button">
                <svg width="68" height="48" viewBox="0 0 68 48">
                  <path d="M19 15l27 9-27 9V15z" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>
          {video.title && <p className="video-item-title">{video.title}</p>}
        </div>
      ))}
      {Array.from({ length: placeholderCount }).map((_, i) => (
        <div key={`placeholder-${i}`} className="video-item-wrapper">
          <div className="video-item-placeholder"></div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;