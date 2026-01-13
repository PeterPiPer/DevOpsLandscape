import React from 'react';
import './InfinitySymbol.css';

const InfinitySymbol = () => {
  return (
    <div className="infinity-container">
      <svg
        className="infinity-svg"
        viewBox="0 0 200 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the infinity symbol path */}
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: '#e74c3c', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#9b59b6', stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: '#f39c12', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#27ae60', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Infinity symbol path - figure 8 on its side */}
        <path
          d="M 30 75 
             C 30 50, 45 35, 60 35
             C 75 35, 85 50, 85 62.5
             C 85 75, 75 90, 60 90
             C 45 90, 30 100, 30 75
             
             M 85 62.5
             C 85 50, 95 35, 110 35
             C 125 35, 140 50, 140 62.5
             C 140 75, 125 90, 110 90
             C 95 90, 85 75, 85 62.5"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
        
        {/* Animated flowing line */}
        <path
          d="M 30 75 
             C 30 50, 45 35, 60 35
             C 75 35, 85 50, 85 62.5
             C 85 75, 75 90, 60 90
             C 45 90, 30 100, 30 75
             
             M 85 62.5
             C 85 50, 95 35, 110 35
             C 125 35, 140 50, 140 62.5
             C 140 75, 125 90, 110 90
             C 95 90, 85 75, 85 62.5"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="infinity-flow"
        />
      </svg>
    </div>
  );
};

export default InfinitySymbol;
