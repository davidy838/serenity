import './App.css';
import React from 'react';
import Home from './pages/Home';
import Breathing from './pages/Breathing';

import Recipes from './pages/Recipes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />


        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route exact path ='/breathing' element={<Breathing />}  />
          <Route exact path ='/recipes' element={<Recipes />} />





        </Routes>
        <Footer />

      </Router>
    
    
    
    
    </>
  );
}

export default App;
