# Node Flow Automation Tool

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://node-flow-automation-tool-8y91.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React_|_React_Flow_|_Redux_|_MUI-blue?style=for-the-badge)](https://github.com/Abhishek-Gharat/Node-Flow-Automation-Tool)

An interactive, drag-and-drop workflow diagram builder built with React, React Flow Renderer, Redux, and Dagre auto-layout.

---

## Key Features

- **Interactive Node Canvas**: Drag, drop, connect, and configure custom workflow nodes using `react-flow-renderer`.
- **Automated Layouts**: Hierarchical node ordering and directed acyclic graph (DAG) alignment powered by **Dagre**.
- **State Management**: Centralized application and graph state managed with **Redux** and **Redux Thunk**.
- **Visual Customization**: Styled with Material-UI (`@mui/material`), Tailwind CSS, and custom resizable panels.
- **Export Capabilities**: Visual flow export to image using `html-to-image`.

---

## Tech Stack

- **Frontend**: React 18, React Router 6, Tailwind CSS
- **Flow Engine**: `react-flow-renderer`, `dagre`
- **State**: Redux, Redux Thunk
- **UI Components**: Material UI (@mui/material, @mui/icons-material), React Resizable, React Icons

---

## Getting Started

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation & Run
```bash
# Clone the repository
git clone https://github.com/Abhishek-Gharat/Node-Flow-Automation-Tool.git
cd Node-Flow-Automation-Tool

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Live Demo
Test the live interactive canvas deployed at:
[https://node-flow-automation-tool-8y91.vercel.app](https://node-flow-automation-tool-8y91.vercel.app)
