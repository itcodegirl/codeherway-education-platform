import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

import './styles/reset.css';
import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
