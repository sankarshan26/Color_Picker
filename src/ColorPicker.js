import React, { useState } from 'react';

const ColorPicker = ({ colors , handleBgchange , bgcol}) => {
    const [pick,setPick] = useState(false)
  return (
    <div className="color-picker">
     
        {
            pick && <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-square"
                style={bgcol===color ? {"background-color":color, }:{"background-color":color}}
              //   style={{ background: color }}
                onClick={() => {handleBgchange(color);
                setPick(false)}}
              ></div>
            ))}
          </div>
        }

        <button className='pick_col' onClick={()=>{
            setPick(!pick)
        }}>
            Pick a color
        </button>
      
    </div>
  );
};

export default ColorPicker;
