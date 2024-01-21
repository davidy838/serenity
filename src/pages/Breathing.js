import './Breathing.css'
import React, { useState, useRef } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

function Breathing () {
    const [size, setSize] = useState(50)
    const [growing, setGrowing] = useState(true);
    const animationRef = useRef(null)
    const maxSize = 250;
    const minSize = 100;
    const color = '#276E8E';

    function mousedown(e) {
        animationRef.current = requestAnimationFrame(whilemousedown)
    }

    function mouseup(e) {
        cancelAnimationFrame(animationRef.current)
    }

    function whilemousedown() {
        setSize((prevSize) => {
            let newSize;
        
            if (growing) {
                newSize = prevSize + 0.75;
            } else {
                newSize = prevSize - 0.75;
            }
        
            if (newSize >= maxSize || newSize <= minSize) {
                setGrowing(!growing);
            }
        
            return newSize;
          });

        animationRef.current = requestAnimationFrame(whilemousedown);
      }

    return (
        <div className='breathe'>
            <p>Guided Breathing: Press down to breathe and press again to exhale. no pressure! control your own breathing</p>
            <button onMouseDown={mousedown} onMouseUp={mouseup}>breathe</button>
            <Stage width={window.innerWidth} height={window.innerHeight} style={{ margin: 0 }}>
                <Layer>
                    <Circle x={window.innerWidth / 2} y={window.innerHeight / 2} radius={size} fill={color} />
                </Layer>
            </Stage>
        </div>
    );
}

export default Breathing;