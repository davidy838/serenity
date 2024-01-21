import './App.css';
import React from 'react';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />


        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route exact path ='/recipes' element={<Recipes />} />




        </Routes>

      </Router>
    
    
    
    
    </>
  );
}

export default App;
