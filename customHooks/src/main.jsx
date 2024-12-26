import { createRoot } from 'react-dom/client';
import React from 'react';
import './style.css';
import App from './App.jsx';


const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
