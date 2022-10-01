import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import { ApplicationContextProvider } from './Contexts/Context'; //provider 불러오기

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApplicationContextProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ApplicationContextProvider>
);

reportWebVitals();
