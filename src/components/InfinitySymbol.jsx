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
        
        {/* Infinity symbol path - symmetric figure 8 on its side */}
        <path
          d="M 55 75
             C 55 50, 70 30, 85 30
             C 100 30, 115 50, 115 75
             C 115 100, 100 120, 85 120
             C 70 120, 55 100, 55 75
             Z
             M 85 75
             C 85 50, 100 30, 115 30
             C 130 30, 145 50, 145 75
             C 145 100, 130 120, 115 120
             C 100 120, 85 100, 85 75
             Z"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
        
        {/* Animated flowing line */}
        <path
          d="M 55 75
             C 55 50, 70 30, 85 30
             C 100 30, 115 50, 115 75
             C 115 100, 100 120, 85 120
             C 70 120, 55 100, 55 75
             Z
             M 85 75
             C 85 50, 100 30, 115 30
             C 130 30, 145 50, 145 75
             C 145 100, 130 120, 115 120
             C 100 120, 85 100, 85 75
             Z"
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
