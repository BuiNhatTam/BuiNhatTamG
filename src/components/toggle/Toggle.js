import React, { useState } from 'react';
import './Togglestyle.css';
function Toggle () {
  const array = useState(false);
  console.log(array);
  const [isOn, setIsOn] = useState(false);
  console.log(isOn);
  const handleToggle = () => {
    setIsOn((isOn) => { 
      return !isOn;
    });
  };
  return (
    <div>
      <div className={`toggle ${isOn ? 'active' : '' }`} onClick={handleToggle}>
        <div className={`spinner ${isOn ? 'active' : ''}` }></div>
      </div>
      {/* {isOn ? "The button is on" : "The button is off"}
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setIsOn(true)}>On</div>
        <div className="toggle-off" onClick={()=> setIsOn(false)}>Off</div>
      </div> */}
    </div>
  );
}
export default Toggle; 
