import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import your CSS file

function Home() {
  return (
    <div className="center-container"> {/* Apply the center-container class */}
      <h1>Destress with Serenity</h1>
      <h3>Sometimes, taking care of ourselves is hard.</h3>
      <h3>Serenity is a step-by-step guide to help you when self-care feels overwhelming. </h3>
      <h3>We invite you to walk through the activities at your own pace, or click 'Next' if that need is satisfied!</h3>

      {/* Central Start Button as a Link */}
      <Link to="/recipes">
        <button className="start">Click to begin</button>
      </Link>
    </div>
  );
}

export default Home;