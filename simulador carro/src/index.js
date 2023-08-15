
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/Home/App';
import Carro from './pages/carro';
import Sorveteria from './pages/sorveteria';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/carro' element={<Carro />} />
        <Route path='/sorveteria' element={<Sorveteria />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);