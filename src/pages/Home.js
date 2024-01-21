import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import your CSS file

function Home() {
  return (
    <div className="center-container"> {/* Apply the center-container class */}
      <h1>Destress with Serenity</h1>
      <p>Click the button to start!</p>

      {/* Central Start Button as a Link */}
      <Link to="/recipes">
        <button className="start" style={{ backgroundColor: '#4CAF50', color: 'white' }}>Start</button>
      </Link>
    </div>
  );
}

export default Home;