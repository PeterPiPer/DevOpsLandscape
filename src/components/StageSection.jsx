import React from 'react';
import ToolCard from './ToolCard';
import './StageSection.css';

const StageSection = ({ stage, isActive, onClick }) => {
  return (
    <div 
      className={`stage-section ${isActive ? 'active' : ''}`}
      style={{
        left: `${stage.position.x}%`,
        top: `${stage.position.y}%`,
      }}
      onClick={onClick}
    >
      <div 
        className="stage-marker"
        style={{ backgroundColor: stage.color }}
      >
        <span className="stage-name">{stage.name}</span>
      </div>
      
      {isActive && (
        <div className="stage-details">
          <div className="stage-info">
            <h2>{stage.name}</h2>
            <p className="stage-description">{stage.description}</p>
          </div>
          <div className="tools-list">
            <h3>Tools & Services</h3>
            {stage.tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StageSection;
