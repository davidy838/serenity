import React, { useState, useEffect } from 'react';
import './Home.css'; 
import {Link} from 'react-router-dom';

function End() {
    return (
      <div className="center-container"> {/* Apply the center-container class */}
        <h1>Wahoo! That’s all for now. Great job!</h1>
        <p>Thank you for taking the time to take care of yourself. Your body and mind appreciate it and we hope that you feel more serene.</p>
        <p>You are always welcome to come back to this tool when you are needing, or even using this as a preventative measure.</p>
  
        {/* Central Start Button as a Link */}
        <Link to="/">
          <button className="start">Play Again</button>
        </Link>
      </div>
    );
  }
  
  export default End;