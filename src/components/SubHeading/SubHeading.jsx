import React from 'react';
import Images from '../../constants/images';
const SubHeading = ({title}) => (
  <div style={{marginBottem: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={Images.spoon} alt="spoon" className='spoon__img'/>
  </div>
);

export default SubHeading;
