import React from 'react';
import ToolNode from './ToolNode';
import './StageSection.css';

const StageSection = ({ stage, isActive, onClick, onToolClick }) => {
  // Calculate radial positions for tools
  const calculateToolPositions = () => {
    const tools = stage.tools || [];
    const toolCount = tools.length;
    if (toolCount === 0) return [];
    
    const radius = 120; // Distance from stage center
    const angleStep = 360 / toolCount;
    const startAngle = -90; // Start from top
    
    return tools.map((tool, index) => ({
      tool,
      angle: startAngle + (angleStep * index),
      distance: radius,
    }));
  };

  const toolPositions = calculateToolPositions();

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
        <div className="tools-radial-container">
          {toolPositions.map((position, index) => (
            <ToolNode
              key={index}
              tool={position.tool}
              angle={position.angle}
              distance={position.distance}
              stageColor={stage.color}
              stageId={stage.id}
              onClick={onToolClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StageSection;
