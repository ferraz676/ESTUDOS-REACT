
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/Home/App';
import Filmes from './pages/filmes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/filmes' element={<Filmes />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);