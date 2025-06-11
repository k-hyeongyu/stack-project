import './VideoGrid.css';

const VideoGrid = ({ videos, onVideoSelect }) => {

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
            />
            <div className="play-icon-overlay">
              <div className="play-button">
                <svg width="68" height="48" viewBox="0 0 68 48">
                  <path d="M19 15l27 9-27 9V15z" fill="#fff" />
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