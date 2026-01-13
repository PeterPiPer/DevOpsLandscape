import React, { useState, useMemo } from 'react';
import InfinitySymbol from './InfinitySymbol';
import StageSection from './StageSection';
import devSecOpsData from '../data/devsecops-data.json';
import layoutConfig from '../data/layout-config.json';
import './DevSecOpsLandscape.css';

const DevSecOpsLandscape = () => {
  const [activeStage, setActiveStage] = useState(null);

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
        
        {stages.map((stage) => (
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
