import React from 'react';
import Pagina404 from 'pages/Pagina404';
import Home from 'pages/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from 'components/Footer';

export default function AppRouter() {
  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
