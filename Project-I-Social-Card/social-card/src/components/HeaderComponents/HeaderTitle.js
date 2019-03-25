import React from 'react';
import './Header.css';

import moment from 'moment';


const HeaderTitle = () => {
    return (
        <p><strong>Lambda School</strong> @LambdaSchool {moment().format('dd mm')}</p>
    );
  };
  
  export default HeaderTitle;