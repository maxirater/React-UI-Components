import React from 'react';
import './Header.css';

import moment from 'moment';


const HeaderTitle = () => {
    return (
        <p>Lambda School @LambdaSchool {moment().format('dd mm')}</p>
    );
  };
  
  export default HeaderTitle;