import './App.css';
import React from 'react';
import Home from './pages/Home';
import Breathing from './pages/Breathing';
import { useLocation } from 'react-router-dom';

import Recipes from './pages/Recipes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Surroundings from './pages/Surroundings';
import End from './pages/End';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Router>
        <Header />
        <div className="app-container" style={{ backgroundColor: '#90EE90' }}>

        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route exact path ='/breathing' element={<Breathing />}  />
          <Route exact path ='/recipes' element={<Recipes />} />
          <Route exact path ='/surroundings' element={<Surroundings />} />
          <Route exact path ='/end' element={<End />} />







        </Routes>
        </div>
        <Footer />

      </Router>
    
    
    
    
    </>
  );
}

export default App;
