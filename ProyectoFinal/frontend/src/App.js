import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ComicsPage from './pages/ComicsPage';
import ContactoPage from './pages/ContactoPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

