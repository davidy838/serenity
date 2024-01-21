import React, { useState, useEffect } from 'react';
import "./Recipes.css"
import { Link } from 'react-router-dom';
function Surroundings() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerUp, setTimerUp] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showWow, setShowWow] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#DDFAC0');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleShowWow = () => {
    setShowWow(true);
  };

  useEffect(() => {
    let timerInterval;

    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            // Timer reached 00:00
            clearInterval(timerInterval);
            setIsTimerRunning(false);
            setTimerUp(true);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timerInterval); // Cleanup on component unmount

  }, [isTimerRunning, minutes, seconds]);

  const pad = (value) => (value < 10 ? `0${value}` : value);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const doneCleaning = () => {
    setMinutes(0);
    setSeconds(0);
    setIsTimerRunning(true);
  };

  return (
    <div style={{ backgroundColor, border: '1px solid #ccc', height: '100vh', overflow: 'hidden' }}>
    <div style={{ fontFamily: 'Rubik, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', margin: 0 }}>
    <div style={{ 
    padding: '50px', 
    backgroundColor: '#276E8E', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: '30px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' // Add this line for the shadow
}}>
        <div style={{ padding: '50px', backgroundColor: '#276E8E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '30px'}}>
        {!timerUp && (
            <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '36px', marginBottom: '40px', fontFamily: 'Rubik, sans-serif', color: 'white' }}>Your Surroundings</div>
            <div style={{ fontSize: '20px', marginBottom: '20px', fontFamily: 'Rubik, sans-serif', color: 'white' }}>Your working and living space plays a large role in your mental abilities.<br />If you feel like your space is cluttered, take a quick 10 minutes to tidy up!</div>
            <div style={{ fontSize: '48px', color: '#333', color: 'white' }}>{`${pad(minutes)}:${pad(seconds)}`}</div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginRight: '80px' }}>
                <button onClick={startTimer} style={{ marginRight: '10px', color: 'white', backgroundColor: 'green', border: 'none', padding: '10px', borderRadius: '10px' }}>Start</button>
                <button onClick={pauseTimer} style={{ marginRight: '10px', color: 'white', backgroundColor: 'green', border: 'none', padding: '10px', borderRadius: '10px' }}>Pause</button>
                <button onClick={doneCleaning} style={{ marginRight: '10px', color: 'white', backgroundColor: 'green', border: 'none', padding: '10px', borderRadius: '10px' }}>I'm done!</button>
            </div>
            </div>
        )}
        {timerUp && (
            <div style={{ textAlign: 'center' }}>
            {!showWow && <div style={{ fontSize: '24px', margin: '10px 0', color: 'white' }}>Great Job!</div>}
            {!showWow && <div style={{ fontSize: '12px', marginBottom: '20px', color: 'white' }}>What did you do?</div>}
            {!showWow && (
                <>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ fontSize: '16px', padding: '8px', marginBottom: '10px' }}
                />
                <br />
                {!showWow && <button onClick={handleShowWow} style={{ color: 'white', backgroundColor: 'green', border: 'none', padding: '10px' }}>Submit</button>}
                </>
            )}
            {showWow && <div style={{ fontSize: '18px', marginTop: '10px', color: 'white' }}>Wow! {inputValue} is some hard stuff. Well done.</div>}
            </div>
        )}
        </div>
        </div>
    </div>
    <div style={{ position: 'fixed', bottom: '50px', right: '50px', zIndex: '999' }}>
    
    </div>
    <Link to="/end">
        <button className="continueButton">Continue</button>
    </Link>
    </div>
    
  );
}

export default Surroundings;