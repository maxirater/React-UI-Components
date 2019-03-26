import React from 'react';
import './Button.css';


const actionStyle = 'actionStyle';

function ActionButton(props) {
    console.log(props.studentProp);
    return (
<button className={`${props.buttonStyle}  actionStyle`}>{props.text}</button>
    );
  }
  
  export default ActionButton;