import React from 'react';
import './Header.css';

import moment from 'moment';


const HeaderTitle = () => {
    return (
        <p><strong>Lambda School</strong> @LambdaSchool {moment().format('e MMM')}</p>
    );
  };
  
  export default HeaderTitle;