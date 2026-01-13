# DevSecOps Landscape

An interactive visualization of the DevSecOps lifecycle, presenting tools and technologies arranged in the familiar DevSecOps infinity symbol.

## Overview

This React application provides a comprehensive view of the DevSecOps landscape, organizing tools and services across the different stages of the DevSecOps cycle:

- **Plan**: Planning and requirements gathering
- **Code**: Development and version control
- **Build**: Continuous integration and build automation
- **Test**: Automated testing and quality assurance
- **Security**: Security scanning and vulnerability assessment
- **Deploy**: Deployment and release management
- **Operate**: Operations and infrastructure management
- **Monitor**: Monitoring, logging, and observability

## Features

- **Interactive Infinity Symbol**: Visual representation of the continuous DevSecOps cycle
- **Stage Details**: Click on any stage to view associated tools and information
- **Tool Information**: Each tool includes:
  - Documentation links
  - Current tool/environment state
  - User sentiment ratings
  - Service Level Objectives (SLOs)
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with React and Vite for fast performance

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PeterPiPer/DevOpsLandscape.git
cd DevOpsLandscape
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
DevOpsLandscape/
├── src/
│   ├── components/          # React components
│   │   ├── DevSecOpsLandscape.jsx
│   │   ├── InfinitySymbol.jsx
│   │   ├── StageSection.jsx
│   │   └── ToolCard.jsx
│   ├── data/               # JSON data files
│   │   └── devsecops-data.json
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Data Structure

Tool and stage information is stored in `src/data/devsecops-data.json`. Each stage contains:

- `id`: Unique identifier
- `name`: Stage name
- `description`: Stage description
- `position`: X/Y coordinates for placement on the infinity symbol
- `color`: Stage color
- `tools`: Array of tools with their metadata

## Customization

To add or modify tools and stages, edit the `src/data/devsecops-data.json` file following the existing schema.

## Technologies

- React 19.2
- Vite 7.2
- CSS3 with animations
- SVG for graphics

## License

This project is open source and available under the MIT License.

