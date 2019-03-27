import React from 'react';
import './Button.css';


function NumberButton(props) {
    console.log(props.studentProp);
    return (
        <button className={`${props.buttonStyle} numButton`}>{props.text}</button>
    );
  }
  
  export default NumberButton;