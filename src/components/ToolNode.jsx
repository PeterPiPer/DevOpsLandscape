import React, { useState } from 'react';
import './ToolNode.css';

const ToolNode = ({ tool, angle, distance, stageColor, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Calculate position based on angle and distance
  const x = Math.cos(angle * Math.PI / 180) * distance;
  const y = Math.sin(angle * Math.PI / 180) * distance;

  const handleClick = (e) => {
    e.stopPropagation();
    onClick(tool);
  };

  return (
    <div
      className="tool-node"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        borderColor: stageColor,
      }}
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="tool-node-inner" style={{ backgroundColor: stageColor }}>
        <span className="tool-node-icon">🔧</span>
      </div>
      
      {showTooltip && (
        <div className="tool-tooltip">
          {tool.name}
        </div>
      )}
    </div>
  );
};

export default ToolNode;
