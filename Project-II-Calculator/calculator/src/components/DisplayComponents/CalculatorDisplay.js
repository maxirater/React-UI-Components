import React from 'react';
import './Display.css';


function CalculatorDisplay(props) {
    console.log(props.studentProp);
    return (
        <form action=''>
        <input className={`props.displayStyle Display`}>{props.text}</input>
        </form>
    );
  }
  
  export default CalculatorDisplay;