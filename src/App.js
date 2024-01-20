import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>


        <Routes>
          <Route exact path ='/' element={Home} />



        </Routes>

      </Router>
    
    
    
    
    </>
  );
}

export default App;
