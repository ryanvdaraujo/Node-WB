import React from 'react';
import reportWebVitals from './reportWebVitals.tsx';
import Roteador from './componentes/roteador.tsx';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

rootElement && createRoot(rootElement).render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>
);

reportWebVitals(console.log);