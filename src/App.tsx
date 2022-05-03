import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import Pagina404 from 'pages/Pagina404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Pagina404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
