import './App.css';
import React from 'react';
import Home from './pages/Home';
import Breathing from './pages/Breathing';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route exact path ='/breathing' element={<Breathing />} />




        </Routes>

      </Router>
    
    
    
    
    </>
  );
}

export default App;
