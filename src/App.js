import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['#fd5c63', '#FBCEB1', '#DE3163', '#66FF00','#DDA0DD','#720e9e','#FFD700','#FFC0CB',"#FF69B4","#F0E68C","#E9967A","#FF00BF","#eec0c8","#FEBE10",
"#EE82EE","#800080","#E6E6FA","#4B0082"];
  const [bgcol, setbgcol]=useState('#fd5c63');
  function handleBgchange(col){
    setbgcol(col);
  }
  return (
    <div className="App" style={{"background-color":`${bgcol}`}}>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} handleBgchange={handleBgchange} bgcol={bgcol}/>
    </div>
  );
}

export default App;

