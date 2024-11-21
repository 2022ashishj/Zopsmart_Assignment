import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState('green');

  useEffect(() => {
    const colorSequence = [
      { color: 'green', duration: 3000 },
      { color: 'yellow', duration: 2000 },
      { color: 'red', duration: 5000 },
      { color: 'yellow', duration: 2000 }
    ];

    let currentIndex = 0;

    const changeColor = () => {
      currentIndex = (currentIndex + 1) % colorSequence.length;
      setActiveColor(colorSequence[currentIndex].color);
    };

    const timer = setInterval(changeColor, colorSequence[currentIndex].duration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`light green ${activeColor === 'green' ? 'active' : ''}`}></div>
        <div className={`light yellow ${activeColor === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light red ${activeColor === 'red' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default TrafficLight;