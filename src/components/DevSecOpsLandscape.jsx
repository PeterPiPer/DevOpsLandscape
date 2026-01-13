import React, { useState } from 'react';
import InfinitySymbol from './InfinitySymbol';
import StageSection from './StageSection';
import devSecOpsData from '../data/devsecops-data.json';
import './DevSecOpsLandscape.css';

const DevSecOpsLandscape = () => {
  const [activeStage, setActiveStage] = useState(null);

  const handleStageClick = (stageId) => {
    setActiveStage(activeStage === stageId ? null : stageId);
  };

  const handleOverlayClick = () => {
    setActiveStage(null);
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
        
        {devSecOpsData.stages.map((stage) => (
          <StageSection
            key={stage.id}
            stage={stage}
            isActive={activeStage === stage.id}
            onClick={() => handleStageClick(stage.id)}
          />
        ))}

        {activeStage && (
          <div className="overlay" onClick={handleOverlayClick} />
        )}
      </div>

      <footer className="landscape-footer">
        <p>Click on any stage to view tools and details</p>
      </footer>
    </div>
  );
};

export default DevSecOpsLandscape;
