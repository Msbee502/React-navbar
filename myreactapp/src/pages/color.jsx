import { useState } from 'react';
import '../styles/color.css';

function ColorPicker() {

  const [color, setColor] = useState('#ffffff');  // This holds the selected color. Default is white


  const handleColorChange = (event) => { //Handles color change using the onChange event
    setColor(event.target.value);
  };

  return (
    <div className="colorContainer">
      <div>
      <h1>Choose a color</h1>
      <br />

      {/* This is the color input for the user. User clicks on it and a bigger square with colorpicking pallet appears. */}
      </div>
      <div className="formInput">
      
      <input type="color" value={color} onChange={handleColorChange} 
      /> <br />
      <label className="label"> Click the button to choose a color</label>
      </div>

      {/* Displayes the color */}
      <div className="colorPreview" 
        style={{
          backgroundColor: color,
           }}
      >
        
        <p className="p"> Selected Color </p>
        </div>
    </div>
  );
}


export default ColorPicker;
