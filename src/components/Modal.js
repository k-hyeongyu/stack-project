import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen || !videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} aria-label="닫기">
          ×
        </button>
        <div className="video-responsive-container">
          <iframe
            src={embedUrl}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;