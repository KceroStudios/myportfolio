
import './App.css';

import Header from './Components/Header';
import MainMenu from './Components/MainMenu';
import AboutMe from './Components/AboutMe';

import React, { useState, useRef } from 'react';

function App() {
  // the next function detect mouse position, and send to Header component
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // reset to x position, now 0 is the middle
  const containerRef = useRef(null);
  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (container) {
      const { left, top, width, height } = container.getBoundingClientRect();
      const offsetX = event.clientX - (left + width / 2);
      const offsetY = event.clientY - top;
      setMousePosition({ x: offsetX, y: offsetY });
    }
  };
  // change class to the photo in the header component
  const getPosition = () => {
    if (mousePosition.y <= 80 && Math.abs(mousePosition.x) <= 70) {
      return 'photo-n';
    } else if (mousePosition.y <= 80 && mousePosition.x < -70) {
      return 'photo-nw';
    } else if (mousePosition.y > 80 && mousePosition.y < 180 && mousePosition.x < -70) {
      return 'photo-w';
    } else if (mousePosition.y > 180 && mousePosition.x < -70) {
      return 'photo-ws';
    } else if (mousePosition.y >= 160 && Math.abs(mousePosition.x) <= 70) {
      return 'photo-s';
    } else if (mousePosition.y >= 160 && mousePosition.x > 70) {
      return 'photo-se';
    } else if (mousePosition.y > 80 && mousePosition.y < 180 && mousePosition.x > 70) {
      return 'photo-e';
    } else if (mousePosition.y > 70 && mousePosition.x > 80) {
      return 'photo-ne';
    }else{
      return '';
    }
  };

  return (
    <div className="App"  onMouseMove={handleMouseMove}  ref={containerRef}>
      <Header position={getPosition()} />
      <MainMenu />
      <AboutMe />
    </div>
  );
}

export default App;
