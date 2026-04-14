import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

import './assets/styles/reset.css';
import './assets/styles/variables.css';
import './assets/styles/base.css';
import './assets/styles/layout.css';
import './assets/styles/components.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);