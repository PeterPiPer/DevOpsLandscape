import React from 'react';
import './ToolModal.css';

const ToolModal = ({ tool, stageColor, onClose }) => {
  if (!tool) return null;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  const getStateColor = (state) => {
    switch (state.toLowerCase()) {
      case 'production':
        return '#27ae60';
      case 'staging':
        return '#f39c12';
      case 'development':
        return '#3498db';
      default:
        return '#95a5a6';
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="tool-modal-overlay" onClick={handleOverlayClick}>
      <div className="tool-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        
        <div className="modal-header" style={{ borderTopColor: stageColor }}>
          <h2>{tool.name}</h2>
          <span 
            className="modal-state-badge" 
            style={{ backgroundColor: getStateColor(tool.state) }}
          >
            {tool.state}
          </span>
        </div>
        
        <div className="modal-content">
          <div className="modal-section">
            <h3>Description</h3>
            <p>{tool.description}</p>
          </div>
          
          <div className="modal-section">
            <h3>User Sentiment</h3>
            <div className="modal-sentiment">
              <div className="sentiment-stars">
                {renderStars(tool.sentiment)}
              </div>
              <span className="sentiment-score">{tool.sentiment.toFixed(1)}/5.0</span>
            </div>
          </div>
          
          <div className="modal-section">
            <h3>Service Level Objectives</h3>
            <div className="modal-slo">
              <div className="slo-row">
                <span className="slo-label">Availability:</span>
                <span className="slo-value">{tool.slo.availability}</span>
              </div>
              <div className="slo-row">
                <span className="slo-label">Response Time:</span>
                <span className="slo-value">{tool.slo.responseTime}</span>
              </div>
            </div>
          </div>
          
          <div className="modal-actions">
            <a 
              href={tool.documentation} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-docs-link"
            >
              📚 View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolModal;
