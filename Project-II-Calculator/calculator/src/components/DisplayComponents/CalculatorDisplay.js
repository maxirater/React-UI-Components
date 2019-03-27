import React from 'react';
import './Display.css';


function CalculatorDisplay(props) {
    console.log(props.studentProp);
    return (
        <form action=''>
        <button className={`props.displayStyle Display`}>{props.text}</button>
        </form>
    );
  }
  
  export default CalculatorDisplay;