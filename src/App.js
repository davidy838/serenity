import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Header = () => {
  return (
    <h1>Serenity</h1>
  )
}

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route exact path ='/' element={<Home />} />




        </Routes>

      </Router>
    
    
    
    
    </>
  );
}

export default App;
