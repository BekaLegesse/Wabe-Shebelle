import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title = "Chase the new flavour"/>
      <h1 className='app__header-h1'>The key fine dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>To us Hospitality means "primarily the creation of free space where the stranger can enter and become a friend instead of an enemy"</p>
      <button type='button' className='custom__button'>Explor Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;