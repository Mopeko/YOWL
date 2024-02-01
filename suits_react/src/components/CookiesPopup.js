
import React, { useState } from 'react';
import './CookiesPopup.css';

 function Popup({trigger,closePopup,children}) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return trigger && !isChecked ?(
 
    <div className="popup">
      <div className="popup-inner">
      {children}
      <br></br> <br></br>
        <label>
          <input className='case'
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          /> 
          
          <span>
          I have read and accept the terms of use and privacy declaration.</span>
          <style>styles</style>
        </label>
        
      </div>
    </div>
    
 ) : null ;   
} 

const corps = () => {
  const styles = `
  .case {
    width: 30% ;
    height: 30%;
    background: grey;
    display :flex;
    margintop: 25%;
    `
  }

 
export default Popup ;
 
  
