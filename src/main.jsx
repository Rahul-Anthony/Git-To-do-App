import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Setting from './settings.jsx';
import { UserProvider } from './context.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App/>
    </UserProvider>
  </StrictMode>
);
