import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const calcObj = {
    num: [0,1,2,3,4,5,6,7,8,9],
    ops: ['+', '-', 'x', '/', '=', 'clear']
}

const styleArr = ['red'];

const App = () => {
  return (
    <div className='.container'>
      
      <div>
        <CalculatorDisplay />
      </div>

      <div>
        <ActionButton text={calcObj.ops[5]} buttonStyle='buttonStyle' />
        <NumberButton text={calcObj.ops[3]}  />
      </div>

      <div>
        <NumberButton text={calcObj.num[7]} />
        <NumberButton text={calcObj.num[8]} />
        <NumberButton text={calcObj.num[9]} />
        <NumberButton text={calcObj.ops[2]} />
      </div>

      <div>
        <NumberButton text={calcObj.num[4]} />
        <NumberButton text={calcObj.num[5]} />
        <NumberButton text={calcObj.num[6]} />
        <NumberButton text={calcObj.ops[1]} />
      </div>

      <div>
        <NumberButton text={calcObj.num[1]} />
        <NumberButton text={calcObj.num[2]} />
        <NumberButton text={calcObj.num[3]} />
        <NumberButton text={calcObj.ops[0]} />
      </div>

      <div>
        <ActionButton text={calcObj.num[0]}/>
        <NumberButton text={calcObj.ops[4]} />
      </div>

    </div>
  );
};

export default App;
