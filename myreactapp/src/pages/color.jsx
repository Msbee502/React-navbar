import { useState } from "react";
import "../styles/color.css";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff"); // This holds the selected color. Default is white

 
  const handleColorChange = (event) => { //Handles color change using the onChange event
    setColor(event.target.value);
  };

  
  const handleResetColor = () => {//Handels resetting the color to white
    setColor("#ffffff");
  };

  return (
    <div className="page">
      <div className="colorContainer">
        <div>
          <h2 className="choose">Choose a color</h2>
          
        </div>

        <div className="formInput">
          <input type="color" className="colorInput" value={color} onChange={handleColorChange} />
          <br />
          <label className="label">Click the button to choose a color</label>
        </div>

        
        <div className="colorPreview" style={{ backgroundColor: color }}>
          <p className="p">Selected Color</p>
        </div>

        {/* Reset button */}
        <div>
          <button className="resetButton" onClick={handleResetColor}>Reset to White</button>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;

// import { useState } from 'react';
// import '../styles/color.css';

// function ColorPicker() {

//   const [color, setColor] = useState('#ffffff');  // This holds the selected color. Default is white

//   const handleColorChange = (event) => { //Handles color change using the onChange event
//     setColor(event.target.value);
//   };

//   return (
//     <div className="page">
//     <div className="colorContainer">
//       <div>
//       <h1>Choose a color</h1>
//       <br />

//       {/* This is the color input for the user. User clicks on it and a bigger square with colorpicking pallet appears. */}
//       </div>
//       <div className="formInput">

//       <input type="color" value={color} onChange={handleColorChange}
//       /> <br />
//       <label className="label"> Click the button to choose a color</label>
//       </div>

//       {/* Displayes the color */}
//       <div className="colorPreview"
//         style={{
//           backgroundColor: color,
//            }}
//       >

//         <p className="p"> Selected Color </p>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default ColorPicker;
