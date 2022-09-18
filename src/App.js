import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsiteDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage'
import './App.css';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} /> 
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />}/>
          <Route path='directory/:campsiteId' element= {<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
