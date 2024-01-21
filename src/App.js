import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Surroundings from './components/Surroundings';

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route exact path ='/' element={<Surroundings />} />
          

        </Routes>

      </Router>
    
    
    
    
    </>
  );
}

export default App;
