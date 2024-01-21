import './Breathing.css'
import React, { useState, useRef } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

function Breathing () {
    const [size, setSize] = useState(50)
    const animationRef = useRef(null)
    const maxSize = 250;
    const color = '#276E8E';

    function mousedown(e) {
        animationRef.current = requestAnimationFrame(whilemousedown)
    }

    function mouseup(e) {
        cancelAnimationFrame(animationRef.current)
    }

    function whilemousedown() {
        setSize((prevSize) => {
          const newSize = prevSize + 1;
          if (newSize >= maxSize) {
            cancelAnimationFrame(animationRef.current);
            return maxSize;
          }
          return newSize;
        });
        animationRef.current = requestAnimationFrame(whilemousedown);
      }

    return (
        <div className='breathe'>
            <button onMouseDown={mousedown} onMouseUp={mouseup}>breathe</button>

            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Circle x={window.innerWidth / 2} y={window.innerHeight / 2} radius={size} fill={color} />
                </Layer>
            </Stage>
        </div>
    );
}

export default Breathing;

// class Breathing extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             zoom: 1
//         };

//         this.t = undefined;
//         this.start = 100;
  
//         this.onMouseDown = this.onMouseDown.bind(this);
//         this.repeat = this.repeat.bind(this);
//         this.zoom = this.zoom.bind(this);
  
//         // this.zoomOut = this.zoomOut.bind(this);
//         // this.zoomOutRepeat = this.zoomOutRepeat.bind(this);
//         // this.zoomOutDown = this.zoomOutDown.bind(this);
    
//         this.onMouseUp = this.onMouseUp.bind(this);
//     }
  
//     onMouseDown() {
//         this.repeat();
//     }
  
//     repeat() {
//         this.zoom();
//         this.t = setTimeout(this.repeat, this.start);
//         this.start = this.start / 2;
//     }
  
//     zoom() {

//         this.setState({ zoom: this.state.zoom + 0.05 });
//     }
  
//     // zoomOut() {
//     //     this.setState({ zoom: this.state.zoom - 0.05 });
//     // }
  
//     // zoomOutRepeat() {
//     //     this.zoomOut();
//     //     this.t = setTimeout(this.zoomOutRepeat, this.start);
//     //     this.start = this.start / 2;
//     // }
  
//     // zoomOutDown(e) {
//     //     e.preventDefault();
//     //     this.zoomOutRepeat();
//     // }
  
//     onMouseUp() {
//         clearTimeout(this.t);
//         this.start = 100;
//     }
  
//     render() {
//         return (
//             <div className="breathe">
//             <div
//                 className="zoom"
//                 style={{ transform: "scale(" + this.state.zoom + ")" }}
//             />
//             <button className="zoomIn" onMouseUp={this.onMouseUp} onMouseDown={this.onMouseDown}>
//                 breathe
//             </button>
//             </div>
//         );
//     }
//   }
  
// export default Breathing;