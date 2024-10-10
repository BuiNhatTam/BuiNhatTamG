import React, { useState } from 'react';

function Toggle () {
  const array = useState(false);
  console.log(array);
  const [isOn, setIsOn] = useState(false);
  console.log(isOn, setIsOn);
  return (
    <div className='toggle'>
      </div>
  );
}
export default Toggle;