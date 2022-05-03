import React from 'react';
import Pagina404 from 'pages/Pagina404';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Pagina404/>} />
      </Routes>
    </BrowserRouter>
  );
}
