import React from 'react';
import './ToolCard.css';

const ToolCard = ({ tool }) => {
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

  return (
    <div className="tool-card">
      <div className="tool-header">
        <h3 className="tool-name">{tool.name}</h3>
        <span 
          className="tool-state" 
          style={{ backgroundColor: getStateColor(tool.state) }}
        >
          {tool.state}
        </span>
      </div>
      
      <p className="tool-description">{tool.description}</p>
      
      <div className="tool-sentiment">
        <span className="sentiment-label">User Sentiment:</span>
        <div className="sentiment-rating">
          {renderStars(tool.sentiment)}
          <span className="sentiment-value">{tool.sentiment.toFixed(1)}/5.0</span>
        </div>
      </div>
      
      <div className="tool-slo">
        <h4>Service Level Objectives</h4>
        <div className="slo-item">
          <span className="slo-label">Availability:</span>
          <span className="slo-value">{tool.slo.availability}</span>
        </div>
        <div className="slo-item">
          <span className="slo-label">Response Time:</span>
          <span className="slo-value">{tool.slo.responseTime}</span>
        </div>
      </div>
      
      <a 
        href={tool.documentation} 
        target="_blank" 
        rel="noopener noreferrer"
        className="tool-docs-link"
      >
        📚 Documentation
      </a>
    </div>
  );
};

export default ToolCard;
