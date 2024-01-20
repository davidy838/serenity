import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path ='/' element={<Home />} />




        </Routes>

      </Router>
    
    
    
    
    </>
  );
}

export default App;
