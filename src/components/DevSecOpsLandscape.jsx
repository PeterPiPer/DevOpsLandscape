import React, { useState, useMemo } from 'react';
import InfinitySymbol from './InfinitySymbol';
import StageSection from './StageSection';
import ToolModal from './ToolModal';
import devSecOpsData from '../data/devsecops-data.json';
import layoutConfig from '../data/layout-config.json';
import './DevSecOpsLandscape.css';

const DevSecOpsLandscape = () => {
  const [activeStage, setActiveStage] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedStageColor, setSelectedStageColor] = useState(null);

  // Merge stage data with layout configuration
  const stages = useMemo(() => {
    return devSecOpsData.stages.map(stage => {
      const layout = layoutConfig.stages.find(l => l.id === stage.id);
      return {
        ...stage,
        position: layout ? layout.position : { x: 50, y: 50 }
      };
    });
  }, []);

  const handleStageClick = (stageId) => {
    setActiveStage(activeStage === stageId ? null : stageId);
    setSelectedTool(null); // Close modal when switching stages
  };

  const handleOverlayClick = () => {
    setActiveStage(null);
    setSelectedTool(null);
  };

  const handleToolClick = (tool, stageColor) => {
    setSelectedTool(tool);
    setSelectedStageColor(stageColor);
  };

  const handleModalClose = () => {
    setSelectedTool(null);
  };

  return (
    <div className="devsecops-landscape">
      <header className="landscape-header">
        <h1>DevSecOps Landscape</h1>
        <p className="landscape-subtitle">
          Explore tools, technologies, and best practices across the DevSecOps lifecycle
        </p>
      </header>

      <div className="landscape-container">
        <InfinitySymbol />
        
        {stages.map((stage) => (
          <StageSection
            key={stage.id}
            stage={stage}
            isActive={activeStage === stage.id}
            onClick={() => handleStageClick(stage.id)}
            onToolClick={(tool) => handleToolClick(tool, stage.color)}
          />
        ))}

        {activeStage && !selectedTool && (
          <div className="overlay" onClick={handleOverlayClick} />
        )}
      </div>

      <footer className="landscape-footer">
        <p>Click on any stage to view tools • Click on a tool for details</p>
      </footer>

      {selectedTool && (
        <ToolModal 
          tool={selectedTool}
          stageColor={selectedStageColor}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default DevSecOpsLandscape;
