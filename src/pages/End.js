import React, { useState, useEffect } from 'react';
import './Home.css'; 
import {Link} from 'react-router-dom';

function End() {
    return (
      <div className="center-container"> {/* Apply the center-container class */}
        <h1>Thank you for destressing with Serenity</h1>
        <p>Click the button to restart!</p>
  
        {/* Central Start Button as a Link */}
        <Link to="/">
          <button className="start" style={{ backgroundColor: '#4CAF50', color: 'white' }}>Play Again</button>
        </Link>
      </div>
    );
  }
  
  export default End;