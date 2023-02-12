import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootNode = document.querySelector('#root');
if (rootNode) {
  createRoot(rootNode).render(<App />);
}
