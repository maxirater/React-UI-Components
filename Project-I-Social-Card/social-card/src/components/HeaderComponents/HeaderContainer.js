import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => {
    return (
      <div className='HeaderContainer'>
          <ImageThumbnail />
          <div>
          <HeaderTitle />
          <HeaderContent />
          </div>
      </div>
    );
  };
  
  export default HeaderContainer;