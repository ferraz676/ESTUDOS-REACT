
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/Home/App';
import Pokemon from './pages/pokemon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/pokemon' element={<Pokemon />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);