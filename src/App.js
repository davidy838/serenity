import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = () => {
  return (
    <h1>Serenity</h1>
  )
}

function App() {
  return (
    <>
      <Router>
        <Header />


        <Routes>
          <Route exact path ='/' element={Home} />




        </Routes>

      </Router>
    
    
    
    
    </>
  );
}

export default App;
