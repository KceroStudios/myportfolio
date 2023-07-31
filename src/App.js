
import './App.css';
import Header from './Components/Header';
import React, { useState, useRef } from 'react';

function App() {
  // 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

      <p>Posición del mouse:</p>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
}

export default App;
